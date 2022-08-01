import { Examen } from "./Examen";
export class ExamenOral extends Examen {

    constructor(materia: string, nota: number) {
        super();
        this.materia = materia;
        this.nota = nota;
    }
    tipoExamen(): string {
        return "examen oral de " + this.materia;
    }

}