<template>
  <v-app>
    <v-content>
      <router-link to="/">Home</router-link>
      <br>
      <router-link to="/chat">Chat</router-link>
      <br>
      <router-link to="/kontaktformular">Kontaktformular</router-link>
      <br>
      <router-link to="/registrierung">Registrierung</router-link>
      <br>
      <router-link to="/module">Module</router-link>
      <br>
      <router-link to="/settings">Einstellungen</router-link>


      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>
