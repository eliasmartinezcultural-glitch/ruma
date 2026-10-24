# RUMA — procedimiento de incorporación de archivos sin usar la PC local

Actualizado: 2026-10-24

## Objetivo

El responsable está trabajando desde una computadora ajena. El flujo no debe exigir descargar archivos a esa computadora, instalar programas, usar una terminal ni crear carpetas locales.

## Qué puede hacer el repositorio hoy

La integración de GitHub conectada permite editar y crear archivos de texto desde el servicio. No convierte automáticamente un enlace externo a un PDF o ZIP en un archivo alojado dentro de RUMA. Una URL de origen no es una copia local y nunca debe usarse como si fuera una descarga propia.

## Procedimiento seguro

1. Registrar la fuente, licencia, formato y URL exacta.
2. Ejecutar la inspección remota en un entorno de nube controlado, si está disponible.
3. Obtener una lista de archivos internos, tamaños, tipo MIME, número de páginas cuando aplique y una muestra de texto extraído.
4. Inspeccionar visualmente el documento y revisar que no haya páginas inesperadas, marcas, datos personales, archivos ejecutables ni errores.
5. Si el contenido supera la revisión legal y técnica, transferir la copia a GitHub mediante una función que admita archivos binarios reales.
6. Verificar que la ruta del archivo exista en el repositorio, que la descarga devuelva el contenido correcto y que la suma de comprobación coincida.
7. Solo entonces añadir el recurso al catálogo con approved=true.

## Límite actual

Las acciones conectadas de GitHub para crear o reemplazar archivos de texto no bastan por sí solas para transferir un PDF binario. La vía de automatización propuesta es GitHub Actions en la nube, con artefactos temporales de inspección y una segunda etapa de publicación deliberada. La etapa de inspección no debe publicar automáticamente en la web recursos todavía no revisados.

## Condiciones para publicar

- La fuente específica autoriza redistribución.
- El archivo se pudo obtener y revisar realmente.
- El archivo final está alojado dentro del repositorio.
- La descarga se probó desde la página publicada.
- La ficha muestra licencia, atribución, fuente y fecha de revisión.
- El botón no conduce a un enlace externo ni a un archivo inexistente.

## Política de seguridad de la automatización

- Lista cerrada de URLs autorizadas; no aceptar URL arbitraria como entrada.
- No ejecutar archivos descargados.
- Extraer ZIP sin permitir rutas absolutas ni ../.
- Limitar tamaño total y cantidad de archivos.
- Aceptar solo formatos explícitamente permitidos.
- Generar un inventario antes de cualquier publicación.
- No hacer commit automático de los archivos extraídos en la etapa de inspección.
- Mantener las credenciales fuera del código y usar permisos mínimos.
