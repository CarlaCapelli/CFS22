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
exports.AutoCiudad = void 0;
var vehiculo_1 = require("./vehiculo");
var AutoCiudad = /** @class */ (function (_super) {
    __extends(AutoCiudad, _super);
    function AutoCiudad(marca, modelo) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.radioPrendida = false;
        return _this;
    }
    AutoCiudad.prototype.acelerar = function () {
        if (this.estaPrendido === true) {
            this.velocidadActual += 10;
        }
        else {
            console.log("El auto esta apagado");
        }
    };
    AutoCiudad.prototype.frenar = function () {
        if (this.estaPrendido === true) {
            if (this.velocidadActual > 10) {
                this.velocidadActual -= 10;
            }
            else {
                this.velocidadActual = 0;
            }
        }
    };
    AutoCiudad.prototype.pasear = function () {
        console.log("paseando");
    };
    AutoCiudad.prototype.prenderRadio = function () {
        this.radioPrendida = true;
    };
    AutoCiudad.prototype.apagarRadio = function () {
        this.radioPrendida = false;
    };
    AutoCiudad.prototype.escucharRadio = function () {
        if (this.radioPrendida === true) {
            console.log("Escuchando radio");
        }
        else {
            console.log("La radio esta apagada");
        }
    };
    return AutoCiudad;
}(vehiculo_1.Vehiculo));
exports.AutoCiudad = AutoCiudad;
