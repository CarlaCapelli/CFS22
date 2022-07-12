"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.TelefonoConCamara = void 0;
var telefono_1 = require("./telefono");
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara(bateriaActual) {
        var _this = _super.call(this, bateriaActual) || this;
        _this.camaraOn = false;
        return _this;
    }
    TelefonoConCamara.prototype.prenderCamara = function () {
        return this.camaraOn = true;
    };
    TelefonoConCamara.prototype.apagarCamara = function () {
        return this.camaraOn = false;
    };
    TelefonoConCamara.prototype.sacarFotos = function () {
        if (this.estaPrendido === true && this.camaraOn === true) {
            console.log("Sacando foto");
        }
        else if (this.estaPrendido === false) {
            console.log("El telefono esta apagado");
        }
        else if (this.camaraOn === false) {
            console.log("La camara esta apagada");
        }
    };
    return TelefonoConCamara;
}(telefono_1.Telefono));
exports.TelefonoConCamara = TelefonoConCamara;
