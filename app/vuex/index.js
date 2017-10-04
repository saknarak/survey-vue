import Vue from 'vue'
import Vuex from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)
Vue.config.debug = debug

module.exports = new Vuex.Store({
  strict: debug,
  modules: {
    main: require('../main/vuex'),
  },
})
