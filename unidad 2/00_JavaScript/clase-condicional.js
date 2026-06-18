// --- 1. Definición de variables ---
let edad = 20;
let tieneEntrada = true;
let esSocioVIP = true;

// --- 2. Condicionales en acción ---

// Estructura if...else básica
if (!tieneEntrada) { // El signo "!" significa "NO" (si no tiene entrada)
    console.log("No puedes pasar. Ve a la taquilla.");
} else {
    console.log("¡Tienes entrada! Evaluando tu acceso...");

    // --- 3. If anidado (dentro del else anterior) ---
    if (edad >= 18) {
        console.log("Acceso concedido a la sala general.");
        
        // Otro if anidado para verificar el estatus VIP
        if (esSocioVIP) {
            console.log("¡Bienvenido a la zona VIP! Disfruta de los asientos reclinables.");
        } else {
            console.log("Acceso a asientos estándar.");
        }

    } else {
        console.log("Acceso concedido solo a la sala de películas infantiles.");
    }
}

// --- 4. Estructura if...else if...else (para calcular el precio del combo de palomitas) ---
let tipoCliente = "Estudiante"; // Puede ser "Regular", "Estudiante" o "Senior"
let precioCombo;

if (tipoCliente === "Regular") {
    precioCombo = 10; // Precio normal
} else if (tipoCliente === "Estudiante") {
    precioCombo = 7;  // Descuento a estudiantes
} else if (tipoCliente === "Senior") {
    precioCombo = 5;  // Descuento a adultos mayores
} else {
    precioCombo = 10; // Por si acaso entra otro tipo de texto
}

console.log(`Tu combo de palomitas cuesta: $${precioCombo}`);

// --- 5. Operador Ternario (para algo rápido) ---
// Si edad es mayor o igual a 18 es "Adulto", si no, es "Menor"
let clasificacion = (edad >= 18) ? "Adulto" : "Menor";
console.log(`Clasificación del cliente: ${clasificacion}`);