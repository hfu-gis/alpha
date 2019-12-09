<template>
  <v-app class="container-app">
    <v-content>
      <Navigation></Navigation>

      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation';

export default {
  name: 'App',
  components: {
    'Navigation': Navigation
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .container-app {
    background-color: rgb(43, 43, 43);
  }
</style>
