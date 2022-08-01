import { Audio } from "./audio";
export interface ISistemaAudio {
    prender(): void;
    apagar(): void;
    cancionSiguiente(): void;
    cancionAnterior(): void;
    agregarCancion(cancion: Audio): void;
    subirVolumen(): void;
    bajarVolumen(): void;
}
