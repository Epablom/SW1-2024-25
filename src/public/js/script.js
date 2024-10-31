document.addEventListener("DOMContentLoaded", function() {
    //Verificar si el usuario está registrado/logeado
    const isRegistered = localStorage.getItem("registered") === "true";
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    //Mostrar alerta si intenta acceder a una página sin haber iniciado sesión en sección principal (noticias)
    const links = document.querySelectorAll("aside a");
    const currentPage = window.location.pathname.split('/').pop(); 
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            if (!isLoggedIn && currentPage === "index.html") {
                event.preventDefault();
                alert("Debe iniciar sesión");
            }
        });
    });

    const loginForm = document.querySelector("#loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); 

            const username = document.querySelector("#usernameLogin").value;
            const password = document.querySelector("#passwordLogin").value;

            if (username === "" && password === "") {
                localStorage.setItem("loggedIn", "true"); //guardamos para saber qué está logeado
                window.location.href = "index.html";
            } else {
                alert("Nombre de usuario o contraseña incorrectos.");
            }
            window.location.href = "index.html";
        });
    }

    const registerForm = document.querySelector("#registerForm"); 
    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const username = document.querySelector("#username").value;
            const password = document.querySelector("#password").value;
            const email = document.querySelector("#email").value;
            const university = document.querySelector("#university").value;
            const faculty = document.querySelector("#faculty").value;
            const degree = document.querySelector("#degree").value;
            const course = document.querySelector("#course").value;

            localStorage.setItem("registered", "true"); //guardamos para saber que se ha registrado
            alert("Registro realizo con éxito. Ahora puedes iniciar sesión.");

            window.location.href = "login.html";
        });
    }

    const logoutButton = document.querySelector("#logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            localStorage.removeItem("loggedIn");
            window.location.href = "index.html"; 
        });
    }
});

function validateForm() {
    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let university = document.getElementById("university").value;
    let faculty = document.getElementById("faculty").value;
    let degree = document.getElementById("degree").value;
    let course = document.getElementById("course").value;

    if (name == "" || university == "" || faculty == "" || degree == "" || course == "") {
      alert("Revisa los campos del formulario");
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
  