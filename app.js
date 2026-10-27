/* RUMA · una biblioteca de paso: buscar, ver, descargar y seguir. */
(() => {
  "use strict";
  const $ = (selector) => document.querySelector(selector);
  const resources = Array.isArray(window.RUMA_RECURSOS) ? window.RUMA_RECURSOS : [];
  const list = $("#lista-recursos"), input = $("#consulta"), form = $("#form-busqueda");
  const result = $("#resultado-busqueda"), count = $("#contador-recursos"), empty = $("#sin-recursos");
  const zoneMessage = $("#mensaje-zona"), modal = $("#vista-recurso"), modalContent = $("#modal-contenido");
  let query = "", zone = "todos";

  const zoneLabels = {
    todos: "Todos los estantes",
    chanar: "San Patricio del Chañar",
    neuquen: "Neuquén",
    patagonia: "Patagonia",
    argentina: "Argentina",
    hispanoamerica: "América y mundo hispanohablante"
  };
  function escapeHtml(value = "") {
    return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  }
  function norm(value = "") {
    return String(value).toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function safeUrl(value) {
    try { const url = new URL(value, window.location.href); return ["https:","http:"].includes(url.protocol) ? url.href : "#"; }
    catch (_) { return "#"; }
  }
  function region(item) {
    const place = norm([item.alcance,item.titulo,item.descripcion,...(item.etiquetas || [])].join(" "));
    if (place.includes("san patricio del chanar") || place.includes("san patricio del chañar") || place.includes("chañar")) return "chanar";
    if (place.includes("neuquen") || place.includes("alumine") || place.includes("zapala") || place.includes("huinganco") || place.includes("las ovejas") || place.includes("pulmari") || place.includes("rahue")) return "neuquen";
    if (place.includes("patagonia") || place.includes("esquel") || place.includes("chubut")) return "patagonia";
    if (place.includes("argentina")) return "argentina";
    return "hispanoamerica";
  }
  const zoneRank = {chanar:0,neuquen:1,patagonia:2,argentina:3,hispanoamerica:4};
  function matchesZone(item) {
    if (zone === "todos") return true;
    const itemZone = region(item);
    if (zone === "neuquen") return itemZone === "neuquen";
    if (zone === "patagonia") return ["chanar","neuquen","patagonia"].includes(itemZone);
    if (zone === "argentina") return ["chanar","neuquen","patagonia","argentina"].includes(itemZone);
    if (zone === "hispanoamerica") return itemZone === "hispanoamerica" || itemZone === "argentina";
    return itemZone === zone;
  }
  function cover(item, large = false) {
    const classes = "portada-recurso portada-" + escapeHtml(item.categoria || "explorar") + (large ? " portada-grande" : "");
    if (item.vistaPrevia) {
      return '<div class="recurso-preview'+(large ? ' preview-grande' : '')+'"><img src="'+escapeHtml(safeUrl(item.vistaPrevia))+'" alt="Vista previa de '+escapeHtml(item.titulo)+'" loading="lazy"><span class="etiqueta-vista">Vista previa</span></div>';
    }
    return '<div class="'+classes+'"><span class="portada-icono" aria-hidden="true">'+(item.categoria === "aprender" ? "✳" : item.categoria === "trabajar" ? "↗" : item.categoria === "disfrutar" ? "♡" : "⌁")+'</span><strong>'+escapeHtml(item.titulo)+'</strong><small>VISTA PREVIA DESCRIPTIVA</small><p>'+escapeHtml(item.descripcion)+'</p></div>';
  }
  function actionTarget(item) {
    return safeUrl(item.modoAcceso === "directo" && item.descarga ? item.descarga : item.fuente);
  }
  function card(item) {
    const direct = item.modoAcceso === "directo" && Boolean(item.descarga);
    return '<article class="recurso-card" data-id="'+escapeHtml(item.id)+'">'+
      '<div class="zona-vista">'+cover(item)+'</div>'+
      '<div class="recurso-cuerpo"><p class="recurso-lugar">'+escapeHtml(item.alcance || "Alcance general")+'</p>'+
      '<h3>'+escapeHtml(item.titulo)+'</h3><p class="recurso-descripcion">'+escapeHtml(item.descripcion)+'</p>'+
      '<div class="recurso-acciones"><button class="accion-ver" type="button" data-ver="'+escapeHtml(item.id)+'">Ver</button>'+
      '<a class="accion-descargar" href="'+escapeHtml(actionTarget(item))+'" target="_blank" rel="noopener noreferrer">'+"Descargar"+'</a></div>'+
      (direct ? '' : '<p class="nota-fuente">La descarga se ofrece desde la fuente oficial.</p>')+
      '</div></article>';
  }
  function modalView(item) {
    const direct = item.modoAcceso === "directo" && Boolean(item.descarga);
    modalContent.innerHTML = '<div class="modal-ficha">'+cover(item,true)+'<div class="modal-detalles">'+
      '<p class="recurso-lugar">'+escapeHtml(item.alcance || "Alcance general")+'</p><h2 id="modal-titulo">'+escapeHtml(item.titulo)+'</h2>'+
      '<p>'+escapeHtml(item.descripcion)+'</p>'+
      '<dl><div><dt>Creado por</dt><dd>'+escapeHtml(item.creador || "Autoría según la fuente original")+'</dd></div>'+
      '<div><dt>Formato</dt><dd>'+escapeHtml(item.formato || "Consultar en la fuente original")+'</dd></div>'+
      '<div><dt>Licencia</dt><dd>'+escapeHtml(item.licencia || "Consultar la fuente original")+'</dd></div></dl>'+
      '<p class="nota-licencia">'+escapeHtml(item.estadoLegal || item.nota || "Revisá la ficha original para conocer las condiciones de uso.")+'</p>'+
      '<p class="modal-fuente">Fuente: <a href="'+escapeHtml(safeUrl(item.fuente))+'" target="_blank" rel="noopener noreferrer">consultar la ficha original ↗</a></p>'+
      (direct ? '<a class="accion-descargar modal-descargar" href="'+escapeHtml(actionTarget(item))+'" target="_blank" rel="noopener noreferrer">Descargar</a>' : '<p class="nota-fuente">Este material se obtiene desde la fuente oficial.</p>')+
      '</div></div>';
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open","");
  }
  function render() {
    const terms = norm(query).split(/\s+/).filter(Boolean);
    const found = resources.filter(item => {
      if (!matchesZone(item)) return false;
      const haystack = norm([item.titulo,item.descripcion,item.categoria,item.alcance,item.formato,item.creador,item.licencia,item.estadoLegal,item.nota,...(item.etiquetas || [])].join(" "));
      return terms.every(term => haystack.includes(term));
    }).sort((a,b) => zoneRank[region(a)] - zoneRank[region(b)] || String(a.titulo).localeCompare(String(b.titulo),"es"));
    list.innerHTML = found.map(card).join("");
    count.textContent = found.length + (found.length === 1 ? " recurso" : " recursos");
    empty.hidden = found.length > 0;
    $("#mostrar-todo").hidden = zone === "todos" && !query;
    if (query) result.textContent = found.length ? "Encontramos "+found.length+(found.length === 1 ? " resultado." : " resultados.") : "No encontramos ese término en este estante.";
    else result.textContent = found.length ? "Mostrando "+found.length+(found.length === 1 ? " recurso." : " recursos.") : "Este estante todavía no tiene recursos publicados.";
    if (zone === "chanar" && found.length === 0) {
      empty.textContent = "Estamos buscando materiales propios de San Patricio del Chañar. Preferimos esperar y verificar antes que inventar recursos o permisos.";
      zoneMessage.textContent = "Primero el pueblo. La colección local está en investigación; todavía no hay archivos publicados con permisos verificados.";
    } else {
      empty.textContent = "No encontramos algo con esas palabras en este estante. Probá una palabra más sencilla o elegí otro lugar.";
      zoneMessage.textContent = zone === "todos" ? "Estás viendo todos los estantes, ordenados desde lo más cercano hacia lo más amplio." : "Estante elegido: "+zoneLabels[zone]+".";
    }
    list.querySelectorAll("[data-ver]").forEach(button => button.addEventListener("click", () => {
      const item = resources.find(entry => entry.id === button.dataset.ver);
      if (item) modalView(item);
    }));
  }
  document.querySelectorAll("[data-zona]").forEach(button => button.addEventListener("click", () => {
    zone = button.dataset.zona;
    document.querySelectorAll("[data-zona]").forEach(other => {
      const active = other === button;
      other.classList.toggle("activa",active);
      other.setAttribute("aria-pressed",String(active));
    });
    render();
    $("#recursos").scrollIntoView({behavior:"smooth",block:"start"});
  }));
  form.addEventListener("submit", event => {
    event.preventDefault(); query = input.value.trim(); render();
    $("#recursos").scrollIntoView({behavior:"smooth",block:"start"});
  });
  input.addEventListener("input", () => {
    if (!input.value.trim()) { query = ""; render(); }
  });
  $("#mostrar-todo").addEventListener("click", () => {
    zone = "todos"; query = ""; input.value = "";
    document.querySelectorAll("[data-zona]").forEach(button => {
      const active = button.dataset.zona === "todos";
      button.classList.toggle("activa",active); button.setAttribute("aria-pressed",String(active));
    });
    render();
  });
  $("#cerrar-vista").addEventListener("click", () => modal.close ? modal.close() : modal.removeAttribute("open"));
  modal.addEventListener("click", event => {
    if (event.target === modal) modal.close();
  });
  const copyButton = $("#copiar-alias"), alias = $("#alias-ruma"), copyMessage = $("#mensaje-alias");
  copyButton.addEventListener("click", async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(alias.textContent.trim());
      else {
        const field = document.createElement("textarea"); field.value = alias.textContent.trim(); field.setAttribute("readonly","");
        field.style.position = "fixed"; field.style.opacity = "0"; document.body.appendChild(field); field.select();
        const copied = document.execCommand("copy"); field.remove(); if (!copied) throw new Error("No se pudo copiar");
      }
      copyMessage.textContent = "Alias copiado. ¡Gracias por acompañar!";
    } catch (_) { copyMessage.textContent = "Podés escribirlo: ocarina.guitarra"; }
  });
  render();
})();
