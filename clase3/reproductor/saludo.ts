
import * as ReadlineSync from "readline-sync";


export class saludo{
    
   nombre:string="";
    constructor(){
      this.nombre="carla";
      }
      saludar(){
        let sal =ReadlineSync.question("Escriba su nombre ");
        this.nombre=sal
console.log("hola "+ this.nombre);
      }
      
  
}

   
 

