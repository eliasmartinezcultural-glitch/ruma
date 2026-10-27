(() => {
  const form = document.getElementById("search-form");
  const input = document.getElementById("search");
  const message = document.getElementById("search-message");
  const empty = document.getElementById("empty-state");
  const topics = [...document.querySelectorAll("[data-topic]")];
  function choose(topic) {
    message.textContent = topic
      ? "Tema elegido: " + topic + ". Estamos empezando la búsqueda local; todavía no hay recursos verificados publicados."
      : "Buscamos primero materiales relacionados con nuestro pueblo.";
    empty.querySelector("h3").textContent = topic ? "Buscamos en Chañar: " + topic : "Empezamos por Chañar, de verdad.";
    empty.scrollIntoView({behavior:"smooth",block:"nearest"});
  }
  topics.forEach(button => button.addEventListener("click", () => choose(button.dataset.topic)));
  form.addEventListener("submit", event => {
    event.preventDefault();
    const term = input.value.trim();
    if (!term) {
      message.textContent = "Escribí una palabra para buscar, por ejemplo: Carta Orgánica o mapa.";
      input.focus();
      return;
    }
    message.textContent = "Buscamos en San Patricio del Chañar: «" + term + "». El catálogo está comenzando desde cero; aún no hay resultados locales verificados.";
    empty.querySelector("h3").textContent = "Todavía no tenemos ese material publicado.";
    empty.scrollIntoView({behavior:"smooth",block:"nearest"});
  });
})();