(() => {
  "use strict";

  // Todos los recursos del catálogo apuntan a archivos guardados dentro de RUMA.
  const resources = [
    {title:"El árbol del patio",author:"Lectura original de RUMA",description:"Un cuento breve sobre compartir el espacio y hacer lugar a quien llega.",category:"Lecturas",icon:"📖",format:"SVG imprimible",url:"archivos/lectura-arbol-patio.svg",tags:"cuento lectura comunidad familia"},
    {title:"Casa de viento",author:"Poema original de RUMA",description:"Un poema para leer despacio, compartir o regalar.",category:"Lecturas",icon:"🌬️",format:"SVG imprimible",url:"archivos/lectura-casa-viento.svg",tags:"poesía poema Patagonia viento"},
    {title:"Planificador semanal",author:"Plantilla de RUMA",description:"Organizá actividades, pendientes y momentos de descanso de toda la semana.",category:"Para estudiar",icon:"🗓️",format:"SVG imprimible",url:"archivos/planificador-semanal.svg",tags:"agenda semana organización estudio"},
    {title:"Mi registro de lectura",author:"Plantilla de RUMA",description:"Anotá lo que leés, tus partes favoritas y recomendaciones para compartir.",category:"Para estudiar",icon:"📚",format:"SVG imprimible",url:"archivos/registro-lectura.svg",tags:"lectura escuela libro estudiantes"},
    {title:"Registro de gastos del hogar",author:"Plantilla de RUMA",description:"Una hoja sencilla para ordenar entradas y gastos sin cuentas complicadas.",category:"Recursos útiles",icon:"🧾",format:"SVG imprimible",url:"archivos/cuaderno-gastos-hogar.svg",tags:"hogar gastos presupuesto economía"},
    {title:"Ficha simple para emprender",author:"Plantilla de RUMA",description:"Ordená tu idea, a quién ayuda, sus costos y cómo querés ofrecerla.",category:"Recursos útiles",icon:"🧰",format:"SVG imprimible",url:"archivos/ficha-emprendimiento.svg",tags:"emprender negocio costos precio trabajo"},
    {title:"Cartelera comunitaria",author:"Plantilla de RUMA",description:"Un espacio para anunciar talleres, encuentros y actividades con datos verificados.",category:"Recursos útiles",icon:"📌",format:"SVG imprimible",url:"archivos/agenda-comunitaria.svg",tags:"comunidad barrio eventos actividades talleres"},
    {title:"Agenda de contactos importantes",author:"Plantilla de RUMA",description:"Completá con teléfonos verificados de tu familia, servicios y personas de confianza.",category:"Recursos útiles",icon:"☎️",format:"SVG imprimible",url:"archivos/hoja-contactos-importantes.svg",tags:"contactos teléfonos familia ayuda agenda"},
    {title:"Tarjeta para regalar cariño",author:"Diseño original de RUMA",description:"Una tarjeta sencilla para escribir un mensaje y regalar a alguien querido.",category:"Para decorar",icon:"💌",format:"SVG imprimible",url:"archivos/tarjeta-cariño.svg",tags:"tarjeta regalo cariño imprimir"},
    {title:"Lámina de flores patagónicas",author:"Ilustración original de RUMA",description:"Una lámina suave para decorar la casa, la escuela o el espacio de trabajo.",category:"Para decorar",icon:"🌸",format:"SVG imprimible",url:"archivos/lamina-flores-patagonicas.svg",tags:"flores botánica lámina arte decoración"},
    {title:"Separadores para libros",author:"Diseño de RUMA",description:"Tres separadores para recortar, usar en tus lecturas o regalar.",category:"Para decorar",icon:"🔖",format:"SVG imprimible",url:"archivos/separadores-libros.svg",tags:"libros separadores lectura recortar"},
    {title:"Etiquetas para huerta y jardín",author:"Plantilla de RUMA",description:"Etiquetas para identificar hierbas y plantas. Imprimí y recortá para tu huerta.",category:"Para decorar",icon:"🌱",format:"SVG imprimible",url:"archivos/etiquetas-huerta.svg",tags:"huerta jardín plantas hierbas etiquetas"},
    {title:"Mapa comunitario para completar",author:"Plantilla de RUMA",description:"Un plano en blanco para dibujar tu zona y señalar lugares con información verificada. No reemplaza un mapa oficial.",category:"Mapas e historia",icon:"🗺️",format:"SVG imprimible",url:"archivos/plantilla-mapa-barrio.svg",tags:"mapa barrio comunidad lugares territorio"},
    {title:"Árbol de memoria familiar",author:"Plantilla de RUMA",description:"Registrá nombres e historias de tu familia para conservar recuerdos y compartirlos.",category:"Mapas e historia",icon:"🌳",format:"SVG imprimible",url:"archivos/memoria-familiar.svg",tags:"familia memoria historia árbol genealógico"}
  ];

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
      preview.className = "resource-preview";
      preview.href = item.url;
      preview.target = "_blank";
      preview.rel = "noopener";
      preview.setAttribute("aria-label", "Ver " + item.title + " en una pestaña nueva");

      const image = document.createElement("img");
      image.src = item.url;
      image.alt = "Vista previa de " + item.title;
      image.loading = "lazy";
      image.decoding = "async";
      preview.append(image);

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
      view.target = "_blank";
      view.rel = "noopener";
      view.textContent = "Ver";
      const download = document.createElement("a");
      download.className = "download-button";
      download.href = item.url;
      download.setAttribute("download", item.url.split("/").pop());
      download.textContent = "Descargar ↓";
      actions.append(view, download);
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