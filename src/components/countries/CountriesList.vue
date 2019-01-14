<template>
 <div>
  <b-list-group>
    <b-list-group-item v-for="country in countries" v-bind:key="country.id">{{country.name}}</b-list-group-item>
  </b-list-group>
 </div>
</template>

<script>
import { countries } from "../../mocks"
export default {
  name: 'CountriesList',
  components: { },
  data: () => ({
    countries: []
  }),
  mounted () {
    this.countries = countries
  }
}
</script>

<style lang="scss" scoped>

</style>
