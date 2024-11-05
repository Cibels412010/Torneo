async function fetchTorneos() {
    try {
        const response = await fetch('http://localhost:5014/Api/Torneo');
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
            desdeCell.textContent = torneo.fecha_incio;
            row.appendChild(desdeCell);

            const hastaCell = document.createElement('td');
            hastaCell.textContent = torneo.fecha_hasta;
            row.appendChild(hastaCell);

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
        console.error('There has been a problem with your fetch operation:', error);
    }
}

fetchTorneos();