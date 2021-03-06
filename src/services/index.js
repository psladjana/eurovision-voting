import firebase from 'firebase'

export default {
  getCountriesAPI,
  getVotesAPI,
  addVoteAPI
}

function getCountriesAPI (addCallback, updateCallback, deleteCallback) {
  firebase.firestore()
    .collection('countries')
    .onSnapshot((country) => {
      country.docChanges().forEach(function (change) {
        let country = change.doc.data()
        country.id = change.doc.id
        if (change.type === 'added') {
          addCallback(country)
        }
        if (change.type === 'modified') {
            updateCallback(country)
        }
        if (change.type === 'removed') {
            deleteCallback(country)
        }
      })
      return country
    })
}

function getVotesAPI (addCallback, updateCallback, deleteCallback) {
  firebase.firestore()
    .collection('votes')
    .onSnapshot((vote) => {
      vote.docChanges().forEach(function (change) {
        let vote = change.doc.data()
        vote.id = change.doc.id
        if (change.type === 'added') {
          addCallback(vote)
        }
        if (change.type === 'modified') {
            updateCallback(vote)
        }
        if (change.type === 'removed') {
            deleteCallback(vote)
        }
      })
      return vote
    })
}

function addVoteAPI ({vote}) {
  console.log('api', vote)
  return firebase.firestore().collection('votes').add(vote)
}