(() => {
  "use strict";

  // Catálogo curado: prioriza archivos completos de fuentes públicas.
  // Los PDF externos se abren en su archivo original; no se presentan como alojados en RUMA.
  const resources = [
    {title:"El gaucho Martín Fierro",author:"José Hernández · edición digital: Provincia de Buenos Aires",description:"Poema fundamental de la literatura argentina. PDF completo, 77 páginas, ofrecido por el catálogo provincial de obras de dominio público.",category:"Lecturas",icon:"📖",format:"PDF · 77 páginas",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/Martin_Fierro.pdf",external:true,externalLabel:"Abrir PDF ↗",tags:"martin fierro gauchesca literatura argentina poema gaucho"},
    {title:"Fausto",author:"Estanislao del Campo · edición digital: Provincia de Buenos Aires",description:"Poema gauchesco humorístico que juega con el encuentro entre dos paisanos y la ópera. PDF completo, 56 páginas.",category:"Lecturas",icon:"📚",format:"PDF · 56 páginas",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/FAUSTO-Estanislado_del_Campo.pdf",external:true,externalLabel:"Abrir PDF ↗",tags:"fausto poesia gauchesca literatura argentina humor"},
    {title:"Cuentos de la selva",author:"Horacio Quiroga · edición digital: Provincia de Buenos Aires",description:"Cuentos protagonizados por animales y ambientados en la selva misionera. Un clásico para compartir entre generaciones. PDF completo, 62 páginas.",category:"Lecturas",icon:"🐢",format:"PDF · 62 páginas",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/CUENTOS%20_DE_LA_SELVA.pdf",external:true,externalLabel:"Abrir PDF ↗",tags:"cuentos selva quiroga literatura infantil animales"},
    {title:"Don Segundo Sombra",author:"Ricardo Güiraldes · edición digital: Provincia de Buenos Aires",description:"Novela sobre la vida rural y el aprendizaje de un joven junto a un resero. PDF completo, 173 páginas.",category:"Lecturas",icon:"🐎",format:"PDF · 173 páginas",url:"https://www.gba.gob.ar/sites/default/files/cultura/archivos/DON%20SEGUNDO%20SOMBRA.pdf",external:true,externalLabel:"Abrir PDF ↗",tags:"don segundo sombra gauchesca campo novela argentina"},
    {title:"Abecedario de fauna nativa",author:"Administración de Parques Nacionales · SIB",description:"Lámina de una página para descubrir animales nativos a través de las letras. Un recurso breve para mirar, conversar e imprimir.",category:"Para estudiar",icon:"🦊",format:"PDF · 1 página",url:"https://www.sib.gob.ar/portal/wp-content/uploads/2019/05/Abecedario-ANIMALITOS-2011.pdf",external:true,externalLabel:"Abrir PDF ↗",tags:"fauna nativa abecedario animales lámina imprimir"},
    {title:"Prevención de incendios · guía docente",author:"Servicio Nacional de Manejo del Fuego y organismos patagónicos",description:"Cuadernillo de 32 páginas para docentes de primaria: ambiente, ecorregiones, causas del fuego, prevención y cómo ayudar. Incluye referencias a Neuquén y la Patagonia.",category:"Para estudiar",icon:"🌲",format:"PDF · 32 páginas",url:"https://www.argentina.gob.ar/sites/default/files/2018/03/cartilla_para_docentes_de_escuelas_primarias_2023_-_prevencion_de_incendios_forestales_0_2.pdf",external:true,externalLabel:"Abrir PDF ↗",tags:"incendios prevención patagonia escuela docentes ambiente"},
    {title:"Prevención de incendios · cuadernillo para estudiantes",author:"Servicio Nacional de Manejo del Fuego y organismos patagónicos",description:"Material educativo de 30 páginas para aprender sobre el fuego, el ambiente patagónico y las acciones de prevención.",category:"Para estudiar",icon:"🔥",format:"PDF · 30 páginas",url:"https://www.argentina.gob.ar/sites/default/files/2018/03/cuadernillo_alumnos_prevencion_patagonia.pdf",external:true,externalLabel:"Abrir PDF ↗",tags:"incendios prevención estudiantes patagonia cuadernillo escuela"},
    {title:"El bosque de pewen",author:"Proyecto Pewen · Parque Nacional Lanín",description:"Boletín informativo sobre el bosque de pewen, especie emblemática de la cordillera neuquina. Recurso para acercarse a la naturaleza regional.",category:"Mapas e historia",icon:"🌳",format:"PDF oficial",url:"https://argentina.gob.ar/sites/default/files/el_bosque_de_pewen_-_boletin_informativo_ndeg1.pdf",external:true,externalLabel:"Abrir PDF ↗",tags:"pewen araucaria lanin neuquen bosque naturaleza"},
    {title:"Actividades del vivero forestal escolar · Ruca Choroy",author:"Parque Nacional Lanín",description:"Cuadernillo de actividades vinculado al vivero forestal escolar de Ruca Choroy, en Neuquén. Una entrada regional para aprender haciendo.",category:"Para estudiar",icon:"🌱",format:"PDF oficial",url:"https://argentina.gob.ar/sites/default/files/pn_lanin_cuadernillo_ruca_choroy_.pdf",external:true,externalLabel:"Abrir PDF ↗",tags:"ruca choroy vivero forestal escuela lanin neuquen plantas"},
    {title:"Mapas escolares de Neuquén y Río Negro",author:"Instituto Geográfico Nacional (IGN)",description:"Colección oficial de mapas mudos, físicos y políticos para imprimir en A4. Incluye las dos provincias vecinas y mapas de Argentina. Licencia CC BY-SA 4.0; respetá la atribución.",category:"Mapas e historia",icon:"🗺️",format:"Mapas para imprimir · licencia CC BY-SA 4.0",url:"https://www.ign.gob.ar/areaservicios/descargas/mapasescolares",external:true,externalLabel:"Elegir y descargar mapas ↗",tags:"mapa neuquen rio negro argentina provincias geografia escuela imprimir"},
    {title:"Mapoteca de Argentina",author:"Educ.ar · Portal educativo",description:"Colección para explorar mapas de Argentina y trabajar geografía en la escuela. La ficha informa la licencia CC BY-NC-SA; consultá sus condiciones antes de redistribuir.",category:"Mapas e historia",icon:"🌎",format:"Colección educativa",url:"https://www.educ.ar/recursos/106269/mapoteca-mapas-gratis-de-la-argentina",external:true,externalLabel:"Explorar mapas ↗",tags:"mapoteca mapas argentina geografia historia educar"},
    {title:"Libros digitales de dominio público",author:"Lecturas · Provincia de Buenos Aires",description:"Catálogo con obras argentinas de dominio público, con fichas individuales y enlaces PDF. Incluye Martín Fierro, Fausto, Cuentos de la selva y más.",category:"Lecturas",icon:"📚",format:"Biblioteca pública",url:"https://www.gba.gob.ar/lecturas/libros_digitales",external:true,externalLabel:"Elegir un libro ↗",tags:"libros digitales dominio publico literatura argentina pdf"},
    {title:"Libros y Casas",author:"Secretaría de Cultura de la Nación",description:"Biblioteca digital con más de 150 títulos argentinos: ficción, libros ilustrados, historietas, manuales, historia y guías prácticas para la vida cotidiana.",category:"Lecturas",icon:"🏡",format:"Biblioteca digital gratuita",url:"https://librosycasas.cultura.gob.ar/libros/",external:true,externalLabel:"Explorar biblioteca ↗",tags:"libros cuentos historietas manuales derechos hogar cultura argentina"},
    {title:"Lecturas digitales para las infancias y jóvenes",author:"Biblioteca Argentina · recopilación de fuentes",description:"Guía para encontrar libros infantiles y juveniles gratuitos en editoriales, bibliotecas y portales educativos. Cada descarga se realiza en la fuente que la ofrece.",category:"Lecturas",icon:"🧸",format:"Guía de bibliotecas",url:"https://biblioargentina.gob.ar/web/lecturas-digitales/",external:true,externalLabel:"Encontrar lecturas ↗",tags:"lectura infantil juvenil libros gratuitos editoriales"},
    {title:"Biblioteca Nacional · objetos digitales",author:"Biblioteca Nacional Mariano Moreno",description:"Buscador de libros, revistas, fotografías, mapas, manuscritos, partituras y otros materiales digitalizados. Revisá la ficha de cada pieza para conocer su acceso y condiciones.",category:"Mapas e historia",icon:"🏛️",format:"Colección patrimonial",url:"https://museo.bn.gov.ar/biblioteca/servicios/online",external:true,externalLabel:"Buscar materiales ↗",tags:"biblioteca nacional mapas historia fotos manuscritos patrimonio"},
    {title:"Clásicos universales gratuitos",author:"Secretaría de Educación · Argentina.gob.ar",description:"Colección pública de más de cien obras, con novelas, cuentos, teatro, poesía, ensayos y autores argentinos. La página permite elegir títulos y consultar sus PDF.",category:"Lecturas",icon:"📘",format:"Colección oficial · PDF",url:"https://www.argentina.gob.ar/educacion/materiales-didacticos/clasicos-universales",external:true,externalLabel:"Elegir una lectura ↗",tags:"clasicos novelas cuentos teatro poesia libros pdf"},
    {title:"Genio Maligno · biblioteca de dominio público",author:"Genio Maligno",description:"Biblioteca digital con obras libres y legales para Argentina, en EPUB y PDF o lectura en línea, sin registro. Revisá los datos y la licencia indicados en cada obra.",category:"Lecturas",icon:"📖",format:"Biblioteca · EPUB y PDF",url:"https://geniomaligno.com.ar/",external:true,externalLabel:"Explorar libros ↗",tags:"dominio publico libros epub pdf clásicos literatura"},
    {title:"StoryWeaver · cuentos ilustrados",author:"Pratham Books · StoryWeaver",description:"Biblioteca de cuentos ilustrados para distintas edades e idiomas. Comprobá la licencia de cada historia y las condiciones de descarga o reutilización.",category:"Lecturas",icon:"🌈",format:"Biblioteca de cuentos",url:"https://storyweaver.org.in/",external:true,externalLabel:"Explorar cuentos ↗",tags:"cuentos ilustrados infantil idiomas lectura licencia abierta"},

    {title:"Póster del Año de la Biodiversidad",author:"Administración de Parques Nacionales · SIB",description:"Lámina de una página sobre biodiversidad para mirar, conversar o colocar en un aula. Se abre en el PDF de la fuente original.",category:"Para decorar",icon:"🌎",format:"PDF · 1 página",url:"https://www.sib.gob.ar/portal/wp-content/uploads/2019/05/Poster-institucional-a%C3%B1o-de-la-biodiversidad-2010.pdf",external:true,externalLabel:"Abrir lámina ↗",tags:"poster biodiversidad naturaleza lamina imprimir decorar"},
    {title:"Afiche: Texturas para descifrar",author:"Administración de Parques Nacionales · SIB",description:"Afiche imprimible de una página que invita a observar y descubrir texturas de la naturaleza.",category:"Para decorar",icon:"🍃",format:"PDF · 1 página",url:"https://www.sib.gob.ar/portal/wp-content/uploads/2019/07/Afiche-texturas-para-descifrar.pdf",external:true,externalLabel:"Abrir afiche ↗",tags:"afiche texturas naturaleza observar imprimir decorar"},
    {title:"Mapa de los Parques Nacionales de Argentina",author:"Administración de Parques Nacionales",description:"Mapa general de las áreas protegidas nacionales, disponible en PDF. La fuente también permite explorar regiones y planear visitas.",category:"Mapas e historia",icon:"🏞️",format:"PDF oficial",url:"https://argentina.gob.ar/sites/default/files/mapa_apn_2024_0.pdf",external:true,externalLabel:"Abrir mapa PDF ↗",tags:"mapa parques nacionales argentina patagonia turismo naturaleza"},
    {title:"Cómo reconocer y prevenir ciberestafas",author:"Escuela Argentina de Educación en Consumo",description:"Material de 21 páginas sobre engaños digitales, mensajes falsos, phishing, contraseñas y vías para reclamar. Útil para familias, estudiantes y personas mayores.",category:"Recursos útiles",icon:"🔐",format:"PDF · 21 páginas",url:"https://www.argentina.gob.ar/sites/default/files/descargable_ciberestafas.pdf",external:true,externalLabel:"Abrir guía PDF ↗",tags:"ciberestafas seguridad digital whatsapp contraseñas fraudes mayores"},
    {title:"Comprar mejor y desperdiciar menos alimentos",author:"Escuela Argentina de Educación en Consumo",description:"Guía práctica para planificar compras, conservar alimentos y reducir desperdicios en el hogar. El sitio oficial ofrece el material completo.",category:"Recursos útiles",icon:"🥕",format:"Guía oficial descargable",url:"https://www.argentina.gob.ar/economia/industria-y-comercio/defensadelconsumidor/escuela-argentina-de-educacion-en-consumo-13",external:true,externalLabel:"Ver y descargar ↗",tags:"alimentos compras cocina hogar ahorro desperdicio guía"}

    {title:"Recursos pedagógicos de Neuquén",author:"Dirección General de Innovación y Contenidos Digitales · Neuquén",description:"Portal provincial con textos, manuales y libros en PDF, ordenados por disciplinas y colecciones. Incluye propuestas para aprender y enseñar.",category:"Para estudiar",icon:"📚",format:"Portal provincial · PDF",url:"https://educaciondigital.neuquen.gov.ar/recursos-pedagogicos/",external:true,externalLabel:"Explorar materiales ↗",tags:"neuquen escuela libros manuales textos pdf docentes estudiantes"},
    {title:"Materiales educativos de Neuquén",author:"Consejo Provincial de Educación",description:"Reúne cuadernillos, materiales escolares, mapas y guías de diferentes áreas. Es una puerta de entrada a recursos producidos o seleccionados en la provincia.",category:"Para estudiar",icon:"🏫",format:"Portal provincial",url:"https://www.neuquen.edu.ar/materiales/",external:true,externalLabel:"Buscar materiales ↗",tags:"neuquen cuadernillos escuela energia residuos mapas educacion"},
    {title:"Recursos educativos de Educ.ar",author:"Secretaría de Educación de la Nación",description:"Buscador nacional de libros electrónicos, textos, audios, videos, actividades y materiales para inicial, primaria y secundaria.",category:"Para estudiar",icon:"🧠",format:"Biblioteca educativa",url:"https://www.educ.ar/recursos",external:true,externalLabel:"Buscar por tema ↗",tags:"educar recursos aula primaria secundaria ciencia historia audios libros"},
    {title:"Recursos educativos comunitarios",author:"Secretaría de Educación de la Nación",description:"Colecciones para alfabetización, ciencias, lectura, ambiente, artes y actividades culturales en espacios comunitarios.",category:"Para estudiar",icon:"🤝",format:"Colecciones educativas",url:"https://www.argentina.gob.ar/educacion/programas-educativos/recursos-educativos-0",external:true,externalLabel:"Explorar colecciones ↗",tags:"comunidad alfabetizacion ciencias ambiente artes lectura cuadernillos"},
    {title:"Recursos digitales por materia",author:"Gobierno de la Ciudad de Buenos Aires",description:"Selección de materiales de lengua, matemática, biología, geografía, historia, tecnología, física, química, arte y otras áreas.",category:"Para estudiar",icon:"📝",format:"Biblioteca por asignatura",url:"https://buenosaires.gob.ar/gcaba_historico/educacion/nivel-secundario/recursos-digitales",external:true,externalLabel:"Elegir una materia ↗",tags:"materias secundaria lengua matematica biologia historia geografia ciencias"},
    {title:"Mapas escolares del IGN · creador de mapas",author:"Instituto Geográfico Nacional",description:"Además de mapas listos para imprimir, permite seleccionar capas, dibujar, anotar y exportar un mapa en PDF o imagen.",category:"Mapas e historia",icon:"🧭",format:"Herramienta gratuita · PDF/PNG/JPG",url:"https://mapasescolares.ign.gob.ar/",external:true,externalLabel:"Crear mi mapa ↗",tags:"mapas imprimir pdf png jpg argentina neuquen rio negro geografia"},
    {title:"Mapas de Argentina · APPangea",author:"APPangea",description:"Mapas descargables de provincias, regiones, capitales, ríos, lagos, relieve y costas. Revisá la licencia indicada por el proyecto antes de reutilizarlos.",category:"Mapas e historia",icon:"🗺️",format:"Mapas descargables",url:"https://appangea.com/banco-de-recursos/banco-de-recursos-argentina/",external:true,externalLabel:"Elegir un mapa ↗",tags:"mapa argentina provincias regiones rios lagos relieve costas"},
    {title:"Catálogo de la Biblioteca Nacional de Maestros",author:"Biblioteca Nacional de Maestros",description:"Permite buscar libros, documentos, publicaciones periódicas, materiales multimedia, legislación educativa y colecciones especiales.",category:"Lecturas",icon:"🏛️",format:"Catálogo público",url:"https://www.argentina.gob.ar/acceso-en-linea-al-catalogo-y-biblioteca-digital",external:true,externalLabel:"Buscar en el catálogo ↗",tags:"biblioteca maestros libros documentos revistas educacion investigacion"},
    {title:"Biblioteca Virtual Universal",author:"Bibliotecas Rurales Argentinas",description:"Biblioteca digital de literatura y documentos de consulta. Revisá la ficha de cada obra para confirmar el formato disponible y sus condiciones.",category:"Lecturas",icon:"📚",format:"Biblioteca digital",url:"https://www.biblioteca.org.ar/",external:true,externalLabel:"Explorar la biblioteca ↗",tags:"biblioteca libros literatura argentina cuentos poemas novelas"},
    {title:"Wikisource en español",author:"Fundación Wikimedia y comunidad editora",description:"Biblioteca de textos fuente: obras literarias, documentos históricos y traducciones. Cada obra conserva información sobre su fuente y situación de derechos.",category:"Lecturas",icon:"📜",format:"Textos digitales",url:"https://es.wikisource.org/",external:true,externalLabel:"Buscar una obra ↗",tags:"wikisource textos dominio publico historia literatura documentos"},
    {title:"Proyecto Gutenberg · libros en español",author:"Project Gutenberg",description:"Biblioteca de libros electrónicos gratuitos, especialmente clásicos. Verificá las condiciones aplicables en tu país y las notas de cada título.",category:"Lecturas",icon:"📘",format:"Libros electrónicos",url:"https://www.gutenberg.org/browse/languages/es",external:true,externalLabel:"Elegir un libro ↗",tags:"gutenberg epub kindle libros clasicos español literatura"},
    {title:"Biblioteca Virtual Miguel de Cervantes",author:"Fundación Biblioteca Virtual Miguel de Cervantes",description:"Colecciones de literatura, historia, lengua, cultura y literatura infantil y juvenil en español y otras lenguas.",category:"Lecturas",icon:"📖",format:"Biblioteca digital",url:"https://www.cervantesvirtual.com/",external:true,externalLabel:"Explorar colecciones ↗",tags:"cervantes literatura historia lengua infantil juvenil biblioteca"},
    {title:"Biblioteca Digital Mundial y patrimonio",author:"UNESCO · recursos patrimoniales asociados",description:"Portal patrimonial para explorar libros, mapas, fotografías y documentos históricos de distintas culturas. El acceso y las condiciones varían según cada objeto.",category:"Mapas e historia",icon:"🌐",format:"Colección patrimonial",url:"https://www.wdl.org/es/",external:true,externalLabel:"Explorar patrimonio ↗",tags:"unesco mapas libros historia fotografías patrimonio mundial"},
    {title:"Europeana · arte, libros y archivos",author:"Europeana Foundation",description:"Colección digital de museos, bibliotecas y archivos europeos: arte, fotografías, mapas, manuscritos y objetos culturales. Cada ficha informa derechos y reutilización.",category:"Mapas e historia",icon:"🖼️",format:"Colección cultural",url:"https://www.europeana.eu/es",external:true,externalLabel:"Buscar piezas ↗",tags:"arte fotos mapas manuscritos museos archivos cultura"},
    {title:"Biblioteca digital de la Biblioteca Nacional",author:"Biblioteca Nacional Mariano Moreno",description:"Libros, revistas, periódicos, fotografías, mapas, manuscritos, partituras, audios y videos digitalizados; muchas obras históricas están disponibles en acceso libre.",category:"Mapas e historia",icon:"📷",format:"Archivo digital",url:"https://museo.bn.gov.ar/biblioteca/servicios/online",external:true,externalLabel:"Explorar objetos ↗",tags:"fotografias mapas partituras manuscritos libros patrimonio argentino"},
    {title:"Repositorio de acceso abierto CONICET/UNT",author:"Instituto Superior de Estudios Sociales · CONICET/UNT",description:"Directorio de repositorios, bibliotecas digitales, revistas científicas y recursos para investigar y estudiar ciencias sociales.",category:"Para estudiar",icon:"🔎",format:"Directorio académico",url:"https://ises.conicet.gov.ar/biblioteca/",external:true,externalLabel:"Consultar recursos ↗",tags:"conicet ciencia investigación revistas academia historia sociedad"},
    {title:"Recursos de salud pública en acceso abierto",author:"Biblioteca Virtual en Salud · Ministerio de Salud",description:"Publicaciones para leer, descargar e imprimir con condiciones de uso explicitadas. Útil para encontrar información de salud pública y materiales educativos.",category:"Recursos útiles",icon:"🩺",format:"Biblioteca de salud",url:"https://bvs.msal.gov.ar/?page_id=170620",external:true,externalLabel:"Explorar publicaciones ↗",tags:"salud publica guias documentos investigacion educacion"},
    {title:"Guías y materiales de defensa del consumidor",author:"Argentina.gob.ar · Defensa del Consumidor",description:"Materiales para entender compras, derechos, engaños y decisiones cotidianas de consumo. Priorizá siempre las guías oficiales y sus versiones actualizadas.",category:"Recursos útiles",icon:"🛡️",format:"Guías prácticas",url:"https://www.argentina.gob.ar/economia/industria-y-comercio/defensadelconsumidor",external:true,externalLabel:"Buscar guías ↗",tags:"consumidor derechos compras reclamos estafas ahorro hogar"},
    {title:"Recursos de parques nacionales",author:"Administración de Parques Nacionales",description:"Materiales de educación ambiental, flora, fauna, áreas protegidas y conservación. Ideal para aprender sobre la naturaleza argentina y patagónica.",category:"Para estudiar",icon:"🦌",format:"Material educativo oficial",url:"https://www.argentina.gob.ar/parquesnacionales/educacionambiental",external:true,externalLabel:"Explorar materiales ↗",tags:"parques nacionales ambiente flora fauna patagonia naturaleza"},
    {title:"Flora y fauna de los parques nacionales",author:"Sistema de Información de Biodiversidad · APN",description:"Láminas y recursos para reconocer especies, huellas, ambientes y biodiversidad argentina. Consultá cada ficha para conocer el archivo y sus permisos.",category:"Para decorar",icon:"🦉",format:"Láminas y fichas",url:"https://www.sib.gob.ar/",external:true,externalLabel:"Buscar láminas ↗",tags:"fauna flora huellas biodiversidad aves plantas animales láminas"},
    {title:"Materiales para aprender sobre consumo responsable",author:"Escuela Argentina de Educación en Consumo",description:"Guías para organizar compras, cuidar el presupuesto, reconocer engaños y reducir desperdicios. Recursos para el día a día en el hogar.",category:"Recursos útiles",icon:"🛒",format:"Guías gratuitas",url:"https://www.argentina.gob.ar/economia/industria-y-comercio/defensadelconsumidor/escuela-argentina-de-educacion-en-consumo",external:true,externalLabel:"Ver materiales ↗",tags:"consumo responsable hogar presupuesto alimentos compras ahorro"},
    {title:"Contenedor Digital · biblioteca para aprender",author:"Gobierno de la Ciudad de Buenos Aires",description:"Materiales didácticos en línea sobre matemática, alimentación saludable, educación digital, astronomía y otras áreas; acceso sin registro según el portal.",category:"Para estudiar",icon:"🎒",format:"Biblioteca educativa",url:"https://buenosaires.gob.ar/gcaba_historico/educacion/contenedor-digital",external:true,externalLabel:"Entrar a la biblioteca ↗",tags:"libros videos ciencias astronomia alimentación escuela sin registro"},
    {title:"Recursos educativos abiertos · IES Olga Cossettini",author:"Instituto de Educación Superior Nº 28",description:"Repositorio de recursos de enseñanza y aprendizaje. Su licencia limita usos comerciales y modificaciones; RUMA enlaza la fuente y no redistribuye sus archivos.",category:"Para estudiar",icon:"📎",format:"Repositorio REA · licencia CC BY-NC-ND",url:"https://iesoc.edu.ar/practica/repositorio-rea/",external:true,externalLabel:"Consultar recursos ↗",tags:"recursos abiertos educacion mapas conceptuales podcast formación"}

  ];

  const categoryOrder = ["Lecturas", "Para estudiar", "Recursos útiles", "Para decorar", "Mapas e historia"];
  resources.sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category) || a.title.localeCompare(b.title, "es"));

  const grid = document.getElementById("resource-grid");
  const search = document.getElementById("search");
  const count = document.getElementById("result-count");
  const empty = document.getElementById("no-results");
  const categoryButtons = [...document.querySelectorAll("[data-category]")];
  let category = "Todos";
  categoryButtons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.category === category)));

  function normalize(value) {
    return value.toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function render() {
    const query = normalize(search.value.trim());
    const visible = resources.filter(item => {
      const inCategory = category === "Todos" || item.category === category;
      const text = normalize([item.title, item.description, item.author, item.category, item.tags].join(" "));
      return inCategory && query.split(/\s+/).filter(Boolean).every(word => text.includes(word));
    });

    grid.replaceChildren();
    visible.forEach(item => {
      const card = document.createElement("article");
      card.className = "resource-card";

      const preview = document.createElement("a");
      preview.className = "resource-preview resource-source-preview";
      preview.href = item.url;
      preview.target = "_blank";
      preview.rel = "noopener noreferrer";
      preview.setAttribute("aria-label", "Abrir la fuente original de " + item.title + " en una pestaña nueva");
      const sourceMark = document.createElement("span");
      sourceMark.className = "source-mark";
      sourceMark.textContent = item.icon;
      const sourceLabel = document.createElement("span");
      sourceLabel.className = "source-label";
      sourceLabel.textContent = "VIDRIERA RUMA · " + item.format;
      preview.append(sourceMark, sourceLabel);

      const content = document.createElement("div");
      content.className = "resource-content";
      const label = document.createElement("span");
      label.className = "resource-category";
      label.textContent = item.icon + " " + item.category;
      const title = document.createElement("h3");
      title.textContent = item.title;
      const description = document.createElement("p");
      description.textContent = item.description;
      const author = document.createElement("p");
      author.className = "resource-author";
      author.textContent = item.author + " · " + item.format;

      const actions = document.createElement("div");
      actions.className = "resource-actions";
      const open = document.createElement("a");
      open.className = "view-button";
      open.href = item.url;
      open.target = "_blank";
      open.rel = "noopener noreferrer";
      open.textContent = item.externalLabel || "Abrir fuente ↗";
      open.setAttribute("aria-label", open.textContent.replace(" ↗", "") + ": " + item.title);
      actions.append(open);
      content.append(label, title, description, author, actions);
      card.append(preview, content);
      grid.append(card);
    });

    empty.hidden = visible.length > 0;
    count.textContent = visible.length + (visible.length === 1 ? " recurso seleccionado" : " recursos seleccionados");
  }

  categoryButtons.forEach(button => button.addEventListener("click", () => {
    category = button.dataset.category;
    categoryButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    render();
    document.getElementById("materiales").scrollIntoView({behavior:"smooth", block:"start"});
  }));
  search.addEventListener("input", render);
  document.getElementById("clear-search").addEventListener("click", () => {
    search.value = "";
    search.focus();
    render();
  });

  document.getElementById("copy-alias").addEventListener("click", async () => {
    const message = document.getElementById("copy-message");
    try {
      await navigator.clipboard.writeText("ocarina.guitarra");
      message.textContent = "Alias copiado. ¡Gracias!";
    } catch {
      message.textContent = "Copialo a mano: ocarina.guitarra";
    }
  });

  render();
})();