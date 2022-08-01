import { Audio } from "./audio";
import { ISistemaAudio } from "./sistemaAudio";
export class Reproductor implements ISistemaAudio {
    private prendido: boolean;
    private canciones: Audio[] = [new Audio(1, "Stay", 2.21, "Justin Bieber"), new Audio(2, "Left and Right", 2.34, "Charlie Puth")];
    private cancionActual: Audio;
    private volumenActual: number;
    constructor() {
        this.prendido = false;
        this.cancionActual = this.canciones[0];

        this.volumenActual = 0;
    }
    prender(): void {
        console.log("Reproductor Prendido");
        this.prendido = true;
    }
    apagar(): void {
        console.log("Reproductor Apagado");
        this.prendido = false;
    }
    agregarCancion(cancion: Audio): void {
        if (this.prendido === true) {
            this.canciones.push(cancion);
        } else { console.log("El reproductor esta apagado") }
    }
    cancionSiguiente(): void {
        let cancion: Audio = this.cancionActual;
        if (this.prendido === true) {
            this.canciones.forEach(element => {
                if (element === cancion) {
                    let indice = this.canciones.indexOf(element);
                    if (indice >= this.canciones.length - 1) {
                        indice = 0;
                    }
                    else {
                        indice++;
                    }
                    this.cancionActual = this.canciones[indice];
                }
            });
        }
    }
    cancionAnterior(): void {
        let cancion: Audio = this.cancionActual;
        if (this.prendido === true) {
            this.canciones.forEach(element => {
                if (element === cancion) {
                    let indice = this.canciones.indexOf(element);
                    if (indice <= 0) {
                        indice = this.canciones.length - 1;
                    } else {
                        indice--;
                    }
                    this.cancionActual = this.canciones[indice];
                }
            });
        }
    }
    getCancionActual(): Audio {
        return this.cancionActual;
    }
    subirVolumen(): void {
        if (this.prendido === true) {
            this.volumenActual += 1;
        } else {
            console.log("El reproductor esta apagado");
        }
    }
    bajarVolumen(): void {
        if (this.prendido === true) {
            this.volumenActual -= 1;
        } else {
            console.log("el reproductor esta apagado");
        }
    }
    getVolumenActual(): number {
        return this.volumenActual;
    }
    getCantidadPistas(): number {
        return this.canciones.length;
    }
    getDuracion(): number {
        return this.cancionActual.getDuracion();
    }
}
