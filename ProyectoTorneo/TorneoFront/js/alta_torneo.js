document.addEventListener("DOMContentLoaded", () => {
    const API_URL = "http://localhost:5014/Api/Torneo";

    const form = document.getElementById("altaTorneoForm");

    form.addEventListener("submit", async(event) => {
        event.preventDefault();

        const name = document.getElementById("nombreTorneo").value;
        const fechaInicio = document.getElementById("fechaInicio").value;
        const fechaFin = document.getElementById("fechaFin").value;

        let isValid = true;

        if (name === "") {
            alert("Es obligatorio ingresar nombre");
            isValid = false;
        }

        const today = new Date();
        const beginDate = new Date(fechaInicio);
        const endDate = new Date(fechaFin);

        if (fechaInicio === "" || beginDate <= today) {
            alert("El torneo debe empezar en el futuro.");
            isValid = false;
        }

        if (fechaFin === "" || beginDate >= endDate) {
            alert("La fecha de fin debe ser posterior a la fecha de inicio.");
            isValid = false;
        }

        if (!isValid) return;


        try {
            const response = await fetch('http://localhost:5014/Api/Torneo/Crear', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: document.getElementById('nombreTorneo').value,
                    fechaInicio: document.getElementById('fechaInicio').value,
                    fechaFin: document.getElementById('fechaFin').value
                })
            });
            

            if (response.ok) {
                alert("Torneo generado correctamente!");
                form.reset();
            } else {
                alert("Error al generar torneo");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Ocurrió un error al intentar cargar el torneo");
        }
    });
});
