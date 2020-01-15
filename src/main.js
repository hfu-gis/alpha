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
  
  apiKey: "AIzaSyAJscyRJaDOb2rsDtJQCOZlxPxvhRI9TLE",
    authDomain: "vuecalender.firebaseapp.com",
    databaseURL: "https://vuecalender.firebaseio.com",
    projectId: "vuecalender",
    storageBucket: "vuecalender.appspot.com",
    messagingSenderId: "62435563141",
    appId: "1:62435563141:web:4d1fcf5e8263a535437bec"

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
