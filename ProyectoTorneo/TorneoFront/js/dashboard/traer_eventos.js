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
            <button type="delete" class="btn btn-primary" id="botonBorrr" style="background-color: #20212b">Borrar</button>
          </div>
        </td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error('Error al cargar los eventos:', error));
