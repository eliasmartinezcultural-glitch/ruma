#!/usr/bin/env python3
"""Local quality gate for the RUMA static resource catalog."""

import json
import re
import sys
import zipfile
from pathlib import Path
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
CATALOG = ROOT / "catalogo.json"
ALLOWED_CATEGORIES = {"comercial", "escolar", "creativa", "personal", "infantil", "decorativa"}
REQUIRED = {
    "id", "title", "description", "category", "creator", "license",
    "licenseUrl", "source", "attribution", "rightsNote", "file", "preview", "added"
}

def fail(message: str) -> None:
    print(f"ERROR: {message}", file=sys.stderr)
    raise SystemExit(1)

def safe_local_path(value: str, label: str) -> Path:
    if not isinstance(value, str) or not value:
        fail(f"{label}: ruta vacía")
    if value.startswith(("/", "//")) or "://" in value or ".." in Path(value).parts:
        fail(f"{label}: se esperaba una ruta local segura: {value}")
    path = ROOT / value
    if not path.is_file():
        fail(f"{label}: no existe el archivo: {value}")
    return path

def check_pdf(path: Path) -> None:
    raw = path.read_bytes()
    if not raw.startswith(b"%PDF-") or b"%%EOF" not in raw[-4096:]:
        fail(f"PDF inválido o incompleto: {path.relative_to(ROOT)}")

def check_svg(path: Path) -> None:
    try:
        root = ET.parse(path).getroot()
    except ET.ParseError as exc:
        fail(f"SVG/XML inválido {path.relative_to(ROOT)}: {exc}")
    if not root.tag.lower().endswith("svg"):
        fail(f"El archivo no tiene raíz SVG: {path.relative_to(ROOT)}")
    forbidden = {"script", "foreignobject", "iframe", "object", "embed"}
    for node in root.iter():
        tag = node.tag.rsplit("}", 1)[-1].lower()
        if tag in forbidden:
            fail(f"Elemento SVG no permitido ({tag}): {path.relative_to(ROOT)}")

def check_zip(path: Path) -> None:
    try:
        with zipfile.ZipFile(path) as archive:
            bad = archive.testzip()
            if bad:
                fail(f"ZIP con CRC incorrecto: {path.relative_to(ROOT)} → {bad}")
            for name in archive.namelist():
                normalized = name.replace("\\", "/")
                if normalized.startswith("/") or ".." in Path(normalized).parts:
                    fail(f"Ruta insegura dentro del ZIP {path.relative_to(ROOT)}: {name}")
    except zipfile.BadZipFile:
        fail(f"ZIP inválido: {path.relative_to(ROOT)}")

def check_asset(path: Path) -> None:
    suffix = path.suffix.lower()
    if suffix == ".pdf":
        check_pdf(path)
    elif suffix == ".svg":
        check_svg(path)
    elif suffix == ".zip":
        check_zip(path)
    elif suffix in {".png", ".jpg", ".jpeg", ".webp"}:
        if path.stat().st_size < 16:
            fail(f"Imagen vacía o demasiado pequeña: {path.relative_to(ROOT)}")
    else:
        fail(f"Formato no admitido en catálogo: {path.relative_to(ROOT)}")

def main() -> None:
    try:
        data = json.loads(CATALOG.read_text(encoding="utf-8"))
    except Exception as exc:
        fail(f"catalogo.json no es JSON válido: {exc}")

    resources = data.get("resources")
    if not isinstance(resources, list):
        fail("catalogo.json debe contener una lista resources")

    seen = set()
    for index, resource in enumerate(resources, start=1):
        missing = REQUIRED - resource.keys()
        if missing:
            fail(f"Recurso #{index}: faltan campos {sorted(missing)}")
        if resource["id"] in seen:
            fail(f"ID duplicado: {resource['id']}")
        seen.add(resource["id"])
        if resource["category"] not in ALLOWED_CATEGORIES:
            fail(f"Categoría inválida en {resource['id']}: {resource['category']}")
        for field in ("licenseUrl", "source"):
            if not str(resource[field]).startswith("https://"):
                fail(f"{resource['id']}: {field} debe ser una URL HTTPS")
        file_path = safe_local_path(resource["file"], f"{resource['id']} file")
        preview_path = safe_local_path(resource["preview"], f"{resource['id']} preview")
        check_asset(file_path)
        check_asset(preview_path)

    print(f"RUMA OK: {len(resources)} fichas · todos los archivos y vistas previas existen y pasan validación.")

if __name__ == "__main__":
    main()
