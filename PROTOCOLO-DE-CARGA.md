# Protocolo de carga de recursos · RUMA

Este documento define cuándo un archivo puede aparecer en el catálogo público. El objetivo es que la persona entre, entienda, vea y obtenga el material sin confusiones ni saltos externos.

## 1. Regla de publicación

Un recurso solo está **PUBLICADO** cuando cumple simultáneamente:

- El archivo maestro está dentro de `archivos/`.
- La vista previa auténtica está dentro de `previews/`.
- Ambos archivos abren y responden desde GitHub Pages.
- La licencia permite expresamente la redistribución del archivo, o el fundamento de dominio público está documentado con evidencia suficiente.
- La ficha incluye autoría, fuente, atribución, licencia y nota de derechos.
- El material está completo, es útil y tiene calidad adecuada.
- La descarga funciona desde el botón de RUMA.

Un enlace a la web de otra institución nunca cuenta como descarga incorporada. Una miniatura de baja resolución nunca reemplaza al archivo maestro.

## 2. Carpetas recomendadas

```
archivos/
  decorativa/
  creativa/
  escolar/
  comercial/
  personal/
  infantil/
previews/
  decorativa/
  creativa/
  escolar/
  comercial/
  personal/
  infantil/
```

Usar nombres cortos, descriptivos, sin espacios ni acentos. Mantener extensiones originales cuando sea posible.

## 3. Ficha obligatoria en catalogo.json

Cada recurso debe tener esta estructura:

```json
{
  "id": "botanica-lamina-001",
  "title": "Lámina botánica histórica",
  "description": "Descripción concreta de lo que contiene y para qué puede servir.",
  "category": "decorativa",
  "creator": "Nombre del autor o institución",
  "license": "Dominio público / CC BY 4.0 / licencia aplicable",
  "licenseUrl": "https://enlace-a-la-licencia-o-declaracion",
  "source": "Institución · https://ficha-original",
  "attribution": "Texto de atribución exigido por la fuente",
  "rightsNote": "Evidencia concreta que permite redistribuir esta copia.",
  "file": "archivos/decorativa/lamina-botanica.pdf",
  "preview": "previews/decorativa/lamina-botanica.jpg",
  "icon": "🌿",
  "tags": ["botánica", "lámina", "decoración"],
  "added": "2026-10-29"
}
```

El ejemplo es una plantilla, no un recurso real ni una autorización de uso. No copiarlo al catálogo sin sustituir todos los datos y alojar los archivos.

## 4. Qué licencias sirven

En principio pueden admitirse:
- Dominio público verificado para la redistribución prevista.
- CC0.
- CC BY, conservando atribución y avisos requeridos.
- CC BY-SA, cumpliendo atribución y compartir-igual cuando corresponda.
- Permisos escritos que permitan alojar y redistribuir el archivo.

No admitir:
- CC BY-NC si el uso o sostenimiento del sitio puede considerarse comercial.
- CC BY-ND si la pieza necesita modificaciones para adaptarla.
- Licencias personales o de uso privado que no permitan redistribución.
- "Gratis", "free download", "no known US copyright restrictions" o "copyright free" sin revisar la declaración concreta y el alcance territorial.
- Archivos de Pinterest, redes sociales o recopilaciones sin procedencia demostrable.

La etiqueta de una institución no garantiza por sí sola dominio público mundial. Registrar país de origen, autor, fecha de fallecimiento/publicación cuando sea relevante y jurisdicciones revisadas. Si no se puede sostener el alcance mundial, no anunciarlo como universal.

## 5. Calidad mínima

- PDF: abrir, revisar páginas, orientación, márgenes, legibilidad y que no falten páginas.
- Imagen: resolución suficiente para el uso anunciado; evitar capturas y miniaturas.
- Archivo comprimido: revisar contenido, nombres y que no incluya ejecutables ni contenido inesperado.
- La vista previa debe corresponder exactamente al archivo descargable.
- No publicar archivos con marcas de agua ajenas, páginas promocionales intrusivas o instrucciones que confundan.

## 6. Prueba técnica

Antes de incorporar una ficha:
1. Subir el archivo maestro y la vista previa a sus carpetas.
2. Abrir ambas rutas desde el sitio publicado.
3. Comprobar que ambas responden correctamente.
4. Añadir la ficha completa a `catalogo.json`.
5. Verificar que el recurso aparece en la categoría y en la búsqueda.
6. Abrir **Ver antes** y comprobar que la vista previa corresponde al archivo.
7. Descargar con **Obtener gratis** y abrir el archivo descargado.
8. Probar en celular y computadora.

El motor actual descarta registros incompletos, rutas externas y archivos o vistas previas que no responden. La validación automática no reemplaza la revisión legal ni visual humana.

## 7. La experiencia pública

- La persona debe poder explorar sin registrarse.
- La vista previa aparece antes de descargar.
- El botón de obtención debe ser visible y directo.
- No se pide dinero para abrir ni descargar.
- El alias de donación permanece como invitación opcional.
- Si no hay materiales para una búsqueda, se informa con claridad y sin simular resultados.

## 8. Estado de cada candidato

Usar internamente uno de estos estados:
- `INVESTIGADO`: existe una fuente candidata; no publicar.
- `DERECHOS-REVISADOS`: evidencia de licencia reunida; falta archivo o vista previa.
- `ARCHIVOS-ALOJADOS`: ambos archivos dentro del repositorio; falta probar.
- `EN-PRUEBA`: verificaciones técnicas en curso.
- `PUBLICADO`: ficha válida, archivos probados y revisión editorial completa.
- `DESCARTADO`: no cumple licencia, calidad o utilidad.

Solo `PUBLICADO` se incorpora a `catalogo.json`.

## 9. Ley de RUMA

RUMA reúne y facilita el acceso; no se apropia de la autoría de nadie. Compartir generosamente exige cuidar a quien creó la obra y a quien la va a utilizar. Mejor una colección pequeña y real que miles de enlaces dudosos.
