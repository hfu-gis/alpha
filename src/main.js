import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Chat from './components/Chat.vue'
import Kontaktformular from './components/Kontaktformular.vue'
import Registrierung from './components/Registrierung.vue'
import Module from './components/Module.vue'
import Settings from './components/Settings.vue'

import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/chat',
    component: Chat
  },
  {
    path: '/kontaktformular',
    component: Kontaktformular
  },
  {
    path: '/registrierung',
    component: Registrierung
  },
  {
    path: '/module',
    component: Module
  },
  {
    path: '/settings',
    component: Settings
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
