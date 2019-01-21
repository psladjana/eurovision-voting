<template>
 <div>
  <b-list-group>
    <b-list-group-item v-for="country in countries" v-bind:key="country.id" @click="voteRoute(country.id)">
      <b-img  thumbnail fluid :src="country.flag" width="50" alt="Responsive image" />
      {{country.name}}
    </b-list-group-item>
  </b-list-group>
 </div>
</template>

<script>
// import { countries } from "../../mocks"
import { mapGetters } from 'vuex'
export default {
  name: 'CountriesList',
  data: () => ({
    // countries: []
  }),
  computed: {
   ...mapGetters(['countries'])
  },
  methods: {
    voteRoute (id) {
      console.log(id)
      this.$router.push({ name: 'vote', params: { id: id } })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
