import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Javascript from '../views/Javascript.vue'
import JavascriptDetail from '../views/JavascriptDetail.vue'
import ReactDetail from '../views/ReactDetail.vue'
import AngularDetail from '../views/AngularDetail.vue'
import VueDetail from '../views/VueDetail.vue'
import MoreDetail from '../views/MoreDetail.vue'
import React from '../views/React.vue'
import Angular from '../views/Angular.vue'
import VueJs from '../views/VueJs.vue'
import More from '../views/More.vue'
import NewTip from '../views/NewTip.vue'
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
        path: '/new-tip',
        name: 'newTip',
        component: NewTip,
    },
    {
        path: '/javascript/detail/:id?',
        name: 'javascriptDetail',
        component: JavascriptDetail,
    },
    {
        path: '/javascript',
        name: 'javascript',
        component: Javascript
    },
    {
        path: '/react/detail/:id?',
        name: 'reactDetail',
        component: ReactDetail,
    },
    {
        path: '/react',
        name: 'react',
        component: React,
    },
    {
        path: '/angular/detail/:id?',
        name: 'angularDetail',
        component: AngularDetail,
    },
    {
        path: '/angular',
        name: 'angular',
        component: Angular,
    },
    {
        path: '/vuejs/detail/:id?',
        name: 'vueDetail',
        component: VueDetail,
    },
    {
        path: '/vuejs',
        name: 'vuejs',
        component: VueJs,
    },
    {
        path: '/more/detail/:id?',
        name: 'moreDetail',
        component: MoreDetail,
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