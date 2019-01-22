<template>
  <b-form-select :options="options" v-model="selected" class="mb-3" @change="disableVoting()"/> 
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'VoteItem',
  props: [ 'options', 'score' ],
  data: () => ({
    selected: ''
  }),
  methods: {
    disableVoting () {
      this.options.map(option => {
        if(option.value === event.target.value) {
          option.disabled = true     
          let payload = {
            score: this.score, 
            selected: option.text
          }
          this.$emit('sendScore', payload)
        }
      })
      return this.options
    }
  }
}
</script>

<style lang="scss" scoped>
 .list-group-item {
   width: 20%;
   border: none;
 }
</style>
