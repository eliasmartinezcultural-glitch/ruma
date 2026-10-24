# Lote 02 — datos abiertos para el territorio

Fecha de revisión: 2026-10-24  
Estado: tres CSV oficiales fueron inspeccionados en la nube y publicados en RUMA el 2026-10-24. La capa geográfica permanece pendiente de inspección y no está publicada.

Este lote prioriza datos que permiten crear recursos territoriales descargables sin copiar mapas con restricciones ni depender de enlaces externos para la descarga del visitante.

## Prioridad A — capa geográfica de regiones de Neuquén

- Fuente oficial: https://portaldatosabiertos.neuquen.gov.ar/dataset/capa-de-regiones-de-la-provincia-del-neuquen
- Responsable: COPADE / Ministerio de Planificación, Innovación y Modernización de Neuquén.
- Licencia publicada: Creative Commons Atribución 4.0 (CC BY 4.0).
- Formatos ofrecidos: GeoJSON, KML, GeoPackage y Shapefile, en archivos ZIP.
- Actualización informada por el portal: 23 de junio de 2025; frecuencia cada cuatro años.
- Estado: **derechos declarados por el conjunto; descarga, contenido, atribución y tamaño pendientes de inspección**.
- Posible utilidad en RUMA: ficha territorial de las regiones neuquinas y recurso geográfico para descarga.
- Obligaciones: atribuir al organismo y al conjunto de datos, enlazar la licencia CC BY 4.0 y señalar cualquier transformación.
- Licencia: https://creativecommons.org/licenses/by/4.0/deed.es

## Prioridad A — nomenclador de regiones, departamentos y municipios

- Fuente: https://portaldatosabiertos.neuquen.gov.ar/dataset/nomenclador-de-regiones-departamentos-y-municipios-segun-categoria-de-la-provincia-del-neuquen
- Formato publicado: CSV.
- Licencia publicada: CC BY 4.0.
- Estado: candidato; inspección del archivo y de sus campos pendiente.
- Posible utilidad: listado sencillo de regiones, departamentos y gobiernos locales, apto para convertir en una ficha de consulta si los datos son legibles y la atribución queda clara.

## Prioridad A — espacios culturales de Neuquén

- Fuente: https://portaldatosabiertos.neuquen.gov.ar/dataset/espacios-culturales-del-neuquen
- Recursos descritos por el portal: informe PDF 2024 y base CSV de espacios culturales relevados hasta marzo de 2025.
- Licencia publicada: CC BY 4.0.
- Estado: candidato; inspección pendiente.
- Posible utilidad: directorio cultural regional con fecha de corte explícita. No presentar teléfonos, horarios o accesibilidad como vigentes sin verificar.

## Prioridad A — población por departamento (censos 2001, 2010 y 2022)

- Fuente: https://portaldatosabiertos.neuquen.gov.ar/dataset/poblacion-segun-departamento-censos-2001-2010-y-2022
- Formatos publicados: CSV y XLS.
- Licencia publicada: CC BY 4.0.
- Estado: candidato; inspección pendiente.
- Posible utilidad: ficha de datos demográficos regionales, indicando claramente años censales y evitando confundir cifras históricas con población actual.

## Prioridad B — servicio Georef de Argentina

- Condiciones de uso: https://www.argentina.gob.ar/georef/condiciones-de-uso-y-licencia
- Licencia declarada: CC BY 4.0.
- Atribución solicitada: “Servicio Georef – argentina.gob.ar/georef”.
- Estado: útil como fuente de consulta y para preparar datos; antes de alojar una exportación fija, registrar consulta, fecha, campos y modificaciones.
- Posible utilidad: listado territorial de provincias, departamentos, municipios y localidades, siempre con fecha de consulta y atribución.

## Fuentes locales para una futura guía de San Patricio del Chañar

- Identidad e historia municipal: https://www.sanpatricio.gob.ar/identidad
- Lugares y espacios públicos: https://sanpatricio.gob.ar/nuestra
- Qué hacer: https://sanpatricio.gob.ar/quehacer
- Cómo llegar: https://www.sanpatricio.gob.ar/llegar
- Informes municipales provinciales: https://www.economianqn.gob.ar/municipios/contenido/san-patricio-del-chanar

Estas páginas sirven para investigar y verificar hechos. No autorizan automáticamente a copiar sus textos, fotografías o mapas. RUMA puede elaborar un índice original de datos factuales, citar fuentes y poner fecha de revisión; no debe presentar una guía como oficial ni prometer que la información cambiante está actualizada sin comprobarla.


## Archivos efectivamente publicados en RUMA

| Archivo alojado | Contenido | Tamaño | Precaución |
|---|---|---:|---|
| \`descargas/espacios-culturales-neuquen-2025.csv\` | 360 registros de espacios culturales, relevados hasta marzo de 2025 | 68.244 bytes | No es un directorio en tiempo real; confirmar antes de visitar |
| \`descargas/nomenclador-regiones-y-municipios-neuquen.csv\` | 59 filas con regiones, departamentos, gobiernos locales y códigos | 3.419 bytes | CSV original con separador punto y coma y codificación cp1252 |
| \`descargas/poblacion-departamentos-neuquen-censos.csv\` | 51 filas de población por departamento para censos 2001, 2010 y 2022 | 1.965 bytes | Datos censales históricos, no estimación actual |

Las tres fichas de origen declaran CC BY 4.0. Los archivos originales se alojan sin modificar; la atribución y el enlace de licencia están en la página de créditos de RUMA. La inspección remota verificó tamaño, SHA-256, codificación, separador, encabezados, filas y muestras. El archivo cultural incluye tres registros de San Patricio del Chañar (biblioteca popular, centro cultural y Mercado de Creadores); los datos tienen corte hasta marzo de 2025 y no deben tratarse como confirmación de vigencia actual.

## Exclusiones y precauciones

- No rehostear mapas de la Mapoteca provincial cuando la página limita la reproducción a uso personal.
- No copiar fotos, logos ni textos institucionales por el solo hecho de estar en una web oficial.
- No publicar archivos de datos con información personal sensible.
- No publicar un dataset sin leer los campos, verificar la fecha de corte y comprobar el archivo descargado.
- Los formatos GIS como GeoPackage o Shapefile pueden ser demasiado pesados o poco útiles para la mayoría del público. Priorizar un CSV o GeoJSON sencillo si es apropiado, y describir claramente para quién sirve.

## Orden de inspección

1. Obtener el CSV del nomenclador y revisar encabezados, codificación, filas y tamaño.
2. Obtener el CSV de espacios culturales y revisar datos personales, campos, fecha de corte y posibles restricciones.
3. Obtener el GeoJSON de regiones y comprobar estructura, tamaño y licencia.
4. Elegir solo los archivos que se puedan abrir en navegador y que tengan una utilidad clara para el público.
5. Publicar dentro de RUMA una copia real, con atribución visible, licencia, fecha y botón probado. Hasta entonces, el estado es pendiente.
