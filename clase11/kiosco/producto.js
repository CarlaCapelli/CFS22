"use strict";
exports.__esModule = true;
exports.Producto = void 0;
var Producto = /** @class */ (function () {
    function Producto(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    Producto.prototype.getNombre = function () {
        return this.nombre;
    };
    Producto.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Producto.prototype.getPrecio = function () {
        return this.precio;
    };
    Producto.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Producto.prototype.getStock = function () {
        return this.stock;
    };
    Producto.prototype.setStock = function (stock) {
        this.stock = stock;
    };
    return Producto;
}());
exports.Producto = Producto;
