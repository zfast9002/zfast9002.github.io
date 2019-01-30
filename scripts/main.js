var miImagen = document.querySelector('img');

miImagen.onclick = function () {
    var miSrc = miImagen.getAttribute('src');
    if (miSrc === 'images/prueba.png') {
        miImagen.setAttribute('src', 'images/prueba2.jpg');
    } else {
        miImagen.setAttribute('src', 'images/prueba.png');
    }
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

if(!localStorage.getItem('nombre')){
    setUser();
} else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Bienvenido, ' + nombreAlmacenado;
}
function setUser(){
    nombre = prompt('Ingrese su nombre');
    localStorage.setItem('nombre', nombre);
    miTitulo.textContent = 'Bienvenido, ' + nombre;
}
miBoton.onclick = function () {
    setUser();
}