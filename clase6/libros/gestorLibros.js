"use strict";
exports.__esModule = true;
var ReadlineSync = require("readline-sync");
var libro_1 = require("./libro");
var gestorLibros = /** @class */ (function () {
    function gestorLibros() {
        this.fs = require('fs');
        this.libros = [
            new libro_1.Libro("La bailarina de Aushwitz", 416),
            new libro_1.Libro("Asesino de brujas", 480),
            new libro_1.Libro("Cometas en el cielo", 560)
        ];
    }
    gestorLibros.prototype.agregarLibro = function (name, pag) {
        this.libros.push(new libro_1.Libro(name, pag));
        this.librosTXT(name);
        console.log(this.libros);
    };
    gestorLibros.prototype.buscarLibro = function () {
        var pregNombre = ReadlineSync.question("libro que busca ");
        this.libros.forEach(function (object) {
            if (object.getNombre() === pregNombre) {
                console.log(object.getNombre());
            }
        });
    };
    gestorLibros.prototype.borrarlibro = function () {
        var _this = this;
        console.log(this.libros);
        var pregBorrar = ReadlineSync.question("libro que quiere borrar ");
        this.libros.forEach(function (object) {
            if (object.getNombre() === pregBorrar) {
                var indice = _this.libros.indexOf(object);
                _this.libros.splice(indice, 1);
                console.log(_this.libros);
            }
        });
    };
    gestorLibros.prototype.cambiarLibro = function () {
        var _this = this;
        console.log(this.libros);
        var preglibro = ReadlineSync.question("libro a cambiar ");
        this.libros.forEach(function (object) {
            if (object.getNombre() === preglibro) {
                console.log("Datos del libro nuevo: ");
                var indice = _this.libros.indexOf(object);
                _this.libros[indice].setNombre(ReadlineSync.question("nombre del libro "));
                _this.libros[indice].setPaginas(Number(ReadlineSync.question("paginas del libro ")));
                console.log(_this.libros);
            }
        });
    };
    gestorLibros.prototype.librosTXT = function (data) {
        this.fs.writeFileSync("libros.txt", data + "\n", {
            encoding: "utf8",
            flag: "a+",
            mode: 438
        });
    };
    gestorLibros.prototype.txtAgregar = function () {
        for (var i = 0; i < this.libros.length; i++) {
            var agregar = this.libros[i].getNombre();
            this.librosTXT(agregar);
        }
    };
    return gestorLibros;
}());
var gestor = new gestorLibros();
gestor.borrarlibro();
gestor.cambiarLibro();
gestor.txtAgregar();
gestor.agregarLibro("La caida de los gigantes", 1008);
