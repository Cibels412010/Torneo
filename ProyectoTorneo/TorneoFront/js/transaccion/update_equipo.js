document.addEventListener('DOMContentLoaded', function EditarTorneo() {
    const botonEditar = document.getElementById('botonEditarEquipo');
    const idEquipo = boton.getAttribute("data-id");

    console.log("ID del equipo a borrar:", idEquipo);
    fetch(`http://your-backend-api-url/equipos/${equipoId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('nombre').value = data.nombre;
            document.getElementById('ciudad').value = data.ciudad;
            // Populate other form fields as needed
        })
        .catch(error => console.error('Error fetching equipo data:', error));
});
EditarTorneo();