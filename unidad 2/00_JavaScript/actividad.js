
let selectorAnimo = document.querySelector("select");
let parrafoResultado = document.querySelector("p");


selectorAnimo.addEventListener("change", recomendarActividad);

function recomendarActividad() {
    
    let estado = selectorAnimo.value;

    
    if (estado === "feliz") {
        parrafoResultado.textContent = 
            "¡Genial! vivaaa mi novia A.";
    } else if (estado === "cansado") {
        parrafoResultado.textContent = 
            "Te mereces un descanso. Prepárate un té, busca una manta y ponte a ver tu serie favorita.";
    } else if (estado === "aburrido") {
        parrafoResultado.textContent = 
            "¡Hora de romper la rutina! Juega un videojuego, escucha un podcast nuevo o cocina algo rico.";
    } else if (estado === "creativo") {
        parrafoResultado.textContent = 
            "¡Aprovecha la inspiración! Saca una libreta para dibujar, escribe ideas o ponte a hacer algo productivo.";
    } else if (estado === "hociosos") {
        parrafoResultado.textContent = 
            "¡Hora de relajarse! Toma una siesta, escucha música tranquila o lee un libro interesante.";
    } else {
        // Si vuelve a seleccionar la opción por defecto, limpia el texto
        parrafoResultado.textContent = "";
    }
}