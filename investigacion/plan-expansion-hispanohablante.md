# Estrategia de expansión de RUMA
Fecha: 2026-10-23

## Visión
RUMA es un autoservicio digital gratuito, tranquilo y accesible. El contenido empieza en San Patricio del Chañar, se expande por Neuquén y Patagonia, luego Argentina y finalmente el mundo hispanohablante. El frente debe ser sencillo; la operación interna debe permitir crecer sin perder control de calidad ni derechos.

## Principio de trabajo para operar solo desde el navegador
El usuario está trabajando en una computadora ajena. No se deben requerir descargas, instalaciones, terminal, archivos temporales ni programas locales. La gestión se realiza desde servicios web:
- editar y publicar archivos de texto directamente en GitHub;
- registrar fuentes, licencias y decisiones en el repositorio;
- alojar recursos dentro de GitHub cuando puedan subirse de forma segura desde una interfaz o API web compatible;
- si el archivo binario no puede transferirse de forma fiable en el entorno remoto, dejarlo en estado “pendiente” y no simular que está alojado;
- nunca convertir un enlace externo en una falsa “descarga directa de RUMA”.

## Capas geográficas del catálogo
1. San Patricio del Chañar: historia, identidad, lugares, naturaleza, mapas autorizados, actividades, agricultura, rutas, servicios y recursos educativos locales.
2. Neuquén y Patagonia: mapas y guías provinciales, patrimonio, naturaleza, actividades familiares y recursos de lectura.
3. Argentina: guías educativas, literatura, cultura, mapas de uso autorizado, actividades y herramientas cotidianas.
4. Hispanoamérica: materiales en español con licencia clara, evitando regionalismos que dificulten su uso general.
5. Mundo hispanohablante: recursos internacionales que puedan reutilizarse legalmente y sean comprensibles para distintas edades.

Cada ficha debe indicar su alcance geográfico: local, regional, nacional o hispanohablante.

## Puertas visibles
- APRENDER: cuentos, lectura, alfabetización digital, historia, mapas escolares autorizados, ciencia y guías.
- CREAR: dibujos, coloreables, separadores, tarjetas, láminas, calendarios y manualidades.
- RESOLVER: planificadores, organizadores, presupuestos, trámites y guías prácticas.
- DISFRUTAR: pasatiempos, juegos imprimibles, curiosidades, naturaleza y lectura recreativa.

No sumar más puertas principales sin evidencia de que la navegación lo necesita. Usar etiquetas y filtros internos para temas y región.

## Fuentes locales investigadas
- Municipio de San Patricio del Chañar — Nuestra ciudad: https://sanpatricio.gob.ar/nuestra
- Municipio — Qué hacer: https://sanpatricio.gob.ar/quehacer
- Municipio — Identidad e historia: https://www.sanpatricio.gob.ar/identidad
- Municipio — Cómo llegar: https://www.sanpatricio.gob.ar/llegar
- Dirección Provincial de Catastro e Información Territorial — Mapoteca: https://dpc.neuquen.gov.ar/Mapa
- Mapas de localidades de Neuquén: https://dpc.neuquen.gov.ar/dpcasp/mapoteca_digital/localidades.asp
- IDE Patagonia: https://idepatagonia.gob.ar/
- Geovisor de Estadística y Censos de Neuquén: https://www.estadisticaneuquen.gov.ar/apps/visor/
- Mapa Cultural de Argentina (SINCA): https://www.sinca.gob.ar/mapa.aspx
- Informes municipales de San Patricio del Chañar: https://www.economianqn.gob.ar/municipios/contenido/san-patricio-del-chanar

### Restricciones específicas de mapas
La Mapoteca Digital provincial indica que sus mapas están registrados y solo pueden descargarse e imprimirse para uso personal; prohíbe la reproducción en otros soportes salvo autorización expresa. Por lo tanto:
- no copiar mapas provinciales al repositorio de RUMA;
- no ofrecerlos como descarga propia ni rehostearlos;
- se puede investigar si hay permiso escrito para un uso específico;
- hasta tener permiso, registrarlos como fuente de consulta externa, no como archivo distribuible;
- buscar alternativas de datos abiertos con licencia explícita que autorice redistribución.

### Uso de información municipal
La información factual sobre lugares y servicios puede servir para elaborar un índice de consulta, pero no copiar textos ni fotos íntegros sin permiso. Toda guía que resuma datos debe llevar fecha de revisión y fuente; los horarios, servicios, rutas y teléfonos deben tener advertencia de verificación si cambian.

## Modelo de registro de recursos
Cada recurso debe tener identificador único, título, descripción sencilla, categoría, subtema, región, autor/institución, URL original, licencia exacta y URL de licencia, confirmación de redistribución, formato, tamaño, idioma, accesibilidad, ruta local alojada dentro de RUMA, fecha de revisión y estado. Registrar también derechos de terceros y atribución.

Estados permitidos: descubierto, derechos_pendientes, aprobado, alojado, publicado, retirado.

## Qué significa “apto para RUMA”
Apto no significa solamente gratuito. Para rehostear:
1. la licencia o permiso autoriza explícitamente redistribuir;
2. los derechos de fotografías, ilustraciones, traducciones, logos y anexos están claros;
3. el archivo funciona y es seguro;
4. el idioma, el tamaño y el formato sirven al público;
5. la ficha no contiene afirmaciones engañosas;
6. el archivo se encuentra efectivamente alojado dentro de RUMA y la descarga fue probada.

Preferencias: CC0, dominio público confirmado para Argentina, CC BY y CC BY-SA, siempre cumpliendo las condiciones. No usar CC BY-NC en el lote inicial por la posibilidad de aportes voluntarios.

## Accesibilidad frontal
- español claro, frases breves y etiquetas reconocibles;
- controles táctiles grandes y texto ajustable;
- alto contraste y foco visible;
- navegación con teclado y lectores de pantalla;
- una columna en móviles, sin desplazamiento horizontal;
- etiquetas de formato: “PDF para imprimir”, “Imagen”, “Documento”, “Audio”;
- indicar tamaño aproximado y si necesita conexión;
- botones con acciones claras: “Descargar”, “Ver ficha”, “Imprimir”;
- nada de cuentas, ventanas emergentes, pago obligatorio ni publicidad intrusiva;
- los mensajes de error deben decir qué ocurre y qué puede hacer la persona.

## Operación y seguridad
- catálogo separado de interfaz;
- ningún recurso aparece si no está aprobado y alojado;
- revisar enlaces y archivos periódicamente;
- mantener un registro de cambios;
- habilitar un canal real de correcciones y solicitudes de retiro antes del lanzamiento público;
- no recopilar datos personales innecesarios;
- respaldar el contenido y conservar atribuciones.

## Orden de ejecución
1. Validar el sistema de catálogo y accesibilidad.
2. Investigar archivos CC0 que se puedan incorporar mediante herramientas web.
3. Abrir y revisar el contenido en el navegador o mediante lectura remota; no pedir al usuario que descargue archivos a la PC ajena.
4. Subir archivos binarios al repositorio solo si el mecanismo web permite una transferencia real y verificable.
5. Probar rutas y botones en la web publicada.
6. Añadir materiales locales y regionales cuando sus licencias estén claras.
7. Expandir por país e idioma manteniendo las mismas reglas.

## Estado real del proyecto — 2026-10-24

- Catálogo público: 18 recursos con archivos reales alojados en \`descargas/\`, fichas, licencias, fuentes y fechas de revisión.
- Lote 01: tres PDF declarados CC0 1.0 (laberintos, láminas para colorear y sudokus/variantes). Conservan su idioma original, inglés, y la ficha lo indica.
- Lotes 02 y 03: seis archivos de datos abiertos de Neuquén con licencia declarada CC BY 4.0 (espacios culturales, nomenclador, población censal, instrumentos de planificación provincial y local, GeoJSON de regiones). Se alojan sin modificar salvo la extracción del GeoJSON desde su ZIP, con huellas verificadas y atribución.
- Se añadió una tabla nacional de 24 jurisdicciones argentinas con códigos Georef y atribución CC BY 4.0.
- Se añadió un extracto local de tres espacios culturales de San Patricio del Chañar, con domicilios y coordenadas eliminados, y un mapa A4 esquemático generado desde el GeoJSON.
- Se generaron seis PDF originales en español: cuaderno de exploración del Chañar, agenda semanal, cuaderno de plantas, marcapáginas, cuaderno de memoria oral y guía de descargas seguras.
- La inspección, generación y publicación de archivos se hace en GitHub Actions; el responsable no tuvo que descargar archivos a la computadora ajena.
- Existe un control automático que revisa sintaxis de JavaScript, estructura del catálogo, rutas locales seguras y presencia de cada archivo.
- El canal de correcciones y retiro aún no tiene un canal real configurado. No promover ampliamente el sitio hasta resolverlo.
- La publicación final de GitHub Pages debe verificarse mediante el estado de la acción de despliegue; no considerar un commit como prueba suficiente de que la versión ya está visible.

Próxima prioridad: conseguir más recursos en español de terceros con licencia CC0, CC BY o CC BY-SA, en especial actividades de naturaleza, educación y lectura; continuar la búsqueda de permisos para materiales locales y no sumar recursos en inglés solo para inflar el número.

## No negociables
- no inventar archivos ni rutas;
- no declarar un recurso como alojado hasta verificarlo;
- no rehostear mapas o documentos con permiso limitado;
- no obligar a visitar cinco sitios para conseguir un recurso que RUMA promete ofrecer directamente;
- no exigir donaciones;
- no complicar el frente para resolver la complejidad interna.
