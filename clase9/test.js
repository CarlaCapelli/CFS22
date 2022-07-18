"use strict";
exports.__esModule = true;
var agencia_1 = require("./agencia");
var autoCiudad_1 = require("./autoCiudad");
var agencia = new agencia_1.Agencia;
var autociudad1 = new autoCiudad_1.AutoCiudad("Renault", "stepway", 210);
console.log(autociudad1.getVelocidadActual());
/*agencia.agregarAuto(autociudad1);
let autoCarreras1 = new AutoCarreras("asdasd", "asdasd", 370);
agencia.agregarAuto(autoCarreras1);
agencia.autosDeCarrera();
agencia.autosDeCiudad();*/ 
