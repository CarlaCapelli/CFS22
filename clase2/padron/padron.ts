import * as ReadlineSync from "readline-sync";
import * as fs from 'fs';
let nomb: string = fs.readFileSync('nombres.txt', 'utf8');
let col: string = fs.readFileSync('colegio.txt', 'utf8');
let nombres: string[] = nomb.split(',');
let colegio: string[] = col.split(',');
console.log(nombres);
console.log(colegio);
function padron(name:string){
    let indice = nombres.indexOf(name)
    
    if(indice==-1){
         console.log("El nombre "+ name + " no se encuentra en el padron");
    }
    else if(indice<10  && indice>-1){
         console.log( name + " vota en el colegio " + colegio[0]);
     }else if(indice>=10 && indice<20){
         console.log(name + " vota en el colegio " + colegio[1]);       
    }else if(indice>=20 && indice<30){
        console.log(name + " vota en el colegio " + colegio[2]);
    }else if(indice>=30 && indice<40){
        console.log(name + " vota en el colegio " + colegio[3]);
     }else if(indice>=40 && indice<50){
        console.log(name + " vota en el colegio " + colegio[4]);
        }
}
let nombre =ReadlineSync.question("Busque su nombre en el padron: ");
padron(nombre);