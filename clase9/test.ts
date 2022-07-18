import { Agencia } from "./agencia";
import { AutoCarreras } from "./autoCarreras";
import { AutoCiudad } from "./autoCiudad";
let agencia = new Agencia;
let autociudad1 = new AutoCiudad("Renault", "stepway", 210)
console.log(autociudad1.getVelocidadActual());
agencia.agregarAuto(autociudad1);
let autoCarreras1 = new AutoCarreras("asdasd", "asdasd", 370);
agencia.agregarAuto(autoCarreras1);
agencia.autosDeCarrera();
agencia.autosDeCiudad();