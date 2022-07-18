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
exports.AutoCarrera = void 0;
var vehiculo_1 = require("./vehiculo");
var AutoCarrera = /** @class */ (function (_super) {
    __extends(AutoCarrera, _super);
    function AutoCarrera(marca, modelo, sponsor) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.sponsor = sponsor;
        return _this;
    }
    AutoCarrera.prototype.acelerar = function () {
        if (this.estaPrendido === true) {
            this.velocidadActual += 30;
        }
        else {
            console.log("El auto esta apagado");
        }
    };
    AutoCarrera.prototype.frenar = function () {
        if (this.estaPrendido === true) {
            if (this.velocidadActual > 30) {
                this.velocidadActual -= 30;
            }
            else {
                this.velocidadActual = 0;
            }
        }
    };
    AutoCarrera.prototype.getSponsor = function () {
        return this.sponsor;
    };
    AutoCarrera.prototype.setSponsor = function (sponsor) {
        this.sponsor = sponsor;
    };
    return AutoCarrera;
}(vehiculo_1.Vehiculo));
exports.AutoCarrera = AutoCarrera;
