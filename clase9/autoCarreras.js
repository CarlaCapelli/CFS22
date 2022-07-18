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
exports.AutoCarreras = void 0;
var auto_1 = require("./auto");
var AutoCarreras = /** @class */ (function (_super) {
    __extends(AutoCarreras, _super);
    function AutoCarreras(marca, modelo, velocidad) {
        return _super.call(this, "carrera", marca, modelo, velocidad) || this;
    }
    AutoCarreras.prototype.setVelocidadActual = function () {
        return _super.prototype.getVelocidadActual.call(this) + 20;
    };
    AutoCarreras.prototype.setTipoDeCambios = function (cambios) {
        _super.prototype.setTipoDeCambios.call(this, cambios);
    };
    return AutoCarreras;
}(auto_1.Auto));
exports.AutoCarreras = AutoCarreras;
