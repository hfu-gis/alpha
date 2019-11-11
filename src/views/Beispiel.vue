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
/* CSS für diese Seite hier einfügen */
</style>
