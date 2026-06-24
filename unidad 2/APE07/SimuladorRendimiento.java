import java.util.ArrayList;
import java.util.Random;

public class SimuladorRendimiento {
    public static void main(String[] args) {
        int totalPaquetes = 10_000;
        Random random = new Random();

        CentroDistribucion centroLineal = new CentroDistribucion(totalPaquetes);
        CentroDistribucion centroBinario = new CentroDistribucion(totalPaquetes);

        for (int i = 0; i < totalPaquetes; i++) {
            int idAleatorio = random.nextInt(500_000) + 1;
            int cpAleatorio = random.nextInt(900_000) + 100_000;
            Paquete p = new Paquete(idAleatorio, cpAleatorio);
            
            centroLineal.recibirPaquete(p);
            centroBinario.recibirPaquete(p);
        }

        int idABuscar = 999_999; 

        System.out.println("=== SIMULACIÓN DE RENDIMIENTO CON MÉTODOS DE ORDENACIÓN ===");

        //Medir Búsqueda Lineal
        long startLineal = System.nanoTime();
        centroLineal.busquedaLineal(idABuscar);
        long endLineal = System.nanoTime();
        long tiempoLineal = endLineal - startLineal;

        //Medir Búsqueda Binaria que disparará el Merge Sort automáticamente
        long startBinariaComplet = System.nanoTime();
        centroBinario.busquedaBinaria(idABuscar); 
        long endBinariaComplet = System.nanoTime();
        long tiempoBinariaTotal = endBinariaComplet - startBinariaComplet;

        System.out.println("\n=======================================================");
        System.out.println("RESULTADOS DE LA SIMULACIÓN (10,000 IDs)");
        System.out.println("=======================================================");
        System.out.println("Tiempo Búsqueda Lineal: " + tiempoLineal + " ns");
        System.out.println("Tiempo Búsqueda Binaria Total (Con Merge Sort): " + tiempoBinariaTotal + " ns");
        System.out.println("=======================================================");
    }
}