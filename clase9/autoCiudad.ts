import { Auto } from "./auto";

export class AutoCiudad extends Auto {

    constructor(marca: string, modelo: string, velocidad: number) {
        super("ciudad", marca, modelo, velocidad)
    }
    getVelocidadActual(): number {
        return super.getVelocidadActual() + 10;
    }
    setTipoDeCambios(cambios: string) {
        super.setTipoDeCambios(cambios);
    }

}