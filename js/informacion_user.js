
        // Cargar datos del LocalStorage al cargar la página
        window.onload = function() {
            document.getElementById('displayUsername').textContent = localStorage.getItem('username');
            document.getElementById('profileImage').src = localStorage.getItem('profileImage') || 'https://via.placeholder.com/150';
        };

        // Funcionalidad para subir y mostrar la foto de perfil
        document.getElementById('upload').addEventListener('change', function(event) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = function(e) {
                document.getElementById('profileImage').src = e.target.result;
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        });

        document.getElementById('uploadButton').addEventListener('click', function() {
            const fileInput = document.getElementById('upload');
            if (fileInput.files.length > 0) {
                const fileReader = new FileReader();
                fileReader.onload = function(event) {
                    localStorage.setItem('profileImage', event.target.result); // Guarda la imagen en LocalStorage
                    alert('Foto subida con éxito.');
                };
                fileReader.readAsDataURL(fileInput.files[0]);
            } else {
                alert('Por favor, seleccione una imagen para subir.');
            }
        });

        // Funcionalidad para actualizar nombre de usuario y contraseña
        document.getElementById('updateButton').addEventListener('click', function() {
            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;

            if (newUsername) {
                localStorage.setItem('username', newUsername);
                document.getElementById('displayUsername').textContent = newUsername; // Actualiza la pantalla
            }
            if (newPassword) {
                localStorage.setItem('password', newPassword); // Actualiza la contraseña
            }

            alert('Información actualizada con éxito.');
        });