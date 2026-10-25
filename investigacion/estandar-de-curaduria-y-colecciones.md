# RUMA — Estándar de curaduría editorial
## Versión 1.0 · 24 de octubre de 2026

Este documento complementa la Ley Mundial de RUMA. Si hubiera conflicto, prevalece la Ley Mundial.

## Principio

RUMA no es un vertedero de enlaces, una colección de archivos que nadie quiere ni una competencia de cantidad. Cada publicación debe ser una elección deliberada. Lo gratuito y legal es el punto de partida, no la garantía de calidad.

## Filtro obligatorio

Puntuar cada candidato de 0 a 5 en cada criterio:

| Criterio | Qué se exige |
|---|---|
| Diseño y presentación | Composición cuidada, tipografía legible, ilustraciones/diagramas útiles, páginas limpias y consistentes. |
| Utilidad | Resuelve una necesidad real o aporta valor cultural, educativo, práctico o decorativo evidente. |
| Profundidad e integridad | Contenido completo, instrucciones claras, sin páginas faltantes; soluciones si se prometen. |
| Experiencia de uso | Se lee en pantalla, se guarda y se imprime bien; tamaño razonable y formato anunciado. |
| Fuente y derechos | Autoría, procedencia, licencia y atribuciones identificables; derechos de terceros revisados. |

**Umbral:** 20/25 o más, ningún criterio inferior a 3. Además, derechos confirmados, archivo local real, vista previa correspondiente y descarga comprobada. No hay excepciones por urgencia o por querer aumentar el catálogo.

## Qué se descarta

- Hojas con apenas unas líneas que no resuelven una tarea concreta.
- Repeticiones de recursos ya disponibles sin una mejora clara.
- Diseño descuidado, ilegible, borroso, roto, incompleto o demasiado cargado.
- Escaneos torcidos, páginas faltantes, tipografías diminutas, contrastes pobres o tablas imposibles de leer.
- Material que promete mucho y entrega poco, o cuyo idioma/nivel no se explica.
- Archivos gratuitos cuya licencia no autoriza la redistribución.
- Enlaces externos presentados falsamente como archivos alojados en RUMA.

Los datos CSV/GeoJSON solo se mantienen si tienen utilidad investigativa real y una ficha que explique cómo aprovecharlos. La portada debe privilegiar productos terminados y fáciles de comprender; los datos crudos pueden quedar como apoyo o acompañarse de una visualización clara.

## Colecciones que debemos construir

### 1. Libros y lecturas completas
Clásicos en dominio público comprobado, libros con licencia de redistribución clara y ediciones íntegras. Registrar autor, edición, traductor, editorial, fecha, idioma, licencia y país/jurisdicción relevante. No asumir que la obra original y su traducción tienen los mismos derechos.

### 2. Estudiar y enseñar
Historia, biología, geografía, matemática, lengua, literatura, ciencias naturales, ciudadanía y arte. Buscar atlas, láminas ilustradas, líneas de tiempo, mapas conceptuales, guías de estudio, fichas de calidad y libros con ejercicios/soluciones.

### 3. Mapas y territorio
San Patricio del Chañar, Neuquén, Patagonia, Argentina y después el mundo. Cada mapa debe indicar autor/fuente, fecha, escala si corresponde y limitaciones. No presentar un mapa esquemático como mapa de navegación.

### 4. Arte y papelería
Postales, tarjetas, cartas, marcapáginas, láminas, calendarios y organizadores que destaquen por su calidad visual y su valor para imprimir, regalar o guardar.

### 5. Vida cotidiana y accesibilidad
Guías completas, materiales inclusivos, recursos prácticos y documentos que realmente faciliten una tarea.

## Flujo de aprobación

1. Encontrar la fuente primaria.
2. Comparar alternativas y seleccionar lo mejor.
3. Revisar licencia del archivo y de sus componentes.
4. Descargar/inspeccionar desde la nube; comprobar integridad, páginas, tamaño, idioma y diseño.
5. Calcular SHA-256 y guardar metadatos.
6. Comprobar vista previa real y descarga local.
7. Puntuar y registrar decisión.
8. Publicar solo si pasa todo; si no, descartar o mantener como candidato pendiente, nunca como aprobado.

## Revisión del catálogo actual

La calidad debe revisarse por tandas. La ficha de tres espacios culturales locales fue retirada del catálogo porque solo duplicaba tres filas de una base más amplia y no constituía un recurso autónomo de suficiente valor para el público general. El archivo histórico puede retirarse del repositorio en una limpieza posterior, tras comprobar que ninguna otra página lo utiliza.

No retirar otros recursos solo por ser breves: una postal bonita, una ficha educativa bien resuelta o un mapa de una página puede ser excelente. La decisión depende del valor real, no del número de páginas.

## Registro

Toda evaluación debe quedar anotada en `investigacion/registro-de-recursos.csv` o en una ficha de investigación por lote, con decisión: APROBADO, PENDIENTE o DESCARTADO y motivo concreto.
