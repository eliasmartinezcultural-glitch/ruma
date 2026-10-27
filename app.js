// RUMA: búsqueda local del catálogo. No consulta servidores ni inventa resultados.
(() => {
  const form = document.querySelector("#form-busqueda");
  const input = document.querySelector("#consulta");
  const resultado = document.querySelector("#resultado-busqueda");
  const lista = document.querySelector("#lista-recursos");
  const sinRecursos = document.querySelector("#sin-recursos");
  const contador = document.querySelector("#contador-recursos");
  const filtros = [...document.querySelectorAll("[data-filtro]")];
  const puertasSinCoincidencias = document.querySelector("#sin-coincidencias");
  const verTodo = document.querySelector("#ver-todo");
  const recursos = Array.isArray(window.RUMA_RECURSOS) ? window.RUMA_RECURSOS : [];
  let filtroActual = "todos";
  let consultaActual = "";

  const escapar = (valor = "") => String(valor).replace(/[&<>"']/g, caracter => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[caracter]);

  const normalizar = (valor = "") => String(valor)
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  function tarjeta(recurso) {
    const imagen = recurso.vistaPrevia
      ? '<div class="recurso-preview"><img src="' + escapar(recurso.vistaPrevia) + '" alt="Vista previa: ' + escapar(recurso.titulo) + '" loading="lazy"></div>'
      : '<div class="recurso-preview sin-imagen" aria-hidden="true">r.</div>';
    const accionPrincipal = recurso.modoAcceso === "directo" && recurso.descarga
      ? '<a class="recurso-accion" href="' + escapar(recurso.descarga) + '" target="_blank" rel="noopener noreferrer">Abrir archivo ↗</a>'
      : '<a class="recurso-accion" href="' + escapar(recurso.fuente) + '" target="_blank" rel="noopener noreferrer">Ir a fuente oficial ↗</a>';
    const categoria = {aprender:"Aprender", trabajar:"Trabajar", explorar:"Explorar", disfrutar:"Disfrutar"}[recurso.categoria] || "Recurso";
    const formato = recurso.formato ? '<p class="recurso-meta"><strong>Formato:</strong> ' + escapar(recurso.formato) + '</p>' : "";
    const creador = recurso.creador ? '<p class="recurso-meta"><strong>Creado por:</strong> ' + escapar(recurso.creador) + '</p>' : "";
    const licencia = recurso.licencia
      ? '<p class="recurso-meta"><strong>Licencia:</strong> <a href="' + escapar(recurso.licenciaUrl || recurso.fuente) + '" target="_blank" rel="noopener noreferrer">' + escapar(recurso.licencia) + ' ↗</a></p>'
      : '<p class="recurso-meta"><strong>Licencia:</strong> consultar la fuente original</p>';
    return '<article class="recurso-card" data-recurso="' + escapar(recurso.id) + '">' +
      imagen + '<div class="recurso-cuerpo">' +
      '<span class="recurso-tipo">' + escapar(categoria) + ' · ' + escapar(recurso.alcance || "Mundo hispanohablante") + '</span>' +
      '<h3>' + escapar(recurso.titulo) + '</h3>' +
      '<p class="recurso-descripcion">' + escapar(recurso.descripcion) + '</p>' +
      formato + creador + licencia +
      '<p class="recurso-nota">' + escapar(recurso.nota || recurso.estadoLegal || "") + '</p>' +
      '<div class="recurso-acciones">' + accionPrincipal +
      '<a class="recurso-accion secundario" href="' + escapar(recurso.fuente) + '" target="_blank" rel="noopener noreferrer">Ver fuente y créditos ↗</a></div>' +
      '</div></article>';
  }

  function aplicarFiltros() {
    const terminos = normalizar(consultaActual).split(/\s+/).filter(Boolean);
    const encontrados = recursos.filter(recurso => {
      const categoriaCoincide = filtroActual === "todos" || recurso.categoria === filtroActual;
      const texto = normalizar([
        recurso.titulo, recurso.descripcion, recurso.categoria, recurso.alcance,
        recurso.formato, recurso.creador, recurso.licencia, ...(recurso.etiquetas || [])
      ].join(" "));
      const textoCoincide = !terminos.length || terminos.some(termino => texto.includes(termino));
      return categoriaCoincide && textoCoincide;
    });

    lista.innerHTML = encontrados.map(tarjeta).join("");
    sinRecursos.hidden = encontrados.length > 0;
    contador.textContent = encontrados.length + (encontrados.length === 1 ? " recurso" : " recursos");
    puertasSinCoincidencias.hidden = true;
    verTodo.hidden = true;

    if (!consultaActual && filtroActual === "todos") {
      resultado.textContent = "Primera capa de la colección: " + recursos.length + " hallazgos documentados. La selección crecerá a medida que verifiquemos más archivos.";
    } else if (encontrados.length) {
      resultado.textContent = "Encontramos " + encontrados.length + (encontrados.length === 1 ? " recurso" : " recursos") + " en la selección actual.";
    } else {
      resultado.textContent = "Todavía no encontramos un recurso que coincida. La búsqueda continúa: probá con otra palabra.";
    }
  }

  filtros.forEach(boton => {
    boton.addEventListener("click", () => {
      filtroActual = boton.dataset.filtro;
      filtros.forEach(item => {
        const activo = item === boton;
        item.classList.toggle("activo", activo);
        item.setAttribute("aria-pressed", String(activo));
      });
      aplicarFiltros();
    });
  });

  form.addEventListener("submit", evento => {
    evento.preventDefault();
    consultaActual = input.value.trim();
    filtroActual = "todos";
    filtros.forEach(item => {
      const activo = item.dataset.filtro === "todos";
      item.classList.toggle("activo", activo);
      item.setAttribute("aria-pressed", String(activo));
    });
    aplicarFiltros();
    document.querySelector("#recursos").scrollIntoView({behavior:"smooth", block:"start"});
  });

  input.addEventListener("input", () => {
    if (!input.value.trim()) {
      consultaActual = "";
      aplicarFiltros();
    }
  });

  verTodo.addEventListener("click", () => {
    input.value = "";
    consultaActual = "";
    filtroActual = "todos";
    filtros.forEach(item => {
      const activo = item.dataset.filtro === "todos";
      item.classList.toggle("activo", activo);
      item.setAttribute("aria-pressed", String(activo));
    });
    aplicarFiltros();
    input.focus();
  });

  aplicarFiltros();
})();
