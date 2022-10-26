let cards = document.getElementById("card-b");
function getCharacters() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((r) => {
      return r.json();
    })
    .then((r) => {
      console.log(r);
      show(r);
    });
}

function show(array) {
  array.results.forEach((element) => {
    createCards(element);
  });
}

function createCards(personaje) {
  let div = document.createElement("div");
  let d = document.createElement("div");
  d.classList.add("border", "rounded");
  div.classList.add(
    "row",
    "text-light",
    "text-center",
    "col-12",
    "col-md-6",
    "col-lg-3",
    "p-3",
    "mx-auto"
  );
  let img = document.createElement("img");
  img.classList.add("rounded-circle", "img-fluid");
  img.src = personaje.image;
  let id = document.createElement("p");
  let name = document.createElement("h2");
  name.classList.add("card-title");
  let status = document.createElement("p");
  let species = document.createElement("p");
  let type = document.createElement("p");
  //img.innerHTML = personaje.image;
  id.innerHTML = "id: " + personaje.id;
  name.innerHTML = personaje.name;
  status.innerHTML = "status: " + personaje.status;
  species.innerHTML = "species: " + personaje.species;
  type.innerHTML = "type: " + personaje.type;

  cards.appendChild(div);
  div.appendChild(d);
  d.appendChild(img);
  d.appendChild(name);
  d.appendChild(id);
  d.appendChild(status);
  d.appendChild(species);
  d.appendChild(type);
}
getCharacters();
