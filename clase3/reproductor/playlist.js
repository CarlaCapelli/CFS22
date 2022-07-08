"use strict";
exports.__esModule = true;
exports.playlist = void 0;
var ReadlineSync = require("readline-sync");
var playlist = /** @class */ (function () {
    function playlist() {
        this.cancionActual = "";
        this.cancionActual = "Stay";
    }
    playlist.prototype.cambiarCancion = function (music) {
        var i = 0;
        var cambiar = ReadlineSync.question("Escriba sig para siguiente cancion, ant para cancion anterior, cualquier otra para apagar ");
        while (cambiar === "sig" || cambiar === "ant") {
            if (cambiar === "sig") {
                if (i >= music.length - 1) {
                    i = 0;
                }
                else {
                    i++;
                }
                this.cancionActual = music[i];
                console.log(this.cancionActual);
            }
            else if (cambiar === "ant") {
                if (i <= 0) {
                    i = music.length - 1;
                }
                else {
                    i--;
                }
                this.cancionActual = music[i];
                console.log(this.cancionActual);
            }
            cambiar = ReadlineSync.question("Escriba sig para siguiente cancion, ant para cancion anterior, cualquier otra para apagar ");
        }
    };
    playlist.prototype.getCancionActual = function () {
        return this.cancionActual;
    };
    return playlist;
}());
exports.playlist = playlist;
