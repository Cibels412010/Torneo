// No se declara partidoId aquí, ya lo has pasado desde eventos.html
console.log(partidoId); // Verifica que el partidoId es correcto

// Realiza la solicitud con el partidoId
fetch(`http://localhost:5014/Api/Evento/Eventos/${partidoId}`)
  .then(response => response.json())
  .then(data => {
    // Aquí procesas los datos y los agregas a la tabla
    const tableBody = document.getElementById('eventosTableBody');
    tableBody.innerHTML = ''; // Limpiar la tabla antes de agregar nuevos eventos
    
    data.forEach(evento => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <th scope="row">${evento.minuto}</th>
        <td>${evento.nombreEquipo}</td>
        <td>${evento.nombreJugador} ${evento.apellidoJugador}</td>
        <td>${evento.tipoEvento}</td>
        <td class="btn-edit-delete">
          <div class="btn-group btn-group-sm" role="group" aria-label="Basic mixed styles example">
            <button type="delete" class="btn btn-primary" id="botonBorrr_${evento.idEvento}" data-id="${evento.idEvento}" onclick="borrarEvento(this)" style="background-color: #20212b">Borrar</button>
          </div>
        </td>
      `;
      tableBody.appendChild(row);
    });

    const urlParams = new URLSearchParams(window.location.search);
    const equipo1 = urlParams.get('equipo1');
    const equipo2 = urlParams.get('equipo2');
    const divEquipo1 = document.getElementById("equipo1");
    const divEquipo2 = document.getElementById("equipo2");
    divEquipo1.innerHTML = equipo1 + "&nbsp;";
    divEquipo2.innerHTML = "&nbsp;" + equipo2;
    //recorrer el tbody y sumar los goles cuando el evento sea "gol"

    function contarGolesPorEquipo() {
        let golesEquipo1 = 0;
        let golesEquipo2 = 0;
        const tbody = document.getElementById("eventosTableBody");
        const filas = tbody.getElementsByTagName("tr");
    
        for (let i = 0; i < filas.length; i++) {
            const celdas = filas[i].getElementsByTagName("td");
    
            // Suponiendo que la columna 0 es el equipo y la columna 1 es el evento
            const equipo = celdas[0].innerText;
            const evento = celdas[2].innerText;
    
            if (evento === "Gol") {
                if (equipo === equipo1) {
                    golesEquipo1++;
                } else if (equipo === equipo2) {
                    golesEquipo2++;
                }
            }
        }
    
        return { golesEquipo1, golesEquipo2 };
    }
    
    // Uso de la función
    const resultado = contarGolesPorEquipo();
    console.log("Goles equipo 1:", resultado.golesEquipo1);
    console.log("Goles equipo 2:", resultado.golesEquipo2);

    const golesEquipo1 = document.getElementById("golesEquipo1");
    const golesEquipo2 = document.getElementById("golesEquipo2");
    golesEquipo1.innerHTML = resultado.golesEquipo1  + "&nbsp;" + "-";
    golesEquipo2.innerHTML = "&nbsp;" + resultado.golesEquipo2;


  })
  .catch(error => console.error('Error al cargar los eventos:', error));
