/* RUMA · Catálogo estático, búsqueda local, filtros y favoritos guardados en este dispositivo. */
(() => {
  "use strict";
  const $ = (selector) => document.querySelector(selector);
  const form = $("#form-busqueda");
  const input = $("#consulta");
  const result = $("#resultado-busqueda");
  const list = $("#lista-recursos");
  const empty = $("#sin-recursos");
  const count = $("#contador-recursos");
  const filterButtons = [...document.querySelectorAll("[data-filtro]")];
  const accessButtons = [...document.querySelectorAll("[data-acceso]")];
  const savedButton = $("#ver-guardados");
  const clearButton = $("#limpiar-busqueda");
  const resources = Array.isArray(window.RUMA_RECURSOS) ? window.RUMA_RECURSOS : [];
  const storageKey = "ruma-guardados-v1";
  let category = "todos";
  let access = "todos";
  let query = "";
  let onlySaved = false;
  let saved = readSaved();

  function readSaved() {
    try {
      const value = JSON.parse(localStorage.getItem(storageKey) || "[]");
      return new Set(Array.isArray(value) ? value : []);
    } catch (_) { return new Set(); }
  }
  function writeSaved() {
    try { localStorage.setItem(storageKey, JSON.stringify([...saved])); } catch (_) {}
  }
  function escapeHtml(value = "") {
    return String(value).replace(/[&<>"']/g, ch => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
    })[ch]);
  }
  function norm(value = "") {
    return String(value).toLocaleLowerCase("es")
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function categoryName(value) {
    return ({aprender:"Aprender",trabajar:"Trabajar",explorar:"Explorar",disfrutar:"Disfrutar"})[value] || "Hallazgo";
  }
  function safeUrl(value) {
    try {
      const u = new URL(value, window.location.href);
      return ["https:","http:"].includes(u.protocol) ? u.href : "#";
    } catch (_) { return "#"; }
  }
  function card(item) {
    const hasPreview = Boolean(item.vistaPrevia);
    const preview = hasPreview
      ? '<div class="recurso-preview"><img src="'+escapeHtml(safeUrl(item.vistaPrevia))+'" alt="Vista previa de '+escapeHtml(item.titulo)+'" loading="lazy"></div>'
      : '<div class="recurso-preview sin-imagen" aria-hidden="true"><span>r.</span><small>UN HALLAZGO RUMA</small></div>';
    const direct = item.modoAcceso === "directo" && item.descarga;
    const accessLabel = direct ? "Archivo directo" : "Fuente oficial";
    const mainAction = direct
      ? '<a class="recurso-accion" href="'+escapeHtml(safeUrl(item.descarga))+'" target="_blank" rel="noopener noreferrer">Obtener archivo ↗</a>'
      : '<a class="recurso-accion" href="'+escapeHtml(safeUrl(item.fuente))+'" target="_blank" rel="noopener noreferrer">Ir a la fuente ↗</a>';
    const licenseHref = item.licenciaUrl || item.fuente;
    const saveLabel = saved.has(item.id) ? "♥ Guardado" : "♡ Guardar";
    const saveClass = saved.has(item.id) ? "recurso-accion guardar guardado" : "recurso-accion guardar secundario";
    const terms = (item.etiquetas || []).slice(0,6).map(tag => '<span class="etiqueta">'+escapeHtml(tag)+'</span>').join("");
    return '<article class="recurso-card" data-recurso="'+escapeHtml(item.id)+'">'+
      preview+'<div class="recurso-cuerpo">'+
      '<div class="recurso-insignias"><span class="recurso-tipo">'+escapeHtml(categoryName(item.categoria))+'</span><span class="tipo-acceso">'+escapeHtml(accessLabel)+'</span></div>'+
      '<p class="recurso-alcance">'+escapeHtml(item.alcance || "Alcance por confirmar")+'</p>'+
      '<h3>'+escapeHtml(item.titulo)+'</h3>'+
      '<p class="recurso-descripcion">'+escapeHtml(item.descripcion)+'</p>'+
      '<p class="recurso-meta"><strong>Formato:</strong> '+escapeHtml(item.formato || "Por confirmar")+'</p>'+
      '<p class="recurso-meta"><strong>Creado por:</strong> '+escapeHtml(item.creador || "Autoría en revisión")+'</p>'+
      '<p class="recurso-meta"><strong>Licencia:</strong> <a href="'+escapeHtml(safeUrl(licenseHref))+'" target="_blank" rel="noopener noreferrer">'+escapeHtml(item.licencia || "Consultar ficha original")+' ↗</a></p>'+
      '<details class="recurso-detalles"><summary>Qué conviene saber</summary><p>'+escapeHtml(item.nota || item.estadoLegal || "")+'</p><p class="estado-legal"><strong>Revisión:</strong> '+escapeHtml(item.estadoLegal || "Consultar la fuente antes de reutilizar")+'</p></details>'+
      '<div class="etiquetas">'+terms+'</div>'+
      '<div class="recurso-acciones">'+mainAction+
      '<a class="recurso-accion secundario" href="'+escapeHtml(safeUrl(item.fuente))+'" target="_blank" rel="noopener noreferrer">Autoría y origen ↗</a>'+
      '<button class="'+saveClass+'" type="button" data-guardar="'+escapeHtml(item.id)+'" aria-pressed="'+String(saved.has(item.id))+'">'+saveLabel+'</button></div>'+
      '</div></article>';
  }
  function matches(item) {
    if (category !== "todos" && item.categoria !== category) return false;
    if (access === "directo" && !(item.modoAcceso === "directo" && item.descarga)) return false;
    if (access === "fuente" && item.modoAcceso !== "fuente") return false;
    if (onlySaved && !saved.has(item.id)) return false;
    const terms = norm(query).split(/\s+/).filter(Boolean);
    if (!terms.length) return true;
    const haystack = norm([
      item.titulo,item.descripcion,item.categoria,item.alcance,item.formato,
      item.creador,item.licencia,item.estadoLegal,item.nota,...(item.etiquetas || [])
    ].join(" "));
    return terms.every(term => haystack.includes(term));
  }
  function render() {
    const found = resources.filter(matches);
    list.innerHTML = found.map(card).join("");
    empty.hidden = found.length > 0;
    count.textContent = found.length + (found.length === 1 ? " recurso" : " recursos");
    savedButton.setAttribute("aria-pressed", String(onlySaved));
    savedButton.textContent = onlySaved ? "♥ Ver todos" : "♡ Mis guardados ("+saved.size+")";
    if (onlySaved) result.textContent = found.length
      ? "Tus hallazgos guardados en este dispositivo."
      : "Todavía no guardaste recursos que coincidan con estos filtros.";
    else if (query || category !== "todos" || access !== "todos") result.textContent = found.length
      ? "Encontramos "+found.length+(found.length === 1 ? " recurso" : " recursos")+" que coinciden con tu búsqueda."
      : "Todavía no encontramos algo que coincida. Probá otra palabra o elegí otra puerta.";
    else result.textContent = "La caja reúne "+resources.length+" hallazgos seleccionados. Cada ficha conserva autoría, licencia y camino de acceso.";
    list.querySelectorAll("[data-guardar]").forEach(button => button.addEventListener("click", () => {
      const id = button.dataset.guardar;
      if (saved.has(id)) saved.delete(id); else saved.add(id);
      writeSaved();
      render();
    }));
    updateDoorCounts();
  }
  function updateDoorCounts() {
    document.querySelectorAll("[data-categoria]").forEach(door => {
      const total = resources.filter(item => item.categoria === door.dataset.categoria).length;
      const status = door.querySelector(".estado");
      if (status) status.innerHTML = '<i></i> '+total+(total === 1 ? " recurso en la caja" : " recursos en la caja");
    });
  }
  document.querySelectorAll("[data-categoria]").forEach(door => {
    const name = door.dataset.categoria;
    door.setAttribute("role","button");
    door.setAttribute("tabindex","0");
    door.setAttribute("aria-label","Explorar la puerta "+categoryName(name));
    door.addEventListener("click", () => setCategory(name));
    door.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setCategory(name); }
    });
  });
  function setCategory(value) {
    category = value;
    filterButtons.forEach(button => {
      const active = button.dataset.filtro === value;
      button.classList.toggle("activo", active);
      button.setAttribute("aria-pressed", String(active));
    });
    onlySaved = false;
    render();
    $("#recursos").scrollIntoView({behavior:"smooth",block:"start"});
  }
  filterButtons.forEach(button => button.addEventListener("click", () => setCategory(button.dataset.filtro)));
  accessButtons.forEach(button => button.addEventListener("click", () => {
    access = button.dataset.acceso;
    accessButtons.forEach(other => {
      const active = other === button;
      other.classList.toggle("activo", active);
      other.setAttribute("aria-pressed", String(active));
    });
    onlySaved = false;
    render();
  }));
  form.addEventListener("submit", event => {
    event.preventDefault();
    query = input.value.trim();
    category = "todos";
    onlySaved = false;
    filterButtons.forEach(button => {
      const active = button.dataset.filtro === "todos";
      button.classList.toggle("activo", active);
      button.setAttribute("aria-pressed", String(active));
    });
    render();
    $("#recursos").scrollIntoView({behavior:"smooth",block:"start"});
  });
  input.addEventListener("input", () => {
    if (!input.value.trim()) { query = ""; render(); }
  });
  savedButton.addEventListener("click", () => { onlySaved = !onlySaved; render(); $("#recursos").scrollIntoView({behavior:"smooth",block:"start"}); });
  clearButton.addEventListener("click", () => {
    input.value = ""; query = ""; category = "todos"; access = "todos"; onlySaved = false;
    filterButtons.forEach(button => {
      const active = button.dataset.filtro === "todos";
      button.classList.toggle("activo", active); button.setAttribute("aria-pressed",String(active));
    });
    accessButtons.forEach(button => {
      const active = button.dataset.acceso === "todos";
      button.classList.toggle("activo",active); button.setAttribute("aria-pressed",String(active));
    });
    render(); input.focus();
  });
  render();
})();
