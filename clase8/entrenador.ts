import { Persona } from "./persona";
import { Futbolista } from "./futbolista";
export class Entrenador extends Persona {
    private futbolistas: Futbolista[];

    constructor(name: string, equipo: string, edad: number, antiguedad: number, sueldo: number) {
        super(name, equipo, edad, antiguedad, sueldo);
        this.futbolistas = [];
    }

    agregarFutbolista(futbolista: Futbolista) {
        this.futbolistas.push(futbolista);
    }
    elegirTitular(nombre: string, titular: string) {
        this.futbolistas.forEach(object => {
            if (object.getNombre() === nombre) {
                let indice = this.futbolistas.indexOf(object);
                this.futbolistas[indice].setTitular(titular);
            }
        });
    }
    dirigir() {
        console.log(this.nombre + "esta dirigiendo");
    }
    entrenar() {
        console.log(this.nombre + " esta dirigiendo");

    }
    planificar() {
        console.log(this.nombre + " esta planificando");
    }
}


