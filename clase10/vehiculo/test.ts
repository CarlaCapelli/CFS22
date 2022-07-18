import { Vehiculo } from "./vehiculo";
import { AutoCiudad } from "./autoCiudad";
import { AutoCarrera } from "./autoCarrera";
import { Camioneta } from "./camioneta";

let auto1 = new AutoCiudad("renault", "sandero");
auto1.prender();
auto1.acelerar();
console.log(auto1.getVelocidadActual());
auto1.acelerar();
console.log(auto1.getVelocidadActual());
auto1.acelerar();
console.log(auto1.getVelocidadActual());
auto1.prenderRadio();
auto1.escucharRadio();


let auto2 = new AutoCarrera("porsche", "982", "red bull");
auto2.prender();
auto2.acelerar();
console.log(auto2.getVelocidadActual());
auto2.setSponsor("michelin");
console.log(auto2.getSponsor());


let camioneta = new Camioneta("toyota", "hilux", "doble");
console.log(camioneta.getTipoCabina());
camioneta.prender();
camioneta.acelerar();
console.log(camioneta.getVelocidadActual());
