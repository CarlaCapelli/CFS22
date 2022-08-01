import { Producto } from "./producto";
import { IFormaDePago } from "./IFormaDePago";
import * as fs from 'fs';
import * as ReadlineSync from "readline-sync";
let nombreProducto: string = fs.readFileSync('productos.txt', 'utf8');
export class Kiosco {
    private precioCompra;
    private productos: Producto[];
    private nombre: string;
    private nombresProductos: string[] = nombreProducto.split(',');
    constructor(nombre: string) {
        this.productos = [];
        this.nombre = nombre;
    }

    cargarProductos() {
        for (let i: number = 0; i < this.nombresProductos.length; i++) {
            let nombre = this.nombresProductos[i];
            let precio: number = Number(ReadlineSync.question("precio de  " + nombre));
            let stock: number = Number(ReadlineSync.question("stock de  " + nombre));
            this.productos.push(new Producto(nombre, precio, stock));
        }
        console.log(this.productos);
    }
    agregarPruducto(nombre: string, precio: number, stock: number) {
        let producto = new Producto(nombre, precio, stock);
        this.productos.push(producto);
        fs.appendFileSync("productos.txt", "," + producto.getNombre());
        console.log(this.productos);
    }
    compra(nombre: string, cantidad: number) {
        this.productos.forEach(element => {
            if (nombre === element.getNombre()) {
                if (cantidad <= element.getStock()) {
                    element.setStock(element.getStock() - cantidad);
                    this.precioCompra = element.getPrecio() * cantidad;
                    fs.appendFileSync("productosVendidos.txt", "-" + element.getNombre() + " x " + cantidad + "= " + this.precioCompra + "\n");
                    console.log("comprar " + cantidad + " unidad/es de " + nombre + ",con un precio total es de " + this.precioCompra);
                } else { console.log("no contamos con esa cantidad de " + element.getNombre()); }

            }

        });
    }
    pago(formaDePago: IFormaDePago) {
        formaDePago.pago(this.precioCompra);

    }
    getNombre(): string {
        return this.nombre;
    }
}

