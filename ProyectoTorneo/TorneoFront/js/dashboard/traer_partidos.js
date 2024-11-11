// fetch al endpoint de partidos y llenado dinámico del HTML
fetch('http://localhost:5014/Api/Partido/Partidos')
  .then(response => response.json())
  .then(data => {
    const partidosContainer = document.querySelector('.row');
    partidosContainer.innerHTML = ''; // Limpiamos el contenido inicial de las tarjetas

    data.slice(0, 4).forEach(partido => { // Solo tomamos los primeros 4 partidos
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
          </div>
        </div>
      `;

      partidosContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos de los partidos:', error);
  });
