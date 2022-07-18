"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(name, equipo, edad, antiguedad, sueldo) {
        this.nombre = name;
        this.equipo = equipo;
        this.edad = edad;
        this.antiguedad = antiguedad;
        this.sueldo = sueldo;
    }
    Persona.prototype.hablar = function () {
        console.log(this.nombre + " esta hablando");
    };
    Persona.prototype.concentrarse = function () {
        console.log(this.nombre + " esta concentrado");
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getEquipo = function () {
        return this.equipo;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.getAntiguedad = function () {
        return this.antiguedad;
    };
    Persona.prototype.getSueldo = function () {
        return this.sueldo;
    };
    return Persona;
}());
exports.Persona = Persona;
