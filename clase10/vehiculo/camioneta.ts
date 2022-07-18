import { Vehiculo } from "./vehiculo";

export class Camioneta extends Vehiculo {
    tipoCabina: string;
    constructor(marca: string, modelo: string, cabina: string) {
        super(marca, modelo)
        this.tipoCabina = cabina;
    }


    acelerar(): void {
        if (this.estaPrendido === true) {
            this.velocidadActual += 20;
        } else {
            console.log("El auto esta apagado");
        }
    }
    frenar() {
        if (this.estaPrendido === true) {
            if (this.velocidadActual > 20) {
                this.velocidadActual -= 20;
            } else {
                this.velocidadActual = 0;
            }
        }
    }
    getTipoCabina(): string {
        return this.tipoCabina;
    }
}