async function fetchTorneos() {
    try {
        actualizarEstadoBoton();
        const response = await fetch("http://localhost:5014/Api/Torneo/Torneos");
        if (!response.ok) {
            const mensajeError = `Hubo un problema al cargar los torneos: ${error.message}. Inténtalo más tarde.`;
            document.getElementById('modalErrorMessage').innerText = mensajeError;
            const modalError = new bootstrap.Modal(document.getElementById('modalError'));
            modalError.show();
        }
        const torneos = await response.json();
        OcultarSecciones();
        console.log(torneos);

        const tableBody = document.getElementById("torneosTableBody");
        if (!tableBody) {
            console.error("Elemento 'torneosTableBody' no encontrado en el DOM");
            return;
        }
        
        tableBody.innerHTML = ""; // Limpiar el contenido existente

        torneos.forEach((torneo) => {
            const row = document.createElement("tr");

            const nombreCell = document.createElement("th");
            nombreCell.scope = "row";
            nombreCell.textContent = torneo.nombre;
            row.appendChild(nombreCell);

            const desdeCell = document.createElement("td");
            desdeCell.textContent = torneo.fechaInicio.substring(0, 10);
            row.appendChild(desdeCell);

            const hastaCell = document.createElement("td");
            hastaCell.textContent = torneo.fechaFin.substring(0, 10);
            row.appendChild(hastaCell);

            const actionsCell = document.createElement("td");
            actionsCell.className = "btn-edit-delete";
            actionsCell.innerHTML = `
                <div class="btn-group btn-group-sm" role="group">
                    <button type="button" class="btn btn-primary me-2" style="display: none" id="botonEditarTorneo_${torneo.idTorneo}" onclick="actualizarTorneo(${torneo.idTorneo})">Editar</button>
                    <button type="button" class="btn btn-danger" style="display: none" id="botonEliminar_${torneo.idTorneo}" data-id="${torneo.idTorneo}" onclick="borrarTorneo(this)">Borrar</button>
                </div>
            `;
            
            row.appendChild(actionsCell);
            tableBody.appendChild(row);
        });
        OcultarSecciones();
        actualizarEstadoBoton();
    } catch (error) {
        const mensajeError = `Error en operación fetch: ${error.message}. Inténtalo más tarde.`;
        document.getElementById('modalErrorMessage').innerText = mensajeError;
        const modalError = new bootstrap.Modal(document.getElementById('modalError'));
        modalError.show();
    }
}

function actualizarTorneo(idTorneo) {
    
        mostrarModalConfirmacion("¿Desea editar el torneo?", function() {
            window.location.href = `../html/soporte.html?id=${idTorneo}`;
        });
    
}

async function cargarComboTorneos() {
    try {
        const response = await fetch("http://localhost:5014/Api/Torneo/Torneos");
        if (!response.ok) {
            mostrarModalExito("Hubo un problema al cargar los torneos");
            return;
        }
        
        const torneos = await response.json();
        const selectTorneos = document.getElementById("torneosCombo");
        if (!selectTorneos) {
            console.error("El elemento 'torneosCombo' no se encontró en el DOM.");
            return;
        }

        // Limpiar las opciones actuales
        selectTorneos.innerHTML = '<option selected>Seleccione un torneo</option>';
        
        torneos.forEach(torneo => {
            const option = document.createElement("option");
            option.value = torneo.idTorneo;
            option.textContent = torneo.nombre;
            selectTorneos.appendChild(option);
        });

    } catch (error) {
        mostrarModalExito(`Error en operación fetch: ${error.message}. Inténtalo más tarde.`);
    }
}

