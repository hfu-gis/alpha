import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Beispiel from "../views/Beispiel";
import RegistrationProfessor from "../views/RegistrationProfessor";
import testPage from "../views/testPage"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'testPage',
        component: testPage
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/beispiel',
        name: 'Beispiel',
        component: Beispiel
    },
    {
        path: '/RegistrationProfessor',
        component: RegistrationProfessor
    },

]


export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
