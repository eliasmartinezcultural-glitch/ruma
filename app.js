(() => {
  "use strict";

  // RUMA 1.0: diez fichas. El acceso principal permanece dentro del sitio.
  // Las fichas son contenido original de orientación; no sustituyen documentos oficiales íntegros.
  const resources = [
    {title:"Carta Orgánica Municipal",description:"Una guía sencilla para entender qué es y para qué sirve la norma fundamental del municipio.",category:"Documentos",icon:"🏛️",source:"Boletín Oficial · Provincia del Neuquén",button:"Leer ficha en RUMA",tags:"carta organica ley normas municipio derechos gobierno",content:"La Carta Orgánica es la norma básica que organiza el gobierno municipal y establece principios para la vida institucional local.\n\n¿Para qué sirve?\n• Ayuda a entender cómo se organiza el municipio.\n• Orienta sobre las atribuciones de las autoridades y los mecanismos institucionales.\n• Es un punto de partida para conocer derechos, deberes y participación ciudadana.\n\nImportante: esta ficha es una explicación introductoria, no una copia íntegra ni asesoramiento legal. Para una consulta formal, hay que revisar el texto oficial y sus modificaciones vigentes.",download:"ficha-carta-organica.txt"},
    {title:"Mapa de San Patricio del Chañar",description:"Orientación para ubicarte y consultar mapas de la localidad respetando las condiciones de uso de cada fuente.",category:"Mapas",icon:"🗺️",source:"Dirección Provincial de Catastro · Neuquén",button:"Ver ficha en RUMA",tags:"mapa cartografia territorio calles catastro ubicacion imprimir",content:"Un mapa local ayuda a ubicar calles, barrios y referencias antes de salir.\n\nConsejos para usar un mapa:\n• Confirmá que corresponda a la localidad y que sea una versión actualizada.\n• No uses un mapa como única referencia en una emergencia.\n• Si vas a una zona rural, acordá el recorrido y avisá a alguien.\n\nCuidado con los permisos: la ficha catastral consultada indica uso personal. RUMA no reproduce ni ofrece para descargar esa imagen porque sus condiciones no autorizan republicarla. Esta ficha de orientación sí se puede descargar.",download:"ficha-mapa-chanar.txt"},
    {title:"Trámites municipales",description:"Guía para prepararte antes de iniciar una gestión con el municipio.",category:"Vecinos",icon:"🧾",source:"Municipalidad de San Patricio del Chañar",button:"Ver guía en RUMA",tags:"tramites carnet conducir alimentos infracciones libre deuda gestion",content:"Antes de hacer un trámite:\n1. Identificá exactamente qué gestión necesitás.\n2. Consultá los requisitos y si hace falta turno.\n3. Prepará tu DNI y los documentos que correspondan; no envíes datos personales a contactos no verificados.\n4. Preguntá por horarios, costos y formas de pago antes de ir.\n5. Guardá el comprobante o número de expediente.\n\nEl municipio publica gestiones vinculadas, entre otras, con licencias de conducir, manipulación de alimentos, infracciones y libre deuda. Los requisitos pueden cambiar; esta ficha es una lista de preparación, no reemplaza la información oficial vigente.",download:"guia-tramites-municipales.txt"},
    {title:"Llamar a la Municipalidad",description:"Tené el número a mano y confirmá su vigencia si no lográs comunicarte.",category:"Vecinos",icon:"☎️",source:"Portal oficial municipal · confirmar vigencia",button:"Ver contacto en RUMA",tags:"telefono llamar contacto municipio ayuda vecinos",content:"Contacto telefónico publicado en el portal municipal:\n\nTeléfono: (0299) 408-4225\n\nSi no responde, el número no funciona o tu consulta es urgente, buscá un canal institucional actualizado. No compartas claves, códigos de verificación ni datos bancarios por teléfono.\n\nEsta ficha permite copiar el número; no inicia una llamada automáticamente.",download:"contacto-municipalidad.txt",copy:"02994084225"},
    {title:"Escribir a Prensa municipal",description:"Datos para preparar una consulta dirigida al área de prensa y comunicación municipal.",category:"Vecinos",icon:"✉️",source:"Municipalidad de San Patricio del Chañar",button:"Ver contacto en RUMA",tags:"correo email prensa escribir contacto comunicacion municipio",content:"Correo publicado para el área de prensa y comunicación municipal:\n\nprensa@sanpatricio.gob.ar\n\nPara que tu mensaje sea claro:\n• Escribí un asunto breve.\n• Contá quién sos y qué necesitás.\n• Si consultás por una actividad, incluí fecha y lugar.\n• Adjuntá solo los archivos necesarios y evitá enviar datos sensibles.\n\nRUMA no envía el correo por vos; podés copiar la dirección y pegarla en tu aplicación de correo. Confirmá que siga vigente antes de enviar información importante.",download:"contacto-prensa-municipal.txt",copy:"prensa@sanpatricio.gob.ar"},
    {title:"Conocé nuestro pueblo",description:"Una pequeña guía de lugares y espacios de San Patricio del Chañar para descubrir o recomendar.",category:"Conocer Chañar",icon:"🌿",source:"Municipalidad de San Patricio del Chañar",button:"Explorar ficha en RUMA",tags:"historia pueblo naturaleza dique chacra produccion plaza balneario mirador",content:"Ideas para conocer mejor San Patricio del Chañar:\n• Plaza de las Infancias: un espacio público para compartir.\n• Balneario y entorno del río: consultá condiciones, habilitación y seguridad antes de acercarte.\n• Chacra municipal y paisaje productivo: una oportunidad para conversar sobre la identidad agrícola local.\n• Dique y miradores: verificá accesos y condiciones del camino antes de salir.\n\nCuidemos el lugar: llevá tus residuos, respetá la propiedad privada y seguí las indicaciones de seguridad. Los accesos y servicios pueden variar según la temporada.",download:"guia-conocer-chanar.txt"},
    {title:"Paseos y actividades locales",description:"Lista de preparación para disfrutar el entorno con cuidado y respeto.",category:"Conocer Chañar",icon:"🥾",source:"Municipalidad de San Patricio del Chañar",button:"Ver guía en RUMA",tags:"turismo paseo actividades kayak pesca aves naturaleza caminar",content:"Antes de una salida:\n• Consultá si el lugar está habilitado y si requiere permiso.\n• Revisá el pronóstico y el estado de los accesos.\n• Llevá agua, protección solar, abrigo y el teléfono cargado.\n• Avisá a alguien adónde vas y cuándo pensás volver.\n• No te acerques al agua ni a zonas de riesgo cuando haya alertas o condiciones inseguras.\n\nEl entorno ofrece oportunidades para caminar, observar aves y realizar actividades recreativas, pero temporadas, permisos y condiciones cambian. Confirmá siempre antes de salir.",download:"guia-paseos-chanar.txt"},
    {title:"Boletín Oficial Municipal · 2019",description:"Orientación para consultar el archivo histórico sin confundirlo con normativa vigente.",category:"Documentos",icon:"📚",source:"Municipalidad de San Patricio del Chañar",button:"Leer ficha en RUMA",tags:"boletin oficial ordenanzas decretos documentos archivo 2019 historia normas",content:"Un boletín oficial reúne publicaciones formales del municipio, como ordenanzas y decretos. El archivo de 2019 sirve como antecedente histórico.\n\nPara investigar una norma:\n1. Anotá el tema y, si lo tenés, el número de ordenanza o decreto.\n2. Registrá la fecha de publicación.\n3. Buscá si existen modificaciones, derogaciones o normas posteriores.\n4. Para tomar una decisión legal o administrativa, confirmá el estado vigente con el organismo correspondiente.\n\nImportante: este archivo histórico no demuestra por sí solo que una norma siga vigente. Esta ficha es una guía; no contiene el boletín íntegro.",download:"guia-boletin-municipal-2019.txt"},
    {title:"Datos económicos de Chañar",description:"Cómo aprovechar datos públicos de la localidad para estudiar, planificar o iniciar una idea.",category:"Trabajo y estudio",icon:"📊",source:"Ministerio de Economía, Producción e Industria de Neuquén",button:"Ver guía en RUMA",tags:"datos estadisticas economia produccion trabajo estudio emprendimientos informes",content:"Los datos económicos y territoriales pueden ayudar a entender actividades productivas, empleo y características de una localidad.\n\nAl usar estadísticas:\n• Anotá el año al que corresponden.\n• Revisá qué mide cada indicador y en qué unidad.\n• No compares cifras de períodos distintos sin aclararlo.\n• Citá al organismo y al informe de origen en trabajos escolares o profesionales.\n• Recordá que una cifra provincial no describe necesariamente la realidad de cada barrio.\n\nEsta ficha enseña cómo leer los datos; no sustituye las tablas ni los informes oficiales completos.",download:"guia-datos-economicos-chanar.txt"},
    {title:"Orientación para emprendedores",description:"Pasos iniciales para ordenar una idea y preparar una consulta por acompañamiento local.",category:"Trabajo y estudio",icon:"🌱",source:"Municipalidad de San Patricio del Chañar",button:"Ver guía en RUMA",tags:"emprender emprendimiento trabajo economia comercio produccion desarrollo economico contacto",content:"Una idea de emprendimiento puede empezar con pasos pequeños:\n1. Escribí qué ofrecés y a quién le puede servir.\n2. Calculá materiales, tiempo, costos y precio.\n3. Preguntá a posibles clientes qué necesitan antes de invertir.\n4. Registrá ingresos y gastos desde el primer día.\n5. Consultá qué habilitaciones o requisitos corresponden a tu actividad.\n\nLa Secretaría de Desarrollo Económico municipal es un punto de partida para consultar por orientación y programas. Antes de compartir documentación personal, confirmá los canales oficiales y la disponibilidad actual de cada programa.",download:"guia-emprender-chanar.txt"}

    {title:"Mapoteca Digital del Neuquén",description:"Mapas escolares, históricos, físicos y turísticos de la provincia, incluida una sección de localidades.",category:"Mapas",icon:"🧭",source:"Dirección Provincial de Catastro e Información Territorial",sourceUrl:"https://dpc.neuquen.gov.ar/Mapa",button:"Ver ficha en RUMA",tags:"mapa neuquen localidades escolar historico turismo imprimir geografia",content:"La Mapoteca Digital reúne mapas provinciales, escolares, históricos y de localidades. Es un buen punto de partida para estudiar el territorio o preparar una actividad educativa.\n\nImportante: el organismo informa que sus mapas pueden descargarse e imprimirse para uso personal y que no se pueden republicar ni comercializar sin autorización. RUMA no aloja copias de esos mapas; te indica la fuente oficial para consultarlos y obtenerlos respetando esas condiciones.",download:"guia-mapoteca-neuquen.txt"},
    {title:"Mapas y datos territoriales de COPADE",description:"Mapas sobre servicios, rutas, salud, educación, cultura, conectividad y equipamiento provincial.",category:"Mapas",icon:"📍",source:"COPADE · Gobierno del Neuquén",sourceUrl:"https://www.copade.gob.ar/coleccion-mapas-neuquinos/",button:"Ver ficha en RUMA",tags:"mapas neuquen salud educacion cultura caminos conectividad servicios copade",content:"La colección Mapas Neuquinos reúne herramientas para conocer servicios y equipamientos de la provincia, como infraestructura vial, salud, educación, cultura y conectividad digital.\n\nPuede servir para tareas escolares, investigaciones locales y para comprender cómo se distribuyen los servicios en el territorio. Revisá las indicaciones de cada archivo antes de reutilizarlo o republicarlo.",download:"guia-mapas-copade.txt"},
    {title:"Portal de Datos Abiertos del Neuquén",description:"Datos públicos para investigar temas de población, educación, cultura, ambiente, economía y más.",category:"Trabajo y estudio",icon:"📊",source:"Gobierno de la Provincia del Neuquén",sourceUrl:"https://portaldatosabiertos.neuquen.gov.ar/",button:"Ver ficha en RUMA",tags:"datos abiertos estadisticas poblacion educacion cultura ambiente economia investigacion",content:"El Portal de Datos Abiertos permite explorar conjuntos de datos publicados por organismos provinciales en distintas áreas.\n\nPara aprovecharlos:\n• Elegí un tema concreto.\n• Revisá quién publicó los datos y de qué fecha son.\n• Leé la descripción y las condiciones de uso de cada conjunto.\n• Citá la fuente y no presentes datos provinciales como si describieran automáticamente a cada barrio o localidad.\n\nRUMA funciona como puerta de entrada; cada archivo conserva las condiciones que indique su organismo responsable.",download:"guia-datos-abiertos-neuquen.txt"},
    {title:"Recursos educativos de Educ.ar",description:"Libros, textos, videos, audios, actividades y materiales para aprender y enseñar.",category:"Trabajo y estudio",icon:"✏️",source:"Educ.ar · Secretaría de Educación",sourceUrl:"https://www.educ.ar/recursos",button:"Ver ficha en RUMA",tags:"estudiantes docentes escuela primaria secundaria libros videos audios actividades ciencias historia",content:"Educ.ar reúne materiales para distintos niveles educativos y formatos: libros electrónicos, textos, videos, audios, actividades y recursos interactivos.\n\nCómo encontrar algo útil:\n• Elegí el nivel educativo o la materia.\n• Mirá el formato antes de abrir el recurso.\n• Revisá si permite descarga y qué condiciones de uso declara.\n• Guardá el título y la autoría para poder citarlo en un trabajo.\n\nLa disponibilidad de descarga y los permisos pueden variar según el material.",download:"guia-recursos-educar.txt"},
    {title:"Libros y documentos de la Biblioteca Nacional",description:"Acceso a objetos digitales, libros, revistas, fotografías, mapas, partituras, audios y archivos.",category:"Documentos",icon:"📚",source:"Biblioteca Nacional Mariano Moreno",sourceUrl:"https://bn.gob.ar/biblioteca/servicios/online",button:"Ver ficha en RUMA",tags:"libros lectura historia revistas fotos mapas partituras audios dominio publico biblioteca",content:"La Biblioteca Nacional ofrece consulta en línea de objetos digitales de sus colecciones, que incluyen libros, revistas, periódicos, fotografías, mapas, manuscritos, partituras, audios y videos. La institución identifica obras digitalizadas bajo dominio público y de acceso libre.\n\nAntes de reutilizar una obra, comprobá la información de derechos de esa pieza en particular. Que algo se pueda consultar en línea no significa que todas sus imágenes o ediciones se puedan republicar libremente.",download:"guia-biblioteca-nacional.txt"},
    {title:"Libros gratuitos de CONABIP",description:"Publicaciones y materiales de lectura difundidos para acercar libros a las comunidades.",category:"Documentos",icon:"📖",source:"Comisión Nacional de Bibliotecas Populares",sourceUrl:"https://www.conabip.gob.ar/content/libros-conabip",button:"Ver ficha en RUMA",tags:"libros cuentos lectura infantil literatura pdf biblioteca popular familia",content:"CONABIP publica selecciones de libros y materiales vinculados con la lectura y las bibliotecas populares. En su catálogo se indican las publicaciones disponibles y, cuando corresponde, archivos PDF.\n\nAbrí la ficha de cada título y comprobá que el PDF esté disponible. RUMA no afirma tener una copia propia del libro: te acerca al catálogo de la institución que lo publica.",download:"guia-libros-conabip.txt"},
    {title:"Clásicos de dominio público",description:"Una selección institucional de obras literarias que se pueden descargar en PDF.",category:"Documentos",icon:"🪶",source:"Gobierno de la Provincia de Buenos Aires",sourceUrl:"https://gba.gob.ar/lecturas/libros_digitales",button:"Ver ficha en RUMA",tags:"libros clasicos literatura gauchesca martin fierro fausto dominio publico pdf lectura",content:"Este catálogo reúne obras literarias de dominio público, con títulos como Martín Fierro y Fausto. Es una buena puerta de entrada para lectores, estudiantes y docentes.\n\nVerificá que el archivo corresponda a la edición indicada y respetá los créditos de las ilustraciones o materiales añadidos, que pueden tener condiciones distintas a las de la obra original.",download:"guia-clasicos-dominio-publico.txt"},
    {title:"Herramientas para emprender",description:"Programas, orientación e información institucional para personas con una idea de negocio.",category:"Trabajo y estudio",icon:"🌱",source:"Argentina.gob.ar · Economía",sourceUrl:"https://www.argentina.gob.ar/economia/pymes-emprendedores-y-economia-del-conocimiento/ecosistema-emprendedor",button:"Ver ficha en RUMA",tags:"emprender emprendimiento pyme negocio capacitacion financiamiento trabajo herramientas",content:"El ecosistema emprendedor argentino reúne iniciativas, herramientas e información sobre instituciones de apoyo, capacitación y posibles programas.\n\nAntes de tomar una decisión:\n• Leé los requisitos y fechas vigentes del programa.\n• Confirmá si está abierto y si corresponde a tu localidad.\n• No pagues a intermediarios por supuestos accesos garantizados.\n• Prepará una descripción breve de tu idea, costos y público antes de solicitar orientación.\n\nLa existencia de un programa en el portal no significa que esté abierto permanentemente ni que todas las personas califiquen.",download:"guia-herramientas-emprender.txt"}

  ];

  const grid=document.getElementById("resource-grid");
  const form=document.getElementById("search-form");
  const input=document.getElementById("search");
  const count=document.getElementById("result-count");
  const noResults=document.getElementById("no-results");
  const filters=[...document.querySelectorAll("[data-filter]")];
  const dialog=document.getElementById("resource-dialog");
  const dialogTitle=document.getElementById("dialog-title");
  const dialogBody=document.getElementById("dialog-body");
  const downloadButton=document.getElementById("download-resource");
  const copyButton=document.getElementById("copy-resource");
  const copyMessage=document.getElementById("resource-copy-message");
  let activeFilter="Todos";
  let searchTerm="";
  let currentResource=null;

  function normalize(value){return value.toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g,"");}
  function matches(resource){
    const categoryMatch=activeFilter==="Todos"||resource.category===activeFilter;
    const text=normalize([resource.title,resource.description,resource.category,resource.source,resource.tags].join(" "));
    const words=normalize(searchTerm).trim().split(/\s+/).filter(Boolean);
    return categoryMatch&&words.every(word=>text.includes(word));
  }
  function openResource(resource){
    currentResource=resource;
    dialogTitle.textContent=resource.icon+" "+resource.title;
    dialogBody.replaceChildren();
    const intro=document.createElement("p");intro.className="resource-detail-intro";intro.textContent=resource.description;
    const source=document.createElement("p");source.className="resource-detail-source";source.textContent="Fuente consultada: "+resource.source;
    const content=document.createElement("div");content.className="resource-detail-content";
    resource.content.split("\n").forEach(line=>{
      if(!line.trim()){content.append(document.createElement("br"));return;}
      const p=document.createElement("p");p.textContent=line;content.append(p);
    });
    const notice=document.createElement("p");notice.className="resource-detail-notice";notice.textContent="Esta es una ficha propia de RUMA, disponible para leer y descargar aquí. No es una reproducción íntegra del documento o sitio de la fuente.";
    dialogBody.append(intro,source,content,notice);
    if(resource.sourceUrl){
      const sourceLink=document.createElement("a");
      sourceLink.href=resource.sourceUrl;
      sourceLink.target="_blank";
      sourceLink.rel="noopener noreferrer";
      sourceLink.className="button button-soft";
      sourceLink.textContent="Consultar fuente oficial ↗";
      sourceLink.style.marginTop="8px";
      dialogBody.append(sourceLink);
    }
    downloadButton.textContent="Descargar esta ficha";
    copyButton.hidden=!resource.copy;
    copyMessage.textContent="";
    if(typeof dialog.showModal==="function")dialog.showModal();
    else dialog.setAttribute("open","");
  }
  function render(){
    const visible=resources.filter(matches);
    grid.replaceChildren();
    visible.forEach(resource=>{
      const article=document.createElement("article");article.className="resource-card";
      const top=document.createElement("div");top.className="card-top";
      const icon=document.createElement("span");icon.className="resource-icon";icon.setAttribute("aria-hidden","true");icon.textContent=resource.icon;
      const category=document.createElement("span");category.className="category-label";category.textContent=resource.category;
      top.append(icon,category);
      const title=document.createElement("h3");title.textContent=resource.title;
      const description=document.createElement("p");description.textContent=resource.description;
      const source=document.createElement("p");source.className="source";source.textContent="Fuente consultada: "+resource.source;
      const button=document.createElement("button");button.type="button";button.className="resource-open button button-primary";button.textContent=resource.button;button.addEventListener("click",()=>openResource(resource));
      article.append(top,title,description,source,button);grid.append(article);
    });
    noResults.hidden=visible.length!==0;
    count.textContent=searchTerm||activeFilter!=="Todos"
      ? visible.length+(visible.length===1?" recurso encontrado":" recursos encontrados")
      : "Tenemos 10 recursos elegidos para empezar.";
  }
  function resetFilters(){
    activeFilter="Todos";
    filters.forEach(item=>{const active=item.dataset.filter==="Todos";item.classList.toggle("active",active);item.setAttribute("aria-pressed",String(active));});
  }
  filters.forEach(button=>button.addEventListener("click",()=>{
    activeFilter=button.dataset.filter;
    filters.forEach(item=>{const active=item===button;item.classList.toggle("active",active);item.setAttribute("aria-pressed",String(active));});
    render();
  }));
  form.addEventListener("submit",event=>{event.preventDefault();searchTerm=input.value.trim();render();document.getElementById("estantes").scrollIntoView({behavior:"smooth",block:"start"});});
  document.querySelectorAll("[data-query]").forEach(button=>button.addEventListener("click",()=>{
    input.value=button.dataset.query;searchTerm=button.dataset.query;resetFilters();render();
    document.getElementById("estantes").scrollIntoView({behavior:"smooth",block:"start"});
  }));
  document.getElementById("clear-search").addEventListener("click",()=>{
    input.value="";searchTerm="";resetFilters();render();
  });
  document.getElementById("copy-alias").addEventListener("click",async()=>{
    const message=document.getElementById("copy-message");
    try{await navigator.clipboard.writeText("ocarina.guitarra");message.textContent="Alias copiado. ¡Gracias por apoyar!";}
    catch{message.textContent="Podés copiarlo a mano: ocarina.guitarra";}
  });
  downloadButton.addEventListener("click",()=>{
    if(!currentResource)return;
    const textContent=currentResource.title+"\nRUMA Chañar · Ficha descargable\n\n"+currentResource.content+"\n\nFuente consultada: "+currentResource.source+"\n\nNota: ficha de orientación elaborada para RUMA. No reemplaza documentos oficiales íntegros ni confirma vigencia normativa.";
    const blob=new Blob(["\ufeff"+textContent],{type:"text/plain;charset=utf-8"});
    const url=URL.createObjectURL(blob);
    const anchor=document.createElement("a");anchor.href=url;anchor.download=currentResource.download;document.body.append(anchor);anchor.click();anchor.remove();URL.revokeObjectURL(url);
  });
  copyButton.addEventListener("click",async()=>{
    if(!currentResource?.copy)return;
    try{await navigator.clipboard.writeText(currentResource.copy);copyMessage.textContent="Copiado. Ya podés pegarlo donde lo necesites.";}
    catch{copyMessage.textContent="Podés seleccionar y copiar el dato que aparece en la ficha.";}
  });
  document.getElementById("close-resource").addEventListener("click",()=>dialog.close?.());
  dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close?.();});
  render();
})();