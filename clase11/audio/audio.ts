export class Audio {
    private id: number;
    private titulo: string;
    private duracion: number;
    private interprete: string;
    constructor(id: number, titulo: string, duracion: number, interprete: string) {
        this.id = id;
        this.titulo = titulo;
        this.duracion = duracion;
        this.interprete = interprete;
    }

    getID(): number {
        return this.id;
    }
    getTitulo(): string {
        return this.titulo;
    }
    getDuracion(): number {
        return this.duracion;
    }
    getInterprete(): string {
        return this.interprete;
    }
}