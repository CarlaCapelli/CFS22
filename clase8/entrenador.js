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
exports.Entrenador = void 0;
var persona_1 = require("./persona");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(name, equipo, edad, antiguedad, sueldo) {
        var _this = _super.call(this, name, equipo, edad, antiguedad, sueldo) || this;
        _this.futbolistas = [];
        return _this;
    }
    Entrenador.prototype.agregarFutbolista = function (futbolista) {
        this.futbolistas.push(futbolista);
    };
    Entrenador.prototype.elegirTitular = function (nombre, titular) {
        var _this = this;
        this.futbolistas.forEach(function (object) {
            if (object.getNombre() === nombre) {
                var indice = _this.futbolistas.indexOf(object);
                _this.futbolistas[indice].setTitular(titular);
            }
        });
    };
    Entrenador.prototype.dirigir = function () {
        console.log(this.nombre + "esta dirigiendo");
    };
    Entrenador.prototype.entrenar = function () {
        console.log(this.nombre + " esta dirigiendo");
    };
    Entrenador.prototype.planificar = function () {
        console.log(this.nombre + " esta planificando");
    };
    return Entrenador;
}(persona_1.Persona));
exports.Entrenador = Entrenador;
