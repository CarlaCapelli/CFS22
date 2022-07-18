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
exports.Masajista = void 0;
var persona_1 = require("./persona");
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(name, equipo, edad, antiguedad, sueldo) {
        var _this = _super.call(this, name, equipo, edad, antiguedad, sueldo) || this;
        _this.clientes = [];
        return _this;
    }
    Masajista.prototype.agregarCliente = function (futbolista) {
        this.clientes.push(futbolista);
    };
    Masajista.prototype.masajear = function (nombre) {
        var _this = this;
        this.clientes.forEach(function (object) {
            if (object.getNombre() === nombre) {
                var indice = _this.clientes.indexOf(object);
                console.log("masajeando a " + _this.clientes[indice].getNombre());
            }
        });
    };
    Masajista.prototype.rehabilitar = function (nombre) {
        var _this = this;
        this.clientes.forEach(function (object) {
            if (object.getNombre() === nombre) {
                var indice = _this.clientes.indexOf(object);
                console.log("rehabilitando a " + _this.clientes[indice].getNombre());
            }
        });
    };
    return Masajista;
}(persona_1.Persona));
exports.Masajista = Masajista;
