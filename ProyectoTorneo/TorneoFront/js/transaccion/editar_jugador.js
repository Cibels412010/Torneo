// URL de la API
const API_URL = "http://localhost:5014/Api/Jugador";

document.addEventListener('DOMContentLoaded', async () => {

    const urlParams = new URLSearchParams(window.location.search);
    const jugadorId = urlParams.get('id');
    console.log(jugadorId);
    if (jugadorId) {
        
        modificacionesEditarHtml();

        try {
            
            // Llama a la API para obtener los datos del jugador
            const response = await fetch(`http://localhost:5014/Api/Jugador/Jugador/${jugadorId}`);

            if (!response.ok) {
                throw new Error('Error al cargar el jugador en el formulario' + response.statusText);
            }

            const jugador = await response.json();

            cargarJugadorEnFormulario(jugador   );
           

        } catch (error) {
            console.error('Error al cargar los datos del jugador:', error);
        }
    }
});

// ! Cargar los datos del jugador en el formulario
function cargarJugadorEnFormulario(jugador) {
    document.getElementById('nombreJugador').value = jugador.nombre;
    document.getElementById('apellidoJugador').value = jugador.apellido;
    document.getElementById('fechaNacimientoJugador').value = jugador.fechaNacimiento.substring(0, 10);
    document.getElementById('posicionJugador').value = jugador.posicion;
    document.getElementById('dniJugador').value = jugador.dni;
    document.getElementById('flexRadioDefault1').checked = jugador.fichaMedica == true;
    document.getElementById('flexRadioDefault2').checked = jugador.fichaMedica == false;
    document.getElementById('rolJugador').value = jugador.rol;

}

// ! prepara la pagina de edicion de jugador
function modificacionesEditarHtml(){

    // ? CAMBIAR EN EL HTML SI ESTOY EDITANDO?
    document.getElementById('tituloCargarEditar').textContent = 'Editar equipo';
    document.getElementById('verEquiposVolver').textContent = 'Volver a equipos';
    document.getElementById('JugadoresTituloForm').textContent = 'Nuevo Jugador';
    document.getElementById('guardarEquipoBtn').textContent = 'Editar Equipo';

    document.getElementById('idJugador').style.opacity = 0.5;
}