// Botón "Guardar"
document.querySelector('.btn.btn-success').addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del botón

    Swal.fire({
        title: '¿Estás seguro?',
        text: 'Se guardarán los cambios realizados.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, guardar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: 'Guardado',
                text: 'Los cambios se han guardado exitosamente.',
                confirmButtonText: 'Aceptar',
            }).then(() => {
                // Aquí puedes realizar alguna acción adicional, como redirigir
                console.log('Cambios guardados');
            });
        } else {
            console.log('Guardar cancelado');
        }
    });
});

// Botón "No Guardar"
document.querySelector('.btn.btn-warning').addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del botón

    Swal.fire({
        title: '¿Estás seguro?',
        text: 'Se descartarán los cambios realizados.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, descartar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'info',
                title: 'Descartado',
                text: 'Los cambios se han descartado.',
                confirmButtonText: 'Aceptar',
            }).then(() => {
                // Aquí puedes realizar alguna acción adicional, como limpiar el formulario
                console.log('Cambios descartados');
            });
        } else {
            console.log('No guardar cancelado');
        }
    });
});