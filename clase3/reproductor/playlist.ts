import * as ReadlineSync from "readline-sync";

export class playlist {
  cancionActual: string = "";
  constructor() {
    this.cancionActual = "Stay";
  }
  cambiarCancion(music: string[]) {
    let i: number = 0;
    let cambiar = ReadlineSync.question("Escriba sig para siguiente cancion, ant para cancion anterior, cualquier otra para apagar ");
    while (cambiar === "sig" || cambiar === "ant") {
      if (cambiar === "sig") {
        if (i >= music.length -1)  {
          i = 0;
        }
        else {
          i++;
        }
        this.cancionActual = music[i];
        console.log(this.cancionActual);
      }
      else if (cambiar === "ant") {
        if (i <= 0) {
          i = music.length - 1;
        } else {
          i--;
        }
        this.cancionActual = music[i];
        console.log(this.cancionActual);
      }
      cambiar = ReadlineSync.question("Escriba sig para siguiente cancion, ant para cancion anterior, cualquier otra para apagar ");
    }
  }
  getCancionActual(): string {
    return this.cancionActual;
  }
}
