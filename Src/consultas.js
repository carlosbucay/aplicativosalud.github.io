// consultas.js

// Obtener la lista de consultas desde el almacenamiento local o inicializarla si es la primera vez
const consultasList = JSON.parse(localStorage.getItem('consultas')) || [];

// Función para agregar una consulta a la lista
function agregarConsulta(fecha, medico, notas) {
    const consulta = { fecha, medico, notas };
    consultasList.push(consulta);
    actualizarListaConsultas();
    guardarConsultasEnLocalStorage();
}

// Función para guardar la lista de consultas en el almacenamiento local
function guardarConsultasEnLocalStorage() {
    localStorage.setItem('consultas', JSON.stringify(consultasList));
}

// Función para actualizar la lista de consultas en la página
function actualizarListaConsultas() {
    const listaConsultas = document.getElementById('lista-consultas');
    listaConsultas.innerHTML = '';
    consultasList.forEach((consulta) => {
        const consultaLi = document.createElement('li');
        consultaLi.textContent = `${consulta.fecha} - ${consulta.medico} - ${consulta.notas}`;
        listaConsultas.appendChild(consultaLi);
    });
}

// Cargar la lista de consultas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarListaConsultas();
});

// Evento para agregar una consulta cuando se envía el formulario
const consultaForm = document.getElementById('consulta-form');
consultaForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const fecha = document.getElementById('fecha').value;
    const medico = document.getElementById('medico').value;
    const notas = document.getElementById('notas').value;
    agregarConsulta(fecha, medico, notas);
    consultaForm.reset();
});
