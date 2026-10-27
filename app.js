/* RUMA · búsqueda sencilla, una acción principal por recurso y guardados locales. */
(() => {
  "use strict";
  const $ = (selector) => document.querySelector(selector);
  const form = $("#form-busqueda"), input = $("#consulta"), result = $("#resultado-busqueda");
  const list = $("#lista-recursos"), empty = $("#sin-recursos"), count = $("#contador-recursos");
  const filterButtons = [...document.querySelectorAll("[data-filtro]")];
  const accessButtons = [...document.querySelectorAll("[data-acceso]")];
  const savedButton = $("#ver-guardados"), clearButton = $("#limpiar-busqueda");
  const resources = Array.isArray(window.RUMA_RECURSOS) ? window.RUMA_RECURSOS : [];
  const storageKey = "ruma-guardados-v1";
  let category = "todos", access = "todos", query = "", onlySaved = false, saved = readSaved();

  function readSaved() {
    try { const v = JSON.parse(localStorage.getItem(storageKey) || "[]"); return new Set(Array.isArray(v) ? v : []); }
    catch (_) { return new Set(); }
  }
  function writeSaved() { try { localStorage.setItem(storageKey, JSON.stringify([...saved])); } catch (_) {} }
  function escapeHtml(value = "") {
    return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  }
  function norm(value = "") { return String(value).toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
  function categoryName(value) { return ({aprender:"Aprender",trabajar:"Trabajar",explorar:"Explorar",disfrutar:"Disfrutar"})[value] || "Hallazgo"; }
  function categoryIcon(value) { return ({aprender:"✳",trabajar:"↗",explorar:"⌁",disfrutar:"♡"})[value] || "r."; }
  function safeUrl(value) {
    try { const u = new URL(value, window.location.href); return ["https:","http:"].includes(u.protocol) ? u.href : "#"; }
    catch (_) { return "#"; }
  }
  function card(item) {
    const hasPreview = Boolean(item.vistaPrevia);
    const preview = hasPreview
      ? '<div class="recurso-preview"><img src="'+escapeHtml(safeUrl(item.vistaPrevia))+'" alt="Vista previa de '+escapeHtml(item.titulo)+'" loading="lazy"><span class="etiqueta-vista">Vista previa</span></div>'
      : '<div class="recurso-preview portada-recurso portada-'+escapeHtml(item.categoria)+'"><span class="portada-icono" aria-hidden="true">'+categoryIcon(item.categoria)+'</span><strong>'+escapeHtml(item.titulo)+'</strong><small>VISTA PREVIA ORIENTATIVA · '+escapeHtml(item.formato || "RECURSO")+'</small></div>';
    const direct = item.modoAcceso === "directo" && item.descarga;
    const destination = safeUrl(direct ? item.descarga : item.fuente);
    const accessLabel = direct ? "Archivo disponible" : "Enlace a fuente original";
    const actionLabel = direct ? "Ver y obtener archivo ↗" : "Ver y obtener en la fuente ↗";
    const licenseHref = item.licenciaUrl || item.fuente;
    const isSaved = saved.has(item.id);
    const terms = (item.etiquetas || []).slice(0,5).map(tag => '<span class="etiqueta">'+escapeHtml(tag)+'</span>').join("");
    return '<article class="recurso-card" data-recurso="'+escapeHtml(item.id)+'">'+preview+
      '<div class="recurso-cuerpo"><div class="recurso-insignias"><span class="recurso-tipo">'+escapeHtml(categoryName(item.categoria))+'</span><span class="tipo-acceso">'+escapeHtml(accessLabel)+'</span></div>'+
      '<p class="recurso-alcance">'+escapeHtml(item.alcance || "Alcance por confirmar")+'</p><h3>'+escapeHtml(item.titulo)+'</h3>'+
      '<p class="recurso-descripcion">'+escapeHtml(item.descripcion)+'</p>'+
      '<p class="recurso-meta"><strong>Formato:</strong> '+escapeHtml(item.formato || "Por confirmar")+'</p>'+
      '<p class="recurso-meta"><strong>Creado por:</strong> '+escapeHtml(item.creador || "Autoría en revisión")+'</p>'+
      '<p class="recurso-meta"><strong>Licencia:</strong> <a href="'+escapeHtml(safeUrl(licenseHref))+'" target="_blank" rel="noopener noreferrer">'+escapeHtml(item.licencia || "Consultar ficha original")+' ↗</a></p>'+
      '<details class="recurso-detalles"><summary>Antes de obtenerlo</summary><p>'+escapeHtml(item.nota || "")+'</p><p class="estado-legal"><strong>Uso y permisos:</strong> '+escapeHtml(item.estadoLegal || "Consultá las condiciones de la fuente original.")+'</p><p class="recurso-meta"><strong>Origen:</strong> <a href="'+escapeHtml(safeUrl(item.fuente))+'" target="_blank" rel="noopener noreferrer">Consultar la ficha original ↗</a></p></details>'+
      '<div class="etiquetas">'+terms+'</div><div class="recurso-acciones"><a class="recurso-accion accion-principal" href="'+escapeHtml(destination)+'" target="_blank" rel="noopener noreferrer">'+actionLabel+'</a>'+
      '<button class="recurso-accion guardar '+(isSaved ? "guardado" : "secundario")+'" type="button" data-guardar="'+escapeHtml(item.id)+'" aria-pressed="'+String(isSaved)+'" aria-label="'+(isSaved ? "Quitar de mis guardados" : "Guardar este recurso")+'">'+(isSaved ? "♥ Guardado" : "♡ Guardar")+'</button></div></div></article>';
  }
  function matches(item) {
    if (category !== "todos" && item.categoria !== category) return false;
    if (access === "directo" && !(item.modoAcceso === "directo" && item.descarga)) return false;
    if (access === "fuente" && item.modoAcceso !== "fuente") return false;
    if (onlySaved && !saved.has(item.id)) return false;
    const terms = norm(query).split(/\s+/).filter(Boolean);
    if (!terms.length) return true;
    const haystack = norm([item.titulo,item.descripcion,item.categoria,item.alcance,item.formato,item.creador,item.licencia,item.estadoLegal,item.nota,...(item.etiquetas || [])].join(" "));
    return terms.every(term => haystack.includes(term));
  }
  function render() {
    const found = resources.filter(matches);
    list.innerHTML = found.map(card).join("");
    empty.hidden = found.length > 0;
    count.textContent = found.length + (found.length === 1 ? " recurso" : " recursos");
    savedButton.setAttribute("aria-pressed", String(onlySaved));
    savedButton.textContent = onlySaved ? "♥ Ver todos" : "♡ Mis guardados ("+saved.size+")";
    if (onlySaved) result.textContent = found.length ? "Tus hallazgos guardados en este dispositivo." : "Todavía no guardaste recursos que coincidan con estos filtros.";
    else if (query || category !== "todos" || access !== "todos") result.textContent = found.length ? "Encontramos "+found.length+(found.length === 1 ? " recurso" : " recursos")+" para vos." : "Todavía no encontramos algo que coincida. Probá otra palabra o elegí otra puerta.";
    else result.textContent = "Hay "+resources.length+" hallazgos en esta primera caja. Cada uno muestra una vista previa y un camino claro para obtenerlo.";
    list.querySelectorAll("[data-guardar]").forEach(button => button.addEventListener("click", () => {
      const id = button.dataset.guardar; if (saved.has(id)) saved.delete(id); else saved.add(id);
      writeSaved(); render();
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
    door.setAttribute("role","button"); door.setAttribute("tabindex","0");
    door.setAttribute("aria-label","Explorar la puerta "+categoryName(name));
    door.addEventListener("click", () => setCategory(name));
    door.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setCategory(name); } });
  });
  function setCategory(value) {
    category = value;
    filterButtons.forEach(button => { const active = button.dataset.filtro === value; button.classList.toggle("activo",active); button.setAttribute("aria-pressed",String(active)); });
    onlySaved = false; render(); $("#recursos").scrollIntoView({behavior:"smooth",block:"start"});
  }
  filterButtons.forEach(button => button.addEventListener("click", () => setCategory(button.dataset.filtro)));
  accessButtons.forEach(button => button.addEventListener("click", () => {
    access = button.dataset.acceso;
    accessButtons.forEach(other => { const active = other === button; other.classList.toggle("activo",active); other.setAttribute("aria-pressed",String(active)); });
    onlySaved = false; render();
  }));
  form.addEventListener("submit", event => {
    event.preventDefault(); query = input.value.trim(); category = "todos"; onlySaved = false;
    filterButtons.forEach(button => { const active = button.dataset.filtro === "todos"; button.classList.toggle("activo",active); button.setAttribute("aria-pressed",String(active)); });
    render(); $("#recursos").scrollIntoView({behavior:"smooth",block:"start"});
  });
  input.addEventListener("input", () => { if (!input.value.trim()) { query = ""; render(); } });
  savedButton.addEventListener("click", () => { onlySaved = !onlySaved; render(); $("#recursos").scrollIntoView({behavior:"smooth",block:"start"}); });
  clearButton.addEventListener("click", () => {
    input.value = ""; query = ""; category = "todos"; access = "todos"; onlySaved = false;
    filterButtons.forEach(button => { const active = button.dataset.filtro === "todos"; button.classList.toggle("activo",active); button.setAttribute("aria-pressed",String(active)); });
    accessButtons.forEach(button => { const active = button.dataset.acceso === "todos"; button.classList.toggle("activo",active); button.setAttribute("aria-pressed",String(active)); });
    render(); input.focus();
  });

  // Controles de lectura para que cada persona pueda elegir un tamaño cómodo.
  let textScale = 1;
  document.querySelectorAll("[data-texto]").forEach(button => button.addEventListener("click", () => {
    const value = button.dataset.texto;
    textScale = value === "normal" ? 1 : Math.max(.9, Math.min(1.35, textScale + (value === "mas" ? .1 : -.1)));
    document.documentElement.style.setProperty("--escala-lectura", String(textScale));
    document.body.classList.toggle("lectura-ampliada", textScale > 1);
  }));
  const copyButton = $("#copiar-alias"), alias = $("#alias-ruma"), copyMessage = $("#mensaje-alias");
  if (copyButton && alias) copyButton.addEventListener("click", async () => {
    const value = alias.textContent.trim();
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(value);
      else {
        const field = document.createElement("textarea"); field.value = value; field.setAttribute("readonly","");
        field.style.position = "absolute"; field.style.left = "-9999px"; document.body.appendChild(field); field.select();
        const copied = document.execCommand("copy"); field.remove(); if (!copied) throw new Error("No se pudo copiar");
      }
      copyMessage.textContent = "Alias copiado. ¡Gracias por acompañar!";
    } catch (_) { copyMessage.textContent = "Podés escribirlo: ocarina.guitarra"; }
  });
  render();
})();
