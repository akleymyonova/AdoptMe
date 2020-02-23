import Vue from 'vue'
import App from './App.vue'
import router from '@/router';
import vuetify from '@/plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import store from '@/stores/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  store,
  router
}).$mount('#app')
