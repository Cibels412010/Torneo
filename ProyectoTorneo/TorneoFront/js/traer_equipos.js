async function fetchEquipos() {
    try {
        const response = await fetch('http://localhost:5014/Api/Equipo/Equipos');
        if (!response.ok) {
            throw new Error('Error en la BD' + response.statusText);
        }
        const Equipos = await response.json();
        console.log(Equipos);

        const tableBody = document.getElementById('equiposTableBody');
        tableBody.innerHTML = ''; // Limpiar el contenido existente

        Equipos.forEach(equipo => {
            const row = document.createElement('tr');

            const idCell = document.createElement('th');
            idCell.scope = 'row';
            idCell.textContent = equipo.idEquipo;
            row.appendChild(idCell);

            const nombreCell = document.createElement('td');
            nombreCell.textContent = equipo.Nombre;
            row.appendChild(nombreCell);

            const FechaFundacionCell = document.createElement('td');
            FechaFundacionCell.textContent = equipo.FechaFundacion.substring(0, 10);
            row.appendChild(FechaFundacionCell);

            const JugadoresCell = document.createElement('td');
            JugadoresCell.textContent = equipo.Jugadores;            ;
            row.appendChild(JugadoresCell);

            const actionsCell = document.createElement('td');
            actionsCell.className = 'btn-edit-delete';
            actionsCell.innerHTML = `
                <div class="btn-group btn-group-sm" role="group" aria-label="Basic mixed styles example">
                    <button type="edit" class="btn btn-primary" style="background: rgb(45, 126, 231)">Editar</button>
                    <button type="delete" class="btn btn-primary" style="background-color: #20212b">Borrar</button>
                </div>
            `;
            row.appendChild(actionsCell);

            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error('Error en operación fetch: ', error);
    }
}

fetchEquipos();