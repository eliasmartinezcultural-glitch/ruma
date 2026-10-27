(() => {
  "use strict";

  // RUMA reúne materiales existentes. No fabrica archivos ni resúmenes para completar el catálogo.
  // Los enlaces a PDF abren el archivo real; los enlaces de colección llevan a la fuente institucional.
  const resources = [
    {title:"El gaucho Martín Fierro",author:"José Hernández",description:"Poema gauchesco argentino. PDF completo, 77 páginas.",category:"Lectura",icon:"📖",format:"PDF · 77 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/Martin_Fierro.pdf",tags:"libro literatura gauchesca poesia argentina clásico escuela"},
    {title:"Fausto",author:"Estanislao del Campo",description:"Poema gauchesco humorístico. PDF completo, 56 páginas.",category:"Lectura",icon:"📚",format:"PDF · 56 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/FAUSTO-Estanislado_del_Campo.pdf",tags:"libro literatura poesia humor gaucho argentino clásico"},
    {title:"Las de Barranco",author:"Gregorio de Laferrère",description:"Obra teatral argentina. PDF completo, 96 páginas.",category:"Lectura",icon:"🎭",format:"PDF · 96 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/LAS%20DE%20BARRANCO-GregoriodeLaferrere.pdf",tags:"teatro obra literatura argentina drama"},
    {title:"Viajes y descripciones",author:"Juan Bautista Alberdi",description:"Ensayo y relatos de viaje. PDF completo, 117 páginas.",category:"Lectura",icon:"🧳",format:"PDF · 117 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/Alberdi-Viajes-y-descripciones.pdf",tags:"libro ensayo viajes historia argentina"},
    {title:"Allá lejos y hace tiempo",author:"William Henry Hudson",description:"Libro autobiográfico sobre la infancia del autor en Argentina. PDF completo, 185 páginas.",category:"Lectura",icon:"🌾",format:"PDF · 185 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/Hudson-Allalejosyhacetiempo.pdf",tags:"libro autobiografía naturaleza campo infancia memoria"},
    {title:"Las fuerzas extrañas",author:"Leopoldo Lugones",description:"Colección de relatos fantásticos. PDF completo, 110 páginas.",category:"Lectura",icon:"🌙",format:"PDF · 110 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/LAS%20FUERZAS%20EXTRA%C3%91AS.pdf",tags:"libro cuentos fantasía literatura argentina ciencia ficción"},
    {title:"Poemas",author:"Alfonsina Storni",description:"Selección poética en PDF, 30 páginas.",category:"Lectura",icon:"🌸",format:"PDF · 30 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/ALFONSINA.pdf",tags:"poesía poemas autora argentina literatura mujeres"},
    {title:"Poesía completa",author:"Almafuerte (Pedro Bonifacio Palacios)",description:"Selección de poesía. PDF completo, 38 páginas.",category:"Lectura",icon:"✒️",format:"PDF · 38 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/POESIA_COMPLETA_ALMAFUERTE.pdf",tags:"poesía poemas literatura argentina"},
    {title:"Don Segundo Sombra",author:"Ricardo Güiraldes",description:"Novela sobre la vida rural y el oficio de resero. PDF completo, 173 páginas.",category:"Lectura",icon:"🐎",format:"PDF · 173 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/DON%20SEGUNDO%20SOMBRA.pdf",tags:"novela campo gaucho vida rural literatura argentina"},
    {title:"Cuentos de la selva",author:"Horacio Quiroga",description:"Cuentos protagonizados por animales. PDF completo, 62 páginas.",category:"Lectura",icon:"🐾",format:"PDF · 62 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/CUENTOS%20_DE_LA_SELVA.pdf",tags:"cuentos infancia animales naturaleza literatura niños"},
    {title:"Los siete locos",author:"Roberto Arlt",description:"Novela argentina. PDF completo, 148 páginas.",category:"Lectura",icon:"📘",format:"PDF · 148 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/LOS%20SIETE%20LOCOS.pdf",tags:"novela literatura argentina sociedad"},
    {title:"Mapa político de la provincia del Neuquén",author:"Dirección Provincial de Catastro e Información Territorial",description:"Mapa político provincial publicado en la Mapoteca Digital oficial.",category:"Mapas",icon:"🗺️",format:"Mapa descargable",source:"Gobierno del Neuquén · Mapoteca Digital",url:"https://dpc.neuquen.gov.ar/dpcasp/mapoteca_digital/provincia.asp",tags:"mapa neuquen politica geografia provincia escolar"},
    {title:"Mapas de localidades del Neuquén",author:"Dirección Provincial de Catastro e Información Territorial",description:"Acceso oficial a cartografía de localidades. Consultá allí San Patricio del Chañar.",category:"Mapas",icon:"📍",format:"Mapoteca oficial",source:"Gobierno del Neuquén · Mapoteca Digital",url:"https://dpc.neuquen.gov.ar/Mapa",tags:"mapa localidad chañar calles cartografía territorio"},
    {title:"Recursos pedagógicos de Neuquén",author:"Dirección General de Innovación y Contenidos Digitales",description:"Catálogo institucional de textos, manuales y libros en PDF para descargar o imprimir.",category:"Estudio",icon:"✏️",format:"Catálogo de PDF",source:"Ministerio de Educación del Neuquén",url:"https://educaciondigital.neuquen.gov.ar/recursos-pedagogicos/",tags:"escuela estudiar docentes estudiantes manuales libros pdf historia ciencias lengua matemática"},
    {title:"Recursos educativos de Educ.ar",author:"Educ.ar · Secretaría de Educación",description:"Libros electrónicos, textos, videos, audios, actividades y materiales educativos.",category:"Estudio",icon:"🎒",format:"Catálogo de recursos",source:"Educ.ar · Gobierno nacional",url:"https://www.educ.ar/recursos",tags:"educación escuela docentes estudiantes libros videos audio actividades ciencias historia"},
    {title:"Clásicos universales para descargar",author:"Secretaría de Educación de la Nación",description:"Más de 100 clásicos en español e inglés para leer por placer o usar en el aula.",category:"Estudio",icon:"📚",format:"Catálogo de libros descargables",source:"Argentina.gob.ar",url:"https://www.argentina.gob.ar/educacion/materiales-didacticos/clasicos-universales",tags:"libros clásicos universales lectura aula novelas cuentos teatro poesía"},
    {title:"Biblioteca digital Libros y Casas",author:"Secretaría de Cultura de la Nación",description:"Más de 150 títulos argentinos: ficción, historietas, libros ilustrados, historia y manuales.",category:"Lectura",icon:"🏡",format:"Biblioteca digital gratuita",source:"Secretaría de Cultura de la Nación",url:"https://librosycasas.cultura.gob.ar/libros/",tags:"libros argentinos cuentos historietas infancia cultura manuales hogar"},
    {title:"Biblioteca digital del Archivo General de la Nación",author:"Archivo General de la Nación",description:"Libros y folletos digitalizados sobre historia argentina, Malvinas, trabajadores e independencia.",category:"Historia",icon:"🏛️",format:"Biblioteca digital",source:"Argentina.gob.ar",url:"https://www.argentina.gob.ar/interior/archivo-general-de-la-nacion/biblioteca-digital",tags:"historia argentina archivos documentos libros folletos memoria"},
    {title:"Informe de espacios culturales del Neuquén (2025)",author:"Observatorio de Deportes, Actividad Física y Cultura",description:"Informe provincial sobre espacios culturales, su distribución y accesibilidad. PDF de 51 páginas.",category:"Historia",icon:"🎨",format:"PDF · 51 páginas",source:"Portal de Datos Abiertos del Neuquén · CC BY 4.0",url:"https://portaldatosabiertos.neuquen.gov.ar/dataset/9f0b080d-9ce2-4fe8-bb58-c6423d46e3de/resource/791d0735-46cc-4b38-af7c-7a4212c1a314/download/analisis-de-los-espacios-culturales-del-neuquen.-odafyc-primer-semestre-2025-.pdf",tags:"cultura neuquen espacios culturales informe datos públicos pdf"},
    {title:"Espacios culturales del Neuquén (datos abiertos)",author:"Observatorio de Deportes, Actividad Física y Cultura",description:"Conjunto de datos provincial sobre espacios culturales. La ficha ofrece informe PDF y base CSV.",category:"Historia",icon:"📊",format:"Datos abiertos · PDF y CSV",source:"Portal de Datos Abiertos del Neuquén · CC BY 4.0",url:"https://portaldatosabiertos.neuquen.gov.ar/dataset/espacios-culturales-del-neuquen",tags:"datos cultura espacios culturales neuquen csv investigación estadística"}
  ];

  const grid = document.getElementById("resource-grid");
  const form = document.getElementById("search-form");
  const input = document.getElementById("search");
  const count = document.getElementById("result-count");
  const noResults = document.getElementById("no-results");
  const filters = [...document.querySelectorAll("[data-filter]")];
  let activeFilter = "Todos";
  let searchTerm = "";

  function normalize(value) {
    return value.toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function matches(resource) {
    const categoryMatch = activeFilter === "Todos" || resource.category === activeFilter;
    const text = normalize([resource.title, resource.author, resource.description, resource.category, resource.source, resource.tags].join(" "));
    const words = normalize(searchTerm).trim().split(/\s+/).filter(Boolean);
    return categoryMatch && words.every(word => text.includes(word));
  }
  function render() {
    const visible = resources.filter(matches);
    grid.replaceChildren();
    visible.forEach(resource => {
      const article = document.createElement("article");
      article.className = "resource-card";
      const top = document.createElement("div");
      top.className = "card-top";
      const icon = document.createElement("span");
      icon.className = "resource-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = resource.icon;
      const category = document.createElement("span");
      category.className = "category-label";
      category.textContent = resource.category;
      top.append(icon, category);

      const title = document.createElement("h3");
      title.textContent = resource.title;
      const author = document.createElement("p");
      author.className = "source";
      author.textContent = resource.author;
      const description = document.createElement("p");
      description.textContent = resource.description;
      const format = document.createElement("p");
      format.className = "source";
      format.textContent = resource.format;
      const source = document.createElement("p");
      source.className = "source";
      source.textContent = "Fuente: " + resource.source;

      const link = document.createElement("a");
      link.className = "button button-primary";
      link.href = resource.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = resource.format.startsWith("PDF") ? "Ver / descargar archivo ↗" : "Abrir recurso ↗";
      link.setAttribute("aria-label", link.textContent + ": " + resource.title);

      article.append(top, title, author, description, format, source, link);
      grid.append(article);
    });
    noResults.hidden = visible.length !== 0;
    count.textContent = searchTerm || activeFilter !== "Todos"
      ? visible.length + (visible.length === 1 ? " recurso encontrado" : " recursos encontrados")
      : "20 recursos reales seleccionados. Cada botón abre el material o la fuente original.";
  }
  function resetFilters() {
    activeFilter = "Todos";
    filters.forEach(item => {
      const active = item.dataset.filter === "Todos";
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
  }
  filters.forEach(button => button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    render();
  }));
  form.addEventListener("submit", event => {
    event.preventDefault();
    searchTerm = input.value.trim();
    render();
    document.getElementById("estantes").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.querySelectorAll("[data-query]").forEach(button => button.addEventListener("click", () => {
    input.value = button.dataset.query;
    searchTerm = button.dataset.query;
    resetFilters();
    render();
    document.getElementById("estantes").scrollIntoView({ behavior: "smooth", block: "start" });
  }));
  document.getElementById("clear-search").addEventListener("click", () => {
    input.value = "";
    searchTerm = "";
    resetFilters();
    render();
  });
  document.getElementById("copy-alias").addEventListener("click", async () => {
    const message = document.getElementById("copy-message");
    try {
      await navigator.clipboard.writeText("ocarina.guitarra");
      message.textContent = "Alias copiado. ¡Gracias por apoyar!";
    } catch {
      message.textContent = "Podés copiarlo a mano: ocarina.guitarra";
    }
  });
  render();
})();