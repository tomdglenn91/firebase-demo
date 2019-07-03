const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp()

exports.addUserForDuck = functions.firestore
  .document('ducks/{duckId}')
  .onCreate((snap, context) => {
    let doc = snap.data()
    console.log('Got a new duck', doc)

    return admin.firestore().collection('user').add({
      name: doc.name
    })
  })