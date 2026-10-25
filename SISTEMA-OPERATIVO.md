# RUMA — Sistema operativo interno

## Propósito
RUMA es una biblioteca digital gratuita y curada: investiga materiales que ya existen dispersos en la web, verifica que puedan compartirse, revisa que el archivo funcione y lo organiza para que cualquier persona lo encuentre y descargue sin vueltas. El trabajo central es la búsqueda, selección, verificación, atribución y organización; no producir todo desde cero. La interfaz debe sentirse amable, clara y tranquila, y el catálogo debe poder usarse sin que Elías esté conectado.

## Prioridad editorial
1. Papelería útil para imprimir o guardar en el celular: agendas, calendarios, planificadores, fichas, etiquetas, formularios, cuadernos, listas y organizadores.
2. Recursos útiles para San Patricio del Chañar: información pública, cultura, educación, territorio, mapas y materiales comunitarios.
3. Recursos de Neuquén y Patagonia; luego Argentina y mundo hispanohablante.
4. Juegos, lecturas y materiales para disfrutar, siempre que la fuente y la licencia sean claras.

Los materiales originales de RUMA pueden permanecer si ya aportan valor, pero deben identificarse como tales y no convertirse en el eje de la biblioteca. Priorizar archivos existentes y legalmente redistribuibles. Nunca confundir “gratis para descargar” con permiso para volver a alojar o compartir.

## Estructura prevista
- `index.html`: puerta de entrada para visitantes.
- `styles.css`: diseño adaptable y controles de lectura.
- `app.js`: búsqueda, filtros, descargas y comportamiento de la interfaz.
- `recursos.json`: catálogo de recursos aprobados que la página presenta.
- `descargas/`: copias alojadas en RUMA (crear cada ruta cuando se incorpore un archivo real).
- `investigacion/`: fuentes, evaluación de derechos e inventario.
- `creditos.html`: política de atribución y licencias.
- `contacto.html`: canal para consultas, correcciones y solicitudes de retiro.

## Cómo incorporar un recurso
1. Encontrar la página oficial del archivo, no un repost sin procedencia.
2. Confirmar la licencia de ese archivo específico. Priorizar CC0 o una declaración explícita de dominio público que permita redistribución; revisar derechos de terceros y marcas.
3. Ejecutar la inspección remota desde GitHub Actions en la nube cuando el formato lo permita; no pedir al responsable que descargue archivos a una computadora ajena.
4. Revisar inventario, tipo, tamaño, número de páginas, texto extraíble y muestras visuales; no publicar archivos enormes si existe una versión ligera y legible.
5. Verificar SHA-256 y extraer solo los archivos autorizados a `descargas/` desde la nube; no enlazar la descarga de un tercero ni hacer hotlink.
6. Registrar la ficha en `investigacion/registro-de-recursos.csv` y anotar la fecha de revisión.
7. Añadir el objeto correspondiente a `recursos.json`, con `approved: true` únicamente cuando el archivo esté alojado y las verificaciones estén completas.
8. Probar el botón desde un móvil y una computadora, con y sin filtros.
9. Si hay dudas sobre la licencia, no se publica.

## Esquema de cada entrada en recursos.json
```json
{
  "id": "identificador-corto-unico",
  "title": "Título comprensible",
  "description": "Qué es y para quién sirve",
  "category": "crear",
  "subcategory": "colorear",
  "region": "internacional",
  "regionLabel": "Internacional",
  "language": "es",
  "languageLabel": "Español",
  "format": "PDF A4",
  "sizeLabel": "250 KB",
  "download": "descargas/archivo.pdf",
  "licenseLabel": "CC0 1.0",
  "author": "Autor o institución",
  "source": "https://sitio-oficial.example/ficha",
  "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.es",
  "reviewedOn": "AAAA-MM-DD",
  "approved": true
}
```

Categorías internas: `aprender`, `crear`, `resolver`, `disfrutar`. En la interfaz, `crear` se presenta como **Papelería e imprimir** y `disfrutar` como **Jugar y disfrutar**. Los nombres visibles deben describir la necesidad del usuario, no la estructura técnica. Las regiones admitidas actualmente son `chanar`, `neuquen`, `argentina`, `hispanoamerica`, `hispanohablante` e `internacional`. Indicar el idioma real en `languageLabel`; no confundir alcance geográfico con idioma. La ficha debe enlazar la fuente y la licencia.

## Reglas de experiencia para personas mayores
- Texto legible y posibilidad de agrandarlo desde la página.
- Botones grandes, con verbos claros: “Descargar PDF”, “Imprimir”, “Volver”.
- Una tarea principal por tarjeta; no esconder acciones importantes en menús.
- Evitar jerga técnica, anuncios invasivos, ventanas emergentes y registros.
- Búsqueda simple, categorías claras y mensajes amables si no hay resultados.
- Contraste suficiente, foco visible para teclado y enlaces descriptivos.
- En móviles: una columna, controles amplios y nada que exija desplazamiento horizontal.
- Las descargas no deben depender de pagos, formularios ni abrir otras páginas.

## Control antes de publicar
- [ ] Licencia del archivo específico revisada y compatible.
- [ ] Archivo alojado dentro de RUMA y ruta relativa.
- [ ] El archivo abre correctamente y se imprime bien.
- [ ] Título y descripción claros en español.
- [ ] La ficha indica formato y licencia.
- [ ] Botón probado en móvil y escritorio.
- [ ] La búsqueda y las cuatro puertas funcionan.
- [ ] No se solicitan datos personales.
- [ ] El canal real de correcciones y retiro está configurado antes de abrir al público.

## Estado actual — 2026-10-24
La orientación pública se ajusta para comunicar a RUMA como biblioteca curada de archivos existentes. La puerta “Crear” se presenta como “Papelería e imprimir” para priorizar la necesidad de uso; “Disfrutar” pasa a “Jugar y disfrutar”. Se agrega una explicación explícita del enfoque territorial: Chañar primero, expansión regional y luego hispanohablante.
La interfaz lee un catálogo separado y muestra solo entradas aprobadas con rutas locales seguras, fuente y licencia HTTPS. Al 2026-10-24 hay 22 recursos catalogados: tres PDF CC0 de un proyecto externo en inglés; seis archivos de datos abiertos de Neuquén (CSV y GeoJSON); un extracto local adaptado; un mapa A4 original basado en el GeoJSON; seis PDF originales RUMA en español; una tabla territorial nacional de Georef; y cuatro fichas educativas abiertas de INTEF/PENTEC con CC BY-SA 4.0. Los recursos tienen ficha, idioma, alcance, formato, licencia y enlace a fuente. Los archivos se generaron o inspeccionaron en la nube y se validaron antes de publicar.

Hay automatización de inspección de datos, publicación con lista de IDs y huellas SHA-256, generación de PDF y verificación del catálogo. El canal de correcciones y retiro aún debe configurarse con un medio real antes de promover RUMA ampliamente. La publicación en GitHub Pages debe verificarse por separado; no confundir un commit exitoso con un sitio desplegado.


## Norte absoluto: Ley Mundial de RUMA
La referencia obligatoria para cada decisión es [`LEY-MUNDIAL-DE-RUMA.md`](./LEY-MUNDIAL-DE-RUMA.md). Consultarla antes de cada cambio editorial, visual, técnico o de catálogo. Regla resumida: sistema robusto por dentro; frente corto, colorido, amable y accesible; cada recurso con vista previa fiel, descarga comprobada, permisos claros y un cartelito voluntario persistente con alias `ocarina.guitarra` que nunca interrumpe.
