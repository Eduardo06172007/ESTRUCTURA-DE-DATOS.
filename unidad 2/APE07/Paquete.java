public class Paquete {
    private final int id;
    private final int codigoPostal;

    public Paquete(int id, int codigoPostal) {
        this.id = id;
        this.codigoPostal = codigoPostal;
    }

    public int getId() { return id; }
    public int getCodigoPostal() { return codigoPostal; }

    @Override
    public String toString() {
        return "Paquete{ID=" + id + ", CP=" + codigoPostal + "}";
    }
}