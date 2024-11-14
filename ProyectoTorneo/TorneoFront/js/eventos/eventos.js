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