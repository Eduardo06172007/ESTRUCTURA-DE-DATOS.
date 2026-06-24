function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    
    let mitad = potencia(base, Math.floor(exponente / 2));
       
    if (exponente % 2 === 0) {
        return mitad * mitad;
    } else {
        return base * mitad * mitad;
    }
}

console.assert(potencia(2, 10) === 1024, "Error en potencia(2, 10)");
console.assert(potencia(5, 3) === 125, "Error en potencia(5, 3)");
console.assert(potencia(7, 0) === 1, "Error en potencia(7, 0)");

console.log("Ejercicio 1.2 superado.");