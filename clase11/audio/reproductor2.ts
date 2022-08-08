import { ISistemaAudio } from "./sistemaAudio";
import { Audio } from "./audio";
export class Reproductor2 implements ISistemaAudio {
  private prendido: boolean;
  private appAbierta: boolean;
  private canciones: Audio[] = [
    new Audio(1, "I Aint worried", 2.28, "OneRepublic"),
    new Audio(2, "Shivers", 3.27, "Ed Sheeran"),
  ];
  private cancionActual: Audio;
  private volumenActual: number;

  constructor() {
    this.prendido = false;
    this.appAbierta = false;
    this.cancionActual = this.canciones[0];
    this.volumenActual = 0;
  }

  abrirApp() {
    if (this.prendido === true) {
      this.appAbierta = true;
    } else {
      console.log("El reproductor esta apagado");
    }
  }

  prender(): void {
    console.log("ON");
    this.prendido = true;
  }

  apagar(): void {
    console.log("OFF");
    this.prendido = false;
  }

  agregarCancion(cancion: Audio): void {
    if (this.appAbierta === true) {
      this.canciones.push(cancion);
    } else {
      console.log("El reproductor esta apagado");
    }
  }

  cancionSiguiente(): void {
    let cancion: Audio = this.cancionActual;
    if (this.appAbierta === true) {
      let indice = this.canciones.indexOf(cancion);
      if (indice >= this.canciones.length - 1) {
        indice = 0;
      } else {
        indice++;
      }
      this.cancionActual = this.canciones[indice];
    } else {
      console.log("La app no esta abierta");
    }
  }

  cancionAnterior(): void {
    let cancion: Audio = this.cancionActual;
    if (this.appAbierta === true) {
      let indice = this.canciones.indexOf(cancion);
      if (indice <= 0) {
        indice = this.canciones.length - 1;
      } else {
        indice--;
      }
      this.cancionActual = this.canciones[indice];
    } else {
      console.log("La app no esta abierta");
    }
  }

  getCancionActual(): Audio {
    return this.cancionActual;
  }

  subirVolumen(): void {
    if (this.appAbierta === true) {
      this.volumenActual += 1;
    } else {
      console.log("La app no esta abierta");
    }
  }

  bajarVolumen(): void {
    if (this.appAbierta === true) {
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
