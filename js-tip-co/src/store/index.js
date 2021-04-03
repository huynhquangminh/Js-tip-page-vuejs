import Vue from 'vue'
import Vuex from 'vuex'
import home from './module/home'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    mutations: {},
    module: {
        home
    }
})
