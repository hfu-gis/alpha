<template>
  <div class="body-1">
    <!-- HTML-Code aus dem Body-Tag hier einfügen -->
    <body>
<div class="container">


    <div class="card benachrichtigungen">
         <div class="benachrichtigungen">
             <h1>Benachrichtigungen</h1>
             <span style='font-size:70px;'>&#128226;</span>
             <p>Benachrichtigung bei Änderungen</p>

             <input type="checkbox" id="c1" name="c1" />
             <label for="c1"><span></span> Handy</label>
             <br>
             <input type="checkbox" id="c2" name="c2" />
             <label for="c2"><span></span> Email</label>
         </div>
    </div>

    <div class="card kontakt">
        <div class="kontakt">
            <h1>Kontakt</h1>
            <span style='font-size:70px;'>&#128239;</span>
            <p>Du würdest gerne mit uns Kontakt aufnehmen?</p>
            <a href="contact.html" class="button">Natürlich</a>
        </div>
    </div>

    <div class="card profileinstellungen">
        <div class="profileinstellungen">
            <h1>Profil</h1>
            <span style='font-size:70px;'>&#9881;</span>
            <p>Du würdest gerne dein Profil bearbeiten?</p>
            <a href="account-changes.html" class="button">Profil bearbeiten</a>
             </div>
            </div>



</div>
<div>
    <a href="../login/login.html" class="button">Logout</a>
</div>
    </body>
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
</style>
