# Lote 02 — datos abiertos de Neuquén

Fecha de revisión: 2026-10-24  
Estado: seis archivos oficiales de datos abiertos fueron inspeccionados en GitHub Actions y alojados en RUMA. Las fichas de los conjuntos declaran CC BY 4.0. La generación de los archivos y la verificación se realizaron en la nube.

## Archivos publicados

| Archivo | Contenido | Tamaño | Precaución |
|---|---|---:|---|
| \`descargas/espacios-culturales-neuquen-2025.csv\` | 360 registros de espacios culturales, relevados hasta marzo de 2025 | 68.244 bytes | No es un directorio en tiempo real; confirmar antes de visitar |
| \`descargas/nomenclador-regiones-y-municipios-neuquen.csv\` | 59 filas con regiones, departamentos, gobiernos locales y códigos | 3.419 bytes | CSV original, separador punto y coma y codificación cp1252 |
| \`descargas/poblacion-departamentos-neuquen-censos.csv\` | 51 filas de población por departamento para censos 2001, 2010 y 2022 | 1.965 bytes | Datos censales históricos, no estimación actual |
| \`descargas/instrumentos-planificacion-provincial-neuquen.csv\` | 20 filas de instrumentos provinciales de planificación, período 2019–2025 | 2.726 bytes | El estado del registro no confirma vigencia actual |
| \`descargas/instrumentos-planificacion-gobiernos-locales-neuquen.csv\` | 167 filas de instrumentos por gobierno local, período 2019–2025 | 29.699 bytes | Consultar fuente antes de afirmar que un proyecto sigue activo |
| \`descargas/regiones-neuquen.geojson\` | FeatureCollection con siete entidades regionales | 1.860.760 bytes | Archivo técnico geográfico; no es un mapa para imprimir |

## Verificaciones aplicadas

- Se revisó la ficha oficial y su declaración de licencia CC BY 4.0.
- Se verificaron tamaño, huella SHA-256, codificación, separador, encabezados, filas y muestras de los CSV.
- El GeoJSON se extrajo del ZIP oficial después de validar el hash del ZIP y se verificó también el hash del archivo extraído.
- Los archivos originales se alojan sin cambios, excepto la extracción del GeoJSON del ZIP. La atribución y los enlaces de licencia se encuentran en \`creditos.html\`.
- Los archivos públicos se validan automáticamente para confirmar que cada ruta local exista y sea segura.

## Derivado local publicado

\`descargas/espacios-culturales-san-patricio-del-chanar.csv\` es un extracto de tres registros de la base cultural provincial. RUMA seleccionó la localidad y eliminó los campos de domicilio y coordenadas. La fuente y las modificaciones se documentan en \`creditos.html\`. El relevamiento original llega hasta marzo de 2025; confirmar vigencia antes de visitar.

## Mapa A4 derivado

\`descargas/mapa-regiones-neuquen-imprimible.pdf\` es una visualización esquemática creada por RUMA a partir del GeoJSON oficial. Incluye la atribución y advierte que no sirve para navegación, calles ni límites parcelarios. La visualización se comparte bajo CC BY 4.0.

## Fuente oficial principal

- Portal de Datos Abiertos del Neuquén: https://portaldatosabiertos.neuquen.gov.ar/
- Capa geográfica de regiones: https://portaldatosabiertos.neuquen.gov.ar/dataset/capa-de-regiones-de-la-provincia-del-neuquen
- Instrumentos de planificación: https://portaldatosabiertos.neuquen.gov.ar/dataset/instrumentos-de-planificacion-territoriales-en-la-provincia-del-neuquen
- Espacios culturales: https://portaldatosabiertos.neuquen.gov.ar/dataset/espacios-culturales-del-neuquen
- Nomenclador territorial: https://portaldatosabiertos.neuquen.gov.ar/dataset/nomenclador-de-regiones-departamentos-y-municipios-segun-categoria-de-la-provincia-del-neuquen
- Población por censos: https://portaldatosabiertos.neuquen.gov.ar/dataset/poblacion-segun-departamento-censos-2001-2010-y-2022
- Licencia: https://creativecommons.org/licenses/by/4.0/deed.es

