"use strict";
exports.__esModule = true;
exports.Smartphone = void 0;
var Smartphone = /** @class */ (function () {
    function Smartphone() {
        this.prendido = false;
    }
    Smartphone.prototype.prender = function () {
        this.prendido = true;
    };
    Smartphone.prototype.apagar = function () {
        this.prendido = false;
    };
    Smartphone.prototype.llamar = function (numero) {
        if (this.prendido === true) {
            console.log("llamando a " + numero);
        }
        else {
            console.log("El telefono esta apagado");
        }
    };
    Smartphone.prototype.sacarFoto = function () {
        if (this.prendido === true) {
            console.log("sancando foto");
        }
        else {
            console.log("El telefono esta apagado");
        }
    };
    return Smartphone;
}());
exports.Smartphone = Smartphone;
