import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
import Sticky from 'vue-sticky-directive'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import store from './store/index'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import '@/directives/validations'
import 'jodit/build/jodit.min.css'
import JoditVue from 'jodit-vue'
import GoogleAuth from '@/config/google.js'
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
Vue.use(Sticky)
Vue.use(Vuetify)
Vue.use(VueAwesomeSwiper)
Vue.use(JoditVue)
const gauthOption = {
  clientId: '891652649377-t23qjb2562t03fm2l7886qk929nibg84.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)
Vue.config.productionTip = false
const vuetifyOptions = { }
new Vue({
  router,
  store,
  vuetify: new Vuetify(vuetifyOptions),
  render: h => h(App)
}).$mount('#app')
