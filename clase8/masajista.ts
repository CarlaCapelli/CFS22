import { Persona } from "./persona";
import { Futbolista } from "./futbolista";

export class Masajista extends Persona {
    private clientes: Futbolista[];
    constructor(name: string, equipo: string, edad: number, antiguedad: number, sueldo: number) {
        super(name, equipo, edad, antiguedad, sueldo);
        this.clientes = [];
    }

    agregarCliente(futbolista: Futbolista) {
        this.clientes.push(futbolista);
    }
    masajear(nombre: string) {
        this.clientes.forEach(object => {
            if (object.getNombre() === nombre) {
                let indice = this.clientes.indexOf(object);

                console.log("masajeando a " + this.clientes[indice].getNombre());
            }
        });
    }
    rehabilitar(nombre: string) {
        this.clientes.forEach(object => {
            if (object.getNombre() === nombre) {
                let indice = this.clientes.indexOf(object);

                console.log("rehabilitando a " + this.clientes[indice].getNombre());
            }
        });
    }
}

