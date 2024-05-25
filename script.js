let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

// Obtén una referencia a los botones por sus IDs
var btnDescargar = document.getElementById('btnDescargar');
var btnDescargar2 = document.getElementById('btnDescargar2');

// Agrega un evento 'click' a cada botón
btnDescargar.addEventListener('click', function() {
    descargarArchivo('./assets/cv2023.pdf', 'cv-cristian');
});

btnDescargar2.addEventListener('click', function() {
    descargarArchivo('./assets/CP.pdf', 'cp-cristian');
});

// Función para descargar el archivo
function descargarArchivo(ruta, nombreArchivo) {
    // Crea un enlace temporal
    var link = document.createElement('a');
    link.href = ruta;
    link.download = nombreArchivo;
    link.target = '_blank';

    // Simula un clic en el enlace temporal para iniciar la descarga
    link.click();
}


function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("react");
        habilidades[4].classList.add("nodejs");
        habilidades[5].classList.add("php");
        habilidades[6].classList.add("framework");
        habilidades[7].classList.add("mysql");
        habilidades[8].classList.add("c");
        habilidades[9].classList.add("wordpress");
        habilidades[10].classList.add("linux");
        habilidades[11].classList.add("servidores");
        habilidades[12].classList.add("redes");
        habilidades[13].classList.add("comunicacion");
        habilidades[14].classList.add("trabajoenequipo");
        habilidades[15].classList.add("creatividad");
        habilidades[16].classList.add("dedicacion");
        habilidades[17].classList.add("liderazgo");
        habilidades[18].classList.add("ingles");
        habilidades[19].classList.add("empatia");
        habilidades[20].classList.add("planificacion");
        habilidades[21].classList.add("aprendizaje");
        habilidades[22].classList.add("rproblemas");
        habilidades[23].classList.add("tomad");
        habilidades[24].classList.add("apautonomo");
        habilidades[25].classList.add("negociacion");
        



        
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 