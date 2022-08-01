export class Producto {
    private nombre: string;
    private precio: number;
    private stock: number;
    constructor(nombre: string, precio: number, stock: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    getNombre(): string {
        return this.nombre;

    }
    setNombre(nombre: string) {
        this.nombre = nombre;

    }
    getPrecio(): number {
        return this.precio;
    }
    setPrecio(precio: number) {
        this.precio = precio;
    }
    getStock(): number {
        return this.stock;
    }
    setStock(stock: number) {
        this.stock = stock;
    }
}
