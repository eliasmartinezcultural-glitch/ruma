(() => {
  "use strict";

  // RUMA reúne materiales existentes. No fabrica archivos ni resúmenes para completar el catálogo.
  // Los enlaces a PDF abren el archivo real; los enlaces de colección llevan a la fuente institucional.
  const resources = [
    {title:"El gaucho Martín Fierro",author:"José Hernández",description:"Poema gauchesco argentino. PDF completo, 77 páginas.",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/el_gaucho_martin_fierro-01.jpg",category:"Lecturas",icon:"📖",format:"PDF · 77 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/Martin_Fierro.pdf",tags:"libro literatura gauchesca poesia argentina clásico escuela"},
    {title:"Fausto",author:"Estanislao del Campo",description:"Poema gauchesco humorístico. PDF completo, 56 páginas.",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/fausto-01.jpg",category:"Lecturas",icon:"📚",format:"PDF · 56 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/FAUSTO-Estanislado_del_Campo.pdf",tags:"libro literatura poesia humor gaucho argentino clásico"},
    {title:"Las del Barranco",author:"Gregorio de Laferrère",description:"Obra teatral argentina. PDF completo, 96 páginas.",category:"Lecturas",icon:"🎭",format:"PDF · 96 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/LAS%20DE%20BARRANCO-GregoriodeLaferrere.pdf",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/LAS_DE_BARRANCO.jpg",tags:"teatro obra literatura argentina drama"},
    {title:"Viajes y descripciones",author:"Juan Bautista Alberdi",description:"Ensayo y relatos de viaje. PDF completo, 117 páginas.",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/Viajes_y_descripciones-01.jpg",category:"Lecturas",icon:"🧳",format:"PDF · 117 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/Alberdi-Viajes-y-descripciones.pdf",tags:"libro ensayo viajes historia argentina"},
    {title:"Allá lejos y hace tiempo",author:"William Henry Hudson",description:"Libro autobiográfico sobre la infancia del autor en Argentina. PDF completo, 185 páginas.",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/alla_lejos_hace_tiempo-01.jpg",category:"Lecturas",icon:"🌾",format:"PDF · 185 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/Hudson-Allalejosyhacetiempo.pdf",tags:"libro autobiografía naturaleza campo infancia memoria"},
    {title:"Las fuerzas extrañas",author:"Leopoldo Lugones",description:"Colección de relatos fantásticos. PDF completo, 110 páginas.",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/las_fuerzas.jpg",category:"Lecturas",icon:"🌙",format:"PDF · 110 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/LAS%20FUERZAS%20EXTRA%C3%91AS.pdf",tags:"libro cuentos fantasía literatura argentina ciencia ficción"},
    {title:"Poemas",author:"Alfonsina Storni",description:"Selección poética en PDF, 30 páginas.",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/Alfonsina_storni.jpg",category:"Lecturas",icon:"🌸",format:"PDF · 30 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/ALFONSINA.pdf",tags:"poesía poemas autora argentina literatura mujeres"},
    {title:"Poesía completa",author:"Almafuerte (Pedro Bonifacio Palacios)",description:"Selección de poesía. PDF completo, 38 páginas.",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/Almafuerte-01_0.jpg",category:"Lecturas",icon:"✒️",format:"PDF · 38 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/POESIA_COMPLETA_ALMAFUERTE.pdf",tags:"poesía poemas literatura argentina"},
    {title:"Don Segundo Sombra",author:"Ricardo Güiraldes",description:"Novela sobre la vida rural y el oficio de resero. PDF completo, 173 páginas.",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/Don_segundo_sombra-01_0.jpg",category:"Lecturas",icon:"🐎",format:"PDF · 173 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/DON%20SEGUNDO%20SOMBRA.pdf",tags:"novela campo gaucho vida rural literatura argentina"},
    {title:"Cuentos de la selva",author:"Horacio Quiroga",description:"Cuentos protagonizados por animales. PDF completo, 62 páginas.",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/Cuentos_de_la_selva-01_0.jpg",category:"Lecturas",icon:"🐾",format:"PDF · 62 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/CUENTOS%20_DE_LA_SELVA.pdf",tags:"cuentos infancia animales naturaleza literatura niños"},
    {title:"Los siete locos",author:"Roberto Arlt",description:"Novela argentina. PDF completo, 148 páginas.",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/Los_siete_locos-01_0.jpg",category:"Lecturas",icon:"📘",format:"PDF · 148 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/LOS%20SIETE%20LOCOS.pdf",tags:"novela literatura argentina sociedad"},
    {title:"Tobías o la cárcel a la vela",author:"Juan Bautista Alberdi",description:"Texto satírico publicado en Chile en 1851. PDF oficial de 37 páginas.",category:"Lecturas",icon:"🎭",format:"PDF · 37 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/TOBIAS%20O%20LA%20CARCEL%20O%20LA%20VELA.pdf",tags:"libro sátira teatro humor historia argentina alberdi"},
    {title:"En la sangre",author:"Eugenio Cambaceres",description:"Novela argentina publicada originalmente en 1887. PDF oficial de 113 páginas.",category:"Lecturas",icon:"📕",format:"PDF · 113 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/Cambaceres_ENLASANGRE.pdf",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/En_la_sangre_0.jpg",tags:"libro novela inmigración literatura argentina clásico"},
    {title:"Aniceto el gallo",author:"Hilario Ascasubi",description:"Poesía gauchesca vinculada a la historia política del siglo XIX. PDF oficial de 320 páginas.",category:"Lecturas",icon:"🐓",format:"PDF · 320 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/ANICETO%20EL%20GALLO.pdf",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/Ascasubi_Hilario_Aniceto_el_gallo_0.jpg",tags:"poesía gauchesca historia argentina libro clásico"},
    {title:"Juvenilia",author:"Miguel Cané",description:"Memorias de juventud en el antiguo Colegio Nacional de Buenos Aires. PDF oficial de 48 páginas.",category:"Lecturas",icon:"🎓",format:"PDF · 48 páginas",source:"Gobierno de la Provincia de Buenos Aires",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/JUVENILIA.pdf",image:"https://www.gba.gob.ar/sites/default/files/leer_hace_bien_2020/imagenes/libros/JUVENILIA.jpg",tags:"libro memorias escuela historia argentina estudiantes"},
    {title:"Colección Mapas Neuquinos",author:"COPADE · Gobierno del Neuquén",description:"Mapas provinciales y por microrregiones sobre municipios, rutas, salud, educación, cultura, conectividad y servicios.",category:"Mapas e historia",icon:"🧭",format:"Colección de mapas descargables",source:"COPADE · Gobierno del Neuquén",url:"https://www.copade.gob.ar/coleccion-mapas-neuquinos/",tags:"mapas neuquen municipios cultura salud educación rutas servicios territorio"},
    {title:"Sistema de Información Geográfica del Neuquén",author:"COPADE · Gobierno del Neuquén",description:"Visor oficial con información georreferenciada sobre regiones, infraestructura, servicios básicos y territorio.",category:"Mapas e historia",icon:"🌐",format:"Visor cartográfico interactivo",source:"COPADE · Gobierno del Neuquén",url:"https://www.copade.gob.ar/sig/",tags:"mapas geografía territorio neuquen datos cartografía servicios"},
    {title:"Mapa cultural de la Argentina",author:"Sistema de Información Cultural de la Argentina · SInCA",description:"Mapa nacional con información georreferenciada sobre espacios, agentes y actividades culturales y datos sociodemográficos.",category:"Mapas e historia",icon:"🧩",format:"Mapa cultural interactivo",source:"SInCA · Secretaría de Cultura de la Nación",url:"https://sinca.gob.ar/mapa.aspx",tags:"mapa cultura argentina espacios culturales agentes actividades territorio"},
    {title:"Servicios digitales de la Biblioteca Nacional",author:"Biblioteca Nacional Mariano Moreno",description:"Acceso a objetos digitales, libros, revistas, periódicos, fotografías, mapas, manuscritos, partituras, audios y videos de dominio público.",category:"Mapas e historia",icon:"📚",format:"Biblioteca y catálogo digital",source:"Biblioteca Nacional Mariano Moreno",url:"https://bn.gob.ar/biblioteca/servicios/online",tags:"biblioteca nacional digital libros fotos mapas manuscritos partituras historia argentina archivo"},
    {title:"Mapoteca oficial del Neuquén",author:"Dirección Provincial de Catastro e Información Territorial",description:"Acceso oficial para consultar cartografía política provincial y otros materiales territoriales.",category:"Mapas e historia",icon:"🗺️",format:"Consulta cartográfica",source:"Gobierno del Neuquén · Mapoteca Digital",url:"https://dpc.neuquen.gov.ar/Mapa",tags:"mapa neuquen politica geografia provincia escolar"},
    {title:"Plan estratégico de San Patricio del Chañar",author:"Municipalidad de San Patricio del Chañar",description:"Publicación oficial que aprueba el Plan Estratégico para el Desarrollo Sustentable de la localidad; la norma indica que el documento se incorpora como anexo.",category:"Mapas e historia",icon:"🌱",format:"Norma oficial y referencia al plan",source:"Boletín Oficial del Neuquén",url:"https://infoleg.neuquen.gov.ar/BoletinDetalle?Id=1542",tags:"chañar plan estratégico desarrollo sustentable municipio historia territorio urbanismo localidad ordenanza"},
    {title:"Recursos pedagógicos de Neuquén",author:"Dirección General de Innovación y Contenidos Digitales",description:"Catálogo institucional de textos, manuales y libros en PDF para descargar o imprimir.",category:"Para estudiar",icon:"✏️",format:"Catálogo de PDF",source:"Ministerio de Educación del Neuquén",url:"https://educaciondigital.neuquen.gov.ar/recursos-pedagogicos/",tags:"escuela estudiar docentes estudiantes manuales libros pdf historia ciencias lengua matemática"},
    {title:"Recursos educativos de Educ.ar",author:"Educ.ar · Secretaría de Educación",description:"Libros electrónicos, textos, videos, audios, actividades y materiales educativos.",category:"Para estudiar",icon:"🎒",format:"Catálogo de recursos",source:"Educ.ar · Gobierno nacional",url:"https://www.educ.ar/recursos",tags:"educación escuela docentes estudiantes libros videos audio actividades ciencias historia"},
    {title:"Clásicos universales para descargar",author:"Secretaría de Educación de la Nación",description:"Más de 100 clásicos en español e inglés para leer por placer o usar en el aula.",category:"Para estudiar",icon:"📚",format:"Catálogo de libros descargables",source:"Argentina.gob.ar",url:"https://www.argentina.gob.ar/educacion/materiales-didacticos/clasicos-universales",tags:"libros clásicos universales lectura aula novelas cuentos teatro poesía"},
    {title:"Biblioteca digital Libros y Casas",author:"Secretaría de Cultura de la Nación",description:"Más de 150 títulos argentinos: ficción, historietas, libros ilustrados, historia y manuales.",category:"Lecturas",icon:"🏡",format:"Biblioteca digital gratuita",source:"Secretaría de Cultura de la Nación",url:"https://librosycasas.cultura.gob.ar/libros/",tags:"libros argentinos cuentos historietas infancia cultura manuales hogar"},
    {title:"Biblioteca digital del Archivo General de la Nación",author:"Archivo General de la Nación",description:"Libros y folletos digitalizados sobre historia argentina, Malvinas, trabajadores e independencia.",category:"Mapas e historia",icon:"🏛️",format:"Biblioteca digital",source:"Argentina.gob.ar",url:"https://www.argentina.gob.ar/interior/archivo-general-de-la-nacion/biblioteca-digital",tags:"historia argentina archivos documentos libros folletos memoria"},
    {title:"Informe de espacios culturales del Neuquén (relevamiento 2024–2025)",author:"Unidad de Planificación y Evaluación de Políticas Sociales · ODAFyC",description:"Informe provincial que analiza los espacios culturales relevados entre 2024 y marzo de 2025. PDF completo de 51 páginas.",category:"Mapas e historia",icon:"🎨",format:"PDF · 51 páginas",source:"Portal de Datos Abiertos del Neuquén · CC BY 4.0",url:"https://portaldatosabiertos.neuquen.gov.ar/dataset/9f0b080d-9ce2-4fe8-bb58-c6423d46e3de/resource/791d0735-46cc-4b38-af7c-7a4212c1a314/download/analisis-de-los-espacios-culturales-del-neuquen.-odafyc-primer-semestre-2025-.pdf",tags:"cultura neuquen espacios culturales informe datos públicos pdf 2024 2025"},
    {title:"Biblioteca Nacional de Maestros",author:"Biblioteca Nacional de Maestros · Gobierno nacional",description:"Catálogo público y gratuito de libros, documentos, publicaciones periódicas, material multimedia, legislación educativa y colecciones especiales.",category:"Para estudiar",icon:"🏫",format:"Catálogo digital gratuito",source:"Argentina.gob.ar · Biblioteca Nacional de Maestros",url:"https://www.argentina.gob.ar/acceso-en-linea-al-catalogo-y-biblioteca-digital",tags:"biblioteca maestros escuela educación libros documentos legislación imágenes estudiantes docentes catálogo"},
    {title:"Boletín Oficial del Neuquén",author:"Gobierno de la Provincia del Neuquén",description:"Buscador de publicaciones oficiales: normas, decretos y ordenanzas. Útil para investigar documentos públicos de la provincia y sus municipios.",category:"Mapas e historia",icon:"📜",format:"Buscador de documentos oficiales",source:"Gobierno del Neuquén · Boletín Oficial",url:"https://boficial.neuquen.gov.ar/",tags:"neuquen boletín oficial ordenanzas decretos documentos públicos historia chañar municipio legislación"},
    {title:"Espacios culturales del Neuquén (datos abiertos)",author:"Observatorio de Deportes, Actividad Física y Cultura",description:"Conjunto de datos provincial sobre espacios culturales. La ficha ofrece informe PDF y base CSV.",category:"Mapas e historia",icon:"📊",format:"Datos abiertos · PDF y CSV",source:"Portal de Datos Abiertos del Neuquén · CC BY 4.0",url:"https://portaldatosabiertos.neuquen.gov.ar/dataset/espacios-culturales-del-neuquen",tags:"datos cultura espacios culturales neuquen csv investigación estadística"},
    {title:"Trámites municipales de San Patricio del Chañar",author:"Municipalidad de San Patricio del Chañar",description:"Acceso oficial a trámites como carnet de conducir, carnet de manipulación de alimentos, infracciones y libre deuda. Revisá los requisitos vigentes en el sitio municipal.",category:"Recursos útiles",icon:"🧾",format:"Portal oficial de trámites",source:"Municipalidad de San Patricio del Chañar",url:"https://sanpatricio.gob.ar/tramites",tags:"chañar vecinos trámites municipio libre deuda carnet alimentos conducir servicios"},
    {title:"Contactos de la Municipalidad",author:"Municipalidad de San Patricio del Chañar",description:"Datos generales para comunicarte con el municipio y encontrar sus áreas de atención. Confirmá teléfonos y horarios en la página original.",category:"Recursos útiles",icon:"☎️",format:"Directorio institucional",source:"Municipalidad de San Patricio del Chañar",url:"https://sanpatricio.gob.ar/",tags:"chañar vecinos teléfono contacto municipalidad horarios servicios ayuda"},
    {title:"Desarrollo económico local",author:"Municipalidad de San Patricio del Chañar",description:"Página de la Secretaría de Desarrollo Económico, con contacto institucional para consultas vinculadas al desarrollo productivo local.",category:"Recursos útiles",icon:"🌱",format:"Contacto institucional",source:"Municipalidad de San Patricio del Chañar",url:"https://sanpatricio.gob.ar/desarrollo-economico",tags:"chañar emprendedores productores trabajo desarrollo económico comercios producción"},
    {title:"Conocé San Patricio del Chañar",author:"Municipalidad de San Patricio del Chañar",description:"Información local sobre espacios, identidad, naturaleza y lugares de interés de nuestra comunidad.",category:"Recursos útiles",icon:"🏡",format:"Guía web local",source:"Municipalidad de San Patricio del Chañar",url:"https://sanpatricio.gob.ar/nuestra",tags:"chañar vecinos familia turismo plaza balneario chacra municipal centro cultural lugares"},
    {title:"Qué hacer en San Patricio del Chañar",author:"Municipalidad de San Patricio del Chañar",description:"Información municipal sobre atractivos, naturaleza, producción regional, actividades y espacios para conocer.",category:"Recursos útiles",icon:"🌿",format:"Guía web local",source:"Municipalidad de San Patricio del Chañar",url:"https://sanpatricio.gob.ar/quehacer",tags:"chañar turismo familia naturaleza rio neuquen actividades bodegas producción"},
    {title:"Dibujos libres para imprimir y decorar",author:"Openclipart y sus artistas",description:"Colección de ilustraciones vectoriales que Openclipart publica bajo CC0/dominio público. Sirven para tarjetas, carteles, tareas, etiquetas y manualidades. Revisá la ficha del dibujo antes de usarlo.",category:"Para decorar",icon:"🎨",format:"Ilustraciones SVG descargables",source:"Openclipart · CC0 / dominio público según su política",url:"https://openclipart.org/",tags:"decorar imprimir dibujos clipart tarjetas etiquetas carteles manualidades escuela vectores libres"},
    {title:"Láminas e imágenes de Wikimedia Commons",author:"Autores y comunidades colaboradoras",description:"Colección internacional de imágenes, ilustraciones y archivos libres. Cada archivo tiene su propia ficha con autoría y licencia: comprobá las condiciones antes de reutilizarlo.",category:"Para decorar",icon:"🖼️",format:"Imágenes y archivos descargables",source:"Wikimedia Commons · licencia indicada en cada archivo",url:"https://commons.wikimedia.org/wiki/Category:Illustrations",tags:"decoración láminas ilustraciones imprimir imágenes libres historia plantas animales arte"},
    {title:"Guía para emprendedores",author:"Gobierno de la República Argentina",description:"Guía descargable con ideas y herramientas para acompañar emprendimientos y proyectos locales. Es un documento extenso: podés consultarlo en línea o guardar el PDF desde la fuente.",category:"Recursos útiles",icon:"🧰",format:"PDF · guía práctica",source:"Argentina.gob.ar",url:"https://www.argentina.gob.ar/sites/default/files/guia-emprendedores-web-baja-1_0.pdf",tags:"emprendedor emprendimiento negocio pequeño comercio organizar proyecto herramientas guía pdf"},
    {title:"Aprender a gestionar un emprendimiento",author:"Secretaría de la Pequeña y Mediana Empresa",description:"Materiales de formación sobre gestión, obligaciones, comercialización y organización de un emprendimiento. Algunas actividades pueden pedir registro en la plataforma original.",category:"Recursos útiles",icon:"🧮",format:"Cursos y materiales digitales",source:"Argentina.gob.ar · Capacitar",url:"https://www.argentina.gob.ar/produccion/capacitar/tematicas/gestion",tags:"emprendedor monotributo gestión negocio ventas organización formación capacitación"},
    {title:"Ideas para desarrollar habilidades emprendedoras",author:"Secretaría de la Pequeña y Mediana Empresa",description:"Recursos de formación sobre creatividad, comunicación, innovación y herramientas para emprender. Consultá las condiciones de acceso de cada actividad.",category:"Recursos útiles",icon:"💡",format:"Colección de capacitaciones",source:"Argentina.gob.ar · Capacitar",url:"https://www.argentina.gob.ar/produccion/capacitar/tematicas/habilidades-para-emprender",tags:"emprendedor creatividad comunicación innovación formación trabajo proyecto ventas"},
    {title:"Mapas escolares e históricos del Neuquén",author:"Dirección Provincial de Catastro e Información Territorial",description:"Mapas escolares, históricos, turísticos, físicos y de localidades. El portal indica que los mapas pueden descargarse e imprimirse para uso personal; no se deben revender ni redistribuir sin autorización.",category:"Para estudiar",icon:"🗺️",format:"Mapas digitales para consulta e impresión personal",source:"Gobierno del Neuquén · Mapoteca Digital",url:"https://dpc.neuquen.gob.ar/Mapa",tags:"escuela estudiantes mapas escolares neuquen imprimir historia geografía rutas clima"},
    {title:"Recursos de lectura para chicos y familias",author:"Biblioteca digital Libros y Casas",description:"Libros argentinos, cuentos, historietas y materiales ilustrados para compartir en familia. Accedé a cada título desde la biblioteca oficial.",category:"Lecturas",icon:"🐾",format:"Biblioteca digital",source:"Secretaría de Cultura de la Nación",url:"https://librosycasas.cultura.gob.ar/libros/",tags:"lecturas cuentos niños familia historietas libros ilustrados lectura infantil"},
    {title:"Colección de mapas para conocer el territorio",author:"COPADE · Gobierno del Neuquén",description:"Colección de mapas provinciales y microrregionales sobre rutas, municipios, educación, salud, cultura y servicios.",category:"Mapas e historia",icon:"🧭",format:"Colección cartográfica",source:"COPADE · Gobierno del Neuquén",url:"https://www.copade.gob.ar/coleccion-mapas-neuquinos/",tags:"neuquen mapa territorio localidad rutas salud educación cultura servicios"},
    {title:"Historia y documentos de la Argentina",author:"Archivo General de la Nación",description:"Libros, folletos y documentos digitalizados para conocer la historia argentina y consultar fuentes documentales.",category:"Mapas e historia",icon:"📜",format:"Biblioteca y archivo digital",source:"Archivo General de la Nación",url:"https://www.argentina.gob.ar/interior/archivo-general-de-la-nacion/biblioteca-digital",tags:"historia argentina documentos archivo memoria investigación escuela"}
  ];

  const grid = document.getElementById("resource-grid");
  const form = document.getElementById("search-form");
  const input = document.getElementById("search");
  const count = document.getElementById("result-count");
  const noResults = document.getElementById("no-results");
  const filters = [...document.querySelectorAll(".filter")];
  const dialog = document.getElementById("resource-dialog");
  const dialogBody = document.getElementById("dialog-body");
  const dialogTitle = document.getElementById("dialog-title");
  const obtainResource = document.getElementById("obtain-resource");
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
      visual.style.backgroundColor = ({
        "Lecturas":"#f0dfd0","Mapas e historia":"#e1e8d9","Para estudiar":"#f0e5b8","Recursos útiles":"#e2ecea","Para decorar":"#ece7f1"
      })[resource.category] || "#eee7d8";
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
          fallback.textContent = resource.icon;
          fallback.setAttribute("aria-hidden", "true");
          visual.append(fallback);
        }, { once: true });
        visual.append(cover);
      } else {
        const symbol = document.createElement("span");
        symbol.className = "resource-cover-symbol";
        symbol.textContent = resource.icon;
        symbol.setAttribute("aria-hidden", "true");
        const label = document.createElement("span");
        label.className = "resource-cover-label";
        label.textContent = resource.category;
        visual.append(symbol, label);
      }

      const body = document.createElement("div");
      body.className = "resource-card-content";
      const top = document.createElement("div");
      top.className = "card-top";
      const category = document.createElement("span");
      category.className = "category-label";
      category.textContent = resource.category;
      const icon = document.createElement("span");
      icon.textContent = resource.icon;
      icon.setAttribute("aria-hidden", "true");
      top.append(category, icon);

      const title = document.createElement("h3");
      title.textContent = resource.title;
      const author = document.createElement("p");
      author.className = "resource-author";
      author.textContent = resource.author;
      const description = document.createElement("p");
      description.className = "resource-description";
      description.textContent = resource.description;

      const meta = document.createElement("div");
      meta.className = "resource-meta";
      const format = document.createElement("span");
      format.textContent = resource.format;
      const source = document.createElement("span");
      source.textContent = resource.source;
      meta.append(format, source);

      const actions = document.createElement("div");
      actions.className = "resource-card-actions";
      const preview = document.createElement("button");
      preview.type = "button";
      preview.className = "preview-button";
      preview.textContent = "Vista previa";
      preview.setAttribute("aria-label", "Ver vista previa de " + resource.title);
      preview.addEventListener("click", () => showPreview(resource));
      const obtain = document.createElement("a");
      obtain.className = "obtain-button";
      obtain.href = resource.url;
      obtain.target = "_blank";
      obtain.rel = "noopener noreferrer";
      obtain.textContent = "Obtener ↗";
      obtain.setAttribute("aria-label", "Obtener " + resource.title + " desde su fuente original");
      actions.append(preview, obtain);

      body.append(top, title, author, description, meta, actions);
      article.append(visual, body);
      grid.append(article);
    });
    noResults.hidden = visible.length !== 0;
    count.textContent = searchTerm || activeFilter !== "Todos"
      ? visible.length + (visible.length === 1 ? " recurso encontrado" : " recursos encontrados")
      : resources.length + " recursos seleccionados con cuidado. Mirá la vista previa antes de obtenerlos.";
  }

  function showPreview(resource) {
    dialogTitle.textContent = resource.title;
    dialogBody.replaceChildren();

    const layout = document.createElement("div");
    layout.className = "preview-layout";
    const art = document.createElement("div");
    art.className = "preview-art";
    if (resource.image) {
      const image = document.createElement("img");
      image.src = resource.image;
      image.alt = "Portada original de " + resource.title;
      image.referrerPolicy = "no-referrer";
      image.addEventListener("error", () => {
        art.replaceChildren();
        const fallback = document.createElement("span");
        fallback.className = "resource-cover-symbol";
        fallback.textContent = resource.icon;
        art.append(fallback);
      }, { once: true });
      art.append(image);
    } else {
      const symbol = document.createElement("span");
      symbol.className = "resource-cover-symbol";
      symbol.textContent = resource.icon;
      symbol.setAttribute("aria-hidden", "true");
      art.append(symbol);
    }

    const info = document.createElement("div");
    info.className = "preview-info";
    const title = document.createElement("h3");
    title.textContent = resource.title;
    const author = document.createElement("p");
    author.className = "preview-author";
    author.textContent = resource.author;
    const description = document.createElement("p");
    description.className = "preview-description";
    description.textContent = resource.description;

    const details = document.createElement("dl");
    details.className = "preview-details";
    [[ "Categoría", resource.category ], [ "Formato", resource.format ], [ "Fuente original", resource.source ]].forEach(([labelText, valueText]) => {
      const wrapper = document.createElement("div");
      const dt = document.createElement("dt");
      dt.textContent = labelText;
      const dd = document.createElement("dd");
      dd.textContent = valueText;
      wrapper.append(dt, dd);
      details.append(wrapper);
    });
    info.append(title, author, description, details);
    layout.append(art, info);
    dialogBody.append(layout);

    if (/^PDF\b/i.test(resource.format)) {
      const frame = document.createElement("iframe");
      frame.className = "pdf-preview";
      frame.src = resource.url;
      frame.title = "Vista previa del PDF: " + resource.title;
      frame.loading = "lazy";
      frame.referrerPolicy = "no-referrer";
      frame.setAttribute("allow", "fullscreen");
      const hint = document.createElement("p");
      hint.className = "preview-hint";
      hint.textContent = "La vista del documento depende de que el sitio original permita mostrarlo aquí. Si no aparece, usá «Obtener recurso» para abrir el PDF original.";
      dialogBody.append(frame, hint);
    } else {
      const hint = document.createElement("p");
      hint.className = "preview-hint";
      hint.textContent = "Esta ficha te muestra qué vas a encontrar y quién lo publica. «Obtener recurso» abre la colección o el documento oficial.";
      dialogBody.append(hint);
    }

    obtainResource.href = resource.url;
    obtainResource.setAttribute("aria-label", "Obtener " + resource.title + " desde " + resource.source);
    if (!dialog.open) dialog.showModal();
  }
  function resetFilters() {
    activeFilter = "Todos";
    filters.forEach(item => {
      const active = item.dataset.filter === "Todos";
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
  }
  function applyFilter(button) {
    activeFilter = button.dataset.filter;
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    render();
  }
  filters.forEach(button => button.addEventListener("click", () => applyFilter(button)));
  document.querySelectorAll(".door-card[data-filter]").forEach(button => button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filters.forEach(item => {
      const active = item.dataset.filter === activeFilter;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    render();
    document.getElementById("estantes").scrollIntoView({ behavior: "smooth", block: "start" });
  }));
  document.getElementById("close-resource").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && dialog.open) dialog.close(); });
  document.getElementById("empty-reset").addEventListener("click", () => {
    input.value = "";
    searchTerm = "";
    resetFilters();
    render();
  });
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