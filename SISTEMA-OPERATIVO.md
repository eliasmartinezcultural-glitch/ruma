# RUMA — Sistema operativo interno

## Propósito
La interfaz debe sentirse como un rinconcito amable, claro y tranquilo. Por detrás, el catálogo se administra con reglas firmes para que el frente siga siendo fácil de usar y no dependa de que Elías esté conectado.

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
3. Descargar el archivo original y abrirlo para comprobar que no esté vacío, roto, protegido, con marcas de agua o con contenido inesperado.
4. Comprobar tamaño, formato y que imprima bien en A4. No publicar archivos enormes si una versión ligera y legible está disponible.
5. Guardar una copia local dentro de `descargas/`; no enlazar la descarga de un tercero ni hacer hotlink.
6. Registrar la ficha en `investigacion/registro-de-recursos.csv` y anotar la fecha de revisión.
7. Añadir el objeto correspondiente a `recursos.json`, con `approved: true` únicamente tras completar todas las verificaciones.
8. Probar el botón desde un móvil y una computadora, con y sin filtros.
9. Si hay dudas sobre la licencia, no se publica.

## Esquema de cada entrada en recursos.json
```json
{
  "id": "identificador-corto-unico",
  "title": "Título comprensible",
  "description": "Qué es y para quién sirve",
  "category": "crear",
  "format": "PDF A4",
  "download": "descargas/archivo.pdf",
  "licenseLabel": "CC0 1.0",
  "author": "Autor o institución",
  "source": "URL de la ficha oficial",
  "licenseUrl": "URL del texto de licencia",
  "reviewedOn": "AAAA-MM-DD",
  "approved": true
}
```

Categorías permitidas: `aprender`, `crear`, `resolver`, `disfrutar`.

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

## Estado actual
La interfaz está preparada para leer un catálogo separado y mostrar solo entradas marcadas como aprobadas. El catálogo todavía no contiene recursos: no se deben inventar archivos ni mostrar botones de descarga hasta que se incorporen copias reales y revisadas.
