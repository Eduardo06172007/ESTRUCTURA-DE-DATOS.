// Sistema de Inventario de Farmacia usando Arreglos (Arrays)
// Estructura de datos lineal: Arreglo
// Caso de uso: gestión de medicamentos disponibles en farmacia

class InventarioFarmacia {
  constructor() {
    this.medicamentos = [];
  }

  agregar(nombre, cantidad, precio) {
    const medicamento = { nombre, cantidad, precio };
    this.medicamentos.push(medicamento);
    console.log(`✔ "${nombre}" agregado al inventario.`);
  }

  eliminar(nombre) {
    const indice = this.medicamentos.findIndex(
      (m) => m.nombre.toLowerCase() === nombre.toLowerCase()
    );
    if (indice === -1) {
      console.log(`✘ "${nombre}" no se encontró en el inventario.`);
      return;
    }
    this.medicamentos.splice(indice, 1);
    console.log(`✔ "${nombre}" eliminado del inventario.`);
  }

  buscar(nombre) {
    const resultado = this.medicamentos.find(
      (m) => m.nombre.toLowerCase() === nombre.toLowerCase()
    );
    if (!resultado) {
      console.log(`✘ "${nombre}" no está en el inventario.`);
      return;
    }
    console.log(
      `Encontrado: ${resultado.nombre} | Cantidad: ${resultado.cantidad} | Precio: $${resultado.precio}`
    );
  }

  mostrarTodo() {
    if (this.medicamentos.length === 0) {
      console.log("El inventario está vacío.");
      return;
    }
    console.log("\n=== INVENTARIO DE FARMACIA ===");
    this.medicamentos.forEach((m, i) => {
      console.log(
        `${i + 1}. ${m.nombre} | Cantidad: ${m.cantidad} | Precio: $${m.precio}`
      );
    });
    console.log(`Total de productos: ${this.medicamentos.length}`);
  }
}

// Prueba del sistema
const inventario = new InventarioFarmacia();

inventario.agregar("Paracetamol", 50, 1.25);
inventario.agregar("Ibuprofeno", 30, 2.10);
inventario.agregar("Amoxicilina", 20, 4.75);

inventario.mostrarTodo();

inventario.buscar("Ibuprofeno");
inventario.buscar("Aspirina");

inventario.eliminar("Ibuprofeno");
inventario.mostrarTodo();