const urlParams = new URLSearchParams(window.location.search);
const tournamentId = urlParams.get('id');

async function cargarDatosTorneo(id) {
    try {
        const response = await fetch(`http://localhost:5014/Api/Torneo/Torneo/${id}`);
        if (!response.ok) {
            throw new Error('Error en la BD: ' + response.statusText);
        }
        const torneo = await response.json();
        console.log(torneo);

        // Llenar los campos del formulario con los datos del torneo
        document.getElementById('nombreTorneo').value = torneo.nombre;
        document.getElementById('fechaInicio').value = torneo.fechaInicio.substring(0, 10);
        document.getElementById('fechaFin').value = torneo.fechaFin.substring(0, 10);
    } catch (error) {
        console.error('Error en operación fetch: ', error);
        // Mostrar un mensaje al usuario, por ejemplo, en un alert
        alert("Hubo un problema al cargar los datos del torneo. Inténtalo más tarde.");
    }
}

// Función para actualizar el torneo
async function actualizarTorneo() {
    const nombre = document.getElementById('nombreTorneo').value;
    const fechaInicio = document.getElementById('fechaInicio').value;
    const fechaFin = document.getElementById('fechaFin').value;

    try {
        const response = await fetch(`http://localhost:5014/Api/Torneo/Actualizar/${tournamentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre,
                fechaInicio,
                fechaFin
            })
        });

        if (!response.ok) {
            throw new Error('Error en la BD: ' + response.statusText);
        }

        console.log('Actualizando torneo:', { id: tournamentId, nombre, fechaInicio, fechaFin });

        alert('Torneo actualizado con éxito');

        // Redirigir a la página principal o a donde necesites
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Error en operación fetch: ', error);
        alert("Hubo un problema al actualizar el torneo. Inténtalo más tarde.");
    }
}

// Al cargar el documento, cargamos los datos del torneo
document.addEventListener('DOMContentLoaded', () => {
    if (tournamentId) {
        cargarDatosTorneo(tournamentId);
    }

    // Asignar la función al botón Aceptar
    document.getElementById('botonAceptar').addEventListener('click', actualizarTorneo);
});
