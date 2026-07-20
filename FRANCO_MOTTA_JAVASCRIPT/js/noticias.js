document.addEventListener("DOMContentLoaded", () => {
    fetch("data/noticias.json")
        .then(response => response.json())
        .then(data => {
            const contenedor = document.getElementById("contenedor-noticias");
            data.forEach(noticia => {
                contenedor.innerHTML += `<h3>${noticia.titulo}</h3><p>${noticia.texto}</p>`;
            });
        })
        .catch(error => console.error("Error al cargar noticias:", error));
});