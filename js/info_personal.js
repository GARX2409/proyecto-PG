window.onload = function() {
    document.getElementById('displayUsername').textContent = localStorage.getItem('username');
    document.getElementById('profileImage').src = localStorage.getItem('profileImage') || 'https://via.placeholder.com/150';
};

document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('upload');
    if (fileInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(event) {
            localStorage.setItem('profileImage', event.target.result);
            document.getElementById('profileImage').src = event.target.result;
            alert('Foto subida con éxito.');
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        alert('Por favor, seleccione una imagen para subir.');
    }
});

document.getElementById('updateButton').addEventListener('click', function() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (newUsername) {
        localStorage.setItem('username', newUsername);
        document.getElementById('displayUsername').textContent = newUsername;
    }
    if (newPassword) {
        localStorage.setItem('password', newPassword);
    }

    alert('Información actualizada con éxito.');
});

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