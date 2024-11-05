async function fetchTorneos() {
    try {
        const response = await fetch('http://localhost:5014/Api/Torneo/Torneos');
        if (!response.ok) {
            throw new Error('Error en la BD' + response.statusText);
        }
        const torneos = await response.json();
        console.log(torneos);

        const tableBody = document.getElementById('torneosTableBody');
        tableBody.innerHTML = ''; // Limpiar el contenido existente

        torneos.forEach(torneo => {
            const row = document.createElement('tr');

            const nombreCell = document.createElement('th');
            nombreCell.scope = 'row';
            nombreCell.textContent = torneo.nombre;
            row.appendChild(nombreCell);

            const desdeCell = document.createElement('td');
            desdeCell.textContent = torneo.fechaInicio.substring(0, 10);
            row.appendChild(desdeCell);

            const hastaCell = document.createElement('td');
            hastaCell.textContent = torneo.fechaFin.substring(0, 10);            ;
            row.appendChild(hastaCell);

            const actionsCell = document.createElement('td');
            actionsCell.className = 'btn-edit-delete';
            actionsCell.innerHTML = `
                <div class="btn-group btn-group-sm" role="group" aria-label="Basic mixed styles example">
<<<<<<< HEAD
                    <button type="edit" class="btn btn-primary" style="background: rgb(45, 126, 231)">Editar</button>
                    <button type="delete" class="btn btn-primary" style="background-color: #20212b" data-id="${torneo.id}" onclick="borrarTorneo(this)">Borrar</button>
                </div>
=======
                        <button type="button" class="btn btn-primary me-2" style="background: rgb(45, 126, 231);">Editar</button>
                        <button type="button" class="btn btn-danger" style="opacity: 0.7">Borrar</button>
                    </div>
>>>>>>> 3e0116b592ca28b12746429aabc2c42ccb748b1c
            `;
            row.appendChild(actionsCell);

            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error('Error en operación fetch: ', error);
    }
}

fetchTorneos();