// registro.js

// Obtener los datos de registro desde el almacenamiento local o inicializarlos si es la primera vez
const datosRegistro = JSON.parse(localStorage.getItem('datosRegistro')) || {};

// Función para registrar los datos de registro en el almacenamiento local
function registrarDatos(usuario, contrasena) {
    datosRegistro.usuario = usuario;
    datosRegistro.contrasena = contrasena;
    guardarDatosRegistroEnLocalStorage();
    mostrarDatosRegistro(); // Actualizar los datos mostrados después de registrarlos
}

// Función para guardar los datos de registro en el almacenamiento local
function guardarDatosRegistroEnLocalStorage() {
    localStorage.setItem('datosRegistro', JSON.stringify(datosRegistro));
}

// Función para mostrar los datos de registro en la página
function mostrarDatosRegistro() {
    const mostrarUsuario = document.getElementById('mostrar-usuario');
    const mostrarContrasena = document.getElementById('mostrar-contrasena');

    mostrarUsuario.textContent = datosRegistro.usuario || '';
    mostrarContrasena.textContent = datosRegistro.contrasena || '';
}

// Cargar los datos de registro al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarDatosRegistro();
});

// Evento para registrar los datos cuando se envía el formulario
const registroForm = document.getElementById('registro-form');
registroForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    registrarDatos(usuario, contrasena);
});
