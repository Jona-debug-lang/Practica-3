const corrientesMap = new Map();
let id = 0;

export function addCorriente(data) {
    corrientesMap.set(id, data);
    data.id = id;
    id++;
}

// Función para obtener un post por ID
export function getCorriente(id) {
    return corrientesMap.get(id);
}

export function getCorrientes(from, to) {
    let values = [...corrientesMap.values()];
    if (from !== undefined) {
        return values.slice(from, to);
    } else {
        return values;
    }
}

export function loadSampleData() {

addCorriente({
    image: "https://i.pinimg.com/originals/e1/d0/47/e1d047f40153f5a4e65ea1ae8a7994d6.jpg"
});

// Barroco
addCorriente({
    image: "https://pymstatic.com/121621/conversions/pinturas-barroco-mas-importantes-social.jpg"
});

// Impresionismo
addCorriente({
    image: "https://historia.nationalgeographic.com.es/medio/2021/11/11/impresion-amanecer-pintura-de-claude-monet-1872-museo-marmottan-paris_89bec264_800x620.jpg"
});

// Romanticismo
addCorriente({
    image: "https://concepto.de/wp-content/uploads/2020/03/clasicismo-contexto-revolucion-francesa-e1583778811533.jpg"
});

// Cubismo
addCorriente({
    image: "https://static5.museoreinasofia.es/sites/default/files/obras/DE00050.jpg"
});

// Expresionismo
addCorriente({
    image: "https://www.ifema.es/img/l/cuadro-expresionista/cuadro-expresionista.jpg"
});

// Surrealismo
addCorriente({
    image: "https://humanidades.com/wp-content/uploads/2017/03/vanguardismo-2-e1566238331889.jpg"
});

// Pop art
addCorriente({
    image: "https://i.pinimg.com/originals/2f/21/6d/2f216d3fde1b8531d7f665bf3b0ee325.jpg"
});

// Realismo
addCorriente({
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project_2.jpg"
});

// Neoclasicismo
addCorriente({
    image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg"
});



}

loadSampleData();
