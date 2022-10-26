let alumnos = [
  {
    nombre: "Carla",
    apellido: "Capelli",
    documento: 38167402,
    curso: "2do",
    nota: 7,
  },
  {
    nombre: "Juan",
    apellido: "Perez",
    documento: 38121321,
    curso: "1ro",
    nota: 5,
  },
  {
    nombre: "Maria",
    apellido: "Lopez",
    documento: 123123213,
    curso: "3ro",
    nota: 6,
  },
  {
    nombre: "Micaela",
    apellido: "Gomez",
    documento: 7785875,
    curso: "3ro",
    nota: 9,
  },
];


let tabla=document.getElementById("tabla");
let tr;
window.addEventListener("load", ()=>{
  crearLista();
})

function crearLista(){
   alumnos.forEach(alumno => {
        tr=document.createElement("tr");
          crearTabla(alumno);
          tabla.appendChild(tr);
    });
}

function crearTabla(alumno){

    let nombre=document.createElement("td");
    nombre.innerHTML=alumno.nombre;
    let apellido=document.createElement("td");
    apellido.innerHTML=alumno.apellido;
    let documento=document.createElement("td");
    documento.innerHTML=alumno.documento;
    let curso=document.createElement("td");
    curso.innerHTML=alumno.curso;
    let nota=document.createElement("td");
    nota.innerHTML=alumno.nota;
   
tr.appendChild(nombre);
tr.appendChild(apellido);
tr.appendChild(documento);
tr.appendChild(curso);
tr.appendChild(nota);
}
