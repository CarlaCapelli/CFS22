import { Auto } from "./auto";

export class AutoCarreras extends Auto {

    constructor(marca: string, modelo: string, velocidad: number) {
        super("carrera", marca, modelo, velocidad)
    }
    getVelocidadActual(): number {
        return super.getVelocidadActual() + 20;
    }
    setTipoDeCambios(cambios: string) {
        super.setTipoDeCambios(cambios);
    }

}