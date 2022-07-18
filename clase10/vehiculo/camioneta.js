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
exports.Camioneta = void 0;
var vehiculo_1 = require("./vehiculo");
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta(marca, modelo, cabina) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.tipoCabina = cabina;
        return _this;
    }
    Camioneta.prototype.acelerar = function () {
        if (this.estaPrendido === true) {
            this.velocidadActual += 20;
        }
        else {
            console.log("El auto esta apagado");
        }
    };
    Camioneta.prototype.frenar = function () {
        if (this.estaPrendido === true) {
            if (this.velocidadActual > 20) {
                this.velocidadActual -= 20;
            }
            else {
                this.velocidadActual = 0;
            }
        }
    };
    Camioneta.prototype.getTipoCabina = function () {
        return this.tipoCabina;
    };
    return Camioneta;
}(vehiculo_1.Vehiculo));
exports.Camioneta = Camioneta;
