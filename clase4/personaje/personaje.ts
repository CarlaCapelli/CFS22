
import * as ReadlineSync from "readline-sync";

class Personaje{
    onOff:boolean;
  accion:string;
  nombre:string;

   constructor(tecla:string=ReadlineSync.question("Ingrese nombre de personaje ")){
      this.nombre=tecla;
      
      this.onOff=true;
   }

   private setCaminar(tecla:string){
         if(tecla==="w"){
            this.accion=("caminando");
            console.log(this.nombre + " esta" + this.accion);
         }
         
      }
   
    private setDoblarIzq(tecla:string){
      if(tecla==="a"){
         this.accion=("doblando a la izquierda");
         console.log(this.nombre + " esta " + this.accion);
      }
     
   }
  
  private setDoblarDer(tecla:string){
   if(tecla==="d"){
      this.accion=("doblando a la derecha");
      console.log(this.nombre + " esta " + this.accion);
   }
  
}

private setSaltar(tecla:string){
   if(tecla==="q"){
      this.accion=("saltando");
      console.log(this.nombre + " esta "+ this.accion);
   }
  
}

private setAgacharse(tecla:string){
   if(tecla==="s"){
      this.accion=("agachando");
      console.log(this.nombre + " se esta " + this.accion);
   }
   
}

private setApagar(tecla:string){
   if(tecla==="off"){
      this.onOff=false;
      console.log("apagado");
   }
   else{
      this.onOff=true;
   }
}

jugar(){
      while(this.onOff===true){
      let tecla:string=ReadlineSync.question(" caminar(w), doblar iz(a), doblar der(d),saltar(q),agacharse(s) apagar(off) ");
     this.setCaminar(tecla);
     this.setDoblarIzq(tecla);
     this.setDoblarDer(tecla);
     this.setSaltar(tecla);
     this.setAgacharse(tecla);
     this.setApagar(tecla);
    }
}
}

let pers =new Personaje();
pers.jugar();
