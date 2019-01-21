<template>
  <b-container fluid>
    <Header />
    <b-container  class="text-center">
      <router-view />
    </b-container>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'
import Header from './components/shared/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  },
  created() {
    this.getCountries()
  },
  methods: {
    ...mapActions(['getCountries'])
  }
}
</script>
