async function fetchTorneos() {
    try {
        const response = await fetch("http://localhost:5014/Api/Torneo/Torneos");
        if (!response.ok) {
            throw new Error("Error en la BD: " + response.statusText);
        }
        const torneos = await response.json();
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
        console.error("Error en operación fetch: ", error);
        alert("Hubo un problema al cargar los torneos. Inténtalo más tarde.");
    }
}

// Llamar a la función al cargar la página
//document.addEventListener("DOMContentLoaded", fetchTorneos);

//Redirigir a otra URL para editar el torneo
function actualizarTorneo(idTorneo) {
    const confirmar = confirm("¿Desea editar el torneo?");
    console.log(idTorneo);
    if(confirmar){
        window.location.href = `../html/soporte.html?id=${idTorneo}`;
    }
}