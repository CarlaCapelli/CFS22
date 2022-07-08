"use strict";
exports.__esModule = true;
exports.Auto = void 0;
var ReadlineSync = require("readline-sync");
var Auto = /** @class */ (function () {
    function Auto(mar, mode, colorr) {
        this.marca = mar;
        this.modelo = mode;
        this.color = colorr;
    }
    Auto.prototype.setModelo = function (modelo) {
        if (modelo === void 0) { modelo = ReadlineSync.question("modelo del auto "); }
        this.modelo = modelo;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setMarca = function (marca) {
        if (marca === void 0) { marca = ReadlineSync.question("modelo del auto "); }
        this.marca = marca;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setColor = function (color) {
        if (color === void 0) { color = ReadlineSync.question("modelo del auto "); }
        this.color = color;
    };
    Auto.prototype.getColor = function () {
        return this.color;
    };
    return Auto;
}());
exports.Auto = Auto;
