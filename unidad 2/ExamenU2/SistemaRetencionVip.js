/**
 * ARQUITECTURA DE DATOS: Cola Circular sobre Arreglo Estático
 * CASO DE USO: Buffer de Retención de Llamadas VIP para Call Center
 * COMPLEJIDAD TEMPORAL: O(1) para inserción (Encolar) y extracción (Desencolar)
 */

class BufferLlamadasVIP {
    constructor(capacidadMaxima) {
        // N representa el tamaño físico estricto de nuestro arreglo en memoria
        this.N = capacidadMaxima; 
        this.arregloLlamadas = new Array(this.N);
        
        // Punteros de control iniciados en -1 (estado de estructura vacía)
        this.punteroInicio = -1; 
        this.punteroFinal = -1;  
        
        // Variable auxiliar para control estricto del estado de la memoria
        this.elementosActuales = 0; 
    }

    // VALIDACIONES DE ESTADO (Evitan desbordamiento e inanición)
    
    estaVacia() {
        return this.elementosActuales === 0;
    }

    estaLlena() {
        return this.elementosActuales === this.N;
    }

    // FASE DE ENCOLAMIENTO (Ingreso de nueva llamada - FIFO)

    recibirLlamada(numeroCliente, nombreCliente) {
        // Prevención de Desbordamiento (Overflow)
        if (this.estaLlena()) {
            console.warn(`[RECHAZO] Servidor saturado. No se puede retener la llamada de ${nombreCliente} (${numeroCliente}).`);
            return false;
        }

        // Si es la primera llamada que ingresa al sistema, inicializamos el puntero Inicio
        if (this.estaVacia()) {
            this.punteroInicio = 0;
        }

        // ARITMÉTICA MODULAR: Reciclaje de posiciones físicas.
        // Si el puntero llega al límite (N-1), regresa al índice 0 automáticamente.
        this.punteroFinal = (this.punteroFinal + 1) % this.N;
        
        // Almacenamos el objeto de la llamada en la nueva posición calculada
        this.arregloLlamadas[this.punteroFinal] = {
            numero: numeroCliente,
            cliente: nombreCliente,
            horaIngreso: new Date().toLocaleTimeString()
        };
        
        this.elementosActuales++;
        console.log(`[INGRESO] Llamada en espera: ${nombreCliente} | Posición en memoria RAM: ${this.punteroFinal}`);
        return true;
    }

    // FASE DE DESENCOLAMIENTO (Atención por el operador libre)

    atenderLlamada() {
        // Prevención de Subdesbordamiento (Underflow)
        if (this.estaVacia()) {
            console.warn("[ALERTA] No hay llamadas VIP en espera. Operadores inactivos.");
            return null;
        }

        // Extraemos los datos apuntados por el puntero Inicio
        let llamadaAtendida = this.arregloLlamadas[this.punteroInicio];
        
        // Limpiamos la celda de memoria (Buenas prácticas de recolección de basura)
        this.arregloLlamadas[this.punteroInicio] = null;
        this.elementosActuales--;

        // Lógica de actualización de punteros
        if (this.estaVacia()) {
            // Si atendimos la última llamada, reseteamos la estructura a su estado inicial
            this.punteroInicio = -1;
            this.punteroFinal = -1;
        } else {
            // ARITMÉTICA MODULAR: El puntero de inicio avanza circularmente
            this.punteroInicio = (this.punteroInicio + 1) % this.N;
        }

        console.log(`[ATENDIDA] Conectando operador con: ${llamadaAtendida.cliente} (${llamadaAtendida.numero})`);
        return llamadaAtendida;
    }

    // MONITOREO DEL SISTEMA (Para demostración en el video de defensa)

    imprimirEstadoMemoria() {
        console.log("\n================ ESTADO DEL BUFFER ================");
        console.log(`Capacidad: ${this.elementosActuales} / ${this.N} espacios ocupados`);
        console.log(`Puntero Inicio (Frente) -> Índice: ${this.punteroInicio}`);
        console.log(`Puntero Final (Atrás)   -> Índice: ${this.punteroFinal}`);
        console.log("Mapa de Arreglo Físico:", this.arregloLlamadas);
        console.log("===================================================\n");
    }
}

// ESCENARIO DE PRUEBA Y DEMOSTRACIÓN (Ejecución secuencial del algoritmo)

// 1. Inicializamos el servidor con una capacidad estricta de 3 llamadas
const conmutadorVIP = new BufferLlamadasVIP(3);

console.log("--- INICIANDO TRÁFICO DE LLAMADAS ---");
conmutadorVIP.recibirLlamada("0991112222", "Empresa A");
conmutadorVIP.recibirLlamada("0983334444", "Empresa B");
conmutadorVIP.recibirLlamada("0975556666", "Empresa C");

// Mostramos cómo se llenó la memoria (Índices 0, 1 y 2 ocupados)
conmutadorVIP.imprimirEstadoMemoria();

// 2. Intentamos ingresar una cuarta llamada para demostrar el control de Overflow
conmutadorVIP.recibirLlamada("0967778888", "Empresa D (Rechazada)");

// 3. Se liberan dos operadores y atienden las llamadas en estricto orden FIFO
console.log("\n--- OPERADORES DISPONIBLES ---");
conmutadorVIP.atenderLlamada(); // Atiende a Empresa A
conmutadorVIP.atenderLlamada(); // Atiende a Empresa B

// Mostramos cómo las posiciones 0 y 1 quedaron libres (Puntero inicio ahora es 2)
conmutadorVIP.imprimirEstadoMemoria();

// 4. EL MOMENTO CLAVE: Demostramos la circularidad reciclando memoria
console.log("--- ENTRAN NUEVAS LLAMADAS (DEMOSTRACIÓN DE CIRCULARIDAD) ---");
conmutadorVIP.recibirLlamada("0990000001", "Cliente Frecuente 1"); // Debe reciclar el índice 0
conmutadorVIP.recibirLlamada("0990000002", "Cliente Frecuente 2"); // Debe reciclar el índice 1

// Mostramos cómo el puntero Final dio la vuelta al arreglo sin generar errores
conmutadorVIP.imprimirEstadoMemoria();