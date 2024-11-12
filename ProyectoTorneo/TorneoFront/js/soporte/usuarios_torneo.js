
function OcultarSecciones() {
    const token = localStorage.getItem('jwtToken');
    
    const formularioAltaTorneo = document.getElementById('formularioAltaTorneo');
    if (formularioAltaTorneo) {
        formularioAltaTorneo.style.display = token ? 'block' : 'none';
    }

    document.querySelectorAll('[id^="botonEditarTorneo_"]').forEach(boton => {
        boton.style.display = token ? 'block' : 'none';
    });

    document.querySelectorAll('[id^="botonEliminar_"]').forEach(boton => {
        boton.style.display = token ? 'block' : 'none';
    });
}



// `<div class="btn-group btn-group-sm" role="group" aria-label="Basic mixed styles example">
//                     <button type="button" class="btn btn-primary me-2" style="background: rgb(45, 126, 231)" onclick="actualizarTorneo(${torneo.idTorneo})">Editar</button>
//                     <button type="button" class="btn btn-primary" id="botonEditar" data-id="${torneo.idTorneo}" onclick="borrarTorneo(this)" style="background-color: #20212b">Borrar</button>
//                 </div>`;