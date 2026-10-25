# RUMA — biblioteca digital para llevar

RUMA es una biblioteca digital gratuita y curada. Busca en la web recursos que ya existen —papelería imprimible, documentos, formularios, fichas, mapas, guías y archivos útiles—, comprueba si se pueden redistribuir y reúne los archivos en un lugar sencillo, con descarga directa, fuente y licencia visibles. No es un repositorio indiscriminado ni un proyecto centrado en crear materiales desde cero: el valor principal es la investigación, selección, verificación y organización.

**Punto de partida:** San Patricio del Chañar. **Expansión:** Neuquén y Patagonia, Argentina y mundo hispanohablante. **Acceso:** gratuito, sin registro y sin obligación de donar. Los materiales originales de RUMA pueden mantenerse como excepciones identificadas, pero no deben desplazar la misión principal de curaduría.

## Estado del catálogo — 24 de octubre de 2026

Hay 22 recursos catalogados con archivos alojados en \`descargas/\`:

- 3 PDF de pasatiempos de un proyecto que declara CC0 1.0; están en inglés y así se indica en las fichas.
- 6 archivos de datos abiertos de Neuquén: espacios culturales, nomenclador territorial, datos censales, instrumentos de planificación y GeoJSON regional.
- 1 tabla de 24 jurisdicciones argentinas y sus códigos oficiales, generada desde el Servicio Georef (CC BY 4.0).
- 4 fichas educativas de PENTEC/INTEF en español, con licencia CC BY-SA 4.0.
- 1 extracto de tres espacios culturales de San Patricio del Chañar, derivado de la base provincial y sin domicilios ni coordenadas.
- 1 mapa esquemático A4 creado por RUMA a partir del GeoJSON oficial.
- 6 PDF originales de RUMA en español: cuaderno de exploración local, agenda semanal, cuaderno de plantas, marcapáginas, cuaderno de memoria oral y guía de descargas seguras.

## Cómo se revisan los recursos

La biblioteca prioriza archivos ya existentes que aporten una utilidad concreta, especialmente papelería (agendas, calendarios, planificadores, etiquetas, fichas, cuadernos, formularios y organizadores), además de documentos públicos, recursos educativos, mapas y materiales para guardar en el celular. La cercanía territorial decide por dónde investigar, no impide que se sumen recursos útiles de otras regiones. No se agrega un archivo solo para inflar el número de recursos.

1. Revisar la ficha y la licencia del archivo concreto.
2. Confirmar que la licencia permite redistribución y cumplir atribución/compartir igual cuando corresponda.
3. Obtener e inspeccionar el archivo en GitHub Actions, no en una computadora local ajena.
4. Verificar estructura, tamaño y huellas cuando corresponda.
5. Guardar el archivo real en \`descargas/\`.
6. Añadir su ficha a \`recursos.json\` y registrar la fuente, licencia, fecha y decisión en \`investigacion/registro-de-recursos.csv\`.
7. Ejecutar la validación automática para confirmar que todas las rutas son seguras y todos los archivos existen.

Un recurso no debe figurar como disponible si el archivo no está alojado y probado. “Gratis para descargar” no equivale a permiso de redistribución.

## Estructura

- \`index.html\`, \`styles.css\`, \`app.js\`: sitio estático, accesible y adaptable.
- \`recursos.json\`: catálogo separado de las fichas.
- \`descargas/\`: archivos reales ofrecidos por RUMA.
- \`creditos.html\`: fuentes, licencias y modificaciones.
- \`contacto.html\`: política para correcciones y solicitudes de retiro.
- \`SISTEMA-OPERATIVO.md\`: reglas de admisión, revisión y publicación.
- \`investigacion/\`: inventario de fuentes, registro de licencias y estado de los lotes.
- \`.github/workflows/\`: inspección remota, generación de PDF, publicación de datos aprobados y validación del catálogo.

## Precauciones actuales

- Los espacios culturales provinciales se relevaron hasta marzo de 2025. Confirmar vigencia antes de visitar.
- Los datos de población corresponden a los censos de 2001, 2010 y 2022; no son una estimación actual.
- Los instrumentos de planificación corresponden al período 2019–2025; no asumir que todos siguen vigentes.
- El GeoJSON y el mapa esquemático no son mapas de navegación ni de límites parcelarios.
- La página de correcciones y retiro necesita un canal de contacto real antes de promover ampliamente el proyecto.

## Principios

- Cuatro puertas: **Aprender, Crear, Resolver y Disfrutar**.
- Inicio territorial en San Patricio del Chañar; expansión por Neuquén y Patagonia, Argentina e Hispanoamérica.
- Sin registro, sin pagos obligatorios, sin presión para donar.
- No copiar mapas, fotografías o documentos sin permiso.
- Cuidar la privacidad: publicar solo los datos necesarios.
- Mantener el catálogo pequeño, útil y fiable antes que inflarlo con archivos dudosos.


## Ley Mundial de RUMA — norte absoluto
Antes de tomar cualquier decisión, consultar [`LEY-MUNDIAL-DE-RUMA.md`](./LEY-MUNDIAL-DE-RUMA.md). RUMA debe tener mucha estructura interna y una experiencia frontal corta, amable, colorida y fácil; abundantes recursos legales descargables con vista previa real; y un pequeño cartelito voluntario persistente con alias `ocarina.guitarra`, sin bloquear contenido ni condicionar descargas.
