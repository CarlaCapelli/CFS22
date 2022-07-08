import { Auto } from "./auto";
import * as fs from 'fs';
import * as ReadlineSync from "readline-sync";


let mode: string = fs.readFileSync('modelo.txt', 'utf8');
let mar: string = fs.readFileSync('marca.txt', 'utf8');
let cars: string = fs.readFileSync('autos.txt', 'utf8');
let colo: string = fs.readFileSync('color.txt', 'utf8');
export class RegistroAutomotor {
    car: any[] = cars.split(',');
    mod: any[] = mode.split(',');
    marc: any[] = mar.split(',');
    col: any[] = colo.split(',');
    opcion: boolean;
    constructor() {
        this.opcion = true;
    }
     arreglo() {
        for (let i: number = 0; i < this.car.length; i++) {
            this.car[i] = new Auto(this.marc[i], this.mod[i], this.col[i]);
        }
        console.log(this.car);

    }
    private buscarAuto(tecla: string) {
        if (tecla === "b") {
            let buscarPor: string = ReadlineSync.question("buscar por modelo(mo),buscar por marca(ma), buscar por color (co) ");
            if (buscarPor === "mo") {
                let pregModelo: string = ReadlineSync.question("Modelo que busca ");
                this.car.forEach(object => {
                    if (object.modelo === pregModelo) {
                        console.log(object.modelo + " " + object.marca + " " + object.color);
                    }
                });
            } else if (buscarPor === "co") {
                let pregColor: string = ReadlineSync.question("Color que busca ");
                this.car.forEach(object => {
                    if (object.color === pregColor) {
                        console.log(object.modelo + " " + object.marca + " " + object.color);
                    }
                });
            } else if (buscarPor === "ma") {
                let pregMarca: string = ReadlineSync.question("Marca que busca ");
                this.car.forEach(object => {
                    if (object.marca === pregMarca) {
                        console.log(object.modelo + " " + object.marca + " " + object.color);
                    }
                });
            }
        }
    }

    private borrarAuto(tecla: string) {
        if (tecla === "bo") {
            console.log("Datos del auto que quiere borrar: ");
            let pregBorrarMarca: string = ReadlineSync.question("Marca ");
            let pregBorrarModelo: string = ReadlineSync.question("Modelo ");
            let pregBorrarColor: string = ReadlineSync.question("Color ");
            this.car.forEach(object => {
                if (object.marca === pregBorrarMarca && object.modelo === pregBorrarModelo && pregBorrarColor === object.color) {
                    let indice = this.car.indexOf(object);
                    this.car.splice(indice, 1);
                    console.log(this.car);
                }
            });
        }
    }

    private agregarAuto(tecla: string) {

        if (tecla === "a") {

            console.log("ingrese los datos del auto que desea agregar ");
            let ma: string = ReadlineSync.question("Marca: ");
            let mo: string = ReadlineSync.question("Modelo: ");
            let co: string = ReadlineSync.question("Color: ");
            this.car.push(new Auto(ma, mo, co));
            console.log(this.car);
        }
    }
    private cambiarAuto(tecla: string) {
        if (tecla === "c") {
            console.log("Datos del auto que desea reemplazar: ");
            let pregMarca: string = ReadlineSync.question("marca: ");
            let pregModelo: string = ReadlineSync.question("modelo: ");
            let pregColor: string = ReadlineSync.question("color: ");
            this.car.forEach(object => {
                if (object.marca === pregMarca && object.modelo === pregModelo && pregColor === object.color) {
                    console.log("Datos del auto nuevo: ")
                    let indice = this.car.indexOf(object);
                    this.car[indice].marca = ReadlineSync.question("Marca:  ");
                    this.car[indice].modelo = ReadlineSync.question("Modelo: ");
                    this.car[indice].color = ReadlineSync.question("Color: ");
                }
            }
            );
            console.log(this.car);
        }
    }

    private setApagar(tecla: string) {
        if (tecla === "off") {
            this.opcion = false;
            console.log("apagado");
        }
        else {
            this.opcion = true;
        }
    }

    opciones() {
        this.arreglo();
        while (this.opcion === true) {

            let tecla: string = ReadlineSync.question("buscar(b),borrar(bo),agregar(a),cambiar datos(c)cerrar(off) ");
            this.buscarAuto(tecla);
            this.setApagar(tecla);
            this.borrarAuto(tecla);
            this.agregarAuto(tecla);
            this.cambiarAuto(tecla);
        }
    }

}
let nuevoRegistro = new RegistroAutomotor();
nuevoRegistro.opciones();


