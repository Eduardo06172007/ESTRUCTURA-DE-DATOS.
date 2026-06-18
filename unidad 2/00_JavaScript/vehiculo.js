class Vehiculo {
  // El constructor inicializa las propiedades
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.encendido = false;
  }

  // Método: una función que pertenece a la clase
  arrancar() {
    this.encendido = true;
    console.log(`El ${this.marca} ${this.modelo} está encendido.`);
  }
}

// Crear una instancia (objeto) de la clase
const miCoche = new Vehiculo("Toyota", "Corolla");
miCoche.arrancar();

class Coche extends Vehiculo {
  constructor(marca, modelo, puertas) {
    super(marca, modelo); // Llama al constructor del padre
    this.puertas = puertas;
  }
}
class CuentaBancaria {
  #saldo = 0; // Propiedad privada

  depositar(cantidad) {
    this.#saldo += cantidad;
  }

  getSaldo() {
    return this.#saldo;
  }
}