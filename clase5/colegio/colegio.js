"use strict";
exports.__esModule = true;
var alumno_1 = require("./alumno");
var profesor_1 = require("./profesor");
var Colegio = /** @class */ (function () {
    function Colegio(name) {
        this.alumnos = [new alumno_1.Alumno("carla"), new alumno_1.Alumno("juan")];
        this.profesores = [new profesor_1.Profesor("carla"), new profesor_1.Profesor("juli"), new profesor_1.Profesor("facu")];
        this.nombre = name;
    }
    Colegio.prototype.agregarAlumno = function (nombre) {
        this.alumnos.push(new alumno_1.Alumno(nombre));
    };
    Colegio.prototype.expulsarAlumno = function (alumno) {
        this.alumnos.splice(this.alumnos.indexOf(alumno));
    };
    Colegio.prototype.agregarProfesor = function (nombre) {
        this.profesores.push(new profesor_1.Profesor(nombre));
    };
    Colegio.prototype.expulsarProfesor = function (profesor) {
        this.profesores.splice(this.profesores.indexOf(profesor));
    };
    return Colegio;
}());
