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

- Mantener las cuatro puertas actuales como entrada sencilla, y permitir que el catálogo crezca con nuevas temáticas sin perder claridad.
- Diseñar para teléfonos, pantallas pequeñas, conexión lenta, impresión y personas con poca experiencia digital.
- Cada tarjeta debe explicar en lenguaje simple qué es el recurso y para quién puede servir; mostrar una vista previa real cuando esté disponible.
- Evitar cuentas, pagos obligatorios, publicidad invasiva y cadenas innecesarias de páginas.
- La donación voluntaria nunca condiciona el acceso.

**Mandato editorial permanente:** buscar con amplitud, verificar con cuidado, acreditar a los creadores y acercar cada recurso a la persona que lo necesita. RUMA no crea barreras: tiende puentes.
