
document.addEventListener('DOMContentLoaded', function() {
   
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
                nombreCell.textContent = equipo.nombre;
                row.appendChild(nombreCell);
    
                const FechaFundacionCell = document.createElement('td');
                FechaFundacionCell.textContent = equipo.fechaFundacion.substring(0, 10);
                row.appendChild(FechaFundacionCell);
    
                const actionsCell = document.createElement('td');
                actionsCell.className = 'btn-edit-delete';
                actionsCell.innerHTML = `
                   <div class="btn-group btn-group-sm" role="group" aria-label="Basic mixed styles example">
                        <button type="button" class="btn btn-primary me-2" style="background: rgb(45, 126, 231);" 
                        data-id="${equipo.idEquipo}" href="../html/updateEquipo.html" id="botonEditarEquipo">Editar</button>
                        <button type="button" class="btn btn-danger" data-id="${equipo.idEquipo}" onclick="borrarEquipo(this)" style="opacity: 0.7">Borrar</button>
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
});
