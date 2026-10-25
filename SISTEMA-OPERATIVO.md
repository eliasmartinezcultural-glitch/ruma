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

## Curaduría estricta: no publicar por cantidad

Todo candidato debe puntuarse de 0 a 5 en diseño visual, utilidad, profundidad/integridad, facilidad de lectura/impresión y licencia/procedencia. Se exige 20/25 o más, ningún criterio inferior a 3, licencia confirmada, archivo real alojado, vista previa y descarga probadas. No se compensa una licencia dudosa con un diseño bonito.

Descartar recursos triviales, repetitivos, descuidados, incompletos o de pocas líneas sin utilidad concreta. Antes de admitir un material, comparar alternativas y elegir la mejor o una pequeña selección complementaria.

### Colecciones de alta prioridad
1. **Libros completos de libre distribución:** dominio público comprobado o licencia explícita que permita alojar y redistribuir; texto íntegro, edición legible, traducción verificada, índice y tamaño razonable.
2. **Estudio:** materiales de calidad para historia, biología, geografía, matemática, lengua, literatura, ciencias, arte y ciudadanía; atlas, láminas, líneas de tiempo, mapas conceptuales, fichas y guías.
3. **Mapas territoriales:** Chañar, Neuquén y Patagonia primero; fuentes oficiales, fecha, escala y limitaciones claras.
4. **Arte y papelería:** piezas visualmente cuidadas, listas para imprimir o guardar; tarjetas, postales, cartas, láminas, marcapáginas, organizadores.
5. **Vida cotidiana:** guías completas, herramientas y recursos accesibles que resuelvan necesidades reales.

Los datos crudos (CSV/GeoJSON) son material de apoyo, no necesariamente una pieza principal para público general. Mantenerlos solo cuando tengan valor investigativo claro y ofrecer una explicación, tabla o representación visual cuando sea posible. La biblioteca pública debe destacar por sus recursos terminados y bien presentados.

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
La interfaz lee un catálogo separado y muestra solo entradas aprobadas con rutas locales seguras, fuente y licencia HTTPS. Al 2026-10-24 hay 25 recursos catalogados: tres PDF CC0 de un proyecto externo en inglés; seis archivos de datos abiertos de Neuquén (CSV y GeoJSON); un extracto local adaptado; un mapa A4 original basado en el GeoJSON; seis PDF y tres piezas visuales originales RUMA en español; una tabla territorial nacional de Georef; y cuatro fichas educativas abiertas de INTEF/PENTEC con CC BY-SA 4.0. Los recursos tienen ficha, idioma, alcance, formato, licencia y enlace a fuente. Los archivos se generaron o inspeccionaron en la nube y se validaron antes de publicar.

Hay automatización de inspección de datos, publicación con lista de IDs y huellas SHA-256, generación de PDF y verificación del catálogo. El canal de correcciones y retiro aún debe configurarse con un medio real antes de promover RUMA ampliamente. La publicación en GitHub Pages debe verificarse por separado; no confundir un commit exitoso con un sitio desplegado.


## Norte absoluto: Ley Mundial de RUMA
La referencia obligatoria para cada decisión es [`LEY-MUNDIAL-DE-RUMA.md`](./LEY-MUNDIAL-DE-RUMA.md). Consultarla antes de cada cambio editorial, visual, técnico o de catálogo. Regla resumida: sistema robusto por dentro; frente corto, colorido, amable y accesible; cada recurso con vista previa fiel, descarga comprobada, permisos claros y un cartelito voluntario persistente con alias `ocarina.guitarra` que nunca interrumpe.


## Expansión mundial — plan de investigación vigente

Mapa de fuentes y criterios: [`investigacion/mapa-mundial-de-fuentes-y-expansion.md`](./investigacion/mapa-mundial-de-fuentes-y-expansion.md).

Fuentes priorizadas por utilidad y trazabilidad:
1. CEDEC / Proyecto EDIA / INTEF: plantillas, rúbricas y fichas breves en español; verificar la licencia individual.
2. Wikimedia Commons: mapas e imágenes; cada archivo tiene su propia licencia y atribución.
3. Smithsonian Open Access: objetos visuales marcados expresamente como reutilizables/CC0; revisar el registro individual.
4. UNESCO Open Access: publicaciones educativas y culturales; revisar licencia y créditos por publicación.
5. COERLL y OER Commons: recursos educativos en español; el portal no concede una licencia única a todo su catálogo.
6. Wikisource: textos de dominio público; verificar autor, edición, traducción y jurisdicción.
7. ARASAAC: fuente relevante para accesibilidad, pero las licencias NC y las condiciones particulares impiden una incorporación automática.

### Puerta de entrada para la admisión mundial

- Buscar el archivo en la fuente primaria.
- Comprobar permiso para redistribuir el archivo concreto.
- Dar prioridad a CC0, dominio público comprobado, CC BY y CC BY-SA.
- No incorporar automáticamente licencias NC, ND, “solo educativo”, “uso personal” ni licencias ambiguas.
- Descargar e inspeccionar desde la nube; calcular tamaño, páginas cuando aplique y SHA-256.
- Confirmar que la vista previa muestra el archivo real.
- Solo después aprobar la ficha y publicar la descarga local.
- La donación voluntaria de RUMA no resuelve por sí sola las dudas de compatibilidad con una licencia NC.

La expansión mundial no sustituye el foco territorial: Chañar, Neuquén y Patagonia siguen siendo una ventaja distintiva; los recursos universales se suman cuando resuelven necesidades reales.


## Documento operativo de curaduría

Antes de aprobar una ficha, aplicar [el Estándar de Curaduría y Colecciones](./investigacion/estandar-de-curaduria-y-colecciones.md). La puntuación mínima es 20/25, ningún criterio por debajo de 3 y no hay publicación sin licencia clara, archivo local, vista previa y descarga comprobadas.

La colección debe crecer en profundidad: libros completos de libre distribución, materiales visuales de alta calidad para historia, biología, geografía, ciencias, lengua y literatura, y mapas locales/regionales. La calidad visual y la utilidad son requisitos simultáneos. Se retiró del catálogo el extracto de solo tres espacios culturales porque no era un recurso autónomo suficientemente útil.
