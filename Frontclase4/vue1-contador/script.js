new Vue({
  el: "#contador",
  data: {
    numero: 0,
    mensaje: "",
  },
  methods: {
    Sumar() {
      this.numero += 1;
      if (this.checkNumber(this.numero)) {
        this.mensaje = "";
      }
    },
    Restar() {
      if (this.checkNumber(this.numero)) {
        this.numero -= 1;
        this.mensaje = "";
      } else {
        this.mensaje = "Numero menor a cero";
      }
    },
    checkNumber(numero) {
      return numero > 0;
    },
  },
});
