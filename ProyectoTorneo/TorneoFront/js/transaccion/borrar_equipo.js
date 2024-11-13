function borrarEquipo(boton) {
    const idEquipo = boton.getAttribute("data-id");
    console.log("ID del equipo a borrar:", idEquipo); // Depuración
    const token = localStorage.getItem('jwtToken');
    // Muestra una alerta de confirmación
    mostrarModalConfirmacion("¿Está seguro que desea borrar el equipo?", function() {

        fetch(`http://localhost:5014/Api/Equipo/Eliminar/${idEquipo}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {
            if (response.ok) {
                mostrarModalExito("Equipo eliminado exitosamente");
                // Opcional: Elimina la fila de la tabla si la respuesta es exitosa
                boton.closest("tr").remove();
            } else {
                mostrarModalExito("Hubo un error al intentar borrar el equipo");
            }
        })
        .catch(error => console.error("Error:", error));
    });
}

// Asumiendo que el botón tiene un id 'botonEditar'
document.querySelectorAll('[id^="botonBorrarEquipo_"]').forEach(boton => {
    boton.addEventListener('click', function() {
        borrarEquipo(this);
    });
});


