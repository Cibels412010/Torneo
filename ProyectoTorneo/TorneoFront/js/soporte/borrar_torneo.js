function borrarTorneo(boton) {
    // Obtiene el id_torneo desde el atributo data-id del botón
    const idTorneo = boton.getAttribute("data-id");
    console.log("ID del torneo a borrar:", idTorneo); // Depuración
    const token = localStorage.getItem('jwtToken');

    // Muestra una alerta de confirmación
    mostrarModalConfirmacion("¿Está seguro que desea borrar el torneo?", function() {
        fetch(`http://localhost:5014/Api/Torneo/Eliminar/${idTorneo}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            }
        })
        .then(response => {
            if (response.ok) {
                mostrarModalExito("Torneo eliminado exitosamente");
                boton.closest("tr").remove();
            } else {
                mostrarModalExito("Hubo un error al intentar borrar el torneo");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            mostrarModalExito("Ocurrió un error inesperado. Inténtelo nuevamente más tarde.");
        });
    });
}

// Asumiendo que el botón tiene un id 'botonEditar'
document.getElementById('botonBorrar').addEventListener('click', function() {
    borrarTorneo(this);
});

function mostrarModalConfirmacion(mensaje, accionConfirmacion) {
    // Cambia el mensaje en el modal
    document.getElementById('modalConfirmMessage').innerText = mensaje;

    // Muestra el modal
    const modalConfirm = new bootstrap.Modal(document.getElementById('modalConfirm'));
    modalConfirm.show();

    // Remueve cualquier evento previo y agrega el nuevo evento de confirmación
    const botonConfirmar = document.getElementById('confirmButton');
    botonConfirmar.replaceWith(botonConfirmar.cloneNode(true));
    document.getElementById('confirmButton').addEventListener('click', function confirmarHandler() {
        modalConfirm.hide();
        accionConfirmacion();
    });
}
function mostrarModalExito(mensaje) {
    const mensajeElemento = document.getElementById('modalSuccessMessage');

    if (!mensajeElemento) {
        console.error("Elemento modalSuccessMessage no encontrado");
        return;
    }

    // Cambia el mensaje en el modal de éxito
    mensajeElemento.innerText = mensaje;

    // Muestra el modal de éxito
    const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'));
    modalSuccess.show();
}
