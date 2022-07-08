export class Alumno {
    private nombre: string;
    private nota: number;
    private aprobar:boolean;
    constructor(name: string) {
        this.nombre = name;
        
    }
    setNota(nota: number) {
        this.nota = nota;
    }
    getNota(): number {
        return this.nota;
    }
    setNombre(nombre: string) {
        this.nombre = nombre;
    }
    getNombre(): string {
        return this.nombre;
    }
    setAprobar(){
        if(this.nota>=7){
            this.aprobar=true;
            console.log(this.nombre + " " + this.nota + " "+ "aprobado");
        }else{
            console.log(this.nombre + " " + this.nota + " "+ "desaprobado");
        }
        
    }

}


