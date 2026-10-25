// RUMA: navegación y búsqueda local de las cuatro puertas. No inventa recursos.
(() => {
  const form = document.querySelector("#form-busqueda");
  const input = document.querySelector("#consulta");
  const resultado = document.querySelector("#resultado-busqueda");
  const puertas = [...document.querySelectorAll(".puerta")];
  const sinCoincidencias = document.querySelector("#sin-coincidencias");
  const verTodo = document.querySelector("#ver-todo");

  function buscar(texto) {
    const consulta = texto.trim().toLocaleLowerCase("es");
    let cantidad = 0;

    puertas.forEach((puerta) => {
      const textoPuerta = (puerta.dataset.categoria + " " + puerta.dataset.palabras + " " + puerta.innerText).toLocaleLowerCase("es");
      const coincide = !consulta || consulta.split(/\s+/).some((palabra) => textoPuerta.includes(palabra));
      puerta.hidden = !coincide;
      if (coincide) cantidad++;
    });

    sinCoincidencias.hidden = cantidad !== 0;
    verTodo.hidden = cantidad === puertas.length;
    if (!consulta) {
      resultado.textContent = "Estamos preparando la primera selección de recursos. Mientras tanto, podés conocer nuestras cuatro puertas.";
    } else if (cantidad) {
      resultado.textContent = "Encontramos " + cantidad + (cantidad === 1 ? " puerta relacionada" : " puertas relacionadas") + " con tu búsqueda. Las colecciones todavía están en preparación: aún no hay descargas publicadas.";
    } else {
      resultado.textContent = "Todavía no encontramos una categoría relacionada. Probá otra palabra.";
    }
  }

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    buscar(input.value);
    document.querySelector("#colecciones").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  input.addEventListener("input", () => {
    if (!input.value.trim()) buscar("");
  });

  verTodo.addEventListener("click", () => {
    input.value = "";
    buscar("");
    input.focus();
  });
})();