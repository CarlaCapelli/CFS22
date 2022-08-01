import { Colegio } from "./colegio";
import { ExamenOral } from "./examenOral";
import { ExamenEscrito } from "./examenEscrito";
import { Alumno } from "./alumno";
let examen1 = new ExamenOral("matematica", 4);
let alumno1 = new Alumno("carla", 21321, 28);
alumno1.agregarExamen(examen1);
let examen2 = new ExamenEscrito("matematica", 8);
alumno1.agregarExamen(examen2);
console.log(examen1.tipoExamen());
console.log(examen2.tipoExamen());
examen2.CriterioAprobacion();
alumno1.sacarPromedio();
let examen3 = new ExamenOral("matematica", 8);
let alumno2 = new Alumno("juan", 21213321, 24);
alumno2.agregarExamen(examen3);
let examen4 = new ExamenEscrito("lengua", 3);
alumno2.agregarExamen(examen4);

let colegio = new Colegio("san jose");
colegio.agregarAlumno(alumno1);
colegio.agregarAlumno(alumno2);
colegio.sacarPromedioAlumnos();
console.log(colegio.getpromedioAlumnos());
console.log(colegio.getAlumnos());


