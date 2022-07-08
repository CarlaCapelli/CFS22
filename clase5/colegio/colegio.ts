import { stringify } from "querystring";
import { Alumno } from "./alumno";
import { Profesor } from "./profesor";
class Colegio {
    private nombre: string;
    private alumnos: Alumno[] = [new Alumno("carla"), new Alumno("juan")];
    private profesores: Profesor[] = [new Profesor("carla"), new Profesor("juli"), new Profesor("facu")];
    constructor(name: string) {
        this.nombre = name;
    }
    agregarAlumno(nombre: string) {

        this.alumnos.push(new Alumno(nombre));

    }
    expulsarAlumno(alumno: Alumno) {
        this.alumnos.splice(this.alumnos.indexOf(alumno));
    }
    agregarProfesor(nombre: string) {

        this.profesores.push(new Profesor(nombre));

    }
    expulsarProfesor(profesor: Profesor) {
        this.profesores.splice(this.profesores.indexOf(profesor));
    }
}


