"use strict";
exports.__esModule = true;
var ReadlineSync = require("readline-sync");
var Personaje = /** @class */ (function () {
    function Personaje(tecla) {
        if (tecla === void 0) { tecla = ReadlineSync.question("Ingrese nombre de personaje "); }
        this.nombre = tecla;
        this.onOff = true;
    }
    Personaje.prototype.setCaminar = function (tecla) {
        if (tecla === "w") {
            this.accion = ("caminando");
            console.log(this.nombre + " esta" + this.accion);
        }
    };
    Personaje.prototype.setDoblarIzq = function (tecla) {
        if (tecla === "a") {
            this.accion = ("doblando a la izquierda");
            console.log(this.nombre + " esta " + this.accion);
        }
    };
    Personaje.prototype.setDoblarDer = function (tecla) {
        if (tecla === "d") {
            this.accion = ("doblando a la derecha");
            console.log(this.nombre + " esta " + this.accion);
        }
    };
    Personaje.prototype.setSaltar = function (tecla) {
        if (tecla === "q") {
            this.accion = ("saltando");
            console.log(this.nombre + " esta " + this.accion);
        }
    };
    Personaje.prototype.setAgacharse = function (tecla) {
        if (tecla === "s") {
            this.accion = ("agachando");
            console.log(this.nombre + " se esta " + this.accion);
        }
    };
    Personaje.prototype.setApagar = function (tecla) {
        if (tecla === "off") {
            this.onOff = false;
            console.log("apagado");
        }
        else {
            this.onOff = true;
        }
    };
    Personaje.prototype.jugar = function () {
        while (this.onOff === true) {
            var tecla = ReadlineSync.question(" caminar(w), doblar iz(a), doblar der(d),saltar(q),agacharse(s) apagar(off) ");
            this.setCaminar(tecla);
            this.setDoblarIzq(tecla);
            this.setDoblarDer(tecla);
            this.setSaltar(tecla);
            this.setAgacharse(tecla);
            this.setApagar(tecla);
        }
    };
    return Personaje;
}());
var pers = new Personaje();
pers.jugar();
