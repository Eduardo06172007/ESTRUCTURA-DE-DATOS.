function BusquedaBinariaRecursiva(arr, objetivo, bajo, alto) {
    // Caso Base 1: El rango de búsqueda es inválido (el elemento no existe)
    if (bajo > alto) {
        return -1;
    }
    
    // Calcular el punto medio (entero)
    let medio = Math.floor((bajo + alto) / 2);
    
    // Caso Base 2: El elemento en el medio es el objetivo
    if (arr[medio] === objetivo) {
        return medio;
    }
    
    // Casos Recursivos: Reducir el espacio de búsqueda
    if (arr[medio] > objetivo) {
        // Buscar en la mitad izquierda
        return BusquedaBinariaRecursiva(arr, objetivo, bajo, medio - 1);
    } else {
        // Buscar en la mitad derecha
        return BusquedaBinariaRecursiva(arr, objetivo, medio + 1, alto);
    }
}

// Casos de prueba para validación
const datosOrdenados = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.assert(BusquedaBinariaRecursiva(datosOrdenados, 23, 0, 9) === 5);
console.assert(BusquedaBinariaRecursiva(datosOrdenados, 100, 0, 9) === -1);
console.log("Ejercicio 2.2 superado.");