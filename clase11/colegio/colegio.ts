import { Alumno } from "./alumno";
export class Colegio {
    private promedioAlumnos: number;
    private alumnos: Alumno[];
    private nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
        this.promedioAlumnos = 0;
        this.alumnos = [];
    }

    getNombre(): string {
        return this.nombre;
    }
    setNombre(nombre: string) {
        this.nombre = nombre;
    }
    getAlumnos(): Alumno[] {
        return this.alumnos;
    }
    agregarAlumno(alumno: Alumno) {
        this.alumnos.push(alumno);
    }
    sacarPromedioAlumnos() {
        let suma: number = 0;
        this.alumnos.forEach(element => {
            element.sacarPromedio();
            suma += element.getPromedio();
        });
        this.promedioAlumnos = suma / this.alumnos.length;
    }
    getpromedioAlumnos(): number {
        return this.promedioAlumnos;
    }

}