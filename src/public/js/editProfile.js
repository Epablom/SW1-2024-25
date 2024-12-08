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
document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('upload-file-form');
    const fileList = document.getElementById('file-list');

    // Manejar la subida de archivos
    uploadForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evitar recarga de la página

        const formData = new FormData(uploadForm);

        fetch('/profile/upload', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    const note = data.note;

                    // Añadir el archivo subido a la lista sin recargar la página
                    const newFile = document.createElement('div');
                    newFile.classList.add('file-item');
                    newFile.innerHTML = `
                        <h3>${note.title} - ${note.degree}</h3>
                        <p><strong>Materia:</strong> ${note.subject}</p>
                        <p><strong>Año:</strong> ${note.year}</p>
                        <p><strong>Descripción:</strong> ${note.description}</p>
                        <p><strong>Precio:</strong> €${note.price}</p>
                        <a href="${note.notesRoute}" download>Descargar</a>
                    `;
                    fileList.appendChild(newFile);

                    alert('Archivo y datos subidos exitosamente.');
                } else {
                    alert('Error al subir el archivo: ' + data.message);
                }
            })
            .catch((error) => {
                console.error('Error al subir el archivo:', error);
                alert('Ocurrió un error al subir el archivo.');
            });
    });
});