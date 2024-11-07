// URL de la API
const API_URL = "http://localhost:5014/Api/Equipo";


// ! si tengo id de equipo, cargo los datos del equipo en el formulario y el de los jugadores en la tabla
document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const equipoId = urlParams.get('id');
    console.log(equipoId);
    if (equipoId) {
        
        modificacionesEditarHtml();

        try {
            
            // Llama a la API para obtener los datos del equipo
            const response = await fetch(`http://localhost:5014/Api/Equipo/Equipo/${equipoId}`);

            if (!response.ok) {
                throw new Error('Error al obtener el equipo');
            }

            const equipo = await response.json();

            cargarEquiposEnFormulario(equipo);

            cargarJugadoresEnTabla(equipo);
           

        } catch (error) {
            console.error('Error al cargar los datos del equipo:', error);
        }
    }
});



// ! Envio el formulario de equipo, habilito el formulario de jugadores
document.getElementById('equipoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los datos del equipo
    
    const idEquipo = document.getElementById('idEquipo').value || 0;
    const nombreEquipo = document.getElementById('nombreEquipo').value;
    const fechaFundacion = document.getElementById('fechaFundacion').value;

    if (!nombreEquipo || !fechaFundacion) {
        alert('Por favor complete todos los campos');
        return;
    }

    window.idEquipo = idEquipo;
    window.equipoNombre = nombreEquipo;
    window.equipoFechaFundacion = fechaFundacion;

    // Habilitar el formulario de jugadores
    document.getElementById('jugadorForm').style.opacity = 1;
    document.querySelectorAll(' #AgregarJugador, #nombreJugador, #apellidoJugador, #dniJugador, #flexRadioDefault1, #flexRadioDefault2, #fechaNacimientoJugador, #posicionJugador, #rolJugador').forEach(element => {
        element.disabled = false;
    });
    alert(`Equipo '${nombreEquipo}' parcialmente guardado. Agregue jugadores a continuación o presione GUARDAR CAMBIOS para confirmar.`);

});

// ! este me carga los jugadores del formulario a la tbla de jugadores
document.getElementById('jugadorForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const id = document.getElementById('idJugador').value || 0;
    const nombre = document.getElementById('nombreJugador').value;
    const apellido = document.getElementById('apellidoJugador').value;
    const dni = parseInt(document.getElementById('dniJugador').value); 
    const fichaMedica = document.getElementById('flexRadioDefault1').checked;
    const fechaNacimiento = document.getElementById('fechaNacimientoJugador').value;
    const posicion = parseInt(document.getElementById('posicionJugador').value) || 0;
    const rol = parseInt(document.getElementById('rolJugador').value) || 0;
    const acciones = `
    <button type="button" class="btn btn-primary" style="background: rgb(45, 126, 231)" onclick="removePlayer(this)">
        <i class="bi bi-trash3"></i>
    </button>`;

    // Verificar si el DNI ya existe en la tabla antes de agregar el jugador
    const jugadores = [];
    const rows = document.querySelectorAll('#jugadoresTableBody tr');
    let duplicado = false;

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const existingDNI = parseInt(cells[2].innerText); // Obtener el DNI de la fila existente
        if (existingDNI === dni) {
            duplicado = true; // Si el DNI ya existe, marcar como duplicado
        }
    });

    if (duplicado) {
        alert(`El jugador con DNI ${dni} ya ha sido agregado.`);
        return; // Detener el proceso si hay un duplicado
    }

    const nuevaFila = `<tr>
        <td style="display: none;">${id}</td>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${dni}</td>
        <td>${fichaMedica ? 'Sí' : 'No'}</td>
        <td>${fechaNacimiento}</td>
        <td>${posicion}</td>
        <td>${rol}</td>
        <td>${acciones}</td>
    </tr>`;

    document.getElementById('jugadoresTableBody').insertAdjacentHTML('beforeend', nuevaFila);
    // Limpiar el formulario de jugador
    document.getElementById('jugadorForm').reset();
});



// ! mando el equipo con sus jugdores al backend cuando toco gurdar cambios
document.getElementById('guardarCambiosBtn').addEventListener('click', async () => {
    const jugadores = [];
    const rows = document.querySelectorAll('#jugadoresTableBody tr');
    

    // ! por cad fila de la tabla de jugadores, cargo un objeto jugador en el array jugadores (este va al json)
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');

        const jugador = {
            idJugador: parseInt(cells[0].innerText), // Asegúrate de que el ID del jugador es un número
            nombre: cells[1].innerText,
            apellido: cells[2].innerText,
            dni: parseInt(cells[3].innerText),
            fichaMedica: cells[4].innerText === 'Sí',
            fechaNacimiento: cells[5].innerText,
            idEquipo: 0,
            idPosicion: parseInt(cells[6].innerText), // Asegúrate de que la posición es un número
            rol: parseInt(cells[7].innerText), // Asegúrate de que el rol es un número
        };

        // Verificar si el jugador ya está en la lista antes de agregarlo
        if (jugadores.some(j => j.dni === jugador.dni)) {
            alert(`El jugador con DNI ${jugador.dni} ya ha sido agregado.`);
            return; 
        }
        jugadores.push(jugador);
    });

    const equipoData = {
        idEquipo: window.idEquipo,
        nombre: window.equipoNombre,
        fechaFundacion: window.equipoFechaFundacion,
        jugadores: jugadores
    };

    console.log(JSON.stringify(equipoData));

    try {
        const response = await fetch(`${API_URL}/CrearTransaction`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(equipoData)
        });
        

        if (response.ok) {
            alert("Torneo generado correctamente!");
            document.getElementById('jugadorForm').reset();
            document.getElementById('equipoForm').reset();
            document.getElementById('jugadoresTableBody').innerHTML = '';
            document.getElementById('jugadorForm').style.opacity = 0.5;
        } else {
            alert("Error al enviar el torneo");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Ocurrió un error al intentar cargar el torneo");
    }
});


// ! borra un jugador de la tabla
function removePlayer(button) {
    // Obtener la fila (tr) padre del botón
    const row = button.closest('tr'); // Encuentra el elemento <tr> más cercano
    if (row) {
        row.remove(); // Eliminar la fila de la tabla
    }
}


// !Aca cargo los datos del equipo en el formulario
function cargarEquiposEnFormulario(equipo){
     // Carga los datos del equipo en el formulario
     document.getElementById('idEquipo').value = equipo.idEquipo;
     document.getElementById('nombreEquipo').value = equipo.nombre;
     document.getElementById('fechaFundacion').value = equipo.fechaFundacion.substring(0, 10);
}

// !Aca cargo los jugadores a la tabla
function cargarJugadoresEnTabla(equipo){
    const jugadoresTableBody = document.getElementById('jugadoresTableBody');
            jugadoresTableBody.innerHTML = ''; // Limpia la tabla antes de agregar jugadores

                equipo.jugadores.forEach(jugador => {
                    // Crear una nueva fila para el jugador
                    const nuevaFila = document.createElement('tr');

                    const idJugador = jugador.idJugador;
                    const idJugadorCelda = document.createElement('td');
                    idJugadorCelda.textContent = idJugador;
                    idJugadorCelda.style.display = 'none'; // Ocultar la celda en el front
                    nuevaFila.appendChild(idJugadorCelda);
                    // Crear celdas para cada dato del jugador
                    const nombreCelda = document.createElement('td');
                    nombreCelda.textContent = jugador.nombre;
                    nuevaFila.appendChild(nombreCelda);

                    const apellidoCelda = document.createElement('td');
                    apellidoCelda.textContent = jugador.apellido;
                    nuevaFila.appendChild(apellidoCelda);

                    const dniCelda = document.createElement('td');
                    dniCelda.textContent = jugador.dni;
                    nuevaFila.appendChild(dniCelda);
                    
                    const fichaMedicaCelda = document.createElement('td');
                    fichaMedicaCelda.textContent = jugador.fichaMedica ? 'Sí' : 'No';
                    nuevaFila.appendChild(fichaMedicaCelda);

                    const fechaNacimientoCelda = document.createElement('td');
                    fechaNacimientoCelda.textContent = jugador.fechaNacimiento.substring(0, 10);
                    nuevaFila.appendChild(fechaNacimientoCelda);

                    const posicionCelda = document.createElement('td');
                    posicionCelda.textContent = jugador.idPosicion;
                    switch (jugador.idPosicion) {
                        case 1:
                            posicionCelda.textContent = 'Portero';
                            break;
                        case 2:
                            posicionCelda.textContent = 'Defensa';
                            break;
                        case 3:
                            posicionCelda.textContent = 'Centrocampista';
                            break;
                        case 4:
                            posicionCelda.textContent = 'Delantero';
                            break;
                        default:
                            posicionCelda.textContent = 'Sin posición';
                    }
                    nuevaFila.appendChild(posicionCelda);

                    const rolCelda = document.createElement('td');
                    rolCelda.textContent = jugador.rol || 'Sin rol';
                    rolCelda.style.whiteSpace = 'nowrap';
                    nuevaFila.appendChild(rolCelda);

                    const actionsCell = document.createElement('td');
                actionsCell.className = 'btn-edit-delete';
                actionsCell.innerHTML = `
    <button type="button" class="btn btn-primary me-2" style="background: rgb(45, 126, 231);" 
            data-id="${jugador.idJugador}" onclick="editarJugador(${jugador.idJugador})" id="botonEditarEquipo">
        Editar
    </button>
    <button type="button" class="btn btn-danger" data-id="${jugador.idJugador}"  style="opacity: 0.7"
    onclick="removePlayer(this)">
        Borrar
    </button>
`;

                nuevaFila.appendChild(actionsCell);

                    // Añadir la fila completa al cuerpo de la tabla
                    jugadoresTableBody.appendChild(nuevaFila);
                });
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