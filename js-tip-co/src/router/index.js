import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'root',
        redirect: 'home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/javascrip',
        redirect: 'home'
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router