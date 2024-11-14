//Cargar combo jugadores a partir del equipo seleccionado
const equipoSelector = document.getElementById("equipoEvento");
equipoSelector.addEventListener("change", function(){
    const equipo = equipoSelector.value;
    const jugadorSelector = document.getElementById("jugadorEvento");
    if(equipo == "0"){
        jugadorSelector.innerHTML = "";
    }else{
        //traer un json de jugadores a partir del nombre del equipo con la api
        fetch(`http://localhost:5014/Api/Jugador/Jugador/Equipo/${equipo}`).
        then(response => response.json()).
        then(data => {
            jugadorSelector.innerHTML = `
                <option value="0">Seleccione un jugador</option>
            `;
            data.forEach(jugador => {
                jugadorSelector.innerHTML += `
                    <option value="${jugador.idJugador}">${jugador.nombre} ${jugador.apellido}</option>
                `;
            });
        });
    }
});

//Guardar evento
const form = document.getElementById("altaEventoForm");
form.addEventListener("submit", async(event) => {
    event.preventDefault();
    const equipo = document.getElementById("equipoEvento").value;
    const jugador = document.getElementById("jugadorEvento").value;
    const minuto = document.getElementById("minuto").value;
    const tipoEvento = document.getElementById("tipoEvento").value;
    const urlParams = new URLSearchParams(window.location.search);
    const partidoId = urlParams.get('id');
    if(equipo == "0" || jugador == "0" || minuto == "" || tipoEvento == "0"){
        mostrarModalConfirmacion("Por favor complete todos los campos.");
        return;
    }
    try {
        const response = await fetch('http://localhost:5014/Api/Evento/Evento', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
            },
            body: JSON.stringify({
                tipoEvento: tipoEvento,
                idPartido: partidoId,
                idJugador: jugador,
                minuto: minuto,
            })
        });
        if (response.ok) {
            mostrarModalExito("¡Evento guardado exitosamente!");
            form.reset();
            //recargar la página
            location.reload();

        } else {
            mostrarModalConfirmacion("Hubo un error al intentar guardar el evento.");
        }
    } catch (error) {
        console.error('Error al guardar el evento:', error);
        mostrarModalConfirmacion("Hubo un error al intentar guardar el evento.");
    }
});