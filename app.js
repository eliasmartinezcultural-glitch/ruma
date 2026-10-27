(() => {
  "use strict";

  // RUMA reúne materiales existentes. No fabrica archivos ni resúmenes para completar el catálogo.
  // Los enlaces a PDF abren el archivo real; los enlaces de colección llevan a la fuente institucional.
  const resources = [
    {title:"El árbol del patio",author:"RUMA · lectura original",description:"Un cuento breve sobre compartir el espacio y hacer lugar a quien llega.",category:"Lecturas",icon:"📖",format:"SVG · imprimible",source:"Archivo incluido en RUMA",url:"archivos/lectura-arbol-patio.svg",image:"archivos/lectura-arbol-patio.svg",tags:"cuento lectura comunidad cuento corto familia"},
    {title:"Casa de viento",author:"RUMA · poema original",description:"Un poema para leer despacio, compartir o regalar.",category:"Lecturas",icon:"🌬️",format:"SVG · imprimible",source:"Archivo incluido en RUMA",url:"archivos/lectura-casa-viento.svg",image:"archivos/lectura-casa-viento.svg",tags:"poesía poema lectura valle Patagonia viento"},
    {title:"Planificador semanal",author:"RUMA · plantilla imprimible",description:"Organizá actividades, pendientes y momentos de descanso de toda la semana.",category:"Para estudiar",icon:"🗓️",format:"SVG · imprimible",source:"Archivo incluido en RUMA",url:"archivos/planificador-semanal.svg",image:"archivos/planificador-semanal.svg",tags:"agenda semana organización estudio planificar"},
    {title:"Mi registro de lectura",author:"RUMA · plantilla imprimible",description:"Anotá lo que leés, tus partes favoritas y las recomendaciones que quieras compartir.",category:"Para estudiar",icon:"📚",format:"SVG · imprimible",source:"Archivo incluido en RUMA",url:"archivos/registro-lectura.svg",image:"archivos/registro-lectura.svg",tags:"lectura escuela libro estudiantes actividad"},
    {title:"Registro de gastos del hogar",author:"RUMA · plantilla imprimible",description:"Una hoja sencilla para ordenar entradas y gastos sin cuentas complicadas.",category:"Recursos útiles",icon:"🧾",format:"SVG · imprimible",source:"Archivo incluido en RUMA",url:"archivos/cuaderno-gastos-hogar.svg",image:"archivos/cuaderno-gastos-hogar.svg",tags:"hogar gastos presupuesto economía cuentas"},
    {title:"Ficha simple para emprender",author:"RUMA · plantilla imprimible",description:"Ordená tu idea, a quién ayuda, sus costos y cómo querés ofrecerla.",category:"Recursos útiles",icon:"🧰",format:"SVG · imprimible",source:"Archivo incluido en RUMA",url:"archivos/ficha-emprendimiento.svg",image:"archivos/ficha-emprendimiento.svg",tags:"emprender negocio costos precio trabajo"},
    {title:"Cartelera comunitaria",author:"RUMA · plantilla imprimible",description:"Un espacio para anunciar talleres, encuentros y actividades con datos que vos verifiques.",category:"Recursos útiles",icon:"📌",format:"SVG · imprimible",source:"Archivo incluido en RUMA",url:"archivos/agenda-comunitaria.svg",image:"archivos/agenda-comunitaria.svg",tags:"comunidad barrio eventos actividades talleres"},
    {title:"Agenda de contactos importantes",author:"RUMA · plantilla imprimible",description:"Completá con teléfonos verificados de tu familia, servicios y personas de confianza.",category:"Recursos útiles",icon:"☎️",format:"SVG · imprimible",source:"Archivo incluido en RUMA",url:"archivos/hoja-contactos-importantes.svg",image:"archivos/hoja-contactos-importantes.svg",tags:"contactos teléfonos familia ayuda agenda"},
    {title:"Tarjeta para regalar cariño",author:"RUMA · diseño imprimible",description:"Una tarjeta sencilla para escribir un mensaje y regalar a alguien querido.",category:"Para decorar",icon:"💌",format:"SVG · imprimible",source:"Archivo incluido en RUMA",url:"archivos/tarjeta-cariño.svg",image:"archivos/tarjeta-cariño.svg",tags:"tarjeta regalo cariño imprimir"},
    {title:"Lámina botánica de flores",author:"RUMA · ilustración original",description:"Una lámina suave para decorar un rincón de la casa, la escuela o el espacio de trabajo.",category:"Para decorar",icon:"🌸",format:"SVG · imprimible",source:"Archivo incluido en RUMA",url:"archivos/lamina-flores-patagonicas.svg",image:"archivos/lamina-flores-patagonicas.svg",tags:"flores botánica lámina arte decoración"},
    {title:"Separadores para libros",author:"RUMA · diseño imprimible",description:"Tres separadores para recortar, usar en tus lecturas o regalar.",category:"Para decorar",icon:"🔖",format:"SVG · imprimible",source:"Archivo incluido en RUMA",url:"archivos/separadores-libros.svg",image:"archivos/separadores-libros.svg",tags:"libros separadores lectura recortar"},
    {title:"Etiquetas para huerta y jardín",author:"RUMA · plantilla imprimible",description:"Etiquetas para identificar hierbas y plantas. Imprimí y recortá para tu huerta.",category:"Para decorar",icon:"🌱",format:"SVG · imprimible",source:"Archivo incluido en RUMA",url:"archivos/etiquetas-huerta.svg",image:"archivos/etiquetas-huerta.svg",tags:"huerta jardín plantas hierbas etiquetas"},
    {title:"Mapa comunitario para completar",author:"RUMA · plantilla imprimible",description:"Un plano en blanco para dibujar tu zona y señalar lugares con información verificada. No reemplaza un mapa oficial.",category:"Mapas e historia",icon:"🗺️",format:"SVG · imprimible",source:"Archivo incluido en RUMA",url:"archivos/plantilla-mapa-barrio.svg",image:"archivos/plantilla-mapa-barrio.svg",tags:"mapa barrio comunidad lugares territorio"},
    {title:"Árbol de memoria familiar",author:"RUMA · plantilla imprimible",description:"Registrá nombres e historias de tu familia para conservar recuerdos y compartirlos.",category:"Mapas e historia",icon:"🌳",format:"SVG · imprimible",source:"Archivo incluido en RUMA",url:"archivos/memoria-familiar.svg",image:"archivos/memoria-familiar.svg",tags:"familia memoria historia árbol genealógico"}
  ];

  const grid = document.getElementById("resource-grid");
  const form = document.getElementById("search-form");
  const input = document.getElementById("search");
  const count = document.getElementById("result-count");
  const noResults = document.getElementById("no-results");
  const filters = [...document.querySelectorAll(".filters:not(.access-filters) .filter")];
  const dialog = document.getElementById("resource-dialog");
  const dialogBody = document.getElementById("dialog-body");
  const dialogTitle = document.getElementById("dialog-title");
  const obtainResource = document.getElementById("obtain-resource");
  let activeFilter = "Todos";
  let activeAccessFilter = "Todos";
  let searchTerm = "";

  function normalize(value) {
    return value.toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  const categoryOrder = ["Lecturas", "Para estudiar", "Recursos útiles", "Para decorar", "Mapas e historia"];
  function shelfFor(resource) {
    const text = normalize([resource.title, resource.tags, resource.description].join(" "));
    const rules = {
      "Lecturas": [
        ["Cuentos y narrativa", /cuento|novela|relato|narrativa|gauchesca|ficcion/],
        ["Poesía y teatro", /poesia|poema|teatro|dramatic|obra teatral/],
        ["Ensayos, memoria y clásicos", /ensayo|memoria|autobiografia|viaje|clasico|historia/],
        ["Bibliotecas y colecciones", /biblioteca|coleccion|libros digitales|catalogo/]
      ],
      "Para estudiar": [
        ["Actividades y cuadernillos", /actividad|cuadernillo|ejercicio|imprimible|imprimir|primaria|secundaria/],
        ["Ciencias y conocimiento", /ciencia|biologia|matematica|lengua|educacion|pedagog|aprendiz/],
        ["Herramientas para aprender", /recurso|docente|estudiar|escuela|alfabetizacion/]
      ],
      "Recursos útiles": [
        ["Trámites y servicios", /tramite|contacto|municip|servicio|turno|document/],
        ["Emprender y trabajar", /emprend|negocio|gestion|habilidades|economia/],
        ["Guías para la vida diaria", /guia|herramienta|ayuda|informacion|datos/]
      ],
      "Para decorar": [
        ["Láminas, dibujos e ilustraciones", /ilustracion|clipart|dibujo|imagen|lamina|open access|open content/],
        ["Arte, cuadros y fotografías", /arte|cuadro|museo|fotografia|pintura|paisaje/],
        ["Tarjetas y materiales para imprimir", /tarjeta|imprimir|imprimible|decorar|sticker|postal/]
      ],
      "Mapas e historia": [
        ["Mapas y cartografía", /mapa|cartograf|geograf|visor|sig|mapoteca/],
        ["Historia y patrimonio", /historia|archivo|patrimonio|documento|memoria/],
        ["Territorio y cultura local", /neuquen|territorio|cultural|region|espacios culturales|chanar/]
      ]
    };
    const options = rules[resource.category] || [];
    return (options.find(([, pattern]) => pattern.test(text)) || [resource.category + " · otros"])[0];
  }
  function accessLabel(resource) {
    if (/PDF.*(descarga directa|imprimible)/i.test(resource.format)) return "PDF · descargar e imprimir";
    if (/^PDF\b/i.test(resource.format)) return "PDF · archivo local";
    if (/SVG.*imprimible/i.test(resource.format)) return "Archivo dentro de RUMA · descargar e imprimir";
    if (/descargable|imágenes|imagenes/i.test(resource.format)) return "Material descargable";
    return "Colección o sitio original";
  }
  function isPrintable(resource) {
    return /PDF|imprimible|SVG/i.test(resource.format);
  }
  function matches(resource) {
    const categoryMatch = activeFilter === "Todos" || resource.category === activeFilter;
    const text = normalize([resource.title, resource.author, resource.description, resource.category, resource.source, resource.tags, shelfFor(resource), accessLabel(resource)].join(" "));
    const words = normalize(searchTerm).trim().split(/\s+/).filter(Boolean);
    const accessMatch = activeAccessFilter === "Todos" || (activeAccessFilter === "imprimibles" && isPrintable(resource)) || (activeAccessFilter === "descarga" && /^PDF\\b/i.test(resource.format));
    return categoryMatch && accessMatch && words.every(word => text.includes(word));
  }
  function render() {
    const visible = resources.filter(matches).sort((a,b) => {
      const categoryDiff = categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
      return categoryDiff || shelfFor(a).localeCompare(shelfFor(b), "es") || a.title.localeCompare(b.title, "es");
    });
    grid.replaceChildren();
    let currentGroup = "";
    visible.forEach(resource => {
      const groupName = (activeFilter === "Todos" ? resource.category + " · " : "") + shelfFor(resource);
      if (groupName !== currentGroup) {
        currentGroup = groupName;
        const heading = document.createElement("h3");
        heading.className = "shelf-divider";
        heading.textContent = groupName;
        grid.append(heading);
      }
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
      const access = document.createElement("span");
      access.className = "access-label";
      access.textContent = accessLabel(resource);
      meta.append(format, source, access);

      const actions = document.createElement("div");
      actions.className = "resource-card-actions";
      const preview = document.createElement("button");
      preview.type = "button";
      preview.className = "preview-button";
      preview.textContent = "Ver";
      preview.setAttribute("aria-label", "Ver vista previa de " + resource.title);
      preview.addEventListener("click", () => showPreview(resource));
      const obtain = document.createElement("a");
      obtain.className = "obtain-button";
      obtain.href = resource.url;
      obtain.setAttribute("download", resource.url.split("/").pop());
      obtain.textContent = "Descargar ↓";
      obtain.setAttribute("aria-label", "Descargar " + resource.title + " desde RUMA");
      actions.append(preview, obtain);

      body.append(top, title, author, description, meta, actions);
      article.append(visual, body);
      grid.append(article);
    });
    noResults.hidden = visible.length !== 0;
    count.textContent = searchTerm || activeFilter !== "Todos" || activeAccessFilter !== "Todos"
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
    [[ "Categoría", resource.category ], [ "Estante", shelfFor(resource) ], [ "Formato", resource.format ], [ "Acceso", accessLabel(resource) ], [ "Fuente original", resource.source ]].forEach(([labelText, valueText]) => {
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
      hint.textContent = "Este archivo está guardado dentro de RUMA. Podés descargarlo e imprimirlo.";
      dialogBody.append(frame, hint);
    } else {
      const hint = document.createElement("p");
      hint.className = "preview-hint";
      hint.textContent = "Este material forma parte de RUMA. Podés descargarlo, imprimirlo y compartirlo gratuitamente.";
      dialogBody.append(hint);
    }

    obtainResource.href = resource.url;
    obtainResource.setAttribute("download", resource.url.split("/").pop());
    obtainResource.textContent = "Descargar archivo ↓";
    obtainResource.setAttribute("aria-label", "Descargar " + resource.title + " desde RUMA");
    if (!dialog.open) dialog.showModal();
  }
  function resetFilters() {
    activeFilter = "Todos";
    activeAccessFilter = "Todos";
    accessFilters.forEach(item => {
      const active = item.dataset.accessFilter === "Todos";
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
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
  const accessFilters = [...document.querySelectorAll(".access-filter")];
  accessFilters.forEach(button => button.addEventListener("click", () => {
    activeAccessFilter = button.dataset.accessFilter;
    accessFilters.forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    render();
  }));
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