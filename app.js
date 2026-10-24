/* RUMA: el catálogo solo muestra recursos revisados, alojados y aprobados. */
let resources = [];

const categoryNames = {
  aprender: "Aprender",
  crear: "Crear",
  resolver: "Resolver",
  disfrutar: "Disfrutar"
};

const grid = document.querySelector("#resource-grid");
const search = document.querySelector("#search");
const categoryFilter = document.querySelector("#category-filter");
const regionFilter = document.querySelector("#region-filter");\nconst languageFilter = document.querySelector("#language-filter");

function isSafeDownload(value) {
  const path = String(value || "");
  return /^descargas\/[A-Za-z0-9._/-]+$/.test(path) &&
    !path.includes("..") && !path.includes("//");
}

function safeHttpsUrl(value) {
  try {
    const url = new URL(String(value || ""));
    return url.protocol === "https:" ? url.href : "";
  } catch {
    return "";
  }
}

function renderResources() {
  if (!grid) return;
  const term = (search?.value || "").trim().toLocaleLowerCase("es");
  const category = categoryFilter?.value || "todas";
  const region = regionFilter?.value || "todas";\n  const language = languageFilter?.value || "todos";
  const filtered = resources.filter(item => {
    const text = [
      item.title, item.description, item.format, item.author,
      item.regionLabel, item.region, item.subcategory, item.languageLabel
    ].join(" ").toLocaleLowerCase("es");
    return (category === "todas" || item.category === category) &&
      (region === "todas" || item.region === region) &&
      text.includes(term);
  });

  if (!filtered.length) {
    if (resources.length) {
      grid.innerHTML = '<div class="empty-note"><strong>No encontramos coincidencias.</strong><p>Probá otra palabra o cambiá la puerta o la región elegida.</p><button class="clear-filters" id="clear-filters" type="button">Mostrar todos los recursos</button></div>';
      document.querySelector("#clear-filters")?.addEventListener("click", () => {
        if (search) search.value = "";
        if (categoryFilter) categoryFilter.value = "todas";
        if (regionFilter) regionFilter.value = "todas";
        renderResources();
      });
    } else {
      grid.innerHTML = '<div class="empty-note"><strong>Este estante todavía se está preparando.</strong><p>Estamos revisando permisos y reuniendo archivos que podamos alojar legalmente y ofrecer con una sola descarga.</p></div>';
    }
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const categoryName = categoryNames[item.category] || "Recurso";
    const sourceUrl = safeHttpsUrl(item.source);
    const licenseUrl = safeHttpsUrl(item.licenseUrl);
    const regionLabel = item.regionLabel || "";
    const author = item.author || "";
    const sizeLabel = item.sizeLabel || "";
    const sourceLink = sourceUrl
      ? '<a href="' + escapeHTML(sourceUrl) + '" target="_blank" rel="noopener noreferrer">Fuente original</a>'
      : "";
    const licenseLink = licenseUrl
      ? '<a href="' + escapeHTML(licenseUrl) + '" target="_blank" rel="noopener noreferrer">' + escapeHTML(item.licenseLabel) + '</a>'
      : '<span>' + escapeHTML(item.licenseLabel) + '</span>';

    return '<article class="resource-card">' +
      '<div class="resource-top"><span class="resource-category">' + escapeHTML(categoryName) + '</span><span class="format-pill">' + escapeHTML(item.format || "Archivo") + '</span></div>' +
      '<h3>' + escapeHTML(item.title) + '</h3><p>' + escapeHTML(item.description) + '</p>' +
      '<div class="resource-details">' +
        (regionLabel ? '<span><strong>Alcance:</strong> ' + escapeHTML(regionLabel) + '</span>' : '') +
        (author ? '<span><strong>Autoría:</strong> ' + escapeHTML(author) + '</span>' : '') +
        (item.languageLabel ? '<span><strong>Idioma:</strong> ' + escapeHTML(item.languageLabel) + '</span>' : '') +
        (sizeLabel ? '<span><strong>Tamaño:</strong> ' + escapeHTML(sizeLabel) + '</span>' : '') +
        '<span><strong>Licencia:</strong> ' + licenseLink + '</span>' +
        (sourceLink ? '<span>' + sourceLink + '</span>' : '') +
      '</div>' +
      '<div class="resource-meta"><span>Archivo alojado en RUMA</span><a class="download-link" href="' + escapeHTML(item.download) + '" download>Descargar ↓</a></div>' +
      '</article>';
  }).join("");
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

search?.addEventListener("input", renderResources);
categoryFilter?.addEventListener("change", renderResources);
regionFilter?.addEventListener("change", renderResources);\nlanguageFilter?.addEventListener("change", renderResources);

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
    if (copyStatus) copyStatus.textContent = "Alias copiado. ¡Gracias por pasar!";
  } catch {
    const range = document.createRange();
    if (aliasValue) range.selectNodeContents(aliasValue);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
    if (copyStatus) copyStatus.textContent = "Seleccioná el alias y copialo.";
  }
});

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

// El catálogo vive separado. No se muestra nada que no tenga archivo local seguro.
fetch("./recursos.json")
  .then(response => {
    if (!response.ok) throw new Error("No se pudo leer el catálogo");
    return response.json();
  })
  .then(catalog => {
    if (!catalog || !Array.isArray(catalog.resources)) throw new Error("Formato de catálogo incorrecto");
    resources = catalog.resources.filter(item =>
      item &&
      item.approved === true &&
      typeof item.title === "string" &&
      typeof item.description === "string" &&
      categoryNames[item.category] &&
      typeof item.format === "string" &&
      typeof item.licenseLabel === "string" &&
      isSafeDownload(item.download) &&
      safeHttpsUrl(item.source) &&
      safeHttpsUrl(item.licenseUrl)
    );
    renderResources();
  })
  .catch(() => {
    if (grid) grid.innerHTML = '<div class="empty-note"><strong>Estamos acomodando el estante.</strong><p>El catálogo no pudo cargarse en este momento. Volvé a intentarlo más tarde.</p></div>';
  });

renderResources();
