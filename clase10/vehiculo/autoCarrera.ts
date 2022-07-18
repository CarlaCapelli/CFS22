import { Vehiculo } from "./vehiculo";

export class AutoCarrera extends Vehiculo {
    sponsor: string;
    constructor(marca: string, modelo: string, sponsor: string) {
        super(marca, modelo)
        this.sponsor = sponsor;
    }
    acelerar(): void {
        if (this.estaPrendido === true) {
            this.velocidadActual += 30;
        } else {
            console.log("El auto esta apagado");
        }
    }
    frenar(): void {
        if (this.estaPrendido === true) {
            if (this.velocidadActual > 30) {
                this.velocidadActual -= 30;
            } else {
                this.velocidadActual = 0;
            }
        }
    }
    getSponsor(): string {
        return this.sponsor;
    }
    setSponsor(sponsor: string) {
        this.sponsor = sponsor;
    }
}