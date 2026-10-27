(() => {
  "use strict";

  // Todos los recursos del catálogo apuntan a archivos guardados dentro de RUMA.
  const resources = [
    {title:"El árbol del patio",author:"Lectura original de RUMA",description:"Un cuento breve sobre compartir el espacio y hacer lugar a quien llega.",category:"Lecturas",icon:"📖",format:"SVG imprimible",url:"archivos/lecturas/arbol-del-patio.svg",tags:"cuento lectura comunidad familia"},
    {title:"Casa de viento",author:"Poema original de RUMA",description:"Un poema para leer despacio, compartir o regalar.",category:"Lecturas",icon:"🌬️",format:"SVG imprimible",url:"archivos/lecturas/casa-de-viento.svg",tags:"poesía poema Patagonia viento"},
    {title:"Planificador semanal",author:"Plantilla de RUMA",description:"Organizá actividades, pendientes y momentos de descanso de toda la semana.",category:"Para estudiar",icon:"🗓️",format:"SVG imprimible",url:"archivos/estudio/planificador-semanal.svg",tags:"agenda semana organización estudio"},
    {title:"Mi registro de lectura",author:"Plantilla de RUMA",description:"Anotá lo que leés, tus partes favoritas y recomendaciones para compartir.",category:"Para estudiar",icon:"📚",format:"SVG imprimible",url:"archivos/estudio/registro-de-lectura.svg",tags:"lectura escuela libro estudiantes"},
    {title:"Registro de gastos del hogar",author:"Plantilla de RUMA",description:"Una hoja sencilla para ordenar entradas y gastos sin cuentas complicadas.",category:"Recursos útiles",icon:"🧾",format:"SVG imprimible",url:"archivos/utiles/gastos-del-hogar.svg",tags:"hogar gastos presupuesto economía"},
    {title:"Ficha simple para emprender",author:"Plantilla de RUMA",description:"Ordená tu idea, a quién ayuda, sus costos y cómo querés ofrecerla.",category:"Recursos útiles",icon:"🧰",format:"SVG imprimible",url:"archivos/utiles/ficha-para-emprender.svg",tags:"emprender negocio costos precio trabajo"},
    {title:"Cartelera comunitaria",author:"Plantilla de RUMA",description:"Un espacio para anunciar talleres, encuentros y actividades con datos verificados.",category:"Recursos útiles",icon:"📌",format:"SVG imprimible",url:"archivos/utiles/cartelera-comunitaria.svg",tags:"comunidad barrio eventos actividades talleres"},
    {title:"Agenda de contactos importantes",author:"Plantilla de RUMA",description:"Completá con teléfonos verificados de tu familia, servicios y personas de confianza.",category:"Recursos útiles",icon:"☎️",format:"SVG imprimible",url:"archivos/utiles/contactos-importantes.svg",tags:"contactos teléfonos familia ayuda agenda"},
    {title:"Tarjeta para regalar cariño",author:"Diseño original de RUMA",description:"Una tarjeta sencilla para escribir un mensaje y regalar a alguien querido.",category:"Para decorar",icon:"💌",format:"SVG imprimible",url:"archivos/decoracion/tarjeta-de-carino.svg",tags:"tarjeta regalo cariño imprimir"},
    {title:"Lámina de flores patagónicas",author:"Ilustración original de RUMA",description:"Una lámina suave para decorar la casa, la escuela o el espacio de trabajo.",category:"Para decorar",icon:"🌸",format:"SVG imprimible",url:"archivos/decoracion/flores-patagonicas.svg",tags:"flores botánica lámina arte decoración"},
    {title:"Separadores para libros",author:"Diseño de RUMA",description:"Tres separadores para recortar, usar en tus lecturas o regalar.",category:"Para decorar",icon:"🔖",format:"SVG imprimible",url:"archivos/decoracion/separadores-de-libros.svg",tags:"libros separadores lectura recortar"},
    {title:"Etiquetas para huerta y jardín",author:"Plantilla de RUMA",description:"Etiquetas para identificar hierbas y plantas. Imprimí y recortá para tu huerta.",category:"Para decorar",icon:"🌱",format:"SVG imprimible",url:"archivos/decoracion/etiquetas-para-huerta.svg",tags:"huerta jardín plantas hierbas etiquetas"},
    {title:"Mapa comunitario para completar",author:"Plantilla de RUMA",description:"Un plano en blanco para dibujar tu zona y señalar lugares con información verificada. No reemplaza un mapa oficial.",category:"Mapas e historia",icon:"🗺️",format:"SVG imprimible",url:"archivos/mapas-historia/mapa-comunitario.svg",tags:"mapa barrio comunidad lugares territorio"},
    {title:"Árbol de memoria familiar",author:"Plantilla de RUMA",description:"Registrá nombres e historias de tu familia para conservar recuerdos y compartirlos.",category:"Mapas e historia",icon:"🌳",format:"SVG imprimible",url:"archivos/mapas-historia/arbol-de-memoria-familiar.svg",tags:"familia memoria historia árbol genealógico"},
    {title:"Tabla de multiplicar",author:"Material original de RUMA",description:"Una hoja clara para practicar las tablas del 1 al 10.",category:"Para estudiar",icon:"✖️",format:"SVG imprimible",url:"archivos/estudio/tabla-de-multiplicar.svg",tags:"matemática matemáticas multiplicar tablas escuela"},
    {title:"Ficha de palabras nuevas",author:"Material original de RUMA",description:"Aprendé vocabulario, practicá escritura y guardá palabras que quieras recordar.",category:"Para estudiar",icon:"✏️",format:"SVG imprimible",url:"archivos/estudio/ficha-de-palabras.svg",tags:"lengua palabras vocabulario escritura escuela"},
    {title:"Menú sencillo de la semana",author:"Material original de RUMA",description:"Planificá comidas con lo que ya tenés en casa y anotá ideas para cada día.",category:"Recursos útiles",icon:"🥣",format:"SVG imprimible",url:"archivos/utiles/menu-semanal.svg",tags:"comida cocina menú comidas semana hogar"},
    {title:"Lista de compras tranquila",author:"Material original de RUMA",description:"Separá las compras por rubro y marcá lo que ya conseguiste.",category:"Recursos útiles",icon:"🛒",format:"SVG imprimible",url:"archivos/utiles/lista-de-compras.svg",tags:"compras almacén supermercado lista hogar"},
    {title:"Plan familiar ante emergencias",author:"Plantilla de RUMA",description:"Anotá un punto de encuentro y contactos de confianza. Completá con información oficial verificada.",category:"Recursos útiles",icon:"🧭",format:"SVG imprimible",url:"archivos/utiles/plan-familiar-ante-emergencias.svg",tags:"prevención familia emergencia preparación plan"},
    {title:"Cuidados de mis plantas",author:"Material original de RUMA",description:"Llevá un registro simple del agua, el sol y los cambios que observás en tus plantas.",category:"Recursos útiles",icon:"🪴",format:"SVG imprimible",url:"archivos/utiles/cuidados-de-plantas.svg",tags:"plantas jardín huerta agua sol registro"},
    {title:"Postales para compartir",author:"Diseño original de RUMA",description:"Cuatro postales suaves para imprimir, recortar y completar con tus propias palabras.",category:"Para decorar",icon:"💌",format:"SVG imprimible",url:"archivos/decoracion/postales-para-compartir.svg",tags:"postales tarjetas regalo mensajes cariño"},
    {title:"Entrevista a alguien de la comunidad",author:"Plantilla de RUMA",description:"Preguntas para conservar recuerdos locales con respeto y permiso de quien comparte su historia.",category:"Mapas e historia",icon:"🎙️",format:"SVG imprimible",url:"archivos/mapas-historia/entrevista-a-un-mayor.svg",tags:"historia local memoria oral entrevista abuelos comunidad"}
  {title:"Horario escolar",author:"Material original de RUMA",description:"Organizá materias, horarios y pendientes en una hoja para imprimir.",category:"Para estudiar",icon:"🗓️",format:"SVG imprimible",url:"archivos/estudio/horario-escolar.svg",tags:"escuela horario clases organización estudiantes"},
    {title:"Mi registro de hábitos",author:"Material original de RUMA",description:"Marcá pequeños hábitos que querés cuidar, sin exigirte perfección.",category:"Para estudiar",icon:"🌱",format:"SVG imprimible",url:"archivos/estudio/seguimiento-habitos.svg",tags:"hábitos bienestar seguimiento rutina"},
    {title:"Rutina de limpieza semanal",author:"Material original de RUMA",description:"Repartí tareas del hogar con calma y reconocé también tus momentos de descanso.",category:"Recursos útiles",icon:"🧹",format:"SVG imprimible",url:"archivos/utiles/limpieza-semanal.svg",tags:"limpieza casa hogar tareas semanal organización"},
    {title:"Receta de la familia",author:"Material original de RUMA",description:"Guardá ingredientes, pasos y recuerdos de una receta querida.",category:"Recursos útiles",icon:"🍲",format:"SVG imprimible",url:"archivos/utiles/ficha-receta-familiar.svg",tags:"receta cocina familia tradición comida"},
    {title:"Presupuesto mensual del hogar",author:"Material original de RUMA",description:"Anotá ingresos y gastos en una hoja simple, sin aplicaciones ni cuentas complicadas.",category:"Recursos útiles",icon:"🪙",format:"SVG imprimible",url:"archivos/utiles/presupuesto-mensual.svg",tags:"presupuesto gastos ahorro dinero hogar"},
    {title:"Marcapáginas botánicos",author:"Diseño original de RUMA",description:"Tres marcapáginas para imprimir, recortar y regalar a quienes disfrutan leer.",category:"Para decorar",icon:"🔖",format:"SVG imprimible",url:"archivos/decoracion/marcapaginas-botanicos.svg",tags:"marcapáginas marcadores libros flores botánica"},
    {title:"Lámina para colorear: fauna patagónica",author:"Ilustración original de RUMA",description:"Una lámina de trazos sencillos para colorear y conversar sobre animales de la Patagonia.",category:"Para decorar",icon:"🦊",format:"SVG imprimible",url:"archivos/decoracion/lamina-fauna-patagonica.svg",tags:"colorear dibujo animales fauna patagonia infantil"},
    {title:"Tarjetas para dar las gracias",author:"Diseño original de RUMA",description:"Cuatro tarjetas para recortar, escribir un mensaje propio y compartir.",category:"Para decorar",icon:"💌",format:"SVG imprimible",url:"archivos/decoracion/tarjetas-gracias.svg",tags:"tarjetas gracias agradecimiento regalo"},
    {title:"El viento y la semilla",author:"Cuento original de RUMA",description:"Un cuento breve sobre crecer sin apuro y encontrar un lugar donde echar raíces.",category:"Lecturas",icon:"🌱",format:"Cuento SVG imprimible",url:"archivos/lecturas/el-viento-y-la-semilla.svg",tags:"cuento infantil semilla viento crecer lectura"},
    {title:"La luz de la ventana",author:"Cuento original de RUMA",description:"Un relato sobre pequeños gestos que pueden volver más cercana a una comunidad.",category:"Lecturas",icon:"🪟",format:"Cuento SVG imprimible",url:"archivos/lecturas/la-luz-de-la-ventana.svg",tags:"cuento comunidad solidaridad vecinos lectura"},
    {title:"Clásicos universales para leer gratis",author:"Secretaría de Educación · Argentina.gob.ar",description:"Catálogo público con más de cien libros gratuitos: novelas, cuentos, teatro, poesía, ensayos y autores argentinos. La descarga se realiza en el sitio oficial.",category:"Lecturas",icon:"📚",format:"Biblioteca externa · gratuita",url:"https://www.argentina.gob.ar/educacion/materiales-didacticos/clasicos-universales",external:true,tags:"libros novelas cuentos poemas clásicos argentinos descargar"},
    {title:"Genio Maligno · clásicos de dominio público",author:"Genio Maligno",description:"Biblioteca digital con clásicos en español para leer en línea o descargar en los formatos que ofrece su catálogo. Revisá las condiciones de cada obra.",category:"Lecturas",icon:"📖",format:"Biblioteca externa · gratuita",url:"https://geniomaligno.com.ar/",external:true,tags:"libros dominio público epub pdf clásicos lectura"},
    {title:"Biblioteca Nacional · objetos digitales",author:"Biblioteca Nacional Mariano Moreno",description:"Buscá libros, revistas, fotografías, mapas, manuscritos, partituras y otros objetos digitalizados. La ficha de cada obra indica su forma de acceso.",category:"Mapas e historia",icon:"🏛️",format:"Colección institucional",url:"https://museo.bn.gov.ar/biblioteca/servicios/online",external:true,tags:"mapas historia fotografías archivos libros patrimonio Argentina"},
    {title:"Educ.ar · recursos para aprender",author:"Portal Educ.ar",description:"Colecciones educativas, libros digitales, cuadernillos, textos y actividades para distintas edades y materias.",category:"Para estudiar",icon:"🎒",format:"Portal educativo",url:"https://www.educ.ar/recursos",external:true,tags:"educación escuela estudiantes libros actividades descargar"},
    {title:"StoryWeaver · cuentos ilustrados",author:"Pratham Books · StoryWeaver",description:"Biblioteca de cuentos ilustrados con opciones de idioma y materiales publicados con licencias abiertas. Comprobá la licencia y la atribución de cada título.",category:"Lecturas",icon:"🌍",format:"Biblioteca externa · licencias por obra",url:"https://storyweaver.org.in/",external:true,tags:"cuentos infantiles ilustrados español lectura licencia abierta"}
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
      preview.className = "resource-preview" + (item.external ? " resource-source-preview" : "");
      preview.href = item.url;
      if (item.external) {
        preview.target = "_blank";
        preview.rel = "noopener noreferrer";
        preview.setAttribute("aria-label", "Abrir la fuente oficial de " + item.title + " en una pestaña nueva");
        const sourceMark = document.createElement("span");
        sourceMark.className = "source-mark";
        sourceMark.textContent = item.icon;
        const sourceLabel = document.createElement("span");
        sourceLabel.className = "source-label";
        sourceLabel.textContent = "VIDRIERA RUMA · " + item.format;
        preview.append(sourceMark, sourceLabel);
      } else {
        preview.setAttribute("aria-label", "Ver " + item.title + " en una pestaña nueva");
        const image = document.createElement("img");
        image.src = item.url;
        image.alt = "Vista previa de " + item.title;
        image.loading = "lazy";
        image.decoding = "async";
        preview.append(image);
      }

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
      const view = document.createElement("a");
      view.className = "view-button";
      view.href = item.url;
      if (item.external) {
        view.target = "_blank";
        view.rel = "noopener noreferrer";
        view.textContent = "Abrir biblioteca ↗";
        view.setAttribute("aria-label", "Abrir " + item.title + " en su sitio original");
        actions.append(view);
      } else {
        view.target = "_blank";
        view.rel = "noopener";
        view.textContent = "Ver";
        const download = document.createElement("a");
        download.className = "download-button";
        download.href = item.url;
        download.setAttribute("download", item.url.split("/").pop());
        download.textContent = "Descargar ↓";
        actions.append(view, download);
      }
      content.append(label, title, description, author, actions);
      card.append(preview, content);
      grid.append(card);
    });

    empty.hidden = visible.length > 0;
    count.textContent = visible.length + (visible.length === 1 ? " material disponible" : " materiales disponibles");
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