# RUMA — Lote de investigación 01
## Plantillas imprimibles y documentos reutilizables

**Fecha de revisión:** 2026-10-24  
**Estado:** investigación documental completada; archivos aún no incorporados al catálogo público.  
**Regla:** no marcar ningún recurso como publicado hasta alojar el archivo dentro de RUMA, comprobarlo y registrar su huella SHA-256.

## Criterio de selección

Se priorizan archivos existentes, útiles en papel y en español, cuya propia ficha o el propio PDF identifique una licencia que permita redistribuirlos. No alcanza con que una descarga sea gratuita. La licencia CC BY-SA permite compartir y adaptar con atribución y obligación de mantener la misma licencia en las adaptaciones. Las condiciones exactas deben conservarse en la ficha de RUMA.

## Candidatos mejor respaldados

### 1. Plantilla del diario de aprendizaje — CEDEC / Proyecto EDIA
- **Uso:** una hoja para registrar actividad, qué se aprendió, dificultades y reflexión. Sirve a estudiantes, docentes y talleres.
- **Formato:** PDF, 1 página.
- **Licencia comprobada en el propio PDF:** Creative Commons Atribución-CompartirIgual 4.0 España (CC BY-SA 4.0 ES).
- **Archivo original:** https://descargas.intef.es/cedec/proyectoedia/FP/EIE/contenidos/eie_desafio8/cedec-Plantilla-diario-aprendizaje-EIE.pdf
- **Ficha contextual:** https://descargas.intef.es/cedec/proyectoedia/FP/EIE/contenidos/eie_desafio8/nos_ubicamos.html
- **Decisión:** APTO PARA PREPARAR INCORPORACIÓN. Antes de publicarlo, descargar desde el entorno de trabajo en la nube, verificar que abre, comprobar tamaño/páginas, conservar atribución y licencia, y añadir registro.

### 2. Rúbrica de evaluación del diario de aprendizaje — CEDEC / Proyecto EDIA
- **Uso:** ayuda a revisar el contenido, la descripción, la reflexión y la presentación de un trabajo.
- **Formato:** PDF, 1 página.
- **Licencia comprobada en el propio PDF:** CC BY-SA 4.0 España.
- **Archivo original:** https://descargas.intef.es/cedec/proyectoedia/FP/EIE/contenidos/eie_desafio8/cedec-Rubrica_diario_aprendizaje-EIE.pdf
- **Ficha contextual:** https://descargas.intef.es/cedec/proyectoedia/FP/EIE/contenidos/eie_desafio8/nos_ubicamos.html
- **Decisión:** APTO PARA PREPARAR INCORPORACIÓN. Es más específico para uso educativo; describirlo así y no como formulario general.

### 3. Plantilla de porfolio de proyecto — CEDEC / Proyecto EDIA
- **Uso:** organizar un proyecto grupal, reunir evidencias, anotar cambios y propuestas de mejora.
- **Formato:** PDF, 1 página.
- **Licencia comprobada en el propio PDF:** CC BY-SA 4.0 España.
- **Archivo original:** https://descargas.intef.es/cedec/proyectoedia/FP/EIE/contenidos/eie_desafio8/cedec-Plantilla_Porfolio-eie.pdf
- **Ficha contextual:** https://descargas.intef.es/cedec/proyectoedia/FP/EIE/contenidos/eie_desafio8/nos_ubicamos.html
- **Decisión:** APTO PARA PREPARAR INCORPORACIÓN. Orientado a proyectos escolares/formativos; no presentarlo como agenda personal.

## Candidato útil, pero requiere otro flujo

### Calendarios imprimibles de Incompetech
- **Fuente:** https://ip.incompetech.com/calendars/
- **Licencia declarada por la fuente:** CC0 1.0 para la aplicación y los calendarios que produce.
- **Ventaja:** permite generar calendarios PDF de distintos formatos, con idioma seleccionable.
- **Límite:** no es un archivo fijo ya listo; el calendario debe generarse y revisarse antes de alojarlo. En esta revisión, el buscador pudo leer la declaración de licencia, pero la apertura automatizada de la página devolvió un error 502.
- **Decisión:** RESERVADO PARA UNA SIGUIENTE TANDA. No agregar aún a `recursos.json`.

## Fuentes de control de licencias

- **Argentina.gob.ar, explicación de licencias:** https://www.argentina.gob.ar/node/249906  
  Aclara que la disponibilidad en Internet no equivale a permiso de reutilización y resume las condiciones CC.
- **Creative Commons Argentina:** https://creativecommons.org.ar/licencias/  
  Explica atribución, no comercial, sin obras derivadas y compartir igual.
- **Creative Commons, CC0:** https://creativecommons.org/public-domain/  
  Describe CC0 como herramienta para permitir copia, adaptación y redistribución.

## Próximo procedimiento operativo

1. Incorporar primero los tres PDF CEDEC desde la nube, sin usar una computadora ajena ni pedirle al responsable que descargue archivos.
2. Revisar los PDF (integridad, número de páginas, legibilidad y texto), calcular SHA-256 y anotar el tamaño exacto.
3. Copiar cada archivo autorizado a `descargas/` y añadir atribución visible: título, CEDEC/Proyecto EDIA, fuente, licencia y enlace a la licencia.
4. Solo después, añadir fichas a `recursos.json` con `approved: true`, registrar los mismos datos en `investigacion/registro-de-recursos.csv` y probar la descarga pública.
5. Mantener la categoría interna según la necesidad: `crear` para plantillas imprimibles; `aprender` para rúbricas y materiales de evaluación. No cambiar el catálogo público hasta que los archivos existan localmente.

## Nota de criterio comercial

CC BY-SA 4.0 permite redistribución con atribución y compartir igual. A diferencia de licencias con condición NC, no impone una prohibición de uso comercial. Aun así, RUMA debe ofrecer estos recursos gratuitamente y no sugerir que CEDEC respalda al proyecto. No modificar los PDF en esta primera incorporación; conservar los originales intactos.
