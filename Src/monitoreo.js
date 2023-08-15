// monitoreo.js

// Obtener los signos vitales registrados desde el almacenamiento local o inicializarlos si es la primera vez
const signosVitalesList = JSON.parse(localStorage.getItem('signosVitales')) || [];

// Función para registrar los signos vitales en la lista
function registrarSignosVitales(presion, pulso, temperatura) {
    const signosVitales = { presion, pulso, temperatura };
    signosVitalesList.push(signosVitales);
    actualizarListaSignosVitales();
    guardarSignosVitalesEnLocalStorage();
}

// Función para guardar la lista de signos vitales en el almacenamiento local
function guardarSignosVitalesEnLocalStorage() {
    localStorage.setItem('signosVitales', JSON.stringify(signosVitalesList));
}

// Función para actualizar la lista de signos vitales en la página
function actualizarListaSignosVitales() {
    const signosVitalesDiv = document.getElementById('signos-vitales');
    signosVitalesDiv.innerHTML = '';
    signosVitalesList.forEach((signosVitales) => {
        const presionP = document.createElement('p');
        presionP.textContent = `Presión arterial: ${signosVitales.presion}`;
        const pulsoP = document.createElement('p');
        pulsoP.textContent = `Pulso: ${signosVitales.pulso} BPM`;
        const temperaturaP = document.createElement('p');
        temperaturaP.textContent = `Temperatura: ${signosVitales.temperatura} °C`;

        signosVitalesDiv.appendChild(presionP);
        signosVitalesDiv.appendChild(pulsoP);
        signosVitalesDiv.appendChild(temperaturaP);
    });
}

// Cargar la lista de signos vitales al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarListaSignosVitales();
});

// Evento para registrar los signos vitales cuando se envía el formulario
const monitoreoForm = document.getElementById('monitoreo-form');
monitoreoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const presion = document.getElementById('presion').value;
    const pulso = document.getElementById('pulso').value;
    const temperatura = document.getElementById('temperatura').value;
    registrarSignosVitales(presion, pulso, temperatura);
    monitoreoForm.reset();
});
