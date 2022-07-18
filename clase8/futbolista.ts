import { Persona } from "./persona";

export class Futbolista extends Persona {
    private titular: boolean;
    private posicion: string;
    private pieHabil: string;
    private numero: number;
    private goles: number;
    constructor(name: string, equipo: string, edad: number, antiguedad: number, sueldo: number, posicion: string, pie: string, numero: number, goles: number) {
        super(name, equipo, edad, antiguedad, sueldo);
        this.posicion = posicion;
        this.pieHabil = pie;
        this.numero = numero;
        this.goles = goles;
    }


    entrenar() {
        console.log("Entrenando");

    }
    hacerGol() {
        this.goles++;
        console.log(this.nombre + " metio un gol");
    }
    getGoles(): number {
        return this.goles;

    }
    jugar() {
        console.log(this.nombre + " esta jugando");

    }
    atajar() {
        if (this.posicion === "arquero") {
            console.log(this.nombre + " atajando");
        } else {
            console.log("Solo el arquero puede atajar");
        }
    }
    hacerFalta() {
        console.log(this.nombre + " hizo falta");
    }

    setTitular(titular: string) {
        if (titular === "titular") {
            this.titular = true;
            console.log(this.nombre + " es titular");
        }
        else {
            this.titular = false;
            console.log(this.nombre + " no es titular");
        }
    }
    getTitular(): boolean {
        return this.titular;
    }
    getPieHabil(): string {
        return this.pieHabil;
    }
    getNumeroCamiseta(): number {
        return this.numero;
    }
}