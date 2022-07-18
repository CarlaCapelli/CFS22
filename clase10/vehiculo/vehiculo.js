"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.estaPrendido = false;
        this.velocidadActual = 0;
    }
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.prender = function () {
        this.estaPrendido = true;
    };
    Vehiculo.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    Vehiculo.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
