"use strict";
exports.__esModule = true;
exports.Audio = void 0;
var Audio = /** @class */ (function () {
    function Audio(id, titulo, duracion, interprete) {
        this.id = id;
        this.titulo = titulo;
        this.duracion = duracion;
        this.interprete = interprete;
    }
    Audio.prototype.getID = function () {
        return this.id;
    };
    Audio.prototype.getTitulo = function () {
        return this.titulo;
    };
    Audio.prototype.getDuracion = function () {
        return this.duracion;
    };
    Audio.prototype.getInterprete = function () {
        return this.interprete;
    };
    return Audio;
}());
exports.Audio = Audio;
