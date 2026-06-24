class NodoArbol {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

function recorridoInorden(raiz) {
    if (raiz === null) {
        return [];
    }
    // Caso Recursivo: Izquierdo -> Raíz -> Derecho
    return [...recorridoInorden(raiz.izquierdo), raiz.valor, ...recorridoInorden(raiz.derecho)];
}

function recorridoPreorden(raiz) {
    if (raiz === null) {
        return [];
    }
    // Caso Recursivo: Raíz -> Izquierdo -> Derecho
    return [raiz.valor, ...recorridoPreorden(raiz.izquierdo), ...recorridoPreorden(raiz.derecho)];
}

function recorridoPostorden(raiz) {
    if (raiz === null) {
        return [];
    }
    // Caso Recursivo: Izquierdo -> Derecho -> Raíz
    return [...recorridoPostorden(raiz.izquierdo), ...recorridoPostorden(raiz.derecho), raiz.valor];
}

// --- Código de Prueba Opcional para verificar los recorridos ---
const miArbol = new NodoArbol(1);
miArbol.izquierdo = new NodoArbol(2);
miArbol.derecho = new NodoArbol(3);

console.assert(JSON.stringify(recorridoPreorden(miArbol)) === JSON.stringify([1, 2, 3]), "Error Preorden");
console.assert(JSON.stringify(recorridoInorden(miArbol)) === JSON.stringify([2, 1, 3]), "Error Inorden");
console.assert(JSON.stringify(recorridoPostorden(miArbol)) === JSON.stringify([2, 3, 1]), "Error Postorden");
console.log("Ejercicio 3.1 (Recorridos) superado.");