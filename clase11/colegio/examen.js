"use strict";
exports.__esModule = true;
exports.Examen = void 0;
var Examen = /** @class */ (function () {
    function Examen() {
    }
    Examen.prototype.CriterioAprobacion = function () {
        if (this.nota >= 7) {
            this.aprobado = true;
            console.log("examen aprobado");
        }
        else {
            this.aprobado = false;
            console.log("examen no aprobado");
        }
    };
    Examen.prototype.getNota = function () {
        return this.nota;
    };
    Examen.prototype.getMateria = function () {
        return this.materia;
    };
    Examen.prototype.setNota = function (nota) {
        this.nota = nota;
    };
    Examen.prototype.setMateria = function (materia) {
        this.materia = materia;
    };
    return Examen;
}());
exports.Examen = Examen;
