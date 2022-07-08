"use strict";
exports.__esModule = true;
exports.Televisor = void 0;
var Televisor = /** @class */ (function () {
    function Televisor() {
        this.canalActual = 0;
        this.volumenActual = 0;
    }
    Televisor.prototype.setOnoff = function (on) {
        if (on = "on") {
            this.onOff = true;
        }
        else {
            this.onOff = false;
        }
    };
    Televisor.prototype.getOnOff = function () {
        return this.onOff;
    };
    Televisor.prototype.subirCanal = function () {
        this.canalActual = this.canalActual + 1;
        return this.canalActual;
    };
    Televisor.prototype.bajarCanal = function () {
        this.canalActual = this.canalActual - 1;
        return this.canalActual;
    };
    Televisor.prototype.cambiarCanal = function (canal) {
        this.canalActual = canal;
        return this.canalActual;
    };
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
        return this.volumenActual;
    };
    Televisor.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual - 1;
        return this.volumenActual;
    };
    Televisor.prototype.cambiarVolumen = function (volumen) {
        this.volumenActual = volumen;
        return this.volumenActual;
    };
    Televisor.prototype.getCanalActual = function () {
        return this.canalActual;
    };
    Televisor.prototype.getVolumenActual = function () {
        return this.volumenActual;
    };
    return Televisor;
}());
exports.Televisor = Televisor;
