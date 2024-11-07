// ! funcion pr traer un jugador by id y mndarlo al formulario
async function editarJugador(jugadorId) {
    console.log('Editar jugador con id:', jugadorId);
    document.getElementById('jugadorForm').style.opacity = 1;
    document.querySelectorAll(' #AgregarJugador, #nombreJugador, #apellidoJugador, #dniJugador, #flexRadioDefault1, #flexRadioDefault2, #fechaNacimientoJugador, #posicionJugador, #rolJugador').forEach(element => {
        element.disabled = false;
    });
    try {
        const response = await fetch(`http://localhost:5014/Api/Jugador/Jugador/${jugadorId}`);
        if (!response.ok) {
            throw new Error('Error al cargar los datos del jugador');
        }
        const jugador = await response.json();
        cargarJugadorEnFormulario(jugador); 
    } catch (error) {
        console.error('Error al cargar los datos del jugador:', error);
    }
}



// ! Cargar los datos del jugador en el formulario
function cargarJugadorEnFormulario(jugador) {
    document.getElementById('idJugador').value = jugador.idJugador;
    document.getElementById('nombreJugador').value = jugador.nombre;
    document.getElementById('apellidoJugador').value = jugador.apellido;
    document.getElementById('fechaNacimientoJugador').value = jugador.fechaNacimiento.substring(0, 10);
    switch (jugador.posicion) {
        case 1:
            document.getElementById('posicionJugador').value = 'Portero';
            break;
        case 2:
            document.getElementById('posicionJugador').value = 'Defensa';
            break;
        case 3:
            document.getElementById('posicionJugador').value = 'Centrocampista';
            break;
        case 4:
            document.getElementById('posicionJugador').value = 'Delantero';
            break;
        default:
            document.getElementById('posicionJugador').value = 'Desconocido';
            break;
    }
    document.getElementById('dniJugador').value = jugador.dni;
    document.getElementById('flexRadioDefault1').checked = jugador.fichaMedica == true;
    document.getElementById('flexRadioDefault2').checked = jugador.fichaMedica == false;
    
    switch (jugador.rol) {
        case 1:
            document.getElementById('rolJugador').value = 'Capitán';
            break;
        case 2:
            document.getElementById('rolJugador').value = 'Subcapitán';
            break;
        case 3:
            document.getElementById('rolJugador').value = 'Jugador';
            break;
        default:
            document.getElementById('rolJugador').value = 'Desconocido';
            break;
    }

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