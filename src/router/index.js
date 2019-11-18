import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import HelloWorld from "../components/HelloWorld";
import Beispiel from "../views/Beispiel";
import RegistrationProfessor from "../views/RegistrationProfessor";


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: HelloWorld
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
        }

    ]
})
