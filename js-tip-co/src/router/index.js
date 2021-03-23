import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Javascript from '../views/Javascript.vue'
import React from '../views/React.vue'
import Angular from '../views/Angular.vue'
import VueJs from '../views/VueJs.vue'
import More from '../views/More.vue'
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
        path: '/javascript',
        name: 'javascript',
        component: Javascript,
    },
    {
        path: '/react',
        name: 'react',
        component: React,
    },
    {
        path: '/angular',
        name: 'angular',
        component: Angular,
    },
    {
        path: '/vuejs',
        name: 'vuejs',
        component: VueJs,
    },
    {
        path: '/more',
        name: 'more',
        component: More,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router