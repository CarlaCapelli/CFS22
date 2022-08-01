"use strict";
exports.__esModule = true;
exports.Reproductor = void 0;
var audio_1 = require("./audio");
var Reproductor = /** @class */ (function () {
    function Reproductor() {
        this.canciones = [new audio_1.Audio(1, "Stay", 2.21, "Justin Bieber"), new audio_1.Audio(2, "Left and Right", 2.34, "Charlie Puth")];
        this.prendido = false;
        this.cancionActual = this.canciones[0];
        this.volumenActual = 0;
    }
    Reproductor.prototype.prender = function () {
        console.log("Reproductor Prendido");
        this.prendido = true;
    };
    Reproductor.prototype.apagar = function () {
        console.log("Reproductor Apagado");
        this.prendido = false;
    };
    Reproductor.prototype.agregarCancion = function (cancion) {
        if (this.prendido === true) {
            this.canciones.push(cancion);
        }
        else {
            console.log("El reproductor esta apagado");
        }
    };
    Reproductor.prototype.cancionSiguiente = function () {
        var _this = this;
        var cancion = this.cancionActual;
        if (this.prendido === true) {
            this.canciones.forEach(function (element) {
                if (element === cancion) {
                    var indice = _this.canciones.indexOf(element);
                    if (indice >= _this.canciones.length - 1) {
                        indice = 0;
                    }
                    else {
                        indice++;
                    }
                    _this.cancionActual = _this.canciones[indice];
                }
            });
        }
    };
    Reproductor.prototype.cancionAnterior = function () {
        var _this = this;
        var cancion = this.cancionActual;
        if (this.prendido === true) {
            this.canciones.forEach(function (element) {
                if (element === cancion) {
                    var indice = _this.canciones.indexOf(element);
                    if (indice <= 0) {
                        indice = _this.canciones.length - 1;
                    }
                    else {
                        indice--;
                    }
                    _this.cancionActual = _this.canciones[indice];
                }
            });
        }
    };
    Reproductor.prototype.getCancionActual = function () {
        return this.cancionActual;
    };
    Reproductor.prototype.subirVolumen = function () {
        if (this.prendido === true) {
            this.volumenActual += 1;
        }
        else {
            console.log("El reproductor esta apagado");
        }
    };
    Reproductor.prototype.bajarVolumen = function () {
        if (this.prendido === true) {
            this.volumenActual -= 1;
        }
        else {
            console.log("el reproductor esta apagado");
        }
    };
    Reproductor.prototype.getVolumenActual = function () {
        return this.volumenActual;
    };
    Reproductor.prototype.getCantidadPistas = function () {
        return this.canciones.length;
    };
    Reproductor.prototype.getDuracion = function () {
        return this.cancionActual.getDuracion();
    };
    return Reproductor;
}());
exports.Reproductor = Reproductor;
