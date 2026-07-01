class NodoBusqueda {
    constructor(keyword, urlCache) {
        this.keyword = keyword;
        this.urlCache = urlCache;
        this.visitas = 1;       // Contador de visitas inicializado en 1
        this.izquierda = null; // Nodo hijo izquierdo (menores)
        this.derecha = null;   // Nodo hijo derecho (mayores)
    }
}

class MotorIndexacionBST {
    constructor() {
        this.raiz = null; // Nodo raíz del árbol
    }

    // Indexar nueva consulta en el historial
    indexar(keyword, urlCache) {
        const nuevoNodo = new NodoBusqueda(keyword, urlCache);

        // Caso 1: El árbol está vacío
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
            return;
        }

        // Caso 2: Recorrer el árbol para encontrar la posición correcta
        let actual = this.raiz;
        while (true) {
            // Si la palabra ya existe, aumentamos el contador de visitas
            if (keyword === actual.keyword) {
                actual.visitas++;
                return;
            }
            
            // Ir a la izquierda (alfabéticamente menor)
            if (keyword < actual.keyword) {
                if (actual.izquierda === null) {
                    actual.izquierda = nuevoNodo;
                    return;
                }
                actual = actual.izquierda; // Avanzar al hijo izquierdo
            } 
            // Ir a la derecha (alfabéticamente mayor)
            else {
                if (actual.derecha === null) {
                    actual.derecha = nuevoNodo;
                    return;
                }
                actual = actual.derecha; 
            }
        }
    }
}