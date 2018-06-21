
new Vue({
  el: "#app",
   data() {
    return {
      red: 255,
      green: 255,
      blue: 255
    };
  },
  computed: {
    appBackground() {
      return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }
  }

});

