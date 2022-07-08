import { off } from "process";
import { Televisor } from "./televisor";
class Decodificador {

    private televisor: Televisor;
    constructor(televisor: Televisor) {
        this.televisor = televisor;

    }
    prenderTele(on: string) {
        this.televisor.setOnoff(on);

    }

    subirVolumen() {
        if (this.televisor.getOnOff() === true) {
            this.televisor.subirVolumen();

        }

    }
    bajarVolumen() {
        if (this.televisor.getOnOff() === true) {
            this.televisor.bajarVolumen();
        }
    }
    cambiarVolumen(volumen: number) {
        if (this.televisor.getOnOff() === true) {
            this.televisor.cambiarVolumen(volumen);
        }
    }
    subirCanal() {
        if (this.televisor.getOnOff() === true) {
            this.televisor.subirCanal();
        }
    }
    bajarCanal() {
        if (this.televisor.getOnOff() === true) {
            this.televisor.bajarCanal();
        }
    }
    cambiarCanal(canal: number) {
        if (this.televisor.getOnOff() === true) {
            this.televisor.cambiarCanal(canal);
        }
    }
    verCanalActual(): number {

        return this.televisor.getCanalActual();
    }
    verVolumenActual(): number {
        return this.televisor.getVolumenActual();
    }
}
let tele1: Televisor = new Televisor;
let decodificador: Decodificador = new Decodificador(tele1);
decodificador.prenderTele("on");
decodificador.cambiarCanal(5);
console.log(decodificador.verCanalActual());