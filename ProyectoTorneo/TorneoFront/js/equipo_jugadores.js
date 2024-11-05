// URL de la API
const API_URL = "http://localhost:5014/Api/Equipo";

// Agregar evento para el formulario de equipo
document.getElementById('equipoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los datos del equipo
    const nombreEquipo = document.getElementById('nombreEquipo').value;
    const fechaFundacion = document.getElementById('fechaFundacion').value;

    if (!nombreEquipo || !fechaFundacion) {
        alert('Por favor complete todos los campos');
        return;
    }
    window.equipoNombre = nombreEquipo;
    window.equipoFechaFundacion = fechaFundacion;

    // Habilitar el formulario de jugadores
    document.getElementById('jugadorForm').style.opacity = 1;
    alert(`Equipo '${nombreEquipo}' creado. Agrega jugadores a continuación.`);
});

// Agregar evento para el formulario de jugadores
document.getElementById('jugadorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    const nombre = document.getElementById('nombreJugador').value;
    const apellido = document.getElementById('apellidoJugador').value;
    const dni = parseInt(document.getElementById('dniJugador').value); // Asegúrate de que el DNI es un número
    const fichaMedica = document.getElementById('flexRadioDefault1').checked;
    const fechaNacimiento = document.getElementById('fechaNacimientoJugador').value;
    const posicion = parseInt(document.getElementById('posicionJugador').value); // Asegúrate de que la posición es un número
    const rol = parseInt(document.getElementById('rolJugador').value); // Asegúrate de que el rol es un número

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
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${dni}</td>
        <td>${fichaMedica ? 'Sí' : 'No'}</td>
        <td>${fechaNacimiento}</td>
        <td>${posicion}</td>
        <td>${rol}</td>
    </tr>`;

    document.getElementById('jugadoresTableBody').insertAdjacentHTML('beforeend', nuevaFila);
    // Limpiar el formulario de jugador
    document.getElementById('jugadorForm').reset();
});

// Funcionalidad para guardar el equipo con sus jugadores
document.getElementById('guardarCambiosBtn').addEventListener('click', async () => {
    const jugadores = [];
    const rows = document.querySelectorAll('#jugadoresTableBody tr');
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');

        const jugador = {
            idJugador: 0,
            nombre: cells[0].innerText,
            apellido: cells[1].innerText,
            dni: parseInt(cells[2].innerText),
            fichaMedica: cells[3].innerText === 'Sí',
            fechaNacimiento: cells[4].innerText,
            idEquipo: 0,
            idPosicion: parseInt(cells[5].innerText), // Asegúrate de que la posición es un número
            rol: parseInt(cells[6].innerText), // Asegúrate de que el rol es un número
        };

        // Verificar si el jugador ya está en la lista antes de agregarlo
        if (jugadores.some(j => j.dni === jugador.dni)) {
            alert(`El jugador con DNI ${jugador.dni} ya ha sido agregado.`);
            return; 
        }
        jugadores.push(jugador);
    });

    const equipoData = {
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
            alert("Error al generar torneo");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Ocurrió un error al intentar cargar el torneo");
    }
});
