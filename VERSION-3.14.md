# RUMA · Versión base consolidada 3.14

**Estado:** BASE CONSOLIDADA Y CONGELADA  
**Rama de referencia:** `main`  
**Fecha de consolidación:** 27 de octubre de 2026

## Qué significa esta versión

La versión **RUMA 3.14** es la base de referencia para continuar el proyecto. No se reinicia ni se reconstruye desde cero. Se conserva el repositorio, su historial y la experiencia actual.

A partir de esta versión, el trabajo queda limitado a:

- **Diseño y apariencia:** paleta, tipografía, composición, texturas, ilustraciones auténticas, fotografías, portadas reales, tarjetas y mejoras visuales responsive.
- **Suma de contenido:** incorporar recursos reales, útiles y legalmente accesibles, con fuente y autoría identificables.
- **Presentación del catálogo:** mejores vistas previas, imágenes auténticas y formas más claras de descubrir los materiales.

## Núcleo congelado

No cambiar sin una decisión explícita de Elías:

- propósito y reglas fundamentales de RUMA;
- arquitectura estática y funcionamiento general;
- navegación, buscador, filtros y categorías;
- comportamiento de las tarjetas y del acceso a los recursos;
- flujo principal de uso y soporte de GitHub Pages.

Los cambios visuales pueden ajustar el HTML/CSS cuando sea necesario, pero no deben alterar el flujo ni romper la funcionalidad. Las mejoras de contenido deben añadirse sin reemplazar ni desordenar la base.

## Huellas de los archivos base

Estos SHA identifican el contenido de los archivos principales al establecer la versión 3.14:

| Archivo | SHA del contenido |
|---|---|
| `index.html` | `a37ea6c842b384989a3fc577ea71725f3fc05632` |
| `app.js` | `a771956c9f984288f7ec7592f0e8c833b4608f92` |
| `styles.css` | `1541ac5c4af3d0f184e3831405ac77b9576c867b` |

Las huellas son referencias para comparar cambios, no una prohibición de editar estilos o contenido visual. Antes de tocar el núcleo funcional, se debe consultar esta regla y conservar una vía de recuperación.

## Ley editorial de RUMA

**RUMA ES ACCESO.** RUMA reúne y organiza recursos que ya existen: no inventa libros, documentos, imágenes ni materiales para aparentar un catálogo más grande. Cada incorporación debe llevar a un recurso real, con una fuente fiable, respetando los derechos y las licencias. No se debe presentar una imagen ilustrativa como si fuera una portada original.

## Regla de trabajo para las próximas versiones

Cada mejora debe ser incremental, comprobable y recuperable. No borrar ni reiniciar el repositorio. No cambiar el núcleo funcional por iniciativa propia. Si una mejora visual exige tocar estructura, preservar el comportamiento existente y comprobar búsqueda, filtros, enlaces, lectura móvil y publicación antes de darla por terminada.

**Versión base reconocida: RUMA 3.14.** Las futuras mejoras de diseño y catálogo se construirán sobre ella.
