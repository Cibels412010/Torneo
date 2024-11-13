
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
                idCell.style.display = 'none';
                idCell.textContent = equipo.idEquipo;
                row.appendChild(idCell);
    
                const nombreCell = document.createElement('td');
                nombreCell.textContent = equipo.nombre;
                row.appendChild(nombreCell);
    
                const FechaFundacionCell = document.createElement('td');
                FechaFundacionCell.textContent = equipo.fechaFundacion.substring(0, 10);
                row.appendChild(FechaFundacionCell);
    
                const actionsCell = document.createElement('td');
                actionsCell.className = 'btn-edit-deleteEquipos id="botonEditarEquipo"';
                actionsCell.innerHTML = `<div class="btn-group btn-group-sm" role="group">
                                <button 
                                    type="button" class="btn btn-primary me-2" style="background: rgb(45, 126, 231);"
                                    data-id="${equipo.idEquipo}" 
                                    onclick="editarEquipo(${equipo.idEquipo})" 
                                    id="botonEditarEquipo_${equipo.idEquipo}">
                                    Editar
                                </button>

                                <button type="button"
                                class="btn btn-danger"
                                data-id="${equipo.idEquipo}"
                                onclick="borrarEquipo(this)"
                                style="background-color: #20212b; "
                                id="botonBorrarEquipo_${equipo.idEquipo}">
                                Borrar</button>
                                </div>

                `;
                row.appendChild(actionsCell);
                tableBody.appendChild(row);
                actualizarEstadoBoton();
                OcultarSecciones();
            });
            
        } catch (error) {
            console.error('Error en operación fetch: ', error);
        }
    }
    fetchEquipos();
    actualizarEstadoBoton();
    OcultarSecciones();
});

// ! redirige a la pagina de edicion de equipo
function editarEquipo(idEquipo) {

    mostrarModalConfirmacion("¿Desea editar el Equipo?", function() {
        window.location.href =  `../html/transaccion.html?id=${idEquipo}`;
    });
}
