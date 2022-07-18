import { Itelefono } from "./telefono";

export class Smartphone implements Itelefono {
    prendido: boolean;
    constructor() {
        this.prendido = false;

    }
    prender(): void {
        this.prendido = true;
    }
    apagar(): void {
        this.prendido = false;
    }
    llamar(numero: number): void {
        if (this.prendido === true) {
            console.log("llamando a " + numero);
        } else {
            console.log("El telefono esta apagado");
        }
    }

    sacarFoto(){
        if(this.prendido===true){
            console.log("sancando foto");
        }else{
            console.log("El telefono esta apagado");
        }

    }
}