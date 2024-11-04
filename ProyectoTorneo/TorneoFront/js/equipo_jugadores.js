
document.addEventListener("DOMContentLoaded", () => {
    const API_URL = "http://localhost:5014/Api/Equipo/Crear";

    const form = document.getElementById("equipoForm");

    form.addEventListener("submit", async(event) => {
        event.preventDefault();

        const name = document.getElementById("nombreEquipo").value;
        const fechaFundacion = document.getElementById("fechaFundacion").value;

        let isValid = true;

        if (name === "") {
            alert("Es obligatorio ingresar nombre");
            isValid = false;
        }

        const today = new Date();
        const fundacion = new Date(fechaFundacion);

        if (fechaFundacion === "" || fundacion >= today) {
            alert("El Equipo debe tener fech de fundación posterior a hoy.");
            isValid = false;
        }

        if (!isValid) return;


        try {
            const response = await fetch('http://localhost:5014/Api/Equipo/Crear', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: document.getElementById('nombreEquipo').value,
                    fechaFundacion: document.getElementById('fechaFundacion').value,
                })
            });
            

            if (response.ok) {
                alert("Equipo generado correctamente!");
                form.reset();
            } else {
                alert("Error al guardar equipo");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Ocurrió un error al intentar cargar el equipo");
        }
    });
});
