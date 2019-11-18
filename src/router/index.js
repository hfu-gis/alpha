import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'

import Beispiel from "../views/Beispiel";
import RegistrationProfessor from "../views/RegistrationProfessor";

import App from "../App";
import Settings from "../views/Settings";



Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: App
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/Beispiel',
            component: Beispiel
        },
        {
            path: '/RegistrationProfessor',
            component: RegistrationProfessor
        },
        {
            path:'/Settings',
            component:Settings
        }




    ]
})
