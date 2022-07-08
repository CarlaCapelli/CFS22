import { timeStamp } from "console";

export class Televisor {
    private onOff: boolean;
    private canalActual: number;
    private volumenActual: number;
    constructor() {
        this.canalActual = 0;
        this.volumenActual = 0;
    }
    setOnoff(on: string) {
        if (on = "on") {
            this.onOff = true;
        } else {
            this.onOff = false;
        }
    }
    getOnOff(): boolean {
        return this.onOff;
    }

    subirCanal(): number {
        this.canalActual = this.canalActual + 1;
        return this.canalActual;

    }
    bajarCanal(): number {
        this.canalActual = this.canalActual - 1;
        return this.canalActual;

    }
    cambiarCanal(canal: number): number {
        this.canalActual = canal;
        return this.canalActual;
    }
    subirVolumen(): number {
        this.volumenActual = this.volumenActual + 1;
        return this.volumenActual;
    }
    bajarVolumen(): number {
        this.volumenActual = this.volumenActual - 1;
        return this.volumenActual;
    }
    cambiarVolumen(volumen: number): number {
        this.volumenActual = volumen;
        return this.volumenActual;
    }
    getCanalActual(): number {
        return this.canalActual;

    }
    getVolumenActual(): number {
        return this.volumenActual;
    }
}