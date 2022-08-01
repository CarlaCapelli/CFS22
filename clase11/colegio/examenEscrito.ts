import { Examen } from "./Examen";
export class ExamenEscrito extends Examen {
   
    constructor(materia: string, nota: number) {
        super();
        this.materia = materia;
        this.nota = nota;
    }
    tipoExamen(): string {
        return "examen escrito de " + this.materia;
    }
   
}