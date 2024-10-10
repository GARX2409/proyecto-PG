 // Guardar la mediación en LocalStorage
 document.getElementById('mediationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const tipoFalta = document.getElementById('tipoFalta').value;
    const sede = document.getElementById('sede').value;

    const mediations = JSON.parse(localStorage.getItem('mediations')) || [];
    mediations.push({
        nombre, titulo, descripcion, tipoFalta, sede, estado: 'En Proceso'
    });

    localStorage.setItem('mediations', JSON.stringify(mediations));

    alert('Solicitud enviada con éxito.');
    document.getElementById('mediationForm').reset();
});

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