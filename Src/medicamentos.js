// Código JavaScript para manejar el almacenamiento local de los medicamentos

// Obtener la lista de medicamentos desde el almacenamiento local o inicializarla si es la primera vez
const medicamentosList = JSON.parse(localStorage.getItem('medicamentos')) || [];

// Función para agregar un medicamento a la lista
function agregarMedicamento(nombre, dosis, horario) {
    const medicamento = { nombre, dosis, horario };
    medicamentosList.push(medicamento);
    actualizarListaMedicamentos();
    guardarMedicamentosEnLocalStorage();
}

// Función para guardar la lista de medicamentos en el almacenamiento local
function guardarMedicamentosEnLocalStorage() {
    localStorage.setItem('medicamentos', JSON.stringify(medicamentosList));
}

// Función para actualizar la lista de medicamentos en la página
function actualizarListaMedicamentos() {
    const medicamentosUl = document.getElementById('medicamentos-list');
    medicamentosUl.innerHTML = '';
    medicamentosList.forEach((medicamento) => {
        const medicamentoLi = document.createElement('li');
        medicamentoLi.textContent = `${medicamento.nombre} - Dosis: ${medicamento.dosis} - Horario: ${medicamento.horario}`;
        medicamentosUl.appendChild(medicamentoLi);
    });
}

// Cargar la lista de medicamentos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarListaMedicamentos();
});

// Evento para agregar un medicamento cuando se envía el formulario
const medicamentoForm = document.getElementById('medicamento-form');
medicamentoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const dosis = document.getElementById('dosis').value;
    const horario = document.getElementById('horario').value;
    agregarMedicamento(nombre, dosis, horario);
    medicamentoForm.reset();
});
