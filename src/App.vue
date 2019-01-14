<template>
  <b-container fluid>
    <Header />
    <b-container  class="text-center">
      <router-view />
    </b-container>
  </b-container>
</template>

<script>
import Header from './components/shared/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">

</style>

