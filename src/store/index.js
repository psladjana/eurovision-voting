import Vue from 'vue'
import Vuex from 'vuex'

import countriesModule from './countries'
import votesModule from './votes'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    countriesModule,
    votesModule
  }
})
