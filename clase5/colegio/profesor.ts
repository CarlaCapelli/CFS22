import { Alumno } from "./alumno";
export class Profesor {
    private nombreProfesor: string;
    private alumnos: Alumno[] = [new Alumno("carla"), new Alumno("juan"), new Alumno("maria")];
    constructor(nameP: string) {
        this.nombreProfesor = nameP;
    }
    ponerNotas() {

        for (let i: number = 0; i < this.alumnos.length; i++) {
            let notaAleatoria = Math.floor(Math.random() * 10);
            this.alumnos[i].setNota(notaAleatoria);
            this.alumnos[i].setAprobar();

        }
    }
}


let profesor1 = new Profesor("pedro");
profesor1.ponerNotas();