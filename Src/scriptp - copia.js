// Acciones para los botones del menú
document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", function() {
        // Obtener el nombre de la clase del botón seleccionado
        const buttonClass = item.classList[1];
        switch (buttonClass) {
            case "inicio":
                alert("Has hecho clic en Inicio");
                break;
            case "medicamentos":
                alert("Has hecho clic en Medicamentos");
                break;
            case "emergencia":
                alert("Has hecho clic en Información de Emergencia");
                break;
            case "monitoreo":
                alert("Has hecho clic en Monitorear Estado de Salud");
                break;
            case "estadisticas":
                alert("Has hecho clic en Estadísticas");
                break;
            case "consultas":
                alert("Has hecho clic en Consultas");
                break;
            case "agregar-pacientes":
                alert("Has hecho clic en Agregar Pacientes");
                break;
            case "agregar-medicamentos":
                alert("Has hecho clic en Agregar Medicamentos");
                break;
            case "registrarse":
                alert("Has hecho clic en Registrarse");
                break;
            case "cerrar-sesion":
                alert("Has hecho clic en Cerrar Sesión");
                break;
            default:
                break;
        }
    });
});

// Acciones para los botones principales
document.querySelectorAll(".main-button").forEach(button => {
    button.addEventListener("click", function() {
        // Obtener el nombre de la clase del botón seleccionado
        const buttonClass = button.classList[1];
        switch (buttonClass) {
            case "medicamentos":
                alert("Has hecho clic en Controlar Medicamentos");
                break;
            case "emergencia":
                alert("Has hecho clic en Información de Emergencia");
                break;
            case "monitoreo":
                alert("Has hecho clic en Monitorear Estado de Salud");
                break;
            case "estadisticas":
                alert("Has hecho clic en Estadísticas");
                break;
            case "consultas":
                alert("Has hecho clic en Consultas");
                break;
            default:
                break;
        }
    });
});

// JavaScript para hacer funcionar el menú de hamburguesa en dispositivos móviles
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const menuList = document.querySelector(".menu");

    menuIcon.addEventListener("click", function () {
        menuList.classList.toggle("show");
    });
});

