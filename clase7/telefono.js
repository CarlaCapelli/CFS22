"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var ReadlineSync = require("readline-sync");
var Telefono = /** @class */ (function () {
    function Telefono(bateria) {
        this.estaPrendido = false;
        this.bateriaActual = bateria;
    }
    Telefono.prototype.prender = function () {
        this.estaPrendido = true;
    };
    Telefono.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    Telefono.prototype.mandarMensaje = function () {
        if (this.estaPrendido === true) {
            var mensaje = ReadlineSync.question("mensaje: ");
            console.log(mensaje);
        }
        else {
            console.log("El telefono esta apagado");
        }
    };
    Telefono.prototype.hacerLlamada = function () {
        if (this.estaPrendido === true) {
            console.log("llamando");
        }
        else {
            console.log("El telefono esta apagado");
        }
    };
    Telefono.prototype.getPrendido = function () {
        return this.estaPrendido;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
