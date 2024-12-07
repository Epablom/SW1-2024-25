// Función para mostrar el formulario de edición
function editField(fieldId) {
    // Ocultar el elemento de visualización
    const displayElement = document.getElementById(`${fieldId}-display`);
    if (displayElement) {
        displayElement.classList.add('hidden');
    }

    // Mostrar el formulario correspondiente
    const formElement = document.getElementById(`${fieldId}-form`);
    if (formElement) {
        formElement.classList.remove('hidden');
    }
}

// Función para cancelar la edición y volver al modo de visualización
function cancelEdit(fieldId) {
    // Mostrar el elemento de visualización
    const displayElement = document.getElementById(`${fieldId}-display`);
    if (displayElement) {
        displayElement.classList.remove('hidden');
    }
    // Ocultar el formulario correspondiente
    const formElement = document.getElementById(`${fieldId}-form`);
    if (formElement) {
        formElement.classList.add('hidden');
    }
}
