import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Chat from './components/Chat.vue'
import Kontaktformular from './components/Kontaktformular.vue'
import Registrierung from './components/Registrierung.vue'
import Module from './components/Module.vue'
import Settings from './components/Settings.vue'
import Calendar from './components/Calendar.vue'


import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'


Vue.use(VueRouter);
Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  
  apiKey: "AIzaSyC5U9YN5l-Wu-ZewJH_rn6S4QSAsZSsiCA",
    authDomain: "vue-calendar-c8742.firebaseapp.com",
    databaseURL: "https://vue-calendar-c8742.firebaseio.com",
    projectId: "vue-calendar-c8742",
    storageBucket: "vue-calendar-c8742.appspot.com",
    messagingSenderId: "101190391127",
    appId: "1:101190391127:web:2b64b866cc1245de579a12"

});

export const db = firebase.firestore();


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
  },
  {
    path:'/calendar',
    component: Calendar
  }

];

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL
});



new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
