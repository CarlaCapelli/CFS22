"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, documento, edad) {
        this.nombre = nombre;
        this.documento = documento;
        this.edad = edad;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.getDocumento = function () {
        return this.documento;
    };
    Persona.prototype.setDocumento = function (documento) {
        this.documento = documento;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.hablar = function () {
        console.log(this.nombre + " esta hablando");
    };
    Persona.prototype.caminar = function () {
        console.log(this.nombre + " esta caminando");
    };
    return Persona;
}());
exports.Persona = Persona;
