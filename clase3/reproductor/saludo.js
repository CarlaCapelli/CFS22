"use strict";
exports.__esModule = true;
exports.saludo = void 0;
var ReadlineSync = require("readline-sync");
var saludo = /** @class */ (function () {
    function saludo() {
        this.nombre = "";
        this.nombre = "carla";
    }
    saludo.prototype.saludar = function () {
        var sal = ReadlineSync.question("Escriba su nombre ");
        this.nombre = sal;
        console.log("hola " + this.nombre);
    };
    return saludo;
}());
exports.saludo = saludo;
