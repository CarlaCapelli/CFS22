import { Examen } from "./Examen";
import { Persona } from "./persona";
export class Alumno extends Persona {
  examenes: Examen[];
  grado: number;
  promedio: number;

  constructor(nombre: string, documento: number, edad: number, grado: number) {
    super(nombre, documento, edad);
    this.examenes = [];
    this.grado = grado;
    this.promedio = 0;
  }

  agregarExamen(examen: Examen) {
    this.examenes.push(examen);
  }

  sacarPromedio() {
    let sumaNotas: number = 0;
    this.examenes.forEach((element) => {
      sumaNotas += element.getNota();
    });
    this.promedio = sumaNotas / this.examenes.length;
    console.log(this.promedio);
  }

  getPromedio(): number {
    return this.promedio;
  }
}
