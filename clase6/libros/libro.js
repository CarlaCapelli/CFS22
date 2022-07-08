"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(nombre, paginas) {
        this.nombre = nombre;
        this.cantPaginas = paginas;
    }
    Libro.prototype.getNombre = function () {
        return this.nombre;
    };
    Libro.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Libro.prototype.setPaginas = function (paginas) {
        this.cantPaginas = paginas;
    };
    Libro.prototype.getPaginas = function () {
        return this.cantPaginas;
    };
    return Libro;
}());
exports.Libro = Libro;
