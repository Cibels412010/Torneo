function borrarEvento(boton){
    //obtener el id del evento a partir del id del boton
    const idEvento = boton.getAttribute("data-id");
    console.log("ID del evento a borrar:", idEvento); // Depuración
    const token = localStorage.getItem('jwtToken');

    // Muestra una alerta de confirmación
    mostrarModalConfirmacion("¿Está seguro que desea borrar el evento?", function() {
        fetch(`http://localhost:5014/Api/Evento/Evento/${idEvento}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            }
        })
        .then(response => {
            if (response.ok) {
                mostrarModalExito("Evento eliminado exitosamente");
                boton.closest("tr").remove();
            } else {
                mostrarModalExito("Hubo un error al intentar borrar el evento");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            mostrarModalExito("Ocurrió un error inesperado. Inténtelo nuevamente más tarde.");
        });
    });
}

// Asumiendo que el botón tiene un id 'botonBorrar'
document.getElementById('botonBorrr').addEventListener('click', function() {
    borrarEvento(this);
});