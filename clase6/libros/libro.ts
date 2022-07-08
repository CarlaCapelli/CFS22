export class Libro {
    private nombre: string;
    private cantPaginas: number;
    constructor(nombre: string, paginas: number) {
        this.nombre = nombre;
        this.cantPaginas = paginas
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string) {
        this.nombre = nombre;
    }
    public setPaginas(paginas: number) {
        this.cantPaginas = paginas;
    }
    public getPaginas(): number {
        return this.cantPaginas;
    }

}