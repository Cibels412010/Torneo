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

// ! funcion para remplazar al jugador editado en l tbla pra no mandrlo en el json dos veces

function actualizarJugadorEnTabla(jugador) {
    const rows = document.querySelectorAll('#jugadoresTableBody tr');  // Esto obtiene las filas de la tabla
    Array.from(rows).some(row => {
        const cells = row.querySelectorAll('td');
        const idJugador = parseInt(cells[0].textContent.trim(), 10);  // Convertir a número
       
        if ( idJugador === parseInt(jugador.id, 10)) {
          
            const celdas = row.querySelectorAll('td');
            celdas[1].textContent = jugador.nombre;
            celdas[2].textContent = jugador.apellido;
            celdas[3].textContent = jugador.dni;
            celdas[4].textContent = jugador.fichaMedica ? 'Sí' : 'No';
            celdas[5].textContent = jugador.fechaNacimiento.substring(0, 10);
            switch (jugador.idPosicion) {
                case 1:
                    celdas[6].textContent = 'Portero';
                    break;
                case 2:
                    celdas[6].textContent = 'Defensa';
                    break;
                case 3:
                    celdas[6].textContent = 'Centrocampista';
                    break;
                case 4:
                    celdas[6].textContent = 'Delantero';
                    break;
                default:
                    celdas[6].textContent = '-';
                    break;
            }
            celdas[7].textContent = jugador.rol; 
            switch (jugador.rol) {
                case 1:
                    celdas[7].textContent = 'Capitán';
                    break;
                case 2:
                    celdas[7].textContent = 'Subcapitán';
                    break;
                case 3:
                    celdas[7].textContent = 'Delegado';
                    break;
                default:
                    celdas[7].textContent = '-';
                    break;
            }
            
            
        }
        
    });
}


// Función que puedes usar para agregar un jugador si no está en la tabla
function agregarJugadorATabla(jugador) {
    const nuevaFila = `<tr>
        <td style="display: none;">${jugador.idJugador}</td>
        <td>${jugador.nombre}</td>
        <td>${jugador.apellido}</td>
        <td>${jugador.dni}</td>
        <td>${jugador.fichaMedica ? 'Sí' : 'No'}</td>
        <td>${jugador.fechaNacimiento}</td>
        <td>${jugador.idPosicion}</td>
        <td>${jugador.rol}</td>
        <td>
            <button type="button" class="btn btn-primary" onclick="editarJugador(${jugador.idJugador})">
                <i class="bi bi-pencil"></i>
            </button>
            <button type="button" class="btn btn-danger" onclick="removePlayer(this)">
                <i class="bi bi-trash"></i>
            </button>
        </td>
    </tr>`;
    document.getElementById('jugadoresTableBody').insertAdjacentHTML('beforeend', nuevaFila);
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