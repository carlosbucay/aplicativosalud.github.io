// informacion-emergencia.js

// Obtener la información de emergencia desde el almacenamiento local o inicializarla si es la primera vez
const infoEmergencia = JSON.parse(localStorage.getItem('infoEmergencia')) || {};

// Función para guardar la información de emergencia en el almacenamiento local
function guardarInformacion(contacto, telefono, alergias) {
    infoEmergencia.contacto = contacto;
    infoEmergencia.telefono = telefono;
    infoEmergencia.alergias = alergias;
    guardarInformacionEnLocalStorage();
    mostrarInformacionEmergencia(); // Actualizar la información mostrada después de guardarla
}

// Función para guardar la información de emergencia en el almacenamiento local
function guardarInformacionEnLocalStorage() {
    localStorage.setItem('infoEmergencia', JSON.stringify(infoEmergencia));
}

// Función para mostrar la información de emergencia en la página
function mostrarInformacionEmergencia() {
    const mostrarContacto = document.getElementById('mostrar-contacto');
    const mostrarTelefono = document.getElementById('mostrar-telefono');
    const mostrarAlergias = document.getElementById('mostrar-alergias');

    mostrarContacto.textContent = infoEmergencia.contacto || '';
    mostrarTelefono.textContent = infoEmergencia.telefono || '';
    mostrarAlergias.textContent = infoEmergencia.alergias || '';
}

// Cargar la información de emergencia al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarInformacionEmergencia();
});

// Evento para guardar la información cuando se envía el formulario
const emergenciaForm = document.getElementById('emergencia-form');
emergenciaForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const contacto = document.getElementById('contacto').value;
    const telefono = document.getElementById('telefono').value;
    const alergias = document.getElementById('alergias').value;
    guardarInformacion(contacto, telefono, alergias);
});
