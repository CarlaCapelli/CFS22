"use strict";
exports.__esModule = true;
exports.Kiosco = void 0;
var producto_1 = require("./producto");
var fs = require("fs");
var ReadlineSync = require("readline-sync");
var nombreProducto = fs.readFileSync('productos.txt', 'utf8');
var Kiosco = /** @class */ (function () {
    function Kiosco(nombre) {
        this.nombresProductos = nombreProducto.split(',');
        this.productos = [];
        this.nombre = nombre;
    }
    Kiosco.prototype.cargarProductos = function () {
        for (var i = 0; i < this.nombresProductos.length; i++) {
            var nombre = this.nombresProductos[i];
            var precio = Number(ReadlineSync.question("precio de  " + nombre));
            var stock = Number(ReadlineSync.question("stock de  " + nombre));
            this.productos.push(new producto_1.Producto(nombre, precio, stock));
        }
        console.log(this.productos);
    };
    Kiosco.prototype.agregarPruducto = function (nombre, precio, stock) {
        var producto = new producto_1.Producto(nombre, precio, stock);
        this.productos.push(producto);
        fs.appendFileSync("productos.txt", "," + producto.getNombre());
        console.log(this.productos);
    };
    Kiosco.prototype.compra = function (nombre, cantidad) {
        var _this = this;
        this.productos.forEach(function (element) {
            if (nombre === element.getNombre()) {
                if (cantidad <= element.getStock()) {
                    element.setStock(element.getStock() - cantidad);
                    _this.precioCompra = element.getPrecio() * cantidad;
                    fs.appendFileSync("productosVendidos.txt", "-" + element.getNombre() + " x " + cantidad + "= " + _this.precioCompra + "\n");
                    console.log("comprar " + cantidad + " unidad/es de " + nombre + ",con un precio total es de " + _this.precioCompra);
                }
                else {
                    console.log("no contamos con esa cantidad de " + element.getNombre());
                }
            }
        });
    };
    Kiosco.prototype.pago = function (formaDePago) {
        formaDePago.pago(this.precioCompra);
    };
    Kiosco.prototype.getNombre = function () {
        return this.nombre;
    };
    return Kiosco;
}());
exports.Kiosco = Kiosco;
