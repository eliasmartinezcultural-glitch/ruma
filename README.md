# RUMA · Papelería digital para compartir

RUMA es una biblioteca comunitaria, mundial y gratuita de papelería digital. Reúne materiales útiles, bonitos y completos para imprimir, guardar y utilizar en la escuela, el trabajo, los emprendimientos y la vida cotidiana.

## La ley mundial de RUMA

**RUMA no vende el derecho a acceder. RUMA comparte valor.**

- Todo el contenido publicado está disponible gratuitamente.
- No hay pagos obligatorios, cuentas, contraseñas ni niveles pagos.
- Los donativos son voluntarios y nunca condicionan el acceso.
- Alias de colaboración: **ocarina.guitarra**, a nombre de Elías Martínez.
- Se priorizan materiales terminados, útiles, bonitos y accesibles.
- Se respeta siempre la autoría y las licencias de cada creador.

## Mundos de papelería

1. Comercial: tarjetas, etiquetas, menús, listas y recursos para emprendimientos.
2. Escolar: fichas, láminas, separadores, horarios y organización del estudio.
3. Creativa: stickers, scrapbooking, postales, cartas y papeles decorativos.
4. Personal: agendas, calendarios, listas y organizadores.
5. Infantil: juegos, actividades y materiales para aprender.
6. Decorativa: láminas, ilustraciones, papeles y colecciones visuales.

## Fuentes de dominio público

El archivo `fuentes-publicas.json` reúne fuentes de investigación y piezas candidatas. No es un catálogo de descargas: cada elemento debe pasar por verificación y alojamiento en RUMA antes de publicarse.

Fuentes iniciales investigadas:

- Library of Congress — Free to Use and Reuse: https://www.loc.gov/free-to-use/
- New York Public Library — Digital Collections: https://digitalcollections.nypl.org/
- Reusable Art: https://www.reusableart.com/

### Regla jurídica mundial

La etiqueta "public domain", "free", "copyright free" o "no known U.S. copyright restrictions" de un portal no demuestra por sí sola que una obra pueda redistribuirse en todos los países. Los plazos y excepciones cambian según jurisdicción, autoría, fecha de publicación, fecha de fallecimiento, restauraciones y otros derechos.

Antes de alojar una pieza:
1. Abrir la ficha del objeto concreto, no solo la página general de la colección.
2. Registrar autor, título, fecha, procedencia, URL original y declaración de derechos.
3. Comprobar que la obra pueda redistribuirse en el alcance territorial que RUMA declara.
4. Revisar si la digitalización o reproducción tiene condiciones adicionales.
5. Guardar la fuente y la evidencia de derechos junto al archivo.
6. Si existe duda razonable, no publicar todavía.

## Cómo se incorpora un material

Antes de publicarlo se comprueba:

1. Que el archivo esté completo y abra correctamente.
2. Que exista dominio público comprobado o permiso/licencia que permita alojar y redistribuir el archivo descargable.
3. Que se registre autor, título, fuente y licencia o fundamento de dominio público.
4. Que la ficha tenga una vista previa auténtica del material.
5. Que la descarga apunte a un archivo alojado en este repositorio.
6. Que el material sea legible, útil y esté bien presentado.
7. Que la licencia permita alojar una copia en RUMA. Una licencia que solo permite uso personal o prohíbe redistribución no sirve para este catálogo.

**Importante:** que algo sea gratis en otra página no significa que RUMA tenga permiso para volver a publicarlo. No redistribuir diseños modernos, compilaciones, plantillas ni composiciones de terceros solo porque incluyan ilustraciones antiguas de dominio público.

## Estructura

- `index.html`: página pública y experiencia de navegación.
- `catalogo.json`: catálogo de materiales publicados.
- `fuentes-publicas.json`: fuentes y candidatos investigados, aún no necesariamente publicables.
- `archivos/`: materiales descargables alojados en RUMA.
- `README.md`: reglas editoriales y técnicas.

### Ficha de catálogo

Cada elemento de `resources` en `catalogo.json` utiliza:

- `title`: título visible.
- `description`: descripción clara.
- `category`: uno de los seis identificadores de categoría.
- `creator`: autor o creador original.
- `license`: licencia o fundamento de dominio público verificado.
- `file`: ruta local al archivo alojado en RUMA.
- `preview`: ruta local a una vista previa auténtica.
- `id`: identificador único y estable.
- `added`: fecha de incorporación en formato `AAAA-MM-DD`.
- `file`: ruta local al archivo descargable alojado en RUMA.
- `preview`: ruta local a una vista previa auténtica, alojada en RUMA.
- `licenseUrl`: enlace a la licencia o declaración de derechos.
- `source`: institución o procedencia y enlace a la ficha original.
- `attribution`: texto de atribución que debe acompañar al material.
- `rightsNote`: nota breve que explica por qué se permite redistribuirlo.
- `icon`: símbolo visual opcional.
- `tags`: palabras para búsqueda.

El motor solo muestra fichas que contienen estos campos y cuyas rutas locales de archivo y vista previa responden correctamente. No se aceptan enlaces externos como descarga o vista previa. La ventana **Novedades** muestra materiales añadidos en los últimos 45 días.

El detalle operativo está en `PROTOCOLO-DE-CARGA.md`.

## Pruebas antes de publicar

- Probar en celular y computadora.
- Probar filtros, búsqueda y estado sin resultados.
- Verificar que cada archivo descargable exista en el repositorio.
- Verificar vista previa, atribución y derechos.
- Confirmar que ningún recurso requiera ir a otro sitio para obtener el archivo.
- Confirmar que donar sea siempre opcional.

## Principio de sostenibilidad

RUMA puede recibir aportes voluntarios y ayuda comunitaria. La colaboración sostiene el proyecto, pero no compra privilegios ni desbloquea contenido. La biblioteca permanece abierta para todos.
