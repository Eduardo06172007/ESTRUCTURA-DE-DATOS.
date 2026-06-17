// 1. Igualdad vs Igualdad Estricta
console.log("--- Igualdad ---");
console.log(10 == "10");   // true (solo compara el valor)
console.log(10 === "10");  // false (compara valor Y tipo de dato)

// 2. Desigualdad vs Desigualdad Estricta
console.log("\n--- Desigualdad ---");
console.log(10 != "5");    // true
console.log(10 !== "10");  // true (porque aunque el valor es igual, el tipo no lo es)

// 3. Comparaciones de magnitud
console.log("\n--- Magnitud ---");
console.log(20 > 15);      // true
console.log(10 < 5);       // false
console.log(10 >= 10);     // true (es igual, así que pasa la prueba)
console.log(5 <= 2);       // false
