// pacientes.js

// Obtener la lista de pacientes desde el almacenamiento local o inicializarla si es la primera vez
const pacientesList = JSON.parse(localStorage.getItem('pacientes')) || [];

// Función para agregar un paciente a la lista
function agregarPaciente(nombre, fechaNacimiento, contacto) {
    const paciente = { nombre, fechaNacimiento, contacto };
    pacientesList.push(paciente);
    actualizarListaPacientes();
    guardarPacientesEnLocalStorage();
}

// Función para guardar la lista de pacientes en el almacenamiento local
function guardarPacientesEnLocalStorage() {
    localStorage.setItem('pacientes', JSON.stringify(pacientesList));
}

// Función para actualizar la lista de pacientes en la página
function actualizarListaPacientes() {
    const listaPacientes = document.getElementById('lista-pacientes');
    listaPacientes.innerHTML = '';
    pacientesList.forEach((paciente) => {
        const pacienteLi = document.createElement('li');
        pacienteLi.textContent = `${paciente.nombre} - ${paciente.fechaNacimiento} - ${paciente.contacto}`;
        listaPacientes.appendChild(pacienteLi);
    });
}

// Cargar la lista de pacientes al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarListaPacientes();
});

// Evento para agregar un paciente cuando se envía el formulario
const pacienteForm = document.getElementById('paciente-form');
pacienteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const contacto = document.getElementById('contacto').value;
    agregarPaciente(nombre, fechaNacimiento, contacto);
    pacienteForm.reset();
});
