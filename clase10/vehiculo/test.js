"use strict";
exports.__esModule = true;
var autoCiudad_1 = require("./autoCiudad");
var autoCarrera_1 = require("./autoCarrera");
var camioneta_1 = require("./camioneta");
var auto1 = new autoCiudad_1.AutoCiudad("renault", "sandero");
auto1.prender();
auto1.acelerar();
console.log(auto1.getVelocidadActual());
auto1.acelerar();
console.log(auto1.getVelocidadActual());
auto1.acelerar();
console.log(auto1.getVelocidadActual());
auto1.prenderRadio();
auto1.escucharRadio();
var auto2 = new autoCarrera_1.AutoCarrera("porsche", "982", "red bull");
auto2.prender();
auto2.acelerar();
console.log(auto2.getVelocidadActual());
auto2.setSponsor("michelin");
console.log(auto2.getSponsor());
var camioneta = new camioneta_1.Camioneta("toyota", "hilux", "doble");
console.log(camioneta.getTipoCabina());
camioneta.prender();
camioneta.acelerar();
console.log(camioneta.getVelocidadActual());
