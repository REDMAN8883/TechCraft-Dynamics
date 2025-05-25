//obtener todas las opciones //
document.addEventListener("DOMContentLoaded", ()=>{
    const opciones = document.querySelectorAll('.opcion');



    opciones.forEach(opcion=>{opcion.addEventListener('click', function(){
        //quitar clase //
        opcion.forEach( o => o.classList.remove('seleccionado'));
    
        this.classList.add('seleccionado');
    });
    });
    
})


