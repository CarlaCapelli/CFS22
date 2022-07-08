"use strict";
exports.__esModule = true;
var televisor_1 = require("./televisor");
var Decodificador = /** @class */ (function () {
    function Decodificador(televisor) {
        this.televisor = televisor;
    }
    Decodificador.prototype.prenderTele = function (on) {
        this.televisor.setOnoff(on);
    };
    Decodificador.prototype.subirVolumen = function () {
        if (this.televisor.getOnOff() === true) {
            this.televisor.subirVolumen();
        }
    };
    Decodificador.prototype.bajarVolumen = function () {
        if (this.televisor.getOnOff() === true) {
            this.televisor.bajarVolumen();
        }
    };
    Decodificador.prototype.cambiarVolumen = function (volumen) {
        if (this.televisor.getOnOff() === true) {
            this.televisor.cambiarVolumen(volumen);
        }
    };
    Decodificador.prototype.subirCanal = function () {
        if (this.televisor.getOnOff() === true) {
            this.televisor.subirCanal();
        }
    };
    Decodificador.prototype.bajarCanal = function () {
        if (this.televisor.getOnOff() === true) {
            this.televisor.bajarCanal();
        }
    };
    Decodificador.prototype.cambiarCanal = function (canal) {
        if (this.televisor.getOnOff() === true) {
            this.televisor.cambiarCanal(canal);
        }
    };
    Decodificador.prototype.verCanalActual = function () {
        return this.televisor.getCanalActual();
    };
    Decodificador.prototype.verVolumenActual = function () {
        return this.televisor.getVolumenActual();
    };
    return Decodificador;
}());
var tele1 = new televisor_1.Televisor;
var decodificador = new Decodificador(tele1);
decodificador.prenderTele("on");
decodificador.cambiarCanal(5);
console.log(decodificador.verCanalActual());
