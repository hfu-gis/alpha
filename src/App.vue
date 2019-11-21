<template>
  <v-app id="app">
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
    >
     
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" :to="link.to" link @click.stop="drawer = !drawer">
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
</v-list>


    </v-navigation-drawer>

    <v-app-bar
            app
            clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Alpha App</v-toolbar-title>
    </v-app-bar>


    <v-content>
          <router-view></router-view>

          
    </v-content>
    


    <v-footer app>
      <span>&copy; 2019 Team Alpha</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },

    data: () => ({
      drawer: null,
    }),

    created () {
      this.$vuetify.theme.dark = true
    },
  

    data(){
      return{
        drawer: false,
        links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', to: "/" },
        { icon: 'mdi-account', text: 'Login', to: "/login" },
      ]
      }
    }
  }
</script>