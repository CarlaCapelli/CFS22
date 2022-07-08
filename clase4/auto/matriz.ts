
class Matriz {
    filas: any[] = [3];
    constructor() {
    }

    setmatriz() {
        this.filas[0] = ["a", "b", "c"];
        this.filas[1] = ["d", "e", "f"];
        this.filas[2] = ["g", "h", "i"];
        console.log(this.filas);
    }

    getMatriz(x: number, y: number) {
        return this.filas[x][y];
    }
}

let m = new Matriz();
m.setmatriz();
console.log(m.getMatriz(0, 1));
console.log(m.getMatriz(2, 2));