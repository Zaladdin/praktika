
new Vue({
  el: '#app',
  data: function data() {
    return {
      style: { background: '' }
    };
  },
  methods: {
    hexToRgb: function hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      const rgb = result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
      // this.style.background = hex;
      this.style.background = 'rgb(' + [rgb && rgb.r, rgb && rgb.b, rgb && rgb.g].join(', ') + ')';
    }
  }
});
