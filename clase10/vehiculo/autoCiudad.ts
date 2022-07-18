import { Vehiculo } from "./vehiculo";

export class AutoCiudad extends Vehiculo {
    radioPrendida: boolean;
    constructor(marca: string, modelo: string) {
        super(marca, modelo);
        this.radioPrendida = false;
    }
    acelerar(): void {
        if (this.estaPrendido === true) {
            this.velocidadActual += 10;
        } else {
            console.log("El auto esta apagado");
        }

    }

    frenar(): void {
        if (this.estaPrendido === true) {
            if (this.velocidadActual > 10) {
                this.velocidadActual -= 10;
            } else {
                this.velocidadActual = 0;
            }
        }
    }
    pasear() {
        console.log("paseando");
    }
    prenderRadio() {
        this.radioPrendida = true;
    }
    apagarRadio() {
        this.radioPrendida = false;
    }
    escucharRadio() {
        if (this.radioPrendida === true) {
            console.log("Escuchando radio");

        } else {
            console.log("La radio esta apagada");
        }
    }

}