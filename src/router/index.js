import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Beispiel from "../views/Beispiel";
import RegistrationProfessor from "../views/RegistrationProfessor";
import testPage from "../views/testPage"

import App from "../App";



Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'App',
            component: App
        },
        {
            path: '/login',
            
            component: Login
        },
        {
            path: '/Beispiel',
            name: 'Beispiel',
            component: Beispiel
        },
        {
            path: '/RegistrationProfessor',
            component: RegistrationProfessor
        },

        {
            path: '/views/testPage',
            name: 'testPage',
            component: testPage
        }
       



    ]
})
