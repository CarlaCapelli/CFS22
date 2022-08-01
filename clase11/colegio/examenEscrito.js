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
exports.ExamenEscrito = void 0;
var Examen_1 = require("./Examen");
var ExamenEscrito = /** @class */ (function (_super) {
    __extends(ExamenEscrito, _super);
    function ExamenEscrito(materia, nota) {
        var _this = _super.call(this) || this;
        _this.materia = materia;
        _this.nota = nota;
        return _this;
    }
    ExamenEscrito.prototype.tipoExamen = function () {
        return "examen escrito de " + this.materia;
    };
    return ExamenEscrito;
}(Examen_1.Examen));
exports.ExamenEscrito = ExamenEscrito;
