var Matriz = /** @class */ (function () {
    function Matriz() {
        this.filas = [3];
    }
    Matriz.prototype.setmatriz = function () {
        this.filas[0] = ["a", "b", "c"];
        this.filas[1] = ["d", "e", "f"];
        this.filas[2] = ["g", "h", "i"];
        console.log(this.filas);
    };
    Matriz.prototype.getMatriz = function (x, y) {
        return this.filas[x][y];
    };
    return Matriz;
}());
var m = new Matriz();
m.setmatriz();
console.log(m.getMatriz(0, 1));
console.log(m.getMatriz(2, 2));
