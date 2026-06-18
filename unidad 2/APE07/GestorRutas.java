public class GestorRutas {
    public static void ordenar(Paquete[] datos) {
        //TODO: Implementar inicialmente un metodo de ordenamiento Burbuja
        int n = datos.length;
        boolean huboIntercambio;

        // Burbuja: recorremos n-1 veces
        for (int i = 0; i < n - 1; i++) {
            //Cada pasada i garantiza que el elemento más grande restante llega a su posición final al final del arreglo.
            huboIntercambio = false; // Al inicio de cada pasada, asumimos que no habrá intercambios

            //El bucle interno — la burbuja
            for (int j = 0; j < n - 1 - i; j++) {

                if (datos[j].getCodigoPostal() > datos[j + 1].getCodigoPostal()) {

                    // Intercambio
                    Paquete temp = datos[j];  // guarda el mayor
                    datos[j] = datos[j + 1];   // mueve el menor a la izquierda
                    datos[j + 1] = temp;      // pone el mayor a la derecha

                    huboIntercambio = true;
                }
            }

            // Si no hubo intercambios, el arreglo ya está ordenado
            if (!huboIntercambio) break;
        }
    }
}
