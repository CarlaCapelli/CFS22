"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = void 0;
var auto_1 = require("./auto");
var fs = require("fs");
var ReadlineSync = require("readline-sync");
var mode = fs.readFileSync('modelo.txt', 'utf8');
var mar = fs.readFileSync('marca.txt', 'utf8');
var cars = fs.readFileSync('autos.txt', 'utf8');
var colo = fs.readFileSync('color.txt', 'utf8');
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.car = cars.split(',');
        this.mod = mode.split(',');
        this.marc = mar.split(',');
        this.col = colo.split(',');
        this.opcion = true;
    }
    RegistroAutomotor.prototype.matriz = function () {
        for (var i = 0; i < this.car.length; i++) {
            this.car[i] = new auto_1.Auto(this.marc[i], this.mod[i], this.col[i]);
        }
        console.log(this.car);
    };
    RegistroAutomotor.prototype.buscarAuto = function (tecla) {
        if (tecla === "b") {
            var buscarPor = ReadlineSync.question("buscar por modelo(mo),buscar por marca(ma), buscar por color (co) ");
            if (buscarPor === "mo") {
                var pregModelo_1 = ReadlineSync.question("Modelo que busca ");
                this.car.forEach(function (object) {
                    if (object.modelo === pregModelo_1) {
                        console.log(object.modelo + " " + object.marca + " " + object.color);
                    }
                });
            }
            else if (buscarPor === "co") {
                var pregColor_1 = ReadlineSync.question("Color que busca ");
                this.car.forEach(function (object) {
                    if (object.color === pregColor_1) {
                        console.log(object.modelo + " " + object.marca + " " + object.color);
                    }
                });
            }
            else if (buscarPor === "ma") {
                var pregMarca_1 = ReadlineSync.question("Marca que busca ");
                this.car.forEach(function (object) {
                    if (object.marca === pregMarca_1) {
                        console.log(object.modelo + " " + object.marca + " " + object.color);
                    }
                });
            }
        }
    };
    RegistroAutomotor.prototype.borrarAuto = function (tecla) {
        var _this = this;
        if (tecla === "bo") {
            console.log("Datos del auto que quiere borrar: ");
            var pregBorrarMarca_1 = ReadlineSync.question("Marca ");
            var pregBorrarModelo_1 = ReadlineSync.question("Modelo ");
            var pregBorrarColor_1 = ReadlineSync.question("Color ");
            this.car.forEach(function (object) {
                if (object.marca === pregBorrarMarca_1 && object.modelo === pregBorrarModelo_1 && pregBorrarColor_1 === object.color) {
                    var indice = _this.car.indexOf(object);
                    _this.car.splice(indice, 1);
                    console.log(_this.car);
                }
            });
        }
    };
    RegistroAutomotor.prototype.agregarAuto = function (tecla) {
        if (tecla === "a") {
            console.log("ingrese los datos del auto que desea agregar ");
            var ma = ReadlineSync.question("Marca: ");
            var mo = ReadlineSync.question("Modelo: ");
            var co = ReadlineSync.question("Color: ");
            this.car.push(new auto_1.Auto(ma, mo, co));
            console.log(this.car);
        }
    };
    RegistroAutomotor.prototype.cambiarAuto = function (tecla) {
        var _this = this;
        if (tecla === "c") {
            console.log("Datos del auto que desea reemplazar: ");
            var pregMarca_2 = ReadlineSync.question("marca: ");
            var pregModelo_2 = ReadlineSync.question("modelo: ");
            var pregColor_2 = ReadlineSync.question("color: ");
            this.car.forEach(function (object) {
                if (object.marca === pregMarca_2 && object.modelo === pregModelo_2 && pregColor_2 === object.color) {
                    console.log("Datos del auto nuevo: ");
                    var indice = _this.car.indexOf(object);
                    _this.car[indice].marca = ReadlineSync.question("Marca:  ");
                    _this.car[indice].modelo = ReadlineSync.question("Modelo: ");
                    _this.car[indice].color = ReadlineSync.question("Color: ");
                }
            });
            console.log(this.car);
        }
    };
    RegistroAutomotor.prototype.setApagar = function (tecla) {
        if (tecla === "off") {
            this.opcion = false;
            console.log("apagado");
        }
        else {
            this.opcion = true;
        }
    };
    RegistroAutomotor.prototype.opciones = function () {
        this.matriz();
        while (this.opcion === true) {
            var tecla = ReadlineSync.question("buscar(b),borrar(bo),agregar(a),cambiar datos(c)cerrar(off) ");
            this.buscarAuto(tecla);
            this.setApagar(tecla);
            this.borrarAuto(tecla);
            this.agregarAuto(tecla);
            this.cambiarAuto(tecla);
        }
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
var nuevoRegistro = new RegistroAutomotor();
nuevoRegistro.opciones();
