import Vue from 'vue'
import Vuex from 'vuex'
import helloworld from './modules/helloworld'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    helloworld,
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})