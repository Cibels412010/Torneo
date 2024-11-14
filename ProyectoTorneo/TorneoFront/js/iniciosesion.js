



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
        mostrarModalExito("Inicio de sesión exitoso");
        actualizarEstadoBoton();
        OcultarSecciones();
      } else {
        console.error("El token no está presente en la respuesta");
      }
    } else {
      alert("Credenciales incorrectas");
      mostrarModalExito("Usuario o contraseña incorrectos");
      actualizarEstadoBoton();
      OcultarSecciones();
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}

function logout() {
  actualizarEstadoBoton();

  mostrarModalConfirmacion("¿Está seguro que desea cerrar sesión?", function() {
    localStorage.removeItem("jwtToken");
    OcultarSecciones();
    actualizarEstadoBoton();

  })
};



function actualizarEstadoBoton() {
  const token = localStorage.getItem("jwtToken");
  const boton = document.getElementById("miBoton");
  const dropdown = new bootstrap.Dropdown(boton);

  if (token) {
    boton.textContent = "Cerrar sesión";
    boton.onclick = logout;
    dropdown.hide();
  } else {
    boton.textContent = "Soy Árbitro";
    boton.onclick = null;
    dropdown.hide();
  }
}



async function registrar(event) {
  // event.preventDefault(); // Evita el comportamiento por defecto del formulario

  const username = document.getElementById("usernameRegister").value;
  const password = document.getElementById("passwordRegister").value;
  const role = document.getElementById("role").value;

  try {
    const response = await fetch("http://localhost:5014/api/Auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombreUsuario: username, contraseña: password, rolId: role }),
    });

    if (response.ok) {
      const data = await response.json();
      
      if (data) {
        // Cerrar el modal correctamente
        const modalElement = document.getElementById("registroModal");
        const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
        modal.hide();

        // Resetear el formulario y mostrar mensaje de éxito
        // document.getElementById("formRegistro").reset();
        alert(data.message); // Muestra el mensaje de éxito devuelto por el backend
      } else {
        console.error("No se pudo completar el registro");
      }
    } else {
      const errorText = await response.text();
      alert("Solo el admin puede registrar usuarios. Error en el registro: " + errorText); // Muestra el mensaje de error devuelto por el backend
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    alert("Ocurrió un error en la conexión. Por favor, revisa tu conexión y vuelve a intentarlo.");
  }
}


function OcultarSecciones() {
  const token = localStorage.getItem('jwtToken');
    
  // Formulario de alta torneo
  const formularioAltaTorneo = document.getElementById('formularioAltaTorneo');
  if (formularioAltaTorneo) {
    formularioAltaTorneo.style.display = token ? 'block' : 'none';
  }

  const formularioAltaEvento = document.getElementById('formularioAltaEvento');
  if(formularioAltaEvento){
    formularioAltaEvento.style.display = token ? 'block' : 'none';
  }

  // Obtener todos los botones que necesitan ser ocultados o mostrados
  const botones = document.querySelectorAll('[id^="botonEditarTorneo_"], [id^="botonEliminar_"], [id^="botonEditarEquipo_"], [id^="botonBorrarEquipo_"]');

  // Establecer el estilo de visualización según la presencia del token
  botones.forEach(boton => {
    if (boton) boton.style.display = token ? 'block' : 'none';
  });

  const agregarEquipo = document.getElementById('dropdown_AgregarEquipo');
  if(agregarEquipo){
    agregarEquipo.style.display = token ? 'block' : 'none';
  } 
}


function mostrarModalConfirmacion(mensaje, accionConfirmacion) {
  // Cambia el mensaje en el modal
  const mensajeElemento = document.getElementById('modalConfirmMessage');
  mensajeElemento.innerText = mensaje;

  // Muestra el modal
  const modalConfirm = new bootstrap.Modal(document.getElementById('modalConfirm'));
  modalConfirm.show();

  // Remueve cualquier evento previo y agrega el nuevo evento de confirmación
  const botonConfirmar = document.getElementById('confirmButton');
  botonConfirmar.replaceWith(botonConfirmar.cloneNode(true));
  document.getElementById('confirmButton').addEventListener('click', function confirmarHandler() {
      modalConfirm.hide();
      accionConfirmacion();
  });
}
function mostrarModalExito(mensaje) {
  const mensajeElemento = document.getElementById('modalSuccessMessage');

  // Cambia el mensaje en el modal de éxito
  mensajeElemento.innerText = mensaje;

  // Muestra el modal de éxito
  const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'));
  modalSuccess.show();
}
// Llamar a la función al cargar la página
