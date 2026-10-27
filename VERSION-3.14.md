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

## Regla mundial de contenido y acceso · BLOQUEADA

Esta regla complementa y tiene prioridad editorial en toda incorporación futura. No autoriza por sí sola cambios al núcleo funcional congelado.

### 1. Acceso legal, transparente y con crédito

- Priorizar recursos de **dominio público**, licencias abiertas y materiales cuya fuente autorice expresamente compartirlos.
- Compartir siempre respetando las condiciones de la licencia: autoría, enlace a la fuente, atribución, avisos y demás requisitos aplicables.
- Para cada recurso, registrar cuando sea posible: título, autor o creador, institución o fuente original, licencia o permiso, enlace de origen y forma de acceso.
- Si no está claro que se pueda redistribuir el archivo, **no copiarlo ni alojarlo en RUMA**: enlazar a la página oficial donde puede consultarse u obtenerse legalmente.
- No quitar marcas de autor, no ocultar la procedencia y no presentar contenido ajeno como propio. Un recurso gratuito no necesariamente es libre para volver a publicarlo.
- Preferir el acceso más directo posible: vista previa clara y un solo clic en **Obtener**. Si el permiso no permite alojar una copia, ese clic llevará directamente a la fuente oficial; nunca se prometerá una descarga directa que no exista.

### 2. Para la gente de a pie: de lo cotidiano a lo extraordinario

RUMA no es una biblioteca solo para expertos ni un catálogo limitado a libros. Debe ayudar a personas reales en situaciones reales, desde San Patricio del Chañar hacia Neuquén, Argentina, América Latina y el mundo hispanohablante.

Pensar siempre en distintos vecinos y sus necesidades:

- **Una abuela o un abuelo:** letras grandes, recetas, calendarios, tarjetas para regalar, actividades sencillas, guías prácticas, teléfonos y servicios útiles.
- **Un nene o una nena que estudia:** mapas, láminas, lecturas, fichas, ejercicios, ciencias, historia, recursos escolares y materiales imprimibles apropiados para su edad.
- **Una familia:** cuentos, juegos, actividades para compartir, organización cotidiana, materiales para imprimir y recursos culturales.
- **Un emprendedor o trabajador independiente:** modelos y planillas útiles, guías de trámites, herramientas para organizarse, recursos de diseño permitidos, formación y orientación de fuentes fiables.
- **Un lector, docente, artista o curioso:** libros, archivos, historia local, fotografías autorizadas, música y cultura, mapas, colecciones y descubrimientos de calidad.
- **Cualquier vecino:** información práctica y comprensible para resolver una necesidad sin tener que saber buscar por internet.

Estos son ejemplos para orientar la búsqueda, no una lista cerrada. Incorporar también materiales útiles, bellos, curiosos y sorprendentes cuando tengan valor real.

### 3. La vara de calidad

Antes de sumar algo, preguntar:

1. ¿Existe de verdad y se puede comprobar en la fuente?
2. ¿Es legal compartirlo o estamos enlazando correctamente a su fuente?
3. ¿Le sirve a alguien concreto o despierta un interés genuino?
4. ¿Se entiende qué es antes de abrirlo?
5. ¿Se puede obtener con el menor esfuerzo posible?
6. ¿La autoría, la licencia y la procedencia están claras?

Si no aporta valor, no se suma por llenar espacio. Mejor una colección pequeña, cuidada y confiable que un catálogo enorme de enlaces rotos, copias dudosas o materiales vacíos.

### 4. Experiencia que debemos proteger

- Mantener cinco categorías generales como entrada sencilla: Lecturas, Para estudiar, Recursos útiles, Para decorar, Mapas e historia, y permitir que el catálogo crezca con nuevas temáticas sin perder claridad.
- Diseñar para teléfonos, pantallas pequeñas, conexión lenta, impresión y personas con poca experiencia digital.
- Cada tarjeta debe explicar en lenguaje simple qué es el recurso y para quién puede servir; mostrar una vista previa real cuando esté disponible.
- Evitar cuentas, pagos obligatorios, publicidad invasiva y cadenas innecesarias de páginas.
- La donación voluntaria nunca condiciona el acceso.

**Mandato editorial permanente:** buscar con amplitud, verificar con cuidado, acreditar a los creadores y acercar cada recurso a la persona que lo necesita. RUMA no crea barreras: tiende puentes.

### Aplicación de las categorías generales · octubre de 2026

La portada se organiza en cinco puertas amplias, pensadas para que cualquier vecino entienda dónde empezar:

1. **Lecturas:** libros, cuentos, novelas, poesía e historietas.
2. **Para estudiar:** materiales escolares, mapas didácticos, ciencias, historia y apoyo docente.
3. **Recursos útiles:** trámites y contactos locales, herramientas cotidianas, guías y recursos para emprender.
4. **Para decorar:** dibujos, láminas, tarjetas, postales y materiales imprimibles cuya licencia o permiso pueda comprobarse.
5. **Mapas e historia:** territorio, cartografía, archivos y memoria regional.

El catálogo inicial se amplía a 47 entradas, con prioridad a materiales que puedan ayudar a vecinos de San Patricio del Chañar. Los recursos de terceros se presentan como enlaces a sus fuentes oficiales; no se presume que todo lo gratuito se pueda volver a publicar. En cada archivo se deben respetar las condiciones específicas de su licencia.


---

## Enmienda posterior · 27 de octubre de 2026

Esta enmienda conserva el registro histórico de la versión 3.14 y deja asentada la decisión posterior de Elías. Cuando una regla histórica contradiga esta enmienda, **prevalece esta enmienda**.

### Norte vigente de la experiencia

RUMA debe sentirse como una página sencilla, apacible, amable y comunitaria. La persona debe poder elegir una categoría, reconocer el material por su vista previa y descargarlo directamente desde RUMA.

- Se simplifica la portada y se eliminan capas intermedias que no aportan valor.
- Se quitan filtros duplicados, subestantes automáticos y ventanas emergentes innecesarias.
- Cada ficha tiene dos acciones claras: **Ver** y **Descargar**.
- El catálogo contiene únicamente archivos alojados dentro de RUMA y legalmente compartibles. No se envía al usuario a sitios externos para obtener los materiales.
- Se conservan las cinco categorías generales.
- El cartelito «Convidar un mate» queda discreto, fijo y voluntario. Nunca bloquea ni condiciona el acceso.
- El catálogo actual contiene 14 archivos locales. Los archivos SVG se identifican como SVG imprimibles, no como PDF.

La prioridad no es mostrar más opciones ni más controles: es que una persona pueda entrar, entender y llevarse un material con facilidad. Esta enmienda reemplaza las instrucciones anteriores de mantener enlaces externos como forma habitual de acceso al catálogo.


### Ampliación de la biblioteca y orden físico · 27 de octubre de 2026

Se reorganizaron los archivos en carpetas temáticas reales dentro de `archivos/`, se actualizaron las rutas del catálogo y se retiraron los duplicados antiguos. El catálogo contiene ahora 22 archivos SVG imprimibles:

- `archivos/lecturas/`
- `archivos/estudio/`
- `archivos/utiles/`
- `archivos/decoracion/`
- `archivos/mapas-historia/`

Los materiales nuevos incluyen tabla de multiplicar completa, ficha de vocabulario, menú semanal, lista de compras, plan familiar ante emergencias, seguimiento de plantas, postales y entrevista de memoria comunitaria. Todos están alojados localmente y las fichas se ordenan por categoría y título.

Esta ampliación sigue la enmienda de simplicidad: el buscador y las categorías deben ayudar a encontrar; la vista previa debe mostrar el archivo real; «Descargar» debe entregar ese archivo directamente; el cartelito de colaboración debe seguir siendo pequeño y opcional. La publicación visual y las descargas en GitHub Pages siguen pendientes de prueba en navegador real.


## Enmienda editorial · RUMA como vidriera de creadores · 27 de octubre de 2026

Esta enmienda amplía la Ley Editorial de RUMA sin reemplazar la versión base ni su identidad.

**RUMA reúne obras propias y trabajos terminados de otras personas.** La biblioteca puede incluir planificadores, mapas, cuentos, libros, láminas, guías, materiales educativos, papelería, archivos culturales y otros recursos que merezcan ser descubiertos.

### Nuestro papel
- Buscar y descubrir obras valiosas.
- Seleccionar con criterio: calidad, utilidad, belleza, interés y claridad.
- Presentarlas con una descripción honesta, una vista previa cuando sea posible y créditos visibles.
- Dar visibilidad a sus creadores y facilitar que las personas encuentren el material adecuado.
- No atribuirnos la autoría ni alterar la obra de forma que confunda sobre quién la creó.

### Regla de publicación
- **Alojamiento y descarga dentro de RUMA:** únicamente obras propias, de dominio público o con licencia/permiso que autorice expresamente la redistribución y el alojamiento.
- **Obras sin permiso de redistribución:** pueden aparecer como ficha de descubrimiento si la presentación respeta los derechos aplicables; el acceso debe llevar a la página oficial del creador o titular. No copiar el archivo a RUMA.
- Registrar, siempre que se pueda verificar, autoría, fuente original, licencia o permiso y condiciones de uso.
- No suponer que algo puede republicarse solo porque se encuentra gratis en internet.
- No inventar obras, autores, permisos ni licencias. No llenar el catálogo con material mediocre para aumentar la cantidad.

### La promesa
RUMA es una vidriera cuidada y una puerta de acceso: ayuda a descubrir buenas obras y las acerca a las personas, respetando a quienes las crearon. La facilidad de acceso nunca justifica quitar créditos ni vulnerar permisos.
