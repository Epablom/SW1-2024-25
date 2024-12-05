document.addEventListener("DOMContentLoaded", function() {
    //Mostrar alerta si intenta acceder a una página sin haber iniciado sesión en sección principal (noticias)
    const links = document.querySelectorAll("aside a");
    const currentPage = window.location.pathname.split('/').pop(); 
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            //validación en el servidor para verificar la sesión del usuario?
            alert("Debe iniciar sesión"); 
            event.preventDefault();
        });
    });

    const loginForm = document.querySelector("#loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", async function(event) {
            event.preventDefault(); 

            const username = document.querySelector("#usernameLogin").value;
            const password = document.querySelector("#passwordLogin").value;

             // Realizar petición al servidor para validar credenciales
             const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                window.location.href = "/profile";
            } else {
                alert("Nombre de usuario o contraseña incorrectos.");
            }
        });
    }

    const registerForm = document.querySelector("#registerForm"); 
    if (registerForm) {
        registerForm.addEventListener("submit", async function(event) {
            event.preventDefault();

            const userData = {
                username: document.querySelector("#username").value,
                password: document.querySelector("#password").value,
                email: document.querySelector("#email").value,
                university: document.querySelector("#university").value,
                faculty: document.querySelector("#faculty").value,
                degree: document.querySelector("#degree").value,
                course: document.querySelector("#course").value,
            };

            // Enviar los datos al servidor para registrarlos en la base de datos
            const response = await fetch('/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                alert("Registro realizado con éxito. Ahora puedes iniciar sesión.");
                window.location.href = "/";
            } else {
                alert("Error al registrar el usuario. Inténtalo de nuevo.");
            }
        });
    
        editProfileForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const updatedData = {
                username: document.querySelector("#username").value,
                password: document.querySelector("#password").value,
                email: document.querySelector("#email").value,
                university: document.querySelector("#university").value,
                faculty: document.querySelector("#faculty").value,
                degree: document.querySelector("#degree").value,
                course: document.querySelector("#course").value,
                biography: document.querySelector("#biography").value,
            };// Enviar datos actualizados al servidor
            const response = await fetch('/editProfile', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedData),
            });

            if (response.ok) {
                alert("Perfil actualizado correctamente.");
            } else {
                alert("Error al actualizar el perfil.");
            }
        });
    }
    
    const logoutButton = document.querySelector("#logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", async function () {
            // Solicitar al servidor el cierre de sesión
            const response = await fetch('/logout', { method: 'POST' });
            if (response.ok) {
                window.location.href = "/";
            } else {
                alert("Error al cerrar sesión.");
            }
        });
    }
});

function validateForm() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    if (username == "") {
      alert("Por favor, introduzca un nombre de usuario");
      return false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, introduzca una dirección de email válida.");
      return false;
    }

    return true;
}
  
function validateEmail() {
    let email = document.getElementById("email").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      alert("Por favor, introduzca una dirección de email válida.");
      return false; 
    }

    return true; 
}


// Toggle between light and dark themes
themeToggle.addEventListener('click', () => {
    if (themeStylesheet.getAttribute('href') === '../css/dark.css') {
        themeStylesheet.setAttribute('href', '../css/light.css');
    } else {
        themeStylesheet.setAttribute('href', '../css/dark.css');
    }
});