import { Kiosco } from "./kiosco";
import { Efectivo } from "./efectivo";
import { Tarjeta } from "./tarjeta";

let kiosco = new Kiosco("carla");
kiosco.cargarProductos();
kiosco.agregarPruducto("lapiz", 3.12, 5);
kiosco.compra("caramelo", 23);
let tarjeta = new Tarjeta;
kiosco.pago(tarjeta);
kiosco.compra("alfajor", 2);
let efectivo = new Efectivo;
kiosco.pago(efectivo);