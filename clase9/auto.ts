export class Auto {
    protected prendido: boolean;
    protected marca: string;
    protected modelo: string
    protected velocidadActual: number;
    protected tipoDeCambios: string;
    protected usabilidad: string;
    constructor(usabilidad: string, marca: string, modelo: string, velocidad: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.usabilidad = usabilidad;
        this.velocidadActual = velocidad;
    }

    setPrenderApagar(on: string) {
        if (on === "on") {
            this.prendido = true;
            console.log("esta prendido");
        } else {
            this.prendido = false;
            console.log("esta apagado");
        }

    }

    getVelocidadActual(): number {
        return this.velocidadActual;

    }

    getUsabilidad(): string {
        return this.usabilidad;

    }
    setTipoDeCambios(tipoDeCambios: string) {
        this.tipoDeCambios = tipoDeCambios;

    }
    getTipoDeCambios(): string {
        return this.tipoDeCambios;

    }
}