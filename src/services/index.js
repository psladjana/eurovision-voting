import firebase from 'firebase'

export default {
    getCountriesAPI
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

