function validateForm() {
    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let university = document.getElementById("university").value;
    let faculty = document.getElementById("faculty").value;
    let degree = document.getElementById("degree").value;
    let course = document.getElementById("course").value;

    if (username == "" || university == "" || faculty == "" || degree == "" || course == "") {
      alert("Debes rellenar este campo");
      return false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, introduzca una dirección de email válida.");
      return false;
    }
    return true;
}