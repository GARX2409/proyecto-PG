document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.clear(); // Borra el LocalStorage
    alert('Has cerrado sesión.');
    window.location.href = 'login.html'; // Redirige a la página de inicio de sesión
});