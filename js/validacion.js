document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío automático del formulario

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validar campos vacíos
    if (email === '' || password === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Campos vacíos',
            text: 'Por favor, completa todos los campos antes de continuar.',
            confirmButtonText: 'Aceptar',
        });
        return;
    }

    // Verificar credenciales específicas
    if (email === 'admin@Miamigofiel.com' && password === '12345') {
        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            text: 'Bienvenido Administrador.',
            confirmButtonText: 'Ingresar',
        }).then(() => {
            // Redirigir a la página del administrador
            window.location.href = 'admins/DashBoard-admin.html';
        });
    } else if (email === 'Supervisor@Miamigofiel.com' && password === '12345') {
        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            text: 'Bienvenido Usuario.',
            confirmButtonText: 'Ingresar',
        }).then(() => {
            // Redirigir a la página del usuario
            window.location.href = 'Supervisor/Dashboard-admin.html';
        });
    } else if (email === 'Personal@Miamigofiel.com' && password === '12345') {
        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            text: 'Bienvenido Usuario.',
            confirmButtonText: 'Ingresar',
        }).then(() => {
            // Redirigir a la página del usuario
            window.location.href = 'Personal/Dashboard-adminCategorias.html';
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Credenciales incorrectas',
            text: 'El correo o la contraseña no son válidos. Inténtalo nuevamente.',
            confirmButtonText: 'Reintentar',
        });
    }
});
