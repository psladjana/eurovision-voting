import * as types from './types'
import votesService from '../../services'

const state = {
  votes: []
}

const getters = {
  votes: store => store.votes
}

const actions = {
  getVotes ({commit}) {
    votesService.getVotesAPI(
      (vote) => { return commit(types.ADD_VOTE, vote) }
    )
  },
  addVote ({commit}, vote) {
    console.log('store', vote)
    votesService.addVoteAPI({vote}) 
      // (vote) => { return commit(types.ADD_VOTE, vote) }
    // )
  },
}

const mutations = {
  [types.ADD_VOTE] (state, vote) {
    console.log(vote)
    state.votes.unshift(vote)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
