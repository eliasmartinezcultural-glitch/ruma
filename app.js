/* RUMA: el catálogo solo muestra recursos revisados y aprobados. */
const resources = [];

const categoryNames = {
  aprender: "Aprender",
  crear: "Crear",
  resolver: "Resolver",
  disfrutar: "Disfrutar"
};

const grid = document.querySelector("#resource-grid");
const search = document.querySelector("#search");
const categoryFilter = document.querySelector("#category-filter");

function renderResources() {
  if (!grid) return;
  const term = (search?.value || "").trim().toLocaleLowerCase("es");
  const category = categoryFilter?.value || "todas";
  const filtered = resources.filter(item => {
    const text = [item.title, item.description, item.format, item.author].join(" ").toLocaleLowerCase("es");
    return (category === "todas" || item.category === category) && text.includes(term);
  });

  if (!filtered.length) {
    const selected = category === "todas" ? "" : " en la puerta " + categoryNames[category];
    grid.innerHTML = '<div class="empty-note"><strong>Este estante todavía se está preparando.</strong><p>Estamos revisando permisos y reuniendo archivos que podamos alojar legalmente y ofrecer con una sola descarga. Pronto habrá nuevos hallazgos' + escapeHTML(selected) + '.</p></div>';
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const categoryName = categoryNames[item.category] || "Recurso";
    return '<article class="resource-card">' +
      '<div class="resource-top"><span class="resource-category">' + escapeHTML(categoryName) + '</span><span class="format-pill">' + escapeHTML(item.format || "Archivo") + '</span></div>' +
      '<h3>' + escapeHTML(item.title) + '</h3><p>' + escapeHTML(item.description) + '</p>' +
      '<div class="resource-meta"><span>Licencia: ' + escapeHTML(item.licenseLabel || "Consultar ficha") + '</span><a class="download-link" href="' + safeDownload(item.download) + '" download>Obtener ↓</a></div>' +
      '</article>';
  }).join("");
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function safeDownload(value) {
  // Only same-site relative download paths are accepted in the local catalogue.
  const path = String(value || "");
  if (!path || path.startsWith("/") || path.includes("..") || /^[a-z]+:/i.test(path)) return "#catalogo";
  return escapeHTML(path);
}

search?.addEventListener("input", renderResources);
categoryFilter?.addEventListener("change", renderResources);

document.querySelectorAll("[data-category]").forEach(link => {
  link.addEventListener("click", () => {
    if (categoryFilter) categoryFilter.value = link.dataset.category || "todas";
    renderResources();
  });
});

const copyButton = document.querySelector("#copy-alias");
const aliasValue = document.querySelector("#alias-value");
const copyStatus = document.querySelector("#copy-status");
copyButton?.addEventListener("click", async () => {
  const alias = aliasValue?.textContent?.trim() || "ocarina.guitarra";
  try {
    await navigator.clipboard.writeText(alias);
    copyStatus.textContent = "Alias copiado. ¡Gracias por pasar!";
  } catch {
    const range = document.createRange();
    range.selectNodeContents(aliasValue);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
    copyStatus.textContent = "Seleccioná el alias y copialo.";
  }
});

renderResources();


// Opciones de lectura: simples, visibles y sin guardar datos personales.
const textLarger = document.querySelector("#text-larger");
const textSmaller = document.querySelector("#text-smaller");
const textReset = document.querySelector("#text-reset");
function setReadingSize(size) {
  document.body.classList.toggle("text-large", size === "large");
  document.body.classList.toggle("text-small", size === "small");
  [textLarger, textSmaller, textReset].forEach(button => {
    if (button) button.setAttribute("aria-pressed", "false");
  });
  const active = size === "large" ? textLarger : size === "small" ? textSmaller : textReset;
  active?.setAttribute("aria-pressed", "true");
}
textLarger?.addEventListener("click", () => setReadingSize("large"));
textSmaller?.addEventListener("click", () => setReadingSize("small"));
textReset?.addEventListener("click", () => setReadingSize("normal"));
