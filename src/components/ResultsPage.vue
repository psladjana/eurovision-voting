<template>
 
  </template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ResultsPage',
  data: () => ({
    items: [],
    fields: []
  }),
  computed: {
    ...mapGetters(['votes']),
    setItems () {
      this.votes.forEach(vote => {
        this.items.push(...vote.scores)
      })
      console.log('set items', this.items)
      return this.items
    },
    setFields () {
      this.fields = new Set(this.items.fiter(score => 
        score.selected
      ))
      console.log('set fields', this.fields)
      return this.fields
    }
  }
}
</script>

