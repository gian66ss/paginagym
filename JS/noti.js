// Suponiendo que estos son los vencimientos del día
const vencimientos = [
    { nombre: 'Juan Pérez', fecha: '2024-11-01' },
    { nombre: 'María López', fecha: '2024-11-01' },
];

// Mostrar notificación
function mostrarNotificacion() {
    const notification = document.getElementById('notification');
    const expirationList = document.getElementById('expirationList');

    // Limpiar la lista antes de llenarla
    expirationList.innerHTML = '';

    // Llenar la lista con los vencimientos
    vencimientos.forEach(v => {
        const li = document.createElement('li');
        li.textContent = `${v.nombre} - Vencimiento: ${v.fecha}`;
        expirationList.appendChild(li);
    });

    // Añadir clase para mostrar la notificación
    notification.classList.add('show');
    document.getElementById('openButton').classList.add('hidden'); // Oculta el botón al abrir
}

// Cerrar notificación
function cerrarNotificacion() {
    const notification = document.getElementById('notification');
    notification.classList.remove('show');
    document.getElementById('openButton').classList.remove('hidden'); // Muestra el botón al cerrar
}

// Evento para cerrar la notificación
document.getElementById('closeButton').addEventListener('click', cerrarNotificacion);

// Evento para abrir la notificación
document.getElementById('openButton').addEventListener('click', mostrarNotificacion);

// Mostrar la notificación al cargar la página
window.onload = mostrarNotificacion;
