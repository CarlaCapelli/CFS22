import { IFormaDePago } from "./IFormaDePago";

export class Efectivo implements IFormaDePago {

    pago(total: number): void {
        console.log("pago en efectivo un total de " + total);
    }

}