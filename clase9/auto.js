"use strict";
exports.__esModule = true;
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(usabilidad, marca, modelo, velocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.usabilidad = usabilidad;
        this.velocidadActual = velocidad;
    }
    Auto.prototype.setPrenderApagar = function (on) {
        if (on === "on") {
            this.prendido = true;
            console.log("esta prendido");
        }
        else {
            this.prendido = false;
            console.log("esta apagado");
        }
    };
    Auto.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    Auto.prototype.getUsabilidad = function () {
        return this.usabilidad;
    };
    Auto.prototype.setTipoDeCambios = function (tipoDeCambios) {
        this.tipoDeCambios = tipoDeCambios;
    };
    Auto.prototype.getTipoDeCambios = function () {
        return this.tipoDeCambios;
    };
    return Auto;
}());
exports.Auto = Auto;
