const numeroSecreto = Math.floor(Math.random() * 10 + 1);
const numeroJugador = parseInt(prompt("Adivina el número secreto entre 1 y 10"));
console.log(`Este es el numero con el que juegas ${numeroJugador}`);
if (numeroJugador === numeroSecreto) {
    console.log("¡Felicidades! Has adivinado el número secreto.");
} else if (numeroJugador < numeroSecreto){
    console.log("numero menor !!! intenta de nuevo")
} else if (numeroJugador > numeroSecreto){
    console.log("numero mayor !!! intenta de nuevo")
}else {
    console.log("numero no encontrado, intenta nuevamente")
}