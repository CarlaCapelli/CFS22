import * as ReadlineSync from "readline-sync";
import { Telefono } from "./telefono";
export class TelefonoConCamara extends Telefono {
    private camaraOn: boolean;
    constructor(bateriaActual:number) {
        super(bateriaActual);
        this.camaraOn = false;
    }

    prenderCamara(): boolean {
        return this.camaraOn = true;

    }
    apagarCamara(): boolean {
        return this.camaraOn = false;

    }

    sacarFotos() {
        if (this.estaPrendido === true && this.camaraOn === true) {
            console.log("Sacando foto");
        } else if (this.estaPrendido === false) {
            console.log("El telefono esta apagado");
        } else if (this.camaraOn === false) {
            console.log("La camara esta apagada");
        }
    }

}
