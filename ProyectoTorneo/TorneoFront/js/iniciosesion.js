
  
  
  
  async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    try {
      const response = await fetch("http://localhost:5014/api/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ NombreUsuario: username, Contraseña: password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
  
        if (token) {
          localStorage.setItem("jwtToken", token);
          alert("Inicio de sesión exitoso");
  
          actualizarEstadoBoton();
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
    const dropdown = new bootstrap.Dropdown(boton);
    dropdown.hide(); 
  
    if (token) {
      boton.textContent = "Cerrar sesión";
      boton.onclick = logout;
    } else {
      boton.textContent = "Iniciar sesión";
    }
  }
  
  async function registrar(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
  
    const username = document.getElementById("usernameRegister").value;
    const password = document.getElementById("passwordRegister").value;
    const role = document.getElementById("role").value;
  
    try {
      const response = await fetch("http://localhost:5014/api/Auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ NombreUsuario: username, Contraseña: password, Rol: role }),
      });
  
      if (response.ok) {
        const data = await response.json();
        
        if (data) {
          // Aquí asumo que el modal tiene el id 'registroModal'
          const modal = new bootstrap.Modal(document.getElementById("registroModal"));
          modal.hide();
          
          // Limpiar los campos del formulario de registro
          document.getElementById("formRegistro").reset();
          alert("Registro exitoso");
        } else {
          console.error("No se pudo completar el registro");
        }
      } else {
        alert("Error en el registro");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  }
  