import * as ReadlineSync from "readline-sync";
export class Telefono {
    protected estaPrendido: boolean;
    protected bateriaActual: number;

    constructor(bateria: number) {
        this.estaPrendido = false;
        this.bateriaActual = bateria;
    }

    prender() {
        this.estaPrendido = true;
    }
    apagar() {
        this.estaPrendido = false;

    }
    mandarMensaje() {
        if (this.estaPrendido === true) {
            let mensaje: string = ReadlineSync.question("mensaje: ");
            console.log(mensaje);
        } else {
            console.log("El telefono esta apagado");
        }
    }
    hacerLlamada() {
        if (this.estaPrendido === true) {
            console.log("llamando");
        } else { console.log("El telefono esta apagado"); }
    }
    getPrendido(): boolean {
        return this.estaPrendido;
    }

}