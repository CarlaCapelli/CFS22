import * as ReadlineSync from "readline-sync";
export class Auto{
  
  
   marca:string;
   modelo:string;
   color:string;
         constructor(mar:string, mode:string,colorr:string){
          
             this.marca = mar;
             this.modelo = mode;
             this.color = colorr;
           }
          
    setModelo(modelo:string=ReadlineSync.question("modelo del auto ")) {
      this.modelo = modelo;
  }
   
  getModelo() {
      return this.modelo;
  }


  setMarca(marca:string=ReadlineSync.question("modelo del auto ")) {
    this.marca = marca;
}
  

  getMarca() {
      return this.marca;
  }
 
  setColor(color:string=ReadlineSync.question("modelo del auto ")) {
    this.color = color;
}
  getColor() {
      return this.color;
  }


  
           
      }
     
  
