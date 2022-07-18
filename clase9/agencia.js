"use strict";
exports.__esModule = true;
exports.Agencia = void 0;
var autoCarreras_1 = require("./autoCarreras");
var autoCiudad_1 = require("./autoCiudad");
var Agencia = /** @class */ (function () {
    function Agencia() {
        this.autos = [new autoCiudad_1.AutoCiudad("Ford", "Fiesta", 230), new autoCarreras_1.AutoCarreras("Porsche", "718 Boxster", 320)];
        this.autosCarrera = [];
        this.autosCiudad = [];
    }
    Agencia.prototype.agregarAuto = function (auto) {
        this.autos.push(auto);
        console.log(this.autos);
    };
    Agencia.prototype.autosDeCarrera = function () {
        var _this = this;
        this.autos.forEach(function (element) {
            if (element.getUsabilidad() === "carrera") {
                _this.autosCarrera.push(element);
            }
        });
        console.log(this.autosCarrera);
    };
    Agencia.prototype.autosDeCiudad = function () {
        var _this = this;
        this.autos.forEach(function (element) {
            if (element.getUsabilidad() === "ciudad") {
                _this.autosCiudad.push(element);
            }
        });
        console.log(this.autosCiudad);
    };
    return Agencia;
}());
exports.Agencia = Agencia;
