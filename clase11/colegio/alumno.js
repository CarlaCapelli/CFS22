"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Alumno = void 0;
var persona_1 = require("./persona");
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno(nombre, documento, edad, grado) {
        var _this = _super.call(this, nombre, documento, edad) || this;
        _this.examenes = [];
        _this.grado = grado;
        _this.promedio = 0;
        return _this;
    }
    Alumno.prototype.agregarExamen = function (examen) {
        this.examenes.push(examen);
    };
    Alumno.prototype.sacarPromedio = function () {
        var sumaNotas = 0;
        this.examenes.forEach(function (element) {
            sumaNotas += element.getNota();
        });
        this.promedio = sumaNotas / this.examenes.length;
        console.log(this.promedio);
    };
    Alumno.prototype.getPromedio = function () {
        return this.promedio;
    };
    return Alumno;
}(persona_1.Persona));
exports.Alumno = Alumno;
