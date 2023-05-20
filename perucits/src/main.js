import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import vuetify from './plugins/vuetify'
import mdi from '@mdi/font/css/materialdesignicons.css'
import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  mdi,
  store,
  
  render: h => h(App)
}).$mount('#app')
