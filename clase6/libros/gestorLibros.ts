import * as ReadlineSync from "readline-sync";
import * as fs from 'fs';

import { Libro } from "./libro"
class gestorLibros {
    private fs = require('fs');
    private libros: Libro[] = [
        new Libro("La bailarina de Aushwitz", 416),
        new Libro("Asesino de brujas", 480),
        new Libro("Cometas en el cielo", 560)];

    constructor() {

    }
    agregarLibro(name: string, pag: number) {
        this.libros.push(new Libro(name, pag));
        this.librosTXT(name);
        console.log(this.libros);

    }
    buscarLibro() {
        let pregNombre: string = ReadlineSync.question("libro que busca ");
        this.libros.forEach(object => {
            if (object.getNombre() === pregNombre) {
                console.log(object.getNombre())
            }
        });
    }
    borrarlibro() {
        console.log(this.libros);
        let pregBorrar: string = ReadlineSync.question("libro que quiere borrar ");
        this.libros.forEach(object => {
            if (object.getNombre() === pregBorrar) {
                let indice = this.libros.indexOf(object);
                this.libros.splice(indice, 1);
                console.log(this.libros);
            }
        });
    }
    cambiarLibro() {
        console.log(this.libros);
        let preglibro: string = ReadlineSync.question("libro a cambiar ");
        this.libros.forEach(object => {
            if (object.getNombre() === preglibro) {
                console.log("Datos del libro nuevo: ");
                let indice = this.libros.indexOf(object);
                this.libros[indice].setNombre(ReadlineSync.question("nombre del libro "));
                this.libros[indice].setPaginas(Number(ReadlineSync.question("paginas del libro ")));
                console.log(this.libros);

            }
        });
    }

    librosTXT(data: string) {           //no se bien como usar esto, no me queda como quiero
        this.fs.writeFileSync("libros.txt",
            data + "\n",
            {
                encoding: "utf8",
                flag: "a+",
                mode: 0o666
            });
    }
    txtAgregar() {
        for (let i: number = 0; i < this.libros.length; i++) {
            let agregar: string = this.libros[i].getNombre();
            this.librosTXT(agregar);
        }
    }

}
let gestor = new gestorLibros();
gestor.borrarlibro();
gestor.cambiarLibro();
gestor.txtAgregar();
gestor.agregarLibro("La caida de los gigantes", 1008);
