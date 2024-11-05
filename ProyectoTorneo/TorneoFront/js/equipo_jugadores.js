// !  const API_URL = "http://localhost:5014/Api/Equipo";

document.getElementById('jugadorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    const nombre = document.getElementById('nombreJugador').value;
    const apellido = document.getElementById('apellidoJugador').value;
    const dni = document.getElementById('dniJugador').value;
    const fichaMedica = document.getElementById('flexSwitchCheck').checked ? 'Sí' : 'No';
    const fechaNacimiento = document.getElementById('fechaNacimientoJugador').value;
    const posicion = document.getElementById('posicionJugador').options[document.getElementById('posicionJugador').selectedIndex].text;
    const rol = document.getElementById('rolJugador').options[document.getElementById('rolJugador').selectedIndex].text;

    const nuevaFila = `<tr>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${dni}</td>
        <td>${fichaMedica}</td>
        <td>${fechaNacimiento}</td>
        <td>${posicion}</td>
        <td>${rol}</td>
    </tr>`;

    document.getElementById('jugadoresTableBody').insertAdjacentHTML('beforeend', nuevaFila);
    // Limpiar el formulario de jugador
    document.getElementById('jugadorForm').reset();
});

// Funcionalidad para guardar el equipo
document.getElementById('equipoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    const nombreEquipo = document.getElementById('nombreEquipo').value;
    const fechaFundacion = document.getElementById('fechaFundacion').value;
    // Aquí puedes agregar la lógica para guardar el equipo en el backend
    console.log(`Equipo: ${nombreEquipo}, Fecha de Fundación: ${fechaFundacion}`);
});

// Funcionalidad para guardar el equipo con sus jugadores
document.getElementById('guardarEquipoBtn').addEventListener('click', function() {
    const jugadores = [];
    const rows = document.querySelectorAll('#jugadoresTableBody tr');
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const jugador = {
            nombre: cells[0].innerText,
            apellido: cells[1].innerText,
            dni: cells[2].innerText,
            fichaMedica: cells[3].innerText,
            fechaNacimiento: cells[4].innerText,
            posicion: cells[5].innerText,
            rol: cells[6].innerText
        };
        jugadores.push(jugador);
    });
    console.log('Jugadores del equipo:', jugadores);
    // Aquí puedes agregar la lógica para enviar los datos de equipo y jugadores al backend
});


