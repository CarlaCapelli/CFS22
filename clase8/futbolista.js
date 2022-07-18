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
exports.Futbolista = void 0;
var persona_1 = require("./persona");
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(name, equipo, edad, antiguedad, sueldo, posicion, pie, numero, goles) {
        var _this = _super.call(this, name, equipo, edad, antiguedad, sueldo) || this;
        _this.posicion = posicion;
        _this.pieHabil = pie;
        _this.numero = numero;
        _this.goles = goles;
        return _this;
    }
    Futbolista.prototype.entrenar = function () {
        console.log("Entrenando");
    };
    Futbolista.prototype.hacerGol = function () {
        this.goles++;
        console.log(this.nombre + " metio un gol");
    };
    Futbolista.prototype.getGoles = function () {
        return this.goles;
    };
    Futbolista.prototype.jugar = function () {
        console.log(this.nombre + " esta jugando");
    };
    Futbolista.prototype.atajar = function () {
        if (this.posicion === "arquero") {
            console.log(this.nombre + " atajando");
        }
        else {
            console.log("Solo el arquero puede atajar");
        }
    };
    Futbolista.prototype.hacerFalta = function () {
        console.log(this.nombre + " hizo falta");
    };
    Futbolista.prototype.setTitular = function (titular) {
        if (titular === "titular") {
            this.titular = true;
            console.log(this.nombre + " es titular");
        }
        else {
            this.titular = false;
            console.log(this.nombre + " no es titular");
        }
    };
    Futbolista.prototype.getTitular = function () {
        return this.titular;
    };
    Futbolista.prototype.getPieHabil = function () {
        return this.pieHabil;
    };
    Futbolista.prototype.getNumeroCamiseta = function () {
        return this.numero;
    };
    return Futbolista;
}(persona_1.Persona));
exports.Futbolista = Futbolista;
