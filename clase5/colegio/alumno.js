"use strict";
exports.__esModule = true;
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(name) {
        this.nombre = name;
    }
    Alumno.prototype.setNota = function (nota) {
        this.nota = nota;
    };
    Alumno.prototype.getNota = function () {
        return this.nota;
    };
    Alumno.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.setAprobar = function () {
        if (this.nota >= 7) {
            this.aprobar = true;
            console.log(this.nombre + " " + this.nota + " " + "aprobado");
        }
        else {
            console.log(this.nombre + " " + this.nota + " " + "desaprobado");
        }
    };
    return Alumno;
}());
exports.Alumno = Alumno;
