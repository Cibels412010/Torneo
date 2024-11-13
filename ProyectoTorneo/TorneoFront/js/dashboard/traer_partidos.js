// fetch al endpoint de partidos y llenado dinámico del HTML
// document.getElementById('filtrarFecha').addEventListener('click', () => {
//   const numeroFecha = document.getElementById('numeroFecha').value;
//   if (numeroFecha) {
//     fetchPartidosPorFecha(numeroFecha);
//   }
// });

document.getElementById('partidosSelector').addEventListener('change', () => {
  const numeroFecha = document.getElementById('partidosSelector').value;
  if (numeroFecha !== "0") {
    fetchPartidosPorFecha(numeroFecha);
  }
});

function fetchPartidosPorFecha(fecha) {
  fetch('http://localhost:5014/Api/Partido/Partidos')
    .then(response => response.json())
    .then(data => {
      const partidosContainer = document.querySelector('.row');
      partidosContainer.innerHTML = ''; // Limpiamos el contenido inicial de las tarjetas

      const partidosFiltrados = data.filter(partido => partido.n_fecha == fecha);

      partidosFiltrados.forEach(partido => {
        const card = document.createElement('div');
        card.classList.add('col-md-6', 'mb-4');

        card.innerHTML = `
          <div class="card bg-dark text-white">
            <div class="card-header text-center">
              ${partido.torneo}
            </div>
            <div class="card-body">
              <h5 class="card-title text-center">${partido.nombreEquipo1} vs ${partido.nombreEquipo2}</h5>
              <p class="card-text text-center">Fecha: ${new Date(partido.fecha).toLocaleDateString()}</p>
              <button type="button" class="btn btn-primary btn-sm detalles-btn" data-id="${partido.idPartido}">Detalles</button>
            </div>
          </div>
        `;

        partidosContainer.appendChild(card);
      });
    }).then(() => {
      document.querySelectorAll('.detalles-btn').forEach((button) => {
        button.addEventListener('click', (event) => {
          const partidoId = event.target.getAttribute('data-id');
          window.location.href = `../html/eventos.html?id=${partidoId}`;
        });
      });
    })
    .catch(error => {
      console.error('Error al obtener los datos de los partidos:', error);
    });
}

// Cargar todos los partidos al inicio
//fetchPartidosPorFecha('');