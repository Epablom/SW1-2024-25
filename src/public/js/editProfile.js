document.addEventListener('DOMContentLoaded', () => {
    const editIcons = document.querySelectorAll('.edit-icon');
    const profileTextElements = document.querySelectorAll('.profile p, .profile h2');

    // Función para hacer editable un campo de texto
    const makeEditable = (element) => {
        const currentValue = element.innerText;
        element.innerHTML = `<input type="text" class="edit-field" value="${currentValue}">`;

        // Seleccionamos el campo de texto para poner el foco automáticamente
        const inputField = element.querySelector('input');
        inputField.focus();
    };

    // Función para guardar los cambios
    const saveChanges = (element) => {
        const inputField = element.querySelector('input');
        const newValue = inputField.value;
        element.innerHTML = newValue;

        // Aquí enviarías los datos al servidor para actualizar el perfil
        // por ejemplo, usando fetch o una solicitud AJAX.
        console.log("Nuevo valor guardado:", newValue);
    };

    // Añadir un listener para cada icono de editar
    editIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            const elementToEdit = e.target.closest('div, p, h2'); // Encuentra el elemento a editar
            makeEditable(elementToEdit);
        });
    });

    // Guardar cambios cuando el campo pierda el foco
    profileTextElements.forEach(element => {
        element.addEventListener('blur', () => {
            if (element.querySelector('input')) {
                saveChanges(element);
            }
        });
    });
});
