import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
Vue.use(Vuetify)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
const vuetifyOptions = { }
new Vue({
  router,
  vuetify: new Vuetify(vuetifyOptions),
  render: h => h(App)
}).$mount('#app')
