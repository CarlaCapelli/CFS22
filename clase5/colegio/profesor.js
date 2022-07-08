"use strict";
exports.__esModule = true;
exports.Profesor = void 0;
var alumno_1 = require("./alumno");
var Profesor = /** @class */ (function () {
    function Profesor(nameP) {
        this.alumnos = [new alumno_1.Alumno("carla"), new alumno_1.Alumno("juan"), new alumno_1.Alumno("maria")];
        this.nombreProfesor = nameP;
    }
    Profesor.prototype.ponerNotas = function () {
        for (var i = 0; i < this.alumnos.length; i++) {
            var notaAleatoria = Math.floor(Math.random() * 10);
            this.alumnos[i].setNota(notaAleatoria);
            this.alumnos[i].setAprobar();
        }
    };
    return Profesor;
}());
exports.Profesor = Profesor;
var profesor1 = new Profesor("pedro");
profesor1.ponerNotas();
