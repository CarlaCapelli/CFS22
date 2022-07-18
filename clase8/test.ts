import { Futbolista } from "./futbolista";
import { Entrenador } from "./entrenador";
import { Masajista } from "./masajista";

let futbolista1 = new Futbolista("carla", "river", 28, 4, 220000, "delantero", "derecho", 9, 23);
futbolista1.concentrarse();
console.log(futbolista1.getPieHabil());
futbolista1.hablar();
let futbolista2 = new Futbolista("pedro", "river", 22, 4, 223000, "defensa", "zurdo", 3, 2);
let entrenador1 = new Entrenador("juan", "river", 44, 3, 122000);
entrenador1.agregarFutbolista(futbolista1);

entrenador1.entrenar();
entrenador1.elegirTitular("carla", "titular");
let masajista = new Masajista("maria", "river", 32, 15, 100000);
masajista.agregarCliente(futbolista2);
masajista.rehabilitar("pedro");