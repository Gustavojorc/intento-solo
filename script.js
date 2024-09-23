function abrirPestaña(nombrePestaña) {

    var contenidos = document.getElementsByClassName('contenido-pestaña');
    for (var i = 0; i < contenidos.length; i++) {
        contenidos[i].style.display = 'none';
    }
    document.getElementById(nombrePestaña).style.display = 'block'; 
}

document.addEventListener("DOMContentLoaded", function() {
    openTab('Inicio');
});
function mostrarProductos() {
    var productos = document.getElementById("productos");
    if (productos.style.display === "none") {
        productos.style.display = "block";
    } else {
        productos.style.display = "none";
    }
}