document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const role = document.getElementById('role').value;
    const password = document.getElementById('password').value;

    // Guarda la información en LocalStorage
    localStorage.setItem('username', username);
    localStorage.setItem('role', role);
    localStorage.setItem('password', password);

    alert('Registro exitoso. Ahora puede iniciar sesión.');
    window.location.href = 'login.html'; // Redirige a la página de inicio de sesión
});