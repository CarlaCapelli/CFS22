export abstract class Examen {
  protected nota: number;
  protected materia: string;
  protected aprobado: boolean;
  abstract tipoExamen(): string;
  CriterioAprobacion() {
    if (this.nota >= 7) {
      this.aprobado = true;
      console.log("examen aprobado");
    } else {
      this.aprobado = false;
      console.log("examen no aprobado");
    }
  }
  getNota(): number {
    return this.nota;
  }
  getMateria(): string {
    return this.materia;
  }
  setNota(nota: number) {
    this.nota = nota;
  }
  setMateria(materia: string) {
    this.materia = materia;
  }

}