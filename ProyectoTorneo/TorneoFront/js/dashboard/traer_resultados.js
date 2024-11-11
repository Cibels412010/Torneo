// Archivo: traer_resultados.js

// Función para obtener los resultados de la API
fetch("http://localhost:5014/Api/Partido/Resultados")
  .then(response => response.json()) // Convierte la respuesta a JSON
  .then(data => {
    // Obtiene el contenedor donde se mostrarán las tarjetas
    const resultadosContainer = document.querySelector('.row');

    // Limpiar cualquier contenido previo
    resultadosContainer.innerHTML = '';

    // Itera sobre los datos y crea una tarjeta por cada partido
    data.forEach(partido => {
      // Crea una nueva tarjeta
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('col-md-12', 'mb-4');

      tarjeta.innerHTML = `
        <div class="card bg-dark text-white">
          <div class="card-header text-center">
            Torneo (Este dato puede ser dinámico si lo agregas en los datos de la API)
          </div>
          <div class="card-body d-flex align-items-center justify-content-around">
            <!-- Equipo 1 -->
            <div class="text-center">
              <h5 class="card-title">${partido.equipo1}</h5>
            </div>
            <!-- Goles de Equipo 1 -->
            <div class="d-flex align-items-center justify-content-center bg-white text-dark" style="width: 50px; height: 50px; border-radius: 5px;">
              <h5>${partido.golesEquipo1}</h5>
            </div>
            <!-- Goles de Equipo 2 -->
            <div class="d-flex align-items-center justify-content-center bg-white text-dark" style="width: 50px; height: 50px; border-radius: 5px;">
              <h5>${partido.golesEquipo2}</h5>
            </div>
            <!-- Equipo 2 -->
            <div class="text-center">
              <h5 class="card-title">${partido.equipo2}</h5>
            </div>
          </div>
        </div>
      `;

      // Agrega la tarjeta al contenedor
      resultadosContainer.appendChild(tarjeta);
    });
  })
  .catch(error => console.error('Error al cargar los resultados:', error));
