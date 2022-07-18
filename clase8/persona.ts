export class Persona {
    protected nombre: string;
    protected equipo: string;
    protected edad: number;
    protected antiguedad: number;
    protected sueldo: number;
    constructor(name: string, equipo: string, edad: number, antiguedad: number, sueldo: number) {
        this.nombre = name;
        this.equipo = equipo;
        this.edad = edad;
        this.antiguedad = antiguedad;
        this.sueldo = sueldo;
    }
    hablar() {
        console.log(this.nombre + " esta hablando");

    }
    concentrarse() {
        console.log(this.nombre + " esta concentrado");
    }

    getNombre(): string {
        return this.nombre;

    }
    getEquipo(): string {
        return this.equipo
    }
    getEdad(): number {
        return this.edad;
    }
    getAntiguedad(): number {
        return this.antiguedad;
    }
    getSueldo(): number {
        return this.sueldo;
    }
}