const item = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragmento = document.createDocumentFragment(); // Corregido

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

const fetchData = async () => {
    try {
        const res = await fetch('api.json'); // Asegúrate de que la ruta es correcta
        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`); // Manejo de errores
        const data = await res.json();
        console.log(data);
        mostrarProducto(data);
    } catch (error) {
        console.error("Error al obtener los datos:", error); // Mostrar error en la consola
    }
};

const mostrarProducto = data => {
    data.forEach(producto => {
        templateCard.querySelector('h3').textContent = producto.nombre;
        templateCard.querySelector('p').textContent = producto.precio;
        templateCard.querySelector('img').setAttribute("src", producto.imgUrl);

        const clone = templateCard.cloneNode(true); // Corregido
        fragmento.appendChild(clone);
    });
    item.appendChild(fragmento);
};