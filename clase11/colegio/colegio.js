"use strict";
exports.__esModule = true;
exports.Colegio = void 0;
var Colegio = /** @class */ (function () {
    function Colegio(nombre) {
        this.nombre = nombre;
        this.promedioAlumnos = 0;
        this.alumnos = [];
    }
    Colegio.prototype.getNombre = function () {
        return this.nombre;
    };
    Colegio.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Colegio.prototype.getAlumnos = function () {
        return this.alumnos;
    };
    Colegio.prototype.agregarAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Colegio.prototype.sacarPromedioAlumnos = function () {
        var suma = 0;
        this.alumnos.forEach(function (element) {
            element.sacarPromedio();
            suma += element.getPromedio();
        });
        this.promedioAlumnos = suma / this.alumnos.length;
    };
    Colegio.prototype.getpromedioAlumnos = function () {
        return this.promedioAlumnos;
    };
    return Colegio;
}());
exports.Colegio = Colegio;
