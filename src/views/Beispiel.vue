<template>
  <div class="body-1">
    <!-- HTML-Code aus dem Body-Tag hier einfügen -->
    <body>

    <div class="flip-box">
      <div class="flip-box-inner">
        <div class="flip-box-front">
          <h1>Skripte</h1>
        </div>
        <div class="flip-box-back">
          <h2>Dateien</h2>
        </div>
      </div>
    </div>

    <div class="flip-box">
      <div class="flip-box-inner">
        <div class="flip-box-front">
          <h1>Materalien</h1>
        </div>
        <div class="flip-box-back">
          <h2>Auflistung</h2>
        </div>
      </div>
    </div>

    <div class="flip-box">
      <div class="flip-box-inner">
        <div class="flip-box-front">
          <h1>Kontakt</h1>
        </div>
        <div class="flip-box-back">
          <h2>Email</h2>
        </div>
      </div>
    </div>

    </body>
  </div>
</template>

<script>
export default {
  // gebt jeder Page einen eigenen Namen
  name: 'Beispiel',

  // benötigte Komponenten
  components: {},

  // entspricht den HTML-Attributen
  props: {},

  // Variablen-Speicher
  data() {
    return {}
  },

  // reagieren auf prop-Veränderung
  watch: {},

  // interne Methoden
  methods: [],

  // Initialisierung
  created() {}
}
</script>

<style scoped>
  .flip-box {
    background-color: transparent;
    width: 400px;
    height: 600px;
    border: 1px solid #f1f1f1;
    perspective: 1000px;
    margin: 110px;
    float: left;
    border-radius: 20px;


  }


  .flip-box-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

  }


  .flip-box:hover .flip-box-inner {
    transform: rotateY(180deg);
  }


  .flip-box-front, .flip-box-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 20px;
  }


  .flip-box-front {
    background-image: url("ModulBild.jpg");
    color: white;
  }

  .flip-box-back {
    background-image: url("ModulBild.jpg");
    color: white;
    transform: rotateY(180deg);
  }
</style>
