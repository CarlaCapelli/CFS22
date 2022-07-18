import { Auto } from "./auto"
import { AutoCarreras } from "./autoCarreras";
import { AutoCiudad } from "./autoCiudad";
export class Agencia {

    private autos: Auto[] = [new AutoCiudad("Ford", "Fiesta", 230), new AutoCarreras("Porsche", "718 Boxster", 320)];
    private autosCarrera: Auto[];
    private autosCiudad: Auto[];
    constructor() {
        this.autosCarrera = [];
        this.autosCiudad = [];
    }
    agregarAuto(auto: Auto) {
        this.autos.push(auto);
        console.log(this.autos);
    }
    autosDeCarrera() {

        this.autos.forEach(element => {
            if (element.getUsabilidad() === "carrera") {

                this.autosCarrera.push(element);
            }

        });
        console.log(this.autosCarrera);
    }
    autosDeCiudad() {

        this.autos.forEach(element => {
            if (element.getUsabilidad() === "ciudad") {

                this.autosCiudad.push(element);
            }

        });
        console.log(this.autosCiudad);
    }



}

