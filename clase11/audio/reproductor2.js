"use strict";
exports.__esModule = true;
exports.Reproductor2 = void 0;
var audio_1 = require("./audio");
var Reproductor2 = /** @class */ (function () {
    function Reproductor2() {
        this.canciones = [new audio_1.Audio(1, "I Aint worried", 2.28, "OneRepublic"), new audio_1.Audio(2, "Shivers", 3.27, "Ed Sheeran")];
        this.prendido = false;
        this.appAbierta = false;
        this.cancionActual = this.canciones[0];
        this.volumenActual = 0;
    }
    Reproductor2.prototype.abrirApp = function () {
        if (this.prendido === true) {
            this.appAbierta = true;
        }
        else {
            console.log("El reproductor esta apagado");
        }
    };
    Reproductor2.prototype.prender = function () {
        console.log("ON");
        this.prendido = true;
    };
    Reproductor2.prototype.apagar = function () {
        console.log("OFF");
        this.prendido = false;
    };
    Reproductor2.prototype.agregarCancion = function (cancion) {
        if (this.appAbierta === true) {
            this.canciones.push(cancion);
        }
        else {
            console.log("El reproductor esta apagado");
        }
    };
    Reproductor2.prototype.cancionSiguiente = function () {
        var _this = this;
        var cancion = this.cancionActual;
        if (this.appAbierta === true) {
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
        else {
            console.log("La app no esta abierta");
        }
    };
    Reproductor2.prototype.cancionAnterior = function () {
        var _this = this;
        var cancion = this.cancionActual;
        if (this.appAbierta === true) {
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
        else {
            console.log("La app no esta abierta");
        }
    };
    Reproductor2.prototype.getCancionActual = function () {
        return this.cancionActual;
    };
    Reproductor2.prototype.subirVolumen = function () {
        if (this.appAbierta === true) {
            this.volumenActual += 1;
        }
        else {
            console.log("La app no esta abierta");
        }
    };
    Reproductor2.prototype.bajarVolumen = function () {
        if (this.appAbierta === true) {
            this.volumenActual -= 1;
        }
        else {
            console.log("el reproductor esta apagado");
        }
    };
    Reproductor2.prototype.getVolumenActual = function () {
        return this.volumenActual;
    };
    Reproductor2.prototype.getCantidadPistas = function () {
        return this.canciones.length;
    };
    Reproductor2.prototype.getDuracion = function () {
        return this.cancionActual.getDuracion();
    };
    return Reproductor2;
}());
exports.Reproductor2 = Reproductor2;
