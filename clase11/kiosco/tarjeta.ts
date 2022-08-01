import { IFormaDePago } from "./IFormaDePago";

export class Tarjeta implements IFormaDePago {
    pago(total: number): void {
        console.log("pago con tarjeta un total de " + total);
    }
}