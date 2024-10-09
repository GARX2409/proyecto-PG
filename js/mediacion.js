  // Funcionalidad para solicitar mediación
document.getElementById('mediationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe inmediatamente

    // Captura los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const tipoFalta = document.getElementById('tipoFalta').value;
    const sede = document.getElementById('sede').value;

    // Crea un objeto de mediación
    const mediationRequest = {
        nombre: nombre,
        titulo: titulo,
        descripcion: descripcion,
        tipoFalta: tipoFalta,
        sede: sede,
        estado: 'En Proceso' // Estado inicial
    };

    // Obtiene la lista de mediaciones del LocalStorage
    const mediations = JSON.parse(localStorage.getItem('mediations')) || [];
    mediations.push(mediationRequest); // Agrega la nueva mediación

    // Guarda la lista actualizada en LocalStorage
    localStorage.setItem('mediations', JSON.stringify(mediations));

    alert('Solicitud enviada con éxito!');
    document.getElementById('mediationForm').reset(); // Limpia el formulario
});