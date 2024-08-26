let menuVisible = false; 
// Variable para rastrear si el menú está visible o no

// Función que oculta o muestra el menú al hacer clic en el ícono de menú
function mostrarOcultarMenu(){
    if(menuVisible){
        // Si el menú está visible, se oculta
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        // Si el menú está oculto, se muestra
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

// Función que oculta el menú cuando se selecciona una opción del mismo
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones a las barras de habilidades cuando son visibles en la pantalla
function efectoHabilidades(){
    var skills = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    // Si la sección de habilidades está a menos de 300px de distancia del viewport, se aplican las animaciones
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("informes");
        habilidades[4].classList.add("react");
        habilidades[5].classList.add("negociacion");
        habilidades[6].classList.add("java");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajoequipo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("responsabilidad");
        habilidades[12].classList.add("adaptabilidad");
        habilidades[13].classList.add("solucion");
    }
}

// Detecta el scroll de la página y aplica la animación de las habilidades si corresponde
window.onscroll = function(){
    efectoHabilidades();
} 

// Referencias al formulario de contacto y al botón de enviar por correo
const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#prueba')

// Añade un listener para manejar el evento de envío del formulario
$form.addEventListener('submit', handleSubmit) // Se envía el elemento submit y se manda una función

// Función que maneja el envío del formulario de contacto
function handleSubmit(event) { 
    event.preventDefault() // Evita el envío predeterminado del formulario
    const form = new FormData($form) // Crea un nuevo objeto FormData con los datos del formulario
    // Configura el enlace mailto con los datos del formulario y simula un clic para enviar el correo
    $buttonMailto.setAttribute('href', `mailto:montoyakr26@gmail.com?subject=${form.get('name')} ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
}

// Funcionalidad para cambiar entre tema claro y oscuro
const btnSwitch = document.querySelector('#switch');

// Añade un listener para cambiar el tema cuando se hace clic en el botón
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark'); // Alterna la clase 'dark' en el cuerpo del documento
    btnSwitch.classList.toggle('active'); // Alterna la clase 'active' en el botón de cambio de tema
});
