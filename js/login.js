document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe inmediatamente

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem('role', role); // Guarda el rol en LocalStorage
        alert('Inicio de sesión exitoso.');
        
        // Redirigir según el rol seleccionado
        if (role === 'estudiante') {
            window.location.href = 'menu_estudiante.html'; // Redirige al menú del estudiante
        } else if (role === 'docente') {
            window.location.href = 'menu_docente.html'; // Redirige al menú del docente
        } else if (role === 'mediador') {
            window.location.href = 'menu_mediador.html'; // Redirige al menú del mediador
        }
    } else {
        alert('Nombre de usuario o contraseña incorrectos.');
    }
});