// ==========================================
// ENFOQUE A: Fuerza Bruta Recursiva
// Complejidad de Tiempo: O(2^n)
// ==========================================
function fibIngenuo(n) {
    // Caso base: si n es 0 o 1, retorna n
    if (n <= 1) {
        return n;
    }
    
    // Ramificación pura: La CPU debe recalcular ambas ramas desde cero.
    // Esto genera un desperdicio masivo de ciclos en la ALU.
    return fibIngenuo(n - 1) + fibIngenuo(n - 2);
}

// ==========================================
// ENFOQUE B: Optimizado con Memoización
// Complejidad de Tiempo: O(n)
// ==========================================
function fibMemo(n, cache = {}) {
    // Intercepción: Si el subproblema ya está en caché (nuestro objeto/Tabla Hash), 
    // lo retornamos en O(1)
    if (n in cache) {
        return cache[n];
    }
    
    // Caso base
    if (n <= 1) {
        return n;
    }
    
    // Calculamos el valor y lo guardamos en la memoria caché ANTES de retornarlo
    cache[n] = fibMemo(n - 1, cache) + fibMemo(n - 2, cache);
    return cache[n];
}

// ==========================================
// FASE 3: Protocolo de Medición y Perfilado
// ==========================================
function ejecutarPruebas() {
    const tamanosN = [10, 20, 30, 35];
    
    console.log("N     | Tiempo Ingenuo (ns)       | Tiempo Memoizado (ns)");
    console.log("-".repeat(60));
    
    for (const n of tamanosN) {
        // Medición Enfoque A (Fuerza Bruta)
        // Usamos process.hrtime.bigint() nativo de Node.js para nanosegundos exactos
        const inicioA = process.hrtime.bigint();
        fibIngenuo(n);
        const finA = process.hrtime.bigint();
        const tiempoA = finA - inicioA;
        
        // Medición Enfoque B (Memoización)
        const inicioB = process.hrtime.bigint();
        fibMemo(n);
        const finB = process.hrtime.bigint();
        const tiempoB = finB - inicioB;

        console.log(`${n.toString().padEnd(5)} | ${tiempoA.toString().padEnd(25)} | ${tiempoB.toString().padEnd(25)}`);
    }
}

if (require.main === module) {
    ejecutarPruebas();
}