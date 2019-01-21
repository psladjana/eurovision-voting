import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import router from './router'
import store from './store'
import * as firebase from 'firebase'

Vue.use(Vuex)
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store,
  router,
  created () {
  	firebase.initializeApp({
	  	apiKey: "AIzaSyCFclWA4IZ--KXohGMjo7YnL3tc1y1adeM",
      authDomain: "eurovision-vote.firebaseapp.com",
      databaseURL: "https://eurovision-vote.firebaseio.com",
      projectId: "eurovision-vote",
      storageBucket: "eurovision-vote.appspot.com"
  	})
  }
})
