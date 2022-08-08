import { Audio } from "./audio";

import { Reproductor } from "./reproductor";
import { Reproductor2 } from "./reproductor2";

let cancion1 = new Audio(3, "Save your tears", 3.35, "Thw Weeknd");
let cancion2 = new Audio(4, "IDGAF", 3.37, "Dua Lipa");
let reproductor = new Reproductor();
reproductor.prender();

reproductor.agregarCancion(cancion1);
reproductor.agregarCancion(cancion2);

console.log(reproductor.getCancionActual());
reproductor.cancionAnterior();
console.log(reproductor.getCancionActual());

reproductor.cancionAnterior();
console.log(reproductor.getCancionActual());
reproductor.cancionAnterior();
console.log(reproductor.getCancionActual());
reproductor.cancionAnterior();
console.log(reproductor.getCancionActual());
console.log(reproductor.getCantidadPistas());

let repr2 = new Reproductor2();
repr2.prender();
repr2.abrirApp();
repr2.cancionAnterior();
console.log(repr2.getCancionActual());
console.log(repr2.getDuracion());

