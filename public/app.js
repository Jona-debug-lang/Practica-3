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
}

function search() {
    let input = document.getElementById('searchbar').value //Obtiene la entrada del buscador
    input = input.toLowerCase(); //Lo convierte en minúsculas
    let x = document.getElementsByClassName('subtitle'); //Obtiene todos los elementos que tienen la clase subtitle
    
    //Inicia un bucle que itera sobre todos los elementos "subtitle"
    for (i = 0; i < x.length; i++) { 
        let current_title = x[i]; //Obtiene el elemento que se está iterando
        let relatedPost = current_title.closest('.post-item'); //Encuentra el contenedor del elemento más cercano al título que se está iterando

        //Revisa si el texto del título no incluye el texto de la búsqueda
        if (!current_title.innerHTML.toLowerCase().startsWith(input)) {
            relatedPost.style.display = "none"; //None para ocultarlo
        } else {
            relatedPost.style.display = "block"; //Block para que se muestre como bloque
        }
    }
}