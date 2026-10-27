(() => {
  "use strict";

  // Regla de publicación: solo archivos alojados en RUMA, con vista previa y descarga local.
  // Si falta el archivo, la vista previa o el permiso de redistribución, no se publica la ficha.
  const resources = [
    {title:"Planificador semanal",author:"RUMA · diseño original",description:"Organizá tus días, anotá prioridades y marcá lo importante.",category:"Recursos útiles",icon:"🗓️",format:"SVG imprimible · A4",url:"./archivos/descargas/planificador-semanal.svg",download:true,tags:"Planificador semanal Organizá tus días, anotá prioridades y marcá lo importante. imprimir descargar"},
    {title:"Tabla de multiplicar",author:"RUMA · diseño original",description:"Tabla del 1 al 10, grande y clara para consultar e imprimir.",category:"Para estudiar",icon:"✖️",format:"SVG imprimible · A4",url:"./archivos/descargas/tabla-multiplicar.svg",download:true,tags:"Tabla de multiplicar Tabla del 1 al 10, grande y clara para consultar e imprimir. imprimir descargar"},
    {title:"Stickers de la Patagonia",author:"RUMA · diseño original",description:"Plancha original inspirada en paisajes y símbolos patagónicos.",category:"Para decorar",icon:"🌿",format:"SVG imprimible · A4",url:"./archivos/descargas/stickers-patagonia.svg",download:true,tags:"Stickers de la Patagonia Plancha original inspirada en paisajes y símbolos patagónicos. imprimir descargar"},
    {title:"Póster: cuidemos la naturaleza",author:"RUMA · diseño original",description:"Afiche original con mensajes sencillos para casa, aula o club.",category:"Para decorar",icon:"🌎",format:"SVG imprimible · A4",url:"./archivos/descargas/poster-cuidemos-la-naturaleza.svg",download:true,tags:"Póster: cuidemos la naturaleza Afiche original con mensajes sencillos para casa, aula o club. imprimir descargar"},
    {title:"Mi registro de lectura",author:"RUMA · diseño original",description:"Anotá cuentos, libros y lo que más te gustó de cada lectura.",category:"Lecturas",icon:"📚",format:"SVG imprimible · A4",url:"./archivos/descargas/registro-lectura.svg",download:true,tags:"Mi registro de lectura Anotá cuentos, libros y lo que más te gustó de cada lectura. imprimir descargar"}
,
    {title:"Mi rutina diaria",author:"RUMA · diseño original",description:"Ficha simple con casilleros para organizar el día.",category:"Para estudiar",icon:"☀️",format:"SVG imprimible · A4",url:"./archivos/descargas/rutina-diaria.svg",download:true,tags:"Mi rutina diaria Ficha simple con casilleros para organizar el día. imprimir descargar"},
    {title:"Señaladores de lectura",author:"RUMA · diseño original",description:"Cuatro señaladores originales para recortar y regalar.",category:"Lecturas",icon:"🔖",format:"SVG imprimible · A4",url:"./archivos/descargas/senaladores-lectura.svg",download:true,tags:"Señaladores de lectura Cuatro señaladores originales para recortar y regalar. imprimir descargar"},
    {title:"Stickers para estudiar",author:"RUMA · diseño original",description:"Etiquetas para cuadernos, carpetas y apuntes.",category:"Para estudiar",icon:"✏️",format:"SVG imprimible · A4",url:"./archivos/descargas/stickers-escuela.svg",download:true,tags:"Stickers para estudiar Etiquetas para cuadernos, carpetas y apuntes. imprimir descargar"},
    {title:"Abecedario para imprimir",author:"RUMA · diseño original",description:"Letras grandes en una lámina sencilla para practicar.",category:"Para estudiar",icon:"🔤",format:"SVG imprimible · A4",url:"./archivos/descargas/abecedario-amable.svg",download:true,tags:"Abecedario para imprimir Letras grandes en una lámina sencilla para practicar. imprimir descargar"},
    {title:"Planificador de comidas",author:"RUMA · diseño original",description:"Organizá las comidas de la semana y anotá lo que falta comprar.",category:"Recursos útiles",icon:"🥕",format:"SVG imprimible · A4",url:"./archivos/descargas/planificador-comidas.svg",download:true,tags:"Planificador de comidas Organizá las comidas de la semana y anotá lo que falta comprar. imprimir descargar"}
  ];

  const categoryOrder = ["Lecturas", "Para estudiar", "Recursos útiles", "Para decorar"];
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

      const preview = document.createElement("div");
      preview.className = "resource-preview resource-local-preview";
      const image = document.createElement("img");
      image.className = "resource-artwork";
      image.src = item.url;
      image.alt = "Vista previa de " + item.title;
      image.loading = "lazy";
      const sourceLabel = document.createElement("span");
      sourceLabel.className = "source-label";
      sourceLabel.textContent = "ARCHIVO DENTRO DE RUMA · " + item.format;
      preview.append(image, sourceLabel);

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
      open.download = item.download ? item.url.split("/").pop() : "";
      open.textContent = "Descargar archivo ↓";
      open.setAttribute("aria-label", "Descargar archivo: " + item.title);
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