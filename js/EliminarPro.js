document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los botones que contienen el Eliminar o el Delete
    const deleteButtons = document.querySelectorAll("button, a");

    deleteButtons.forEach(button => {
        if (button.textContent.includes("Eliminar") || button.textContent.includes("Delete")) {
            button.addEventListener("click", function (event) {
                event.preventDefault(); 

                // Aqui usamos el SweetAlert2 para la alerta personalizada
                Swal.fire({
                    title: '¿Estás seguro?',
                    text: "¡Esta acción no se puede deshacer!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, eliminarlo!',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Aquí redirigimos a la página que deseamos
                        location.href = "/admins/index4.html";

                        // Si el botón es un enlace con href, navega a la URL
                        if (button.tagName === "A" && button.href) {
                            window.location.href = button.href;
                        } else {
                            // Si es un botón, elimina el elemento padre más cercano 
                            const parentElement = button.closest("tr") || button.closest("div");
                            if (parentElement) {
                                parentElement.remove(); // Elimina el elemento de la interfaz
                            }
                        }

                        // Notificación de éxito utilizando SweetAlert2
                        Swal.fire({
                            icon: 'success',
                            title: 'Producto Eliminado',
                            text: 'El producto se ha eliminado correctamente.',
                            showConfirmButton: false,
                            timer: 3000,
                            toast: true,
                            position: 'top-end',
                            background: '#28a745',
                            color: '#fff'
                            
                        });
                    }
                });
            });
        }
    });
});
