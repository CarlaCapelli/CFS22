export class Persona {
    protected nombre: string;
    protected documento: number;
    protected edad: number;
    constructor(nombre: string, documento: number, edad: number) {
        this.nombre = nombre;
        this.documento = documento;
        this.edad = edad;
    }

    getNombre(): string {
        return this.nombre;
    }
    setNombre(nombre: string) {
        this.nombre = nombre;

    }
    getDocumento(): number {
        return this.documento;
    }
    setDocumento(documento: number) {
        this.documento = documento;
    }
    getEdad(): number {
        return this.edad;
    }
    setEdad(edad: number) {
        this.edad = edad;
    }
    hablar() {
        console.log(this.nombre + " esta hablando");
    }

    caminar() {
        console.log(this.nombre + " esta caminando");
    }
}