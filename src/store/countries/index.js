import * as types from './types'
import countriesService from '../../services'

const state = {
  countries: []
}

const getters = {
  countries: store => store.countries
}

const actions = {
  getCountries ({commit}) {
    countriesService.getCountriesAPI(
      (country) => { return commit(types.ADD_COUNTRY, country) }
    )
  },
}

const mutations = {
  [types.ADD_COUNTRY] (state, country) {
    state.countries.push(country)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
