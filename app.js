(() => {
  "use strict";

  // Primera edición consolidada: exactamente diez recursos, revisados antes de publicar.
  const resources = [
    {title:"Carta Orgánica Municipal",description:"La norma fundamental del municipio. Documento publicado en el Boletín Oficial de la Provincia del Neuquén.",category:"Documentos",icon:"🏛️",source:"Boletín Oficial · Provincia del Neuquén",url:"https://infoleg.neuquen.gob.ar/Boletines/bo04021302862a.pdf",button:"Leer la Carta Orgánica",tags:"carta organica ley normas municipio derechos gobierno"},
    {title:"Mapa de San Patricio del Chañar",description:"Mapa oficial con calles y referencias de la localidad. La ficha de Catastro indica que es para uso personal: no lo revendas ni lo republices.",category:"Mapas",icon:"🗺️",source:"Dirección Provincial de Catastro · Neuquén",url:"https://dpc.neuquen.gob.ar/MapasYPlanos/Localidades/san_patricio_chagnar.jpg",button:"Abrir el mapa",tags:"mapa cartografia territorio calles catastro ubicacion imprimir"},
    {title:"Trámites municipales",description:"Acceso a trámites y gestiones del municipio, entre ellos carnet de conducir, carnet de manipulación de alimentos, infracciones y libre deuda. Revisá requisitos vigentes en la fuente.",category:"Vecinos",icon:"🧾",source:"Municipalidad de San Patricio del Chañar",url:"https://sanpatricio.gob.ar/tramites",button:"Ver trámites",tags:"tramites carnet conducir alimentos infracciones libre deuda gestion"},
    {title:"Llamar a la Municipalidad",description:"El portal oficial publica este teléfono general. Si no responde o cambió, revisá el sitio municipal para confirmar el dato.",category:"Vecinos",icon:"☎️",source:"Portal oficial municipal · confirmar vigencia",url:"tel:+542994084225",button:"Llamar al municipio",tags:"telefono llamar contacto municipio ayuda vecinos"},
    {title:"Escribir a Prensa municipal",description:"Correo publicado en el portal oficial para consultas dirigidas al área de prensa y comunicación municipal.",category:"Vecinos",icon:"✉️",source:"Municipalidad de San Patricio del Chañar",url:"mailto:prensa@sanpatricio.gob.ar",button:"Escribir un correo",tags:"correo email prensa escribir contacto comunicacion municipio"},
    {title:"Conocé nuestro pueblo",description:"Información sobre lugares y espacios locales: el balneario, la Plaza de las Infancias, la chacra municipal, el dique y el mirador.",category:"Conocer Chañar",icon:"🌿",source:"Municipalidad de San Patricio del Chañar",url:"https://sanpatricio.gob.ar/nuestra",button:"Conocer Chañar",tags:"historia pueblo naturaleza dique chacra produccion plaza balneario mirador"},
    {title:"Paseos y actividades locales",description:"Información municipal sobre propuestas para conocer el entorno, avistaje de aves y actividades recreativas. Confirmá temporadas, permisos y condiciones antes de salir.",category:"Conocer Chañar",icon:"🥾",source:"Municipalidad de San Patricio del Chañar",url:"https://sanpatricio.gob.ar/quehacer",button:"Ver propuestas",tags:"turismo paseo actividades kayak pesca aves naturaleza caminar"},
    {title:"Boletín Oficial Municipal · 2019",description:"Archivo histórico de ordenanzas y decretos. Sirve para consultar antecedentes, pero no reemplaza la búsqueda de normas posteriores o vigentes.",category:"Documentos",icon:"📚",source:"Municipalidad de San Patricio del Chañar",url:"https://sanpatricio.gob.ar/BOLETIN_OFICIAL_2019.pdf",button:"Abrir archivo histórico",tags:"boletin oficial ordenanzas decretos documentos archivo 2019 historia normas"},
    {title:"Datos económicos de Chañar",description:"Informes públicos sobre la localidad publicados por el Ministerio de Economía, Producción e Industria de Neuquén. Útiles como punto de partida para estudiar el contexto local.",category:"Trabajo y estudio",icon:"📊",source:"Ministerio de Economía de Neuquén",url:"https://www.economianqn.gob.ar/municipios/contenido/san-patricio-del-chanar",button:"Consultar los informes",tags:"datos estadisticas economia produccion trabajo estudio emprendimientos informes"},
    {title:"Orientación para emprendedores",description:"Contacto de la Secretaría de Desarrollo Económico municipal para consultar por orientación, programas y acompañamiento a iniciativas locales.",category:"Trabajo y estudio",icon:"🌱",source:"Municipalidad de San Patricio del Chañar",url:"https://sanpatricio.gob.ar/desarrollo-economico",button:"Ver contacto y orientación",tags:"emprender emprendimiento trabajo economia comercio produccion desarrollo economico contacto"}
  ];

  const grid=document.getElementById("resource-grid");
  const form=document.getElementById("search-form");
  const input=document.getElementById("search");
  const count=document.getElementById("result-count");
  const noResults=document.getElementById("no-results");
  const filters=[...document.querySelectorAll("[data-filter]")];
  let activeFilter="Todos";
  let searchTerm="";

  function normalize(value){return value.toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g,"");}
  function matches(resource){
    const categoryMatch=activeFilter==="Todos"||resource.category===activeFilter;
    const text=normalize([resource.title,resource.description,resource.category,resource.source,resource.tags].join(" "));
    const words=normalize(searchTerm).trim().split(/\s+/).filter(Boolean);
    return categoryMatch&&words.every(word=>text.includes(word));
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
      const source=document.createElement("p");source.className="source";source.textContent="Publicado por: "+resource.source;
      const link=document.createElement("a");link.href=resource.url;
      if(resource.url.startsWith("http")){link.target="_blank";link.rel="noopener noreferrer";}
      link.append(document.createTextNode(resource.button));
      const arrow=document.createElement("span");arrow.setAttribute("aria-hidden","true");arrow.textContent="↗";link.append(arrow);
      article.append(top,title,description,source,link);grid.append(article);
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
  render();
})();