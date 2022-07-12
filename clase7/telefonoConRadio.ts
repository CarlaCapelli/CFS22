import { Telefono } from "./telefono";
export class TelefonoConRadio extends Telefono {
    private radioOn: boolean;
    private frecuenciaActual: number;
    constructor(bateriaActual: number) {
        super(bateriaActual);
        this.frecuenciaActual = 0;
        this.radioOn=false;
    }

    prenderRadio(): boolean {
        return this.radioOn = true;

    }
    apagarRadio(): boolean {
        return this.radioOn = false;

    }
    setFrecuencia(frec: number) {
        if (this.estaPrendido === true && this.radioOn === true) {
            this.frecuenciaActual = frec;
        } else if (this.estaPrendido === false) {
            console.log("el telefono esta apagado")
        } else if (this.radioOn === false) {
            console.log("La radio esta apagada");
        }
    }
    getFrecuencia(): number {
        return this.frecuenciaActual;
    }
}

