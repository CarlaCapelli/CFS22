import { TelefonoConRadio } from "./telefonoConRadio"
//import { Telefono } from "./telefono";
import { TelefonoConCamara } from "./telefonoConCamara"
let telCamara = new TelefonoConCamara(78);
telCamara.prender();
telCamara.mandarMensaje();
telCamara.prenderCamara();
telCamara.sacarFotos();

let telefonoCRadio = new TelefonoConRadio(41);
telefonoCRadio.prender();
telefonoCRadio.hacerLlamada();
telefonoCRadio.setFrecuencia(34);
console.log("la frecuencia de radio es " + telefonoCRadio.getFrecuencia());