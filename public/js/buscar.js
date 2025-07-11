function buscar() {
  const query = document.getElementById("busqueda").value;

  fetch(`/buscar?q=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(data => {
      const lista = document.getElementById("resultados");
      lista.innerHTML = "";

      if (data.length === 0) {
        lista.innerHTML = "<li>No se encontraron resultados</li>";
        return;
      }

      data.forEach(circular => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = circular.url;
        link.target = "_blank";
        link.textContent = `${circular.id} - ${circular.titulo}`;
        li.appendChild(link);
        lista.appendChild(li);
      });
    });
}

function limpiar() {
  document.getElementById("busqueda").value = "";
  document.getElementById("resultados").innerHTML = "";
}
