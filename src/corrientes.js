const corrientes = new Map();
let id = 0;

export function addCorriente(post) {
    corrientes.set(id, corrientes);
    corrientes.id = id;
    id++;
}

//Función para obtener todos los posts
export function getCorriente(){
    return corrientes.get(id);
}

export function getCorrientes(from, to) {
    let values = [...corrientes.values()];
    if (from !== undefined) {
        return values.slice(from, to);
    } else {
        return values;
    }
}

export function loadSampleData() {

    //Renacimiento
addCorriente({title: "Renacimiento",
date1: "1400",
date2: "1480",
edad1: "d.C.",
edad2: "d.C.",
descripcion: "El Renacimiento fue un movimiento cultural y artístico que se produjo en Europa Occidental durante los siglos XV y XVI. Fue un período de transición entre la Edad Media y los inicios de la Edad Moderna, y se caracterizó por un cambio en la mentalidad europea, que pasó de ser teocéntrica a antropocéntrica",
image: "https://i.pinimg.com/originals/e1/d0/47/e1d047f40153f5a4e65ea1ae8a7994d6.jpg",
// subelementos de la época
subelemento: [
    {
        obra: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Titian_Bacchus_and_Ariadne.jpg/995px-Titian_Bacchus_and_Ariadne.jpg",
        titulo: "Bacchus and Ariadne",
        Creador: "Titian",
        Fecha_Creacion: "1523",
        tecnica: "Óleo sobre lienzo"
    },
    {
        obra: "https://images.metmuseum.org/CRDImages/ep/original/DP-414-001.jpg",
        titulo: "The Interrupted Sleep",
        Creador: "François Boucher",
        Fecha_Creacion: "1750",
        tecnica: "Óleo sobre lienzo"
    },
    {
        obra: "https://upload.wikimedia.org/wikipedia/commons/7/72/Giovanni_Bellini_and_Titian_-_The_Feast_of_the_Gods_-_Google_Art_Project.jpg",
        titulo: "The Feast of the Gods",
        Creador: "Giovanni Bellini and Titian",
        Fecha_Creacion: "1529",
        tecnica: "Óleo sobre lienzo"
    }
]
});

// Barroco
addCorriente({
title: "Barroco",
date1: "1600",
date2: "1750",
edad1: "d.C.",
edad2: "d.C.",
descripcion: "El Barroco fue un período artístico y cultural que se desarrolló en Europa desde principios del siglo XVII hasta mediados del siglo XVIII. Se caracterizó por la exuberancia, la emotividad y la ornamentación excesiva en las artes visuales y escénicas.",
image: "https://pymstatic.com/121621/conversions/pinturas-barroco-mas-importantes-social.jpg",
subelemento: [
    {
        obra: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg/1200px-La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg",
        titulo: "La Ronda Nocturna",
        Creador: "Rembrandt",
        Fecha_Creacion: "1642",
        tecnica: "Óleo sobre lienzo"
    },
    {
        obra: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/The_Three_Graces%2C_by_Peter_Paul_Rubens%2C_from_Prado_in_Google_Earth.jpg/1200px-The_Three_Graces%2C_by_Peter_Paul_Rubens%2C_from_Prado_in_Google_Earth.jpg",
        titulo: "Las Tres Gracias",
        Creador: "Peter Paul Rubens",
        Fecha_Creacion: "1635",
        tecnica: "Óleo sobre tabla"
    },
    {
        obra: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Judit_decapitando_a_Holofernes%2C_por_Artemisia_Gentileschi.jpg/1200px-Judit_decapitando_a_Holofernes%2C_por_Artemisia_Gentileschi.jpg",
        titulo: "Judith decapitando a Holofernes",
        Creador: "Caravaggio",
        Fecha_Creacion: "1599",
        tecnica: "Óleo sobre lienzo"
    }
]
});

// Impresionismo
addCorriente({
title: "Impresionismo",
date1: "1865",
date2: "1885",
edad1: "d.C.",
edad2: "d.C.",
descripcion: "El Impresionismo fue un movimiento artístico que surgió en Francia a finales del siglo XIX. Se caracterizó por capturar la luz y la atmósfera de un momento a través de pinceladas rápidas y colores brillantes, rompiendo con las convenciones artísticas de la época.",
image: "https://historia.nationalgeographic.com.es/medio/2021/11/11/impresion-amanecer-pintura-de-claude-monet-1872-museo-marmottan-paris_89bec264_800x620.jpg",
subelemento: [
    {
        obra: "https://es.normandie-tourisme.fr/wp-content/uploads/sites/7/2022/05/claude-monet-Impression-soleil-levant-1872-Musee-Marmottan-Monet-Paris-%C2%A9-SLB-Christian-Baraja-1200x914-1.jpeg",
        titulo: "Impresión, sol naciente",
        Creador: "Claude Monet",
        Fecha_Creacion: "1872",
        tecnica: "Óleo sobre lienzo"
    },
    {
        obra: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Edouard_Manet%2C_A_Bar_at_the_Folies-Berg%C3%A8re.jpg/1200px-Edouard_Manet%2C_A_Bar_at_the_Folies-Berg%C3%A8re.jpg",
        titulo: "Un Bar en las Folies-Bergère",
        Creador: "Édouard Manet",
        Fecha_Creacion: "1882",
        tecnica: "Óleo sobre lienzo"
    },
    {
        obra: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvNjFmNTBlODg1MjlmZS5qcGciLCJyZXNpemUsMjAwMCwyMDAwIl19.mfTvWD0AVBTTfObX2jDEA2lF8eqabARzjwUj7ePqJac.jpg",
        titulo: "Baile en el Moulin de la Galette",
        Creador: "Pierre-Auguste Renoir",
        Fecha_Creacion: "1876",
        tecnica: "Óleo sobre lienzo"
    }
]
});

// Romanticismo
addCorriente({
title: "Romanticismo",
date1: "1800",
date2: "1850",
edad1: "d.C.",
edad2: "d.C.",
descripcion: "El Romanticismo fue un movimiento cultural que se manifestó en Europa durante finales del siglo XVIII y la primera mitad del siglo XIX. Se caracterizó por la expresión emocional, la naturaleza sublime y la exaltación de lo individual y lo irracional.",
image: "https://concepto.de/wp-content/uploads/2020/03/clasicismo-contexto-revolucion-francesa-e1583778811533.jpg",
subelemento: [
    {
        obra: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvbGF2YW5ndWFyZGlhLWctMTc2NDc0NjA5MTkuanBnIiwicmVzaXplLDIwMDAsMjAwMCJdfQ.7mSPboAfgujBYLdJSCk05PjO-eOAqHryy8-tn5Edbjk.jpg",
        titulo: "La Libertad guiando al pueblo",
        Creador: "Eugène Delacroix",
        Fecha_Creacion: "1830",
        tecnica: "Óleo sobre lienzo"
    },
    {
        obra: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvZnJpZWRyaWNoX2hpc3RvcmlhLWFydGUuanBnIiwicmVzaXplLDIwMDAsMjAwMCJdfQ.qySq18aLqgpFlwITFjZZAIO2jQYrqNlnLVOkAkqmTTg.jpg",
        titulo: "El caminante sobre el mar de nubes",
        Creador: "Caspar David Friedrich",
        Fecha_Creacion: "1818",
        tecnica: "Óleo sobre lienzo"
    },
    {
        obra: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Turner%2C_J._M._W._-_The_Fighting_T%C3%A9m%C3%A9raire_tugged_to_her_last_Berth_to_be_broken.jpg/1200px-Turner%2C_J._M._W._-_The_Fighting_T%C3%A9m%C3%A9raire_tugged_to_her_last_Berth_to_be_broken.jpg",
        titulo: "La lucha del Temeraire",
        Creador: "J.M.W. Turner",
        Fecha_Creacion: "1839",
        tecnica: "Óleo sobre lienzo"
    }
]
});

// Cubismo
addCorriente({
title: "Cubismo",
date1: "1905",
date2: "1920",
edad1: "d.C.",
edad2: "d.C.",
descripcion: "El Cubismo fue un movimiento artístico que se desarrolló a principios del siglo XX, destacando la representación de objetos desde múltiples puntos de vista. Fue un rechazo a las formas convencionales y una exploración de la geometría y la abstracción.",
image: "https://static5.museoreinasofia.es/sites/default/files/obras/DE00050.jpg",
subelemento: [
    {
        obra: "https://static1.museoreinasofia.es/sites/default/files/obras/DE01162.jpg",
        titulo: "Mujer sentada acodada",
        Creador: "Pablo Picasso",
        Fecha_Creacion: "1939",
        tecnica: "Óleo sobre lienzo"
    },
    {
        obra: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/JuanGris.Portrait_of_Picasso.jpg/640px-JuanGris.Portrait_of_Picasso.jpg",
        titulo: "Retrato de Pablo Picasso",
        Creador: "Juan Gris",
        Fecha_Creacion: "1912",
        tecnica: "Óleo sobre lienzo"
    },
    {
        obra: "https://wahooart.com/Art.nsf/O/7Z9RUV/$File/Fernand-Leger-The-Woman-in-Blue.JPG",
        titulo: "La mujer en azul",
        Creador: "Fernand Léger",
        Fecha_Creacion: "1912",
        tecnica: "Óleo sobre lienzo"
    }
]
});

// Expresionismo
addCorriente({
title: "Expresionismo",
date1: "1910",
date2: "1925",
edad1: "d.C.",
edad2: "d.C.",
descripcion: "El Expresionismo fue un movimiento artístico que surgió en Alemania a principios del siglo XX. Se caracterizó por la representación emocional y subjetiva de la realidad, a menudo con colores vibrantes y formas distorsionadas para expresar sentimientos intensos.",
image: "https://www.ifema.es/img/l/cuadro-expresionista/cuadro-expresionista.jpg",
subelemento: [
    {
        obra: "https://upload.wikimedia.org/wikipedia/commons/9/9d/The_Scream_by_Edvard_Munch%2C_1893_-_Nasjonalgalleriet.png",
        titulo: "El grito",
        Creador: "Edvard Munch",
        Fecha_Creacion: "1893",
        tecnica: "Óleo, tempera y pastel sobre cartón"
    },
    {
        obra: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/NG3C5TWZ5RF7ZB2ECFXVZHMHUA.jpg",
        titulo: "Calle, Berlín",
        Creador: "Ernst Ludwig Kirchner",
        Fecha_Creacion: "1914",
        tecnica: "Óleo sobre lienzo"
    },
    {
        obra: "https://www.reprodart.com/kunst/franz_marc_727/Tiger.jpg",
        titulo: "El tigre",
        Creador: "Franz Marc",
        Fecha_Creacion: "1912",
        tecnica: "Óleo sobre lienzo"
    }
]
});

// Surrealismo
addCorriente({
title: "Surrealismo",
date1: "1917",
date2: "1950",
edad1: "d.C.",
edad2: "d.C.",
descripcion: "El Surrealismo fue un movimiento artístico y literario que se desarrolló en la década de 1920. Se caracterizó por la representación de imágenes oníricas, irracionales y subconscientes. Los surrealistas buscaban liberar la creatividad del control racional.",
image: "https://humanidades.com/wp-content/uploads/2017/03/vanguardismo-2-e1566238331889.jpg",
subelemento: [
    {
        obra: "https://wahooart.com/A55A04/w.nsf/O/BRUE-8EWLHT/$File/MAX-ERNST-EL-SOMBRERO-HACE-AL-HOMBRE.JPG",
        titulo: "El sombrero hace al hombre",
        Creador: "Max Ernst",
        Fecha_Creacion: "1920",
        tecnica: "Óleo sobre lienzo"
    },
    {
        obra: "https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2011/04/12/110412164821_miro_3_976.jpg",
        titulo: "Naturaleza muerta con zapato viejo",
        Creador: "Joan Miró",
        Fecha_Creacion: "1937",
        tecnica: "Óleo sobre lienzo"
    },
    {
        obra: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvMXZvcGViZmhrM2Zmc3ZhZjlwenphYzd0LmpwZWciLCJyZXNpemUsMjAwMCwyMDAwIl19.uo-kvjsl_VZ-M9j0UR37_1HOfhKBVm8qWh4uP5H1wRs.jpeg",
        titulo: "Los elefantes",
        Creador: "Salvador Dalí",
        Fecha_Creacion: "1948",
        tecnica: "Óleo sobre lienzo"
    }
]
});

// Pop art
addCorriente({
title: "Pop art",
date1: "1960",
date2: "2023",
edad1: "d.C.",
edad2: "d.C.",
descripcion: "El Pop art fue un movimiento artístico que se desarrolló en la década de 1950 en el Reino Unido y alcanzó su apogeo en la década de 1960 en los Estados Unidos. Se caracterizó por el uso de imágenes populares y de la cultura de masas, desafiando las convenciones artísticas tradicionales.",
image: "https://i.pinimg.com/originals/2f/21/6d/2f216d3fde1b8531d7f665bf3b0ee325.jpg",
subelemento: [
    {
        obra: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Roy_Lichtenstein_Whaam.jpg/400px-Roy_Lichtenstein_Whaam.jpg",
        titulo: "Whaam!",
        Creador: "Roy Lichtenstein",
        Fecha_Creacion: "1963",
        tecnica: "Óleo y acrílico sobre lienzo"
    },
    {
        obra: "https://uploads1.wikiart.org/00160/images/andy-warhol/cri-000000318242.jpg!Large.jpg",
        titulo: "32 latas de sopa Campbell's",
        Creador: "Andy Warhol",
        Fecha_Creacion: "1962",
        tecnica: "Serigrafía sobre lienzo"
    },
    {
        obra: "https://cms.guggenheim-bilbao.eus/uploads/2012/10/17_Oldenburg_Mouse-Museum_1977-620x469.jpg",
        titulo: "Museo Ratón",
        Creador: "Claes Oldenburg",
        Fecha_Creacion: "1977",
        tecnica: "Lienzo con relleno de espuma y cartón"
    }
]
});

// Realismo
addCorriente({
title: "Realismo",
date1: "1840",
date2: "1880",
edad1: "d.C.",
edad2: "d.C.",
descripcion: "El Realismo fue un movimiento artístico que surgió en Europa en la segunda mitad del siglo XIX. Se caracterizó por representar la realidad de manera objetiva, a menudo enfocándose en la vida cotidiana y social. Los realistas buscaban capturar la verdad sin idealizaciones.",
image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project_2.jpg",
subelemento: [
    {
        obra: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Cristo_y_la_mujer_adultera.jpg",
        titulo: "Cristo y la mujer adúltera",
        Creador: "Peter van Lint",
        Fecha_Creacion: "1641",
        tecnica: "Óleo sobre lienzo"
    },
    {
        obra: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Vel%C3%A1zquez_-_de_Breda_o_Las_Lanzas_%28Museo_del_Prado%2C_1634-35%29.jpg",
        titulo: "Las lanzas",
        Creador: "Diego Velázquez",
        Fecha_Creacion: "1635",
        tecnica: "Óleo sobre lienzo"
    },
    {
        obra: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Vel%C3%A1zquez_-_La_Fragua_de_Vulcano_%28Museo_del_Prado%2C_1630%29.jpg",
        titulo: "La fragua de Vulcano",
        Creador: "Diego Velázquez",
        Fecha_Creacion: "1630",
        tecnica: "Óleo sobre lienzo"
    }
]
});

// Neoclasicismo
addCorriente({
title: "Neoclasicismo",
date1: "1760",
date2: "1850",
edad1: "d.C.",
edad2: "d.C.",
descripcion: "El Neoclasicismo fue un movimiento artístico y cultural que surgió en Europa a mediados del siglo XVIII. Se inspiró en la estética de la Antigua Grecia y Roma, enfatizando la racionalidad, la simplicidad y la búsqueda de la perfección clásica en el arte y la arquitectura.",
image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg",
subelemento: [
    {
        obra: "https://www.thoughtco.com/thmb/GkcnvbIy4PqnMK5vqNnzLmL-hB8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/scene-from-the-myth-of-cupid-and-psyche--by-felice-giani--1794--tempera-wall-painting-158643806-5c0fd5d4c9e77c000184537d.jpg",
        titulo: "Escena del mito de Cupido y Psique",
        Creador: "Felice Giani",
        Fecha_Creacion: "1794",
        tecnica: "Óleo sobre lienzo"
    },
    {
        obra: "https://upload.wikimedia.org/wikipedia/commons/7/70/Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg",
        titulo: "El juramento de los Horacios",
        Creador: "Jacques-Louis David",
        Fecha_Creacion: "1784",
        tecnica: "Óleo sobre lienzo"
    },
    {
        obra: "https://ih0.redbubble.net/image.358030167.7128/raf,360x360,075,t,fafafa:ca443f4786.jpg",
        titulo: "El adiós de Telémaco y Eucaris",
        Creador: "Jacques-Louis David",
        Fecha_Creacion: "1818",
        tecnica: "Óleo sobre lienzo"
    }
]
});


}

loadSampleData();
