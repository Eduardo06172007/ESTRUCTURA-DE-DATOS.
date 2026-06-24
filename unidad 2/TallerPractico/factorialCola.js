function factorialCola(n, acumulador = 1) {
    if (n <= 1) {
        return acumulador;
    }
    
    return factorialCola(n - 1, n * acumulador);
}

console.assert(factorialCola(5) === 120, "Error en factorialCola(5)");
console.log("Pregunta 4.3 (Factorial de Cola) superado de forma óptima.");