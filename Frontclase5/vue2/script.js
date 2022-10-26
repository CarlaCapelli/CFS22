new Vue({
  el: "#color",
  data: {
    nombreIngresado: "",
    colorIngresado: "",
  },
});

new Vue({
  el: "#Mostrar",
  data: {
    show: true,
  },
  methods: {
    cambiar() {
      this.show = !this.show;
    },
  },
});

new Vue({
  el: "#personas",
  data: {
    personas: [
      { nombre: "carla", edad: 28 },
      { nombre: "maria", edad: 22 },
      { nombre: "juan", edad: 26 },
    ],
  },
});

Vue.component("personitas-tarjeta", {
  data: function () {
    return {
      personas: [
        { nombre: "carla", edad: 22 },
        { nombre: "maria", edad: 22 },
        { nombre: "juan", edad: 22 },
      ],
    };
  },
  template: ` 
  
   <ul>
     <li v-for ="persona in personas">{{persona.nombre +" " + persona.edad}}</li>
  </ul>
 
   `,
});

new Vue({
  el: "#personitas",
});
