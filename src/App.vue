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
    this.getVotes()
  },
  methods: {
    ...mapActions(['getCountries', 'getVotes'])
  }
}
</script>
<style lang="scss">
  header {
    margin-bottom: 40px;
  }
  .list-group-item {
    border: none;
  }
  .card-header {
    text-transform: uppercase;
  }
</style>