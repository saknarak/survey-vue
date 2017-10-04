import Vue from 'vue'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'

import router from './main/router'
import store from './vuex'
import App from './main/app.vue'

Vue.use(VueResource)

sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
