// URL de la API
const API_URL = "http://localhost:5014/Api/Equipo";

// Agregar evento para el formulario de equipo
document.getElementById('equipoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los datos del equipo
    const nombreEquipo = document.getElementById('nombreEquipo').value;
    const fechaFundacion = document.getElementById('fechaFundacion').value;

    // Habilitar el formulario de jugadores
    document.getElementById('jugadorForm').style.opacity = 100;
    alert(`Equipo '${nombreEquipo}' creado. Agrega jugadores a continuación.`);

    // Limpiar el formulario del equipo
    document.getElementById('equipoForm').reset();
});

// Agregar evento para el formulario de jugadores
document.getElementById('jugadorForm').addEventListener('submit', async(event) => {
    event.preventDefault(); // Prevenir el envío del formulario
    const nombre = document.getElementById('nombreJugador').value;
    const apellido = document.getElementById('apellidoJugador').value;
    const dni = document.getElementById('dniJugador').value;
    const fichaMedica = document.getElementById('flexRadioDefault1').checked;
    const fechaNacimiento = document.getElementById('fechaNacimientoJugador').value;
    const posicion = document.getElementById('posicionJugador').value;
    const rol = document.getElementById('rolJugador').value;

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
    // document.getElementById('jugadorForm').reset();
});

// Funcionalidad para guardar el equipo con sus jugadores
document.getElementById('guardarCambiosBtn').addEventListener('click', function() {
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
            idPosicion: parseInt(cells[5].innerText),
            rol: parseInt(cells[6].innerText),
        };
        jugadores.push(jugador);
    });

    const equipoData = {
        idEquipo: 0, 
        nombre: document.getElementById('nombreEquipo').value,
        fechaFundacion: document.getElementById('fechaFundacion').value,
        jugadores: jugadores
    };
    console.log(JSON.stringify(equipoData));

    try {
        const response = await fetch('http://localhost:5014/Api/Torneo/Crear', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: document.getElementById('nombreTorneo').value,
                fechaInicio: document.getElementById('fechaInicio').value,
                fechaFin: document.getElementById('fechaFin').value
            })
        });
        

        if (response.ok) {
            alert("Torneo generado correctamente!");
            form.reset();
        } else {
            alert("Error al generar torneo");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Ocurrió un error al intentar cargar el torneo");
    }


    // Enviar datos al backend
    fetch("http://localhost:5014/Api/Equipo/CrearTransaction", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(equipoData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al crear el equipo');
        }
        return response.json();
    })
    .then(data => {
        alert('Equipo guardado con éxito');
        document.getElementById('jugadoresTableBody').innerHTML = '';
        document.getElementById('jugadorForm').style.display = 'none';
        document.getElementById('equipoForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al guardar el equipo');
    });
});
