(() => {
  "use strict";

  // RUMA reúne materiales existentes. No fabrica archivos ni resúmenes para completar el catálogo.
  // Los enlaces a PDF abren el archivo real; los enlaces de colección llevan a la fuente institucional.
  const resources = [
    {title:"El gaucho Martín Fierro",author:"José Hernández",description:"Poema gauchesco argentino. PDF completo, 77 páginas.",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/el_gaucho_martin_fierro-01.jpg",category:"Lectura",icon:"📖",format:"PDF · 77 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/Martin_Fierro.pdf",tags:"libro literatura gauchesca poesia argentina clásico escuela"},
    {title:"Fausto",author:"Estanislao del Campo",description:"Poema gauchesco humorístico. PDF completo, 56 páginas.",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/fausto-01.jpg",category:"Lectura",icon:"📚",format:"PDF · 56 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/FAUSTO-Estanislado_del_Campo.pdf",tags:"libro literatura poesia humor gaucho argentino clásico"},
    {title:"Las del Barranco",author:"Gregorio de Laferrère",description:"Obra teatral argentina. PDF completo, 96 páginas.",category:"Lectura",icon:"🎭",format:"PDF · 96 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/LAS%20DE%20BARRANCO-GregoriodeLaferrere.pdf",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/LAS_DE_BARRANCO.jpg",tags:"teatro obra literatura argentina drama"},
    {title:"Viajes y descripciones",author:"Juan Bautista Alberdi",description:"Ensayo y relatos de viaje. PDF completo, 117 páginas.",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/Viajes_y_descripciones-01.jpg",category:"Lectura",icon:"🧳",format:"PDF · 117 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/Alberdi-Viajes-y-descripciones.pdf",tags:"libro ensayo viajes historia argentina"},
    {title:"Allá lejos y hace tiempo",author:"William Henry Hudson",description:"Libro autobiográfico sobre la infancia del autor en Argentina. PDF completo, 185 páginas.",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/alla_lejos_hace_tiempo-01.jpg",category:"Lectura",icon:"🌾",format:"PDF · 185 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/Hudson-Allalejosyhacetiempo.pdf",tags:"libro autobiografía naturaleza campo infancia memoria"},
    {title:"Las fuerzas extrañas",author:"Leopoldo Lugones",description:"Colección de relatos fantásticos. PDF completo, 110 páginas.",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/las_fuerzas.jpg",category:"Lectura",icon:"🌙",format:"PDF · 110 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/LAS%20FUERZAS%20EXTRA%C3%91AS.pdf",tags:"libro cuentos fantasía literatura argentina ciencia ficción"},
    {title:"Poemas",author:"Alfonsina Storni",description:"Selección poética en PDF, 30 páginas.",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/Alfonsina_storni.jpg",category:"Lectura",icon:"🌸",format:"PDF · 30 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/ALFONSINA.pdf",tags:"poesía poemas autora argentina literatura mujeres"},
    {title:"Poesía completa",author:"Almafuerte (Pedro Bonifacio Palacios)",description:"Selección de poesía. PDF completo, 38 páginas.",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/Almafuerte-01_0.jpg",category:"Lectura",icon:"✒️",format:"PDF · 38 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/POESIA_COMPLETA_ALMAFUERTE.pdf",tags:"poesía poemas literatura argentina"},
    {title:"Don Segundo Sombra",author:"Ricardo Güiraldes",description:"Novela sobre la vida rural y el oficio de resero. PDF completo, 173 páginas.",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/Don_segundo_sombra-01_0.jpg",category:"Lectura",icon:"🐎",format:"PDF · 173 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/DON%20SEGUNDO%20SOMBRA.pdf",tags:"novela campo gaucho vida rural literatura argentina"},
    {title:"Cuentos de la selva",author:"Horacio Quiroga",description:"Cuentos protagonizados por animales. PDF completo, 62 páginas.",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/Cuentos_de_la_selva-01_0.jpg",category:"Lectura",icon:"🐾",format:"PDF · 62 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/CUENTOS%20_DE_LA_SELVA.pdf",tags:"cuentos infancia animales naturaleza literatura niños"},
    {title:"Los siete locos",author:"Roberto Arlt",description:"Novela argentina. PDF completo, 148 páginas.",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/Los_siete_locos-01_0.jpg",category:"Lectura",icon:"📘",format:"PDF · 148 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/LOS%20SIETE%20LOCOS.pdf",tags:"novela literatura argentina sociedad"},
    {title:"Tobías o la cárcel a la vela",author:"Juan Bautista Alberdi",description:"Texto satírico publicado en Chile en 1851. PDF oficial de 37 páginas.",category:"Lectura",icon:"🎭",format:"PDF · 37 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/TOBIAS%20O%20LA%20CARCEL%20O%20LA%20VELA.pdf",tags:"libro sátira teatro humor historia argentina alberdi"},
    {title:"En la sangre",author:"Eugenio Cambaceres",description:"Novela argentina publicada originalmente en 1887. PDF oficial de 113 páginas.",category:"Lectura",icon:"📕",format:"PDF · 113 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/Cambaceres_ENLASANGRE.pdf",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/En_la_sangre_0.jpg",tags:"libro novela inmigración literatura argentina clásico"},
    {title:"Aniceto el gallo",author:"Hilario Ascasubi",description:"Poesía gauchesca vinculada a la historia política del siglo XIX. PDF oficial de 320 páginas.",category:"Lectura",icon:"🐓",format:"PDF · 320 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/ANICETO%20EL%20GALLO.pdf",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/Ascasubi_Hilario_Aniceto_el_gallo_0.jpg",tags:"poesía gauchesca historia argentina libro clásico"},
    {title:"Juvenilia",author:"Miguel Cané",description:"Memorias de juventud en el antiguo Colegio Nacional de Buenos Aires. PDF oficial de 48 páginas.",category:"Lectura",icon:"🎓",format:"PDF · 48 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/JUVENILIA.pdf",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/JUVENILIA.jpg",tags:"libro memorias escuela historia argentina estudiantes"},
    {title:"Colección Mapas Neuquinos",author:"COPADE · Gobierno del Neuquén",description:"Mapas provinciales y por microrregiones sobre municipios, rutas, salud, educación, cultura, conectividad y servicios.",category:"Mapas",icon:"🧭",format:"Colección de mapas descargables",source:"COPADE · Gobierno del Neuquén",url:"https://www.copade.gob.ar/coleccion-mapas-neuquinos/",tags:"mapas neuquen municipios cultura salud educación rutas servicios territorio"},
    {title:"Sistema de Información Geográfica del Neuquén",author:"COPADE · Gobierno del Neuquén",description:"Visor oficial con información georreferenciada sobre regiones, infraestructura, servicios básicos y territorio.",category:"Mapas",icon:"🌐",format:"Visor cartográfico interactivo",source:"COPADE · Gobierno del Neuquén",url:"https://www.copade.gob.ar/sig/",tags:"mapas geografía territorio neuquen datos cartografía servicios"}
    {title:"Mapa cultural de la Argentina",author:"Sistema de Información Cultural de la Argentina · SInCA",description:"Mapa nacional con información georreferenciada sobre espacios, agentes y actividades culturales y datos sociodemográficos.",category:"Mapas",icon:"🧩",format:"Mapa cultural interactivo",source:"SInCA · Secretaría de Cultura de la Nación",url:"https://sinca.gob.ar/mapa.aspx",tags:"mapa cultura argentina espacios culturales agentes actividades territorio"},
    {title:"Servicios digitales de la Biblioteca Nacional",author:"Biblioteca Nacional Mariano Moreno",description:"Acceso a objetos digitales, libros, revistas, periódicos, fotografías, mapas, manuscritos, partituras, audios y videos de dominio público.",category:"Historia",icon:"📚",format:"Biblioteca y catálogo digital",source:"Biblioteca Nacional Mariano Moreno",url:"https://bn.gob.ar/biblioteca/servicios/online",tags:"biblioteca nacional digital libros fotos mapas manuscritos partituras historia argentina archivo"}
    {title:"Mapoteca oficial del Neuquén",author:"Dirección Provincial de Catastro e Información Territorial",description:"Acceso oficial para consultar cartografía política provincial y otros materiales territoriales.",category:"Mapas",icon:"🗺️",format:"Consulta cartográfica",source:"Gobierno del Neuquén · Mapoteca Digital",url:"https://dpc.neuquen.gov.ar/Mapa",tags:"mapa neuquen politica geografia provincia escolar"},
    {title:"Mapas de localidades del Neuquén",author:"Dirección Provincial de Catastro e Información Territorial",description:"Acceso oficial a cartografía de localidades. Consultá allí San Patricio del Chañar.",category:"Mapas",icon:"📍",format:"Mapoteca oficial",source:"Gobierno del Neuquén · Mapoteca Digital",url:"https://dpc.neuquen.gov.ar/Mapa",tags:"mapa localidad chañar calles cartografía territorio"},
    {title:"Recursos pedagógicos de Neuquén",author:"Dirección General de Innovación y Contenidos Digitales",description:"Catálogo institucional de textos, manuales y libros en PDF para descargar o imprimir.",category:"Estudio",icon:"✏️",format:"Catálogo de PDF",source:"Ministerio de Educación del Neuquén",url:"https://educaciondigital.neuquen.gov.ar/recursos-pedagogicos/",tags:"escuela estudiar docentes estudiantes manuales libros pdf historia ciencias lengua matemática"},
    {title:"Recursos educativos de Educ.ar",author:"Educ.ar · Secretaría de Educación",description:"Libros electrónicos, textos, videos, audios, actividades y materiales educativos.",category:"Estudio",icon:"🎒",format:"Catálogo de recursos",source:"Educ.ar · Gobierno nacional",url:"https://www.educ.ar/recursos",tags:"educación escuela docentes estudiantes libros videos audio actividades ciencias historia"},
    {title:"Clásicos universales para descargar",author:"Secretaría de Educación de la Nación",description:"Más de 100 clásicos en español e inglés para leer por placer o usar en el aula.",category:"Estudio",icon:"📚",format:"Catálogo de libros descargables",source:"Argentina.gob.ar",url:"https://www.argentina.gob.ar/educacion/materiales-didacticos/clasicos-universales",tags:"libros clásicos universales lectura aula novelas cuentos teatro poesía"},
    {title:"Biblioteca digital Libros y Casas",author:"Secretaría de Cultura de la Nación",description:"Más de 150 títulos argentinos: ficción, historietas, libros ilustrados, historia y manuales.",category:"Lectura",icon:"🏡",format:"Biblioteca digital gratuita",source:"Secretaría de Cultura de la Nación",url:"https://librosycasas.cultura.gob.ar/libros/",tags:"libros argentinos cuentos historietas infancia cultura manuales hogar"},
    {title:"Biblioteca digital del Archivo General de la Nación",author:"Archivo General de la Nación",description:"Libros y folletos digitalizados sobre historia argentina, Malvinas, trabajadores e independencia.",category:"Historia",icon:"🏛️",format:"Biblioteca digital",source:"Argentina.gob.ar",url:"https://www.argentina.gob.ar/interior/archivo-general-de-la-nacion/biblioteca-digital",tags:"historia argentina archivos documentos libros folletos memoria"},
    {title:"Informe de espacios culturales del Neuquén (relevamiento 2024–2025)",author:"Unidad de Planificación y Evaluación de Políticas Sociales · ODAFyC",description:"Informe provincial que analiza los espacios culturales relevados entre 2024 y marzo de 2025. PDF completo de 51 páginas.",category:"Historia",icon:"🎨",format:"PDF · 51 páginas",source:"Portal de Datos Abiertos del Neuquén · CC BY 4.0",url:"https://portaldatosabiertos.neuquen.gov.ar/dataset/9f0b080d-9ce2-4fe8-bb58-c6423d46e3de/resource/791d0735-46cc-4b38-af7c-7a4212c1a314/download/analisis-de-los-espacios-culturales-del-neuquen.-odafyc-primer-semestre-2025-.pdf",tags:"cultura neuquen espacios culturales informe datos públicos pdf 2024 2025"}},
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
      const visual = document.createElement("div");
      visual.className = resource.image ? "resource-cover has-cover" : "resource-cover resource-cover--generic";
      if (resource.image) {
        const cover = document.createElement("img");
        cover.className = "resource-cover-image";
        cover.src = resource.image;
        cover.alt = "Portada original de " + resource.title;
        cover.loading = "lazy";
        cover.decoding = "async";
        cover.referrerPolicy = "no-referrer";
        cover.addEventListener("error", () => {
          visual.classList.remove("has-cover");
          cover.remove();
          const fallback = document.createElement("span");
          fallback.className = "resource-cover-symbol";
          fallback.setAttribute("aria-hidden", "true");
          fallback.textContent = resource.icon;
          visual.append(fallback);
        }, { once: true });
        visual.append(cover);
      } else {
        const symbol = document.createElement("span");
        symbol.className = "resource-cover-symbol";
        symbol.setAttribute("aria-hidden", "true");
        symbol.textContent = resource.icon;
        const label = document.createElement("span");
        label.className = "resource-cover-label";
        label.textContent = resource.category;
        visual.append(symbol, label);
      }

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

      article.append(visual, top, title, author, description, format, source, link);
      grid.append(article);
    });
    noResults.hidden = visible.length !== 0;
    count.textContent = searchTerm || activeFilter !== "Todos"
      ? visible.length + (visible.length === 1 ? " recurso encontrado" : " recursos encontrados")
      : `${resources.length} recursos reales seleccionados. Cada botón abre el material o la fuente original.`;
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