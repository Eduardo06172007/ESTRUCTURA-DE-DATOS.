import java.util.ArrayList; 

public class CentroDistribucion {
    private ArrayList<Paquete> inventario;
    private boolean estaOrdenado;

    public CentroDistribucion(int capacidadInicial) {
        this.inventario = new ArrayList<>(capacidadInicial);
        this.estaOrdenado = false;
    }

    public void recibirPaquete(Paquete p) {
        this.inventario.add(p);
        this.estaOrdenado = false; 
    }
    // METODOS DE ORDENAMIENTO (TAREA 3)

    // BUBBLE SORT - O(n2)
    public void ordenarBubbleSort() {
        int n = inventario.size();
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (inventario.get(j).getId() > inventario.get(j + 1).getId()) {
                    Paquete temp = inventario.get(j);
                    inventario.set(j, inventario.get(j + 1));
                    inventario.set(j + 1, temp);
                }
            }
        }
        this.estaOrdenado = true;
    }

    //INSERTION SORT - O(n2)
    public void ordenarInsertionSort() {
        int n = inventario.size();
        for (int i = 1; i < n; ++i) {
            Paquete clave = inventario.get(i);
            int j = i - 1;

            while (j >= 0 && inventario.get(j).getId() > clave.getId()) {
                inventario.set(j + 1, inventario.get(j));
                j = j - 1;
            }
            inventario.set(j + 1, clave);
        }
        this.estaOrdenado = true;
    }

    //QUICK SORT - O(n log n) promedio
    public void ordenarQuickSort() {
        quickSortHelper(0, inventario.size() - 1);
        this.estaOrdenado = true;
    }

    private void quickSortHelper(int bajo, int alto) {
        if (bajo < alto) {
            int indicePivote = particion(bajo, alto);
            quickSortHelper(bajo, indicePivote - 1);
            quickSortHelper(indicePivote + 1, alto);
        }
    }

    private int particion(int bajo, int alto) {
        int pivote = inventario.get(alto).getId();
        int i = (bajo - 1);
        for (int j = bajo; j < alto; j++) {
            if (inventario.get(j).getId() < pivote) {
                i++;
                Paquete temp = inventario.get(i);
                inventario.set(i, inventario.get(j));
                inventario.set(j, temp);
            }
        }
        Paquete temp = inventario.get(i + 1);
        inventario.set(i + 1, inventario.get(alto));
        inventario.set(alto, temp);
        return i + 1;
    }

    //MERGE SORT - O(n log n) constante (EL MEJOR PARA ARRAYS)
    public void ordenarMergeSort() {
        mergeSortHelper(0, inventario.size() - 1);
        this.estaOrdenado = true;
    }

    private void mergeSortHelper(int izquierda, int derecha) {
        if (izquierda < derecha) {
            int medio = izquierda + (derecha - izquierda) / 2;
            mergeSortHelper(izquierda, medio);
            mergeSortHelper(medio + 1, derecha);
            merge(izquierda, medio, derecha);
        }
    }

    private void merge(int izquierda, int medio, int derecha) {
        int n1 = medio - izquierda + 1;
        int n2 = derecha - medio;

        ArrayList<Paquete> L = new ArrayList<>(n1);
        ArrayList<Paquete> R = new ArrayList<>(n2);

        for (int i = 0; i < n1; ++i) L.add(inventario.get(izquierda + i));
        for (int j = 0; j < n2; ++j) R.add(inventario.get(medio + 1 + j));

        int i = 0, j = 0;
        int k = izquierda;
        while (i < n1 && j < n2) {
            if (L.get(i).getId() <= R.get(j).getId()) {
                inventario.set(k, L.get(i));
                i++;
            } else {
                inventario.set(k, R.get(j));
                j++;
            }
            k++;
        }

        while (i < n1) {
            inventario.set(k, L.get(i));
            i++;
            k++;
        }
        while (j < n2) {
            inventario.set(k, R.get(j));
            j++;
            k++;
        }
    }
    // METODOS DE BUSQUEDA (TAREA 2)

    public int busquedaLineal(int idBuscado) {
        for (int i = 0; i < inventario.size(); i++) {
            if (inventario.get(i).getId() == idBuscado) return i;
        }
        return -1;
    }

    public int busquedaBinaria(int idBuscado) {
        if (!estaOrdenado) {
            System.out.println("[SISTEMA] Alerta: Datos desordenados. Aplicando Merge Sort...");
            ordenarMergeSort(); 
        }

        int inicio = 0;
        int fin = this.inventario.size() - 1;

        while (inicio <= fin) {
            int medio = inicio + (fin - inicio) / 2;
            int idMedio = this.inventario.get(medio).getId();

            if (idMedio == idBuscado) return medio;
            if (idMedio < idBuscado) inicio = medio + 1;
            else fin = medio - 1;
        }
        return -1;
    }
}