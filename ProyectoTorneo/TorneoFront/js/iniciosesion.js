// JavaScript: Detecta si hay un token y cambia el botón
document.addEventListener("DOMContentLoaded", () => {
    actualizarEstadoBoton();
});

async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    try {
        const response = await fetch("http://localhost:5014/api/Auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ NombreUsuario: username, Contraseña: password })
        });

        if (response.ok) {
            const data = await response.json();
            const token = data.token;

            if (token) {
                localStorage.setItem("jwtToken", token);
                alert("Inicio de sesión exitoso");
                
                actualizarEstadoBoton();
           
            const dropdownToggle = document.getElementById('miBoton');
            const dropdown = new bootstrap.Dropdown(dropdownToggle);
            dropdown.hide();

            } else {
                console.error("El token no está presente en la respuesta");
            }
        } else {
            alert("Credenciales incorrectas");
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
    }
}

function logout() {
    localStorage.removeItem("jwtToken");
    alert("Sesión cerrada");
    actualizarEstadoBoton();
}

function actualizarEstadoBoton() {
    const token = localStorage.getItem("jwtToken");
    const boton = document.getElementById("miBoton");

    if (token) {
        boton.textContent = "Cerrar sesión";
        boton.onclick = logout;
    } else {
        boton.textContent = "Iniciar sesión";
        boton.onclick = login;
    }
}


document.addEventListener('DOMContentLoaded',()=>{
    const btnLogin = document.getElementById('btnLogin');
    btnLogin.addEventListener('click',login);
    const btnLogout = document.getElementById('btnLogout');
    btnLogout.addEventListener('click',logout);
});


