// Botón "Finalizar venta"
document.querySelector('.B1 button').addEventListener('click', function (event) {
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

// Botón "Guardar como pendiente"
document.querySelector('.B2 button').addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del botón

    Swal.fire({
        title: '¿Estás seguro?',
        text: 'Se guardaran los cambios como pendientes.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, guardar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'info',
                title: 'Cambios pendientes',
                text: 'Los cambios se han guardado como pendientes.',
                confirmButtonText: 'Aceptar',
            }).then(() => {
                // Aquí puedes realizar alguna acción adicional, como limpiar el formulario
                console.log('Cambios en pendientes');
            });
        } else {
            console.log('No guardar cancelado');
        }
    });
});
// Botón "Guardar como pendiente"
document.querySelector('.B3 button').addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del botón

    Swal.fire({
        title: '¿Estás seguro?',
        text: 'Se borran todos los cambios realizados.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, continuar',
        cancelButtonText: 'Regresar',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'info',
                title: 'Descartado',
                text: 'Se han borrado lo cambios.',
                confirmButtonText: 'Aceptar',
            }).then(() => {
                // Aquí puedes realizar alguna acción adicional, como limpiar el formulario
                console.log('Cambios borrados');
            });
        } else {
            console.log('No guardar cancelado');
        }
    });
});
// Botón "Guardar como pendiente"
document.querySelector('.escaneo button').addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del botón

    Swal.fire({
        title: 'Producto encotrado',
        text: 'El producto a sido encontrado exitosamente',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Sí, continuar',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'info',
                title: 'Producto agregado',
                text: 'Se ha agregado al historial de ventas.',
                confirmButtonText: 'Aceptar',
            }).then(() => {
                // Aquí puedes realizar alguna acción adicional, como limpiar el formulario
                console.log('Cambios borrados');
            });
        } else {
            console.log('No guardar cancelado');
        }
    });
});
// Botón "Guardar como pendiente"
document.querySelector('.seleccion button').addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del botón

    Swal.fire({
        title: 'Producto encotrado',
        text: 'El producto a sido encontrado exitosamente',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Sí, continuar',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'info',
                title: 'Producto agregado',
                text: 'Se ha agregado al historial de ventas.',
                confirmButtonText: 'Aceptar',
            }).then(() => {
                // Aquí puedes realizar alguna acción adicional, como limpiar el formulario
                console.log('Cambios borrados');
            });
        } else {
            console.log('No guardar cancelado');
        }
    });
});