<template>
 <b-card header="<b>Choose your country</b>">
  <b-list-group>
    <b-row class="text-left">
    <b-list-group-item v-for="country in countries" v-bind:key="country.id" @click="voteRoute(country.id)">
      <b-img  thumbnail fluid :src="country.flag" width="50" alt="Responsive image" />
      {{country.name}}
    </b-list-group-item>
    </b-row>
  </b-list-group>
 </b-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CountriesList',
  computed: {
   ...mapGetters(['countries'])
  },
  methods: {
    voteRoute (id) {
      this.$router.push({ name: 'vote', params: { id: id } })
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-group-item {
    width: 25%;
    cursor: pointer;
  }
</style>
