<template>
  <div class="body-1">
    <!-- HTML-Code aus dem Body-Tag hier einfügen -->

    <h1>Get an <span style="color: #191919;">ALPHA</span> Professor Account</h1>
    <form id="registration-form" action="" method="get">
        <div class="container-form">
            <div class="field field-1">
                <label for="firstname">Vorname</label>
                <input type="text" name="vorname" id="firstname" placeholder="Max">
            </div>

            <div class="field field-2">
                <label for="lastname">Nachname</label>
                <input type="text" name="nachname" id="lastname" placeholder="Mustermann">
            </div>

            <div class="field field-3">
                <label for="email">E-Mail</label>
                <input type="email" name="email" id="email" placeholder="max.mustermann@hs-furtwangen.de">
            </div>

            <div class="field field-4">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" placeholder="max123">
            </div>

            <div class="field field-5">
                <label for="password">Passwort</label>
                <input type="password" name="passwort" id="password" placeholder="passwort123">
            </div>

            <div class="field field-6">
                <label for="repeat-password">Passwort wiederholen</label>
                <input type="password" name="passwort" id="repeat-password" placeholder="passwort123">
            </div>

            <div class="field field-7">
                <input type="submit" name="" value="Account erstellen">
            </div>
        </div>
    </form>

  </div>
</template>

<script>
export default {
  // gebt jeder Page einen eigenen Namen
  name: 'template',

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
body {
    background: linear-gradient(to right, red, purple);
    margin: 0;
}

h1 {
    color: white;
    text-align: center;
    font-size: 47px;
    margin: 50px 0 -50px 0;
}

.container-form {
    border: 1px solid grey;
    width: 60%;
    height: 720px;
    margin: 13vh auto;
    background: #191919;
    color: white;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    align-content: center;

}

input, label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    font-family: "Roboto Light";
}

.field {
    margin: 30px 20px 45px 70px;
    padding: 2px;
}

.field label {
    font-size: 23px;
}

.field input {
    width: 70%;
    height: 35px;
    border: none;
    border-radius: 20px;
    text-align: center;
}

.field input:focus {
    border: 3px solid red;
}

.field-1 {
    flex-basis: 40%;
}

.field-2 {
    flex-basis: 40%;
}

.field-3 {
    flex-basis: 50%;
}

.field-4 {
    flex-basis: 54%;
}

.field-5 {
    flex-basis: 42%;
}

.field-6 {
    flex-basis: 40%;
}

.field-7 {
    flex-basis: 42%;
}

.field-7 input {
    border: 2px solid white;
    cursor: pointer;
    font-size: 22px;
}

.field-7 input:hover {
    border: 2px solid darkred;
}
</style>
