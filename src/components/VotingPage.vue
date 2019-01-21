<template>
  <b-card header="<b>Give a vote</b>">
  <b-list-group>
    <b-row class="text-left">
        <b-list-group-item v-for="score in scores" v-bind:key="score.key">{{ score.label }} 
          <b-form-select :options="options" class="mb-3" @change="disableVoting()"/> 
        </b-list-group-item>
    </b-row>  
  </b-list-group>
  <b-button variant="primary">Save</b-button>
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'VotingPage',
  data: () => ({
    options: [],
    scores: {
        1: {
          label: 'Vote 1',
          key: '1'
        },
        2: {
          label: 'Vote 2',
          key: '2'
        },
        3: {
          label: 'Vote 3',
          key: '3'
        },
        4: {
          label: 'Vote 4',
          key: '4'
        },
        5: {
          label: 'Vote 5',
          key: '5'
        },
        6: {
          label: 'Vote 6',
          key: '6'
        },
        7: {
          label: 'Vote 7',
          key: '7'
        },
        8: {
          label: 'Vote 8',
          key: '8'
        },
        10: {
          label: 'Vote 10',
          key: '10'
        },
        12: {
          label: 'Vote 12',
          key: '12'
        }
      }
  }),
  mounted () {
    this.setOptions()
  },
  computed: {
   ...mapGetters(['countries'])
  },
  methods: {
    setOptions () {
      this.options = this.countries.map(country => {
        var option = {
          text: '',
          value: '',
          disabled: false
        }
        option.text = country.name
        option.value = country.id
        return option
      })
      return this.options
    },
    disableVoting () {
      console.log(event.target.value)
      this.options.map(option => {
        if(option.value === event.target.value) {
          option.disabled = true
        }
      })
      return this.options
    }
  },
  watch: {
    'countries' (countries) {
      this.setOptions()
    }
  }
}
</script>

<style lang="scss" scoped>
 .list-group-item {
   width: 20%;
 }
</style>
