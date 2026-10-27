# RUMA · Arquitectura de biblioteca y sistema de curaduría

**Versión de trabajo:** Ley Mundial de Salida Libre  
**Principio:** RUMA ES ACCESO.  
**Experiencia pública:** llegar, encontrar, ver, descargar y seguir con la vida.  
**No objetivo:** retener visitas, entretener mediante permanencia o forzar una donación.

## 1. El servicio que RUMA presta

RUMA es una biblioteca-curaduría de recursos creados por otras personas e instituciones. Hace el trabajo difícil detrás de escena: buscar, revisar, ordenar, documentar permisos, preparar una vista previa honesta y dejar un camino claro para obtener el material.

No se convierte en autora de los materiales, no borra créditos y no promete que algo es libre solo porque se ofrece gratis.

## 2. La experiencia de la persona

Cada persona debería poder resolver su necesidad con el mínimo esfuerzo:

1. Llega a una portada tranquila y entiende de inmediato qué es RUMA.
2. Busca con palabras comunes o elige un estante geográfico.
3. Ve una tarjeta con vista previa, título, lugar y descripción breve.
4. Tiene solo dos acciones principales en la tarjeta: **Ver** y **Descargar**.
5. Puede abrir el detalle para revisar procedencia, autoría, licencia y condiciones.
6. Obtiene el recurso y se va. No se le pide que permanezca, vuelva, se registre ni done.

### Lo que no debe aparecer en la experiencia pública

- Scroll infinito o carga interminable.
- Reproducción automática, cuenta regresiva o notificaciones.
- Rachas, puntos, recompensas por volver o por quedarse.
- Muros de pago o contenido bloqueado por no donar.
- Pop-ups promocionales, publicidad intrusiva o presión emocional.
- Controles redundantes dentro de cada tarjeta.
- Palabras técnicas sin explicación.
- Falsas promesas de descarga directa.

## 3. Orden de estantes

La colección se ordena geográficamente, de lo cercano hacia lo amplio:

| Prioridad | Campo `zona` | Alcance |
|---|---|---|
| 1 | `chanar` | San Patricio del Chañar |
| 2 | `neuquen` | Provincia del Neuquén |
| 3 | `patagonia` | Patagonia |
| 4 | `argentina` | Argentina |
| 5 | `hispanoamerica` | América Latina y mundo hispanohablante |

El campo `zona` es obligatorio para cada registro publicado. No se infiere únicamente del título al mostrar el catálogo, porque eso puede ordenar mal un recurso.

**Estado local actual:** el catálogo público todavía no contiene un recurso con alcance específico de San Patricio del Chañar y licencia suficientemente documentada para publicación. El estante local debe explicar honestamente que la búsqueda continúa. No se deben presentar fotografías de otra localidad como si fueran de Chañar ni inventar archivos para llenar el espacio.

## 4. Orden temático de fondo

La ubicación geográfica define el estante principal. Las etiquetas y categorías permiten buscar transversalmente sin añadir complejidad visual.

Categorías internas recomendadas:

- **Aprender:** libros, alfabetización, ciencias, materiales de estudio, guías didácticas.
- **Resolver y trabajar:** trámites, herramientas, oficios, huerta, economía doméstica, emprendimientos y recursos de uso práctico.
- **Explorar:** mapas, memoria local, historia, territorio, patrimonio, flora, fauna y ambiente.
- **Disfrutar:** cuentos, novelas, poesía, arte imprimible, postales, dibujos, música legalmente compartible y curiosidades bonitas.

Cada recurso puede tener varias etiquetas, pero una categoría principal. La interfaz no necesita mostrar toda la taxonomía de una vez.

## 5. Registro documental obligatorio

Cada elemento del catálogo debe mantener, como mínimo:

- `id`: identificador único, estable y legible.
- `titulo`: título claro, sin exageraciones.
- `descripcion`: explicación breve y concreta.
- `zona`: estante geográfico controlado.
- `categoria`: una categoría principal.
- `etiquetas`: palabras comunes que la gente usaría al buscar.
- `alcance`: lugar o ámbito real del recurso; no inventar precisión geográfica.
- `formato`: PDF, JPG, SVG, colección web u otro formato real.
- `creador`: autor o institución según la fuente.
- `licencia`: licencia o estado legal expresado fielmente.
- `licenciaUrl`: enlace a la licencia o a su explicación oficial cuando corresponda.
- `fuente`: ficha original y estable.
- `modoAcceso`: `directo` o `fuente`.
- `descarga`: URL directa del archivo solo si se comprobó que es el recurso esperado y su acceso es compatible con los permisos.
- `vistaPrevia`: imagen fiel del recurso cuando esté disponible.
- `estadoLegal`: condiciones de uso y atribución en palabras sencillas.
- `nota`: límites importantes, resolución, fecha o contexto que evite una interpretación equivocada.

Los registros con licencia no verificada no se publican como descarga libre. Pueden permanecer en un radar interno de investigación, sin confundirse con el catálogo aprobado.

## 6. Vista previa honesta

La vista previa ayuda a decidir, no engaña.

1. **Imagen o portada real:** usarla cuando la fuente la identifica como parte del recurso y hay permiso para mostrarla.
2. **Primera página o muestra oficial:** preferible para libros, PDFs y guías si la fuente permite visualizarla.
3. **Vista previa descriptiva:** si no se dispone de una imagen del archivo, mostrar una tarjeta ilustrada con título y descripción, claramente marcada como “Vista previa descriptiva”. Nunca hacerla pasar por una página del PDF ni por una obra del autor.
4. **Fuente oficial:** para colecciones web, la acción Ver puede mostrar la ficha documentada de RUMA y dejar la ruta de obtención clara; Descargar conduce al sitio oficial cuando el material no debe copiarse o alojarse directamente.

Si no existe ninguna forma honesta de previsualizar el recurso, se deja en investigación hasta resolverlo.

## 7. Regla de los dos botones

Cada tarjeta publicada ofrece exactamente dos acciones principales:

- **Ver:** abre una vista de detalle con la vista previa, una descripción clara y los datos esenciales de autoría, fuente, licencia y condiciones.
- **Descargar:** abre el archivo directo cuando se ha verificado y se puede ofrecer así. Si la descarga solo se ofrece en la página de una institución o autor, abre esa página y la tarjeta lo dice con claridad.

No llamar “descarga directa” a una página de colección. Si el archivo se abre en el navegador en vez de guardarse automáticamente, la guía debe explicar en una frase cómo guardarlo desde el dispositivo. No crear botones adicionales por tarjeta para favoritos, compartir, imprimir o copiar.

## 8. Licencias y respeto

- “Gratis” no significa automáticamente “libre para redistribuir”.
- Conservar nombre de autoría, fuente, licencia y condiciones.
- CC BY: atribuir y respetar condiciones.
- CC BY-SA: atribuir y compartir adaptaciones bajo las condiciones aplicables.
- CC BY-NC: no presentar como libre para usos comerciales.
- CC BY-ND: no redistribuir adaptaciones no autorizadas.
- Dominio público o CC0: documentar la fuente y la base de la clasificación.
- Para recursos institucionales, verificar la licencia en la ficha concreta, no deducirla por el nombre de la institución.
- Si hay ambigüedad, no copiar el archivo; enlazar a la fuente oficial cuando sea apropiado y legal.

## 9. Prioridades de investigación por territorio

### A. San Patricio del Chañar — prioridad máxima

Buscar en archivos municipales y provinciales, bibliotecas, escuelas, museos, publicaciones de historia local, mapas históricos, fotografías de patrimonio, memoria oral publicada, folletos culturales, guías de productores, recursos de naturaleza y materiales comunitarios.

Para cada hallazgo, documentar quién lo produjo, dónde se conserva, si se puede compartir y si la vista previa está autorizada. Una fotografía encontrada en redes sociales no se presume libre.

### B. Neuquén

Priorizar patrimonio, cultura, educación, ciencia, ambiente, biodiversidad, mapas de uso no vial, turismo responsable, materiales para emprender y documentos públicos reutilizables. Comprobar por separado la licencia de los PDFs y conjuntos de datos.

### C. Patagonia

Mapas históricos y contemporáneos, flora y fauna, guías de campo, historia, fotografía, arte, relatos y materiales de educación ambiental. Diferenciar la Patagonia argentina de la región patagónica transfronteriza.

### D. Argentina

Literatura en dominio público o con licencia abierta comprobada, bibliotecas digitales oficiales, material educativo, arte imprimible, ciencia abierta, documentos de organismos públicos con términos de reutilización claros, huerta y guías prácticas.

### E. América Latina y mundo hispanohablante

Bibliotecas abiertas, archivos públicos, repositorios universitarios, museos, materiales educativos, mapas, cultura, literatura y recursos prácticos. Priorizar español accesible y archivos que puedan guardarse en un teléfono o imprimirse.

## 10. Fuentes a investigar, no permisos automáticos

Estas fuentes sirven como puntos de partida; cada recurso debe revisarse individualmente:

- Wikimedia Commons: ficha individual, autor, licencia y resolución.
- Educ.ar: ficha de cada material y licencia declarada; varias colecciones usan BY-NC-SA, por lo que no se deben describir como libres para cualquier uso.
- Repositorio educativo del Consejo Provincial de Educación del Neuquén: útil para descubrir materiales, pero comprobar licencia de cada archivo antes de redistribuir.
- Portal de Datos Abiertos del Neuquén: verificar los términos de cada conjunto y su fecha.
- INTA: materiales de huerta y producción; comprobar permisos del archivo concreto.
- Bibliotecas nacionales, provinciales, municipales, universitarias y archivos históricos: revisar derechos de cada obra digitalizada.
- Museos y archivos fotográficos: distinguir dominio público de derechos sobre fotografías, reproducciones y metadatos.

## 11. Control de calidad antes de publicar

Un recurso no se publica hasta responder sí a todo lo aplicable:

- ¿La ficha original abre y corresponde al título?
- ¿Se identificó autoría o institución?
- ¿Se conoce la licencia o el fundamento de dominio público?
- ¿La acción Descargar lleva al archivo correcto o explica que lleva a la fuente oficial?
- ¿La vista previa representa fielmente el contenido o está claramente marcada como descriptiva?
- ¿El alcance geográfico es preciso sin exagerar?
- ¿La descripción sirve a una persona con conocimientos tecnológicos básicos?
- ¿Se puede usar en teléfono y computadora?
- ¿La tarjeta tiene solo Ver y Descargar?
- ¿La persona puede salir sin presión, registro o donación?

Si falla un control importante, el recurso vuelve a investigación.

## 12. Mantenimiento y medición

- Revisar enlaces rotos y cambios de licencia en ciclos regulares.
- Corregir registros sin perder el historial documental.
- No medir éxito por minutos en página, número de clics repetidos o retorno forzado.
- Medir calidad por enlaces válidos, permisos claros, calidad de las vistas previas, cobertura territorial y facilidad para obtener archivos.
- La colaboración con alias `ocarina.guitarra` siempre es voluntaria y nunca desbloquea contenido.

## 13. Estado del catálogo

La versión pública en esta revisión contiene 19 recursos. La mayor parte corresponde a mapas y fotografías de Neuquén y Patagonia, junto con materiales educativos y colecciones literarias oficiales. Es una primera capa, no una cobertura completa de todos los temas ni de todos los territorios.

**Próximo objetivo de contenido:** conseguir recursos originales de Chañar con procedencia verificable; ampliar materiales de utilidad práctica y arte imprimible; después ampliar literatura, educación y patrimonio regional. No inflar el número a costa de la confianza.
