const NUM_RESULTS = 3;

let loadMoreRequests = 0;

async function loadMore(){

    const from = (loadMoreRequests+1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/corriente?from=${from}&to=${to}`); //EL de corriente es del html

    const newPosts = await response.text();
  
    const postsDiv = document.getElementById("corriente"); //El de corriente es del html a renderizar

    postsDiv.innerHTML += newPosts;

    loadMoreRequests++;

    applyView(); //Acomoda los nuevos elementos cargados de acuerdo a la vista en la que se encuentra
    addEventListener();
    search();
}

async function search() {
    let input = document.getElementById('searchbar').value.toLowerCase(); //Obtiene la entrada del buscador
    
    const response = await fetch(`/search?searchbar=${input}`);
    const responseObj = await response.json();

    let available = responseObj.available;
    let allPosts = document.getElementsByClassName('subtitle');


    // Itera sobre los elementos 'subtitle'
    for (let i = 0; i < allPosts.length; i++) {
        let current_title = allPosts[i].textContent.toLowerCase(); // Obtiene el elemento que se está iterando
        let relatedPost = allPosts[i].closest('.post-item'); // Encuentra el contenedor del elemento más cercano al título que se está iterando

        // Revisa si el texto del título no incluye el texto de la búsqueda
        if (!current_title.startsWith(input)) {
            relatedPost.style.display = "none";
        } else {
            relatedPost.style.display = "block";
        }
    }
}

//Se obtienen los elementos que pertenezcan la clase post-item
var elements = document.getElementsByClassName("post-item");
var currentview = "grid"; //Se define el grid como vista predeterminada

// Funcion para la vista en lista 
function listView() {
  currentview = "list";
  applyView();
}

// Funcion para la vista en grid
function gridView() {
  currentview = "grid";
  applyView();
}

//Función que acomoda los elementos de acuerdo a el botón elegido.
function applyView(){
    var i;
    for (i=0; i<elements.length; i++){
        if (currentview === "list"){
            elements[i].style.width = "51%";
        }
        else if (currentview === "grid") {
            elements[i].style.width = "30%";
        }
    }
}

// Llamamos a addEventListener cuando se carga la página inicialmente
document.addEventListener("DOMContentLoaded", function () {
    addEventListener();

    // Agregar eventos oninput a todos los campos
    document.getElementById('title').oninput = validarTitulo;
    document.getElementById('date1').oninput = validarFecha;
    document.getElementById('date2').oninput = validarFecha;
    document.getElementById('descripcion').oninput = validarDescripcion;
    document.getElementById('image').oninput = validarImagen;
});


//Función para el fade in fade out de hover para las imágenes de la página principal
function addEventListener() {
    // Selecciona todas las imágenes dentro de enlaces con la clase "post-link"
    var images = document.querySelectorAll('.post-link img');

    // Itera sobre las imágenes y agrega los eventos
    images.forEach(function (image) {
        image.addEventListener("mouseover", function () {
            image.style.opacity = 1;
        });

        image.addEventListener("mouseout", function () {
            image.style.opacity = 0.6;
        });
    });
}

// Nueva función para verificar si todos los campos están llenos
function validarCamposLlenos() {
    var campos = [
        document.getElementById('title').value,
        document.getElementById('date1').value,
        document.getElementById('date2').value,
        document.getElementById('descripcion').value,
        document.getElementById('image').value,
        document.getElementById('edad1').value,
        document.getElementById('edad2').value
    ];

    var nombresCampos = ["Título", "Fecha de inicio", "Fecha de finalización", "Descripción", "URL de imagen", "Era de inicio", "Era de finalización"];
    var camposVacios = [];

    for (var i = 0; i < campos.length; i++) {
        if (campos[i] === '') {
            camposVacios.push(nombresCampos[i]);
        }
    }

    if (camposVacios.length > 0) {
        mostrarMensaje('Los siguientes campos deben estar llenos: ' + camposVacios.join(', ') + '.');
        return false;
    }

    return true;
}

// Función de validación para el campo de título
function validarTitulo() {
    var title = document.getElementById('title').value;

    if (!/^[A-Z][a-z]*$/.test(title)) {
        mostrarMensaje('El campo título debe comenzar con una letra mayúscula.');
        return false;
    }

    ocultarMensaje();
    return true;
}

// Función de validación para el campo de fecha
function validarFecha() {
    var date1 = parseInt(document.getElementById('date1').value);
    var date2 = parseInt(document.getElementById('date2').value);

    if (date1 > 2023 || date1 < 0 || date2 > 2023 || date2 < 0) {
        mostrarMensaje('Los años deben estar entre 0 y 2023.');
        return false;
    }

    ocultarMensaje();
    return true;
}

// Función de validación para el campo de descripción
function validarDescripcion() {
    var descripcion = document.getElementById('descripcion').value;

    if (descripcion === '' || descripcion.length < 50 || descripcion.length > 500) {
        mostrarMensaje('La descripción debe contener entre 50 y 500 caracteres.');
        return false;
    }

    ocultarMensaje();
    return true;
}

// Función de validación para el campo de imagen
function validarImagen() {
    var image = document.getElementById('image').value;

    // Validación de URL de imagen
    if (!esURLValida(image)) {
        mostrarMensaje('El campo URL de imagen no es una URL válida.');
        return false;
    }

    ocultarMensaje();
    return true;
}

// Función para validar si una URL es válida
function esURLValida(url) {
    var regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
}

// Función principal de validación
function validarFormulario() {
    // Primero, verifica si todos los campos están llenos
    if (!validarCamposLlenos()) {
        return false;
    }

    // Llama a todas las funciones de validación
    return validarTitulo() && validarFecha() && validarDescripcion() && validarImagen();
}

// Función para mostrar mensajes de validación
function mostrarMensaje(mensaje) {
    var mensajeDiv = document.getElementById('mensajeValidacion');
    mensajeDiv.innerHTML = mensaje;
    mensajeDiv.style.visibility = 'visible';
}

// Función para ocultar el mensaje
function ocultarMensaje() {
    document.getElementById('mensajeValidacion').style.visibility = 'hidden';
}