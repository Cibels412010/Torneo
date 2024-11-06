function editarEquipo(idEquipo) {
    const confirmar = confirm("¿Estás seguro de que quieres editar este equipo?");
    console.log(idEquipo);
    if (confirmar) {
        location.href = `../html/transaccion.html?id=${idEquipo}`;
        
    }

}


