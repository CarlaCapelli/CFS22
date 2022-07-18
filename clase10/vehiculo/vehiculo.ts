export abstract class Vehiculo {

    velocidadActual: number;
    estaPrendido: boolean;
    marca: string;
    modelo: string;
    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.estaPrendido = false;
        this.velocidadActual = 0;
    }
    getMarca(): string {
        return this.marca;

    }
    getModelo(): string {
        return this.modelo;
    }
    prender() {
        this.estaPrendido = true;
    }
    apagar() {
        this.estaPrendido = false;
    }
    getVelocidadActual(): number {
        return this.velocidadActual;
    }
    abstract acelerar(): void;
    abstract frenar(): void;
}