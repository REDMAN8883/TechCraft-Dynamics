
// Muestra el modal //
function mostrarModal(){
    const modal =document.getElementById("modal-info1");
    modal.style.display = "flex"; // Se cambia al flex para centrar todo el contenido //
}

// Cierra el modal //
function cerrarModal(){
    const modal = document.getElementById('modal-info1');
    modal.style.display = "none";
}

// Al dar click afuera del contenido se cierra el modal //
window.onclick = function(event){
    const modal = document.getElementById("modal-info1");
    if(event.target === modal){
        modal.style.display ="none";
    }
}


// // Muestra el modal //
// function mostrarModal2(){
//     const modal2 =document.getElementById("modal-info2");
//     modal2.style.display = "flex"; // Se cambia al flex para centrar todo el contenido //
// }

// // Cierra el modal //
// function cerrarModal2(){
//     const modal2 = document.getElementById('modal-info2');
//     modal2.style.display = "none";
// }

// // Al dar click afuera del contenido se cierra el modal //
// window.onclick = function(event){
//     const modal2 = document.getElementById("modal-info2");
//     if(event.target === modal2){
//         modal2.style.display ="none";
//     }
// };