# RUMA

**RUMA ES ACCESO.** Encontrar algo útil, lindo o interesante debería ser sencillo.

RUMA es una biblioteca-curaduría: no crea los recursos que reúne. Los busca, verifica, organiza y acerca a las personas, respetando siempre la autoría y las condiciones de uso.

## Ley mundial de acceso

**Ley de salida libre:** quien llega a RUMA debe poder encontrar lo que necesita, verlo, descargarlo si corresponde y marcharse sin fricción. RUMA no busca retener visitas ni crear hábito de permanencia.

- Reconocer a cada creador y conservar la procedencia de cada recurso.
- No confundir gratuidad con permiso de redistribución.
- Ofrecer acceso directo solo cuando las condiciones lo permitan.
- Cuando la licencia no esté clara o no permita alojar una copia, enlazar la fuente oficial.
- Seleccionar materiales que aporten valor real a personas de San Patricio del Chañar, Neuquén, Patagonia, Argentina y el mundo hispanohablante.
- Evitar enlaces inventados, descargas dudosas, registros innecesarios y recorridos confusos.
- No llenar el catálogo por cantidad: cada recurso debe merecer estar en la caja.

## Las cuatro puertas

1. **Aprender:** libros, materiales educativos, guías y saberes.
2. **Trabajar:** recursos para emprendimientos, oficios y tareas prácticas.
3. **Explorar:** mapas, historia, territorio, naturaleza y cultura.
4. **Disfrutar:** lecturas, arte y hallazgos que hacen bien.

## Estado de la refundación

- Catálogo con 19 recursos seleccionados y metadatos geográficos explícitos (`zona`) para ordenar de San Patricio del Chañar hacia el mundo., con créditos, fuente, licencia y notas de uso.
- Enlaces directos para archivos cuya ficha identifica CC0 o dominio público y para imágenes bajo licencias que permiten compartir, respetando sus condiciones.
- Enlaces a fuentes oficiales para colecciones educativas con condiciones que requieren atención adicional.
- Búsqueda local por título, tema, formato, alcance, creador y licencia.
- Filtros por las cuatro puertas y por forma de acceso.
- Guardados locales en el dispositivo, sin cuentas ni servidor.
- Interfaz reorganizada como biblioteca simple, adaptable a teléfono, tableta y computadora; lectura amplia y navegación directa.
- Cada ficha presenta exactamente dos acciones principales: **Ver** y **Descargar**. La vista previa es visual; la ficha detallada conserva procedencia, autoría, licencia y condiciones.
- Estantes geográficos ordenados: San Patricio del Chañar → Neuquén → Patagonia → Argentina → América y mundo hispanohablante.
- Cartel permanente de colaboración voluntaria con alias `ocarina.guitarra`.
- Cada ficha muestra una vista previa real cuando está disponible; si no, una portada orientativa que no se hace pasar por el archivo original.
- Una acción principal por recurso: abre el archivo permitido o la fuente oficial; créditos y condiciones quedan visibles y fáciles de consultar.
- Guía para principiantes con pasos breves y preguntas frecuentes: cómo usar la búsqueda, qué hacer al abrir archivos, guardar/imprimir y qué significa colaborar.
- Nueva regla mundial: la amabilidad es obligatoria; nadie debe sentirse perdido, apurado o excluido. La donación nunca condiciona el acceso.
- Nueva capa editorial y documento maestro de curaduría.

## Manuales de trabajo

- [Ley Mundial de Acceso y sistema de curaduría](investigacion/ley-mundial-de-acceso.md)
- [Primera capa de investigación](investigacion/primera-capa.md)

## Archivos principales

- `index.html`: estructura y contenido de la página.
- `styles.css`: diseño general adaptable.
- `catalogo.css`: tarjetas, filtros y estructura editorial del catálogo.
- `recursos.js`: catálogo documental.
- `app.js`: búsqueda, filtros, guardados y navegación de categorías.
- `investigacion/`: registros de fuentes, licencias, decisiones y próximas búsquedas.

La web no tiene backend ni base de datos. El catálogo vive en archivos estáticos y los favoritos se guardan localmente en el navegador de cada visitante. El catálogo es una primera capa: cada enlace debe probarse periódicamente y las licencias deben revisarse antes de redistribuir materiales.


## Principio de diseño: biblioteca de paso

RUMA no es una red social, una plataforma de entretenimiento ni una página para retener personas. El resultado ideal es que la persona encuentre algo valioso, lo vea, se lo lleve y continúe con su vida.

- La interfaz pública solo muestra lo necesario para decidir: vista previa, título, alcance breve y dos acciones: Ver / Descargar.
- La ficha de detalle abre bajo demanda y conserva autoría, fuente, licencia y condiciones de uso.
- Los estantes geográficos se ordenan desde San Patricio del Chañar hasta el mundo hispanohablante.
- No se usan cuentas, rachas, scroll infinito, reproducción automática, notificaciones, muros de pago ni mensajes de culpa.
- La colaboración es opcional y no desbloquea contenido.
- La colección local del Chañar puede mostrar que está en investigación; no se inventan materiales ni licencias para llenar un estante.
- Para las colecciones que se descargan desde la fuente oficial, el botón Descargar lleva directamente a esa fuente y la tarjeta lo aclara.

La arquitectura de fondo y el ciclo de revisión están documentados en `investigacion/arquitectura-biblioteca.md`.
