window.onload = function() {
    const mediations = JSON.parse(localStorage.getItem('mediations')) || [];
    const mediationsList = document.getElementById('mediationsList');

    if (mediations.length === 0) {
        mediationsList.innerHTML = '<p class="text-center">No hay mediaciones activas.</p>';
        return;
    }

    mediations.forEach((mediation, index) => {
        const mediationBox = document.createElement('div');
        mediationBox.className = 'mediations-box';
        mediationBox.innerHTML = `
            <h5>Mediación ${index + 1}: ${mediation.titulo}</h5>
            <p>Nombre: ${mediation.nombre}</p>
            <p>Descripción: ${mediation.descripcion}</p>
            <p>Tipo de Falta: ${mediation.tipoFalta}</p>
            <p>Sede: ${mediation.sede}</p>
            <p>Estado: <span class="badge bg-warning text-dark">${mediation.estado}</span></p>
            <button class="btn btn-secondary" onclick="changeStatus(${index})">Cambiar Estado</button>
        `;
        mediationsList.appendChild(mediationBox);
    });
};

function changeStatus(index) {
    const mediations = JSON.parse(localStorage.getItem('mediations'));
    const currentStatus = mediations[index].estado;

    if (currentStatus === 'En Proceso') {
        mediations[index].estado = 'Resuelto';
    } else if (currentStatus === 'Resuelto') {
        mediations[index].estado = 'Cancelada';
    } else {
        mediations[index].estado = 'En Proceso';
    }

    localStorage.setItem('mediations', JSON.stringify(mediations));
    alert('Estado actualizado a: ' + mediations[index].estado);
    window.location.reload();
}

// Regresar al menú según el rol
document.getElementById('backToMenu').addEventListener('click', function() {
    const role = localStorage.getItem('role');
    if (role === 'estudiante') {
        window.location.href = 'menu_estudiante.html';
    } else if (role === 'docente') {
        window.location.href = 'menu_docente.html';
    } else if (role === 'mediador') {
        window.location.href = 'menu_mediador.html';
    }
});