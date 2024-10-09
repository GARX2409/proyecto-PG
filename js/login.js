document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Inicio de sesión exitoso.');
        window.location.href = 'menu.html'; // Redirige al menú principal
    } else {
        alert('Nombre de usuario o contraseña incorrectos.');
    }
});