import React, { useState, useEffect } from 'react'
import _ from 'lodash'

import app from './firebase'

export default function Database() {
  let [ducks, setDucks] = useState([])

  useEffect(() => {
    app.firestore()
      .collection('user')
      .onSnapshot((snap) => {
        setDucks(snap.docs.map(doc => doc.data()))
      })
  }, [])

  let names = [
    'Daffy', 'Huey', 'Dewey', 'Louie', 'Cheese and Quackers', 'Firequacker', 
    'Sir Quacks a Lot', 'Ducky Jr', 'Moby Duck', 'Quackie Chan', 'James Pond', 'Duck Norris'
  ]

  return (
    <div style={{display: 'flex'}}>
      { ducks.map(duck => 
        <div>
          {duck.name}, 
        </div>)
      }
      <button onClick={() => {
        app.firestore().collection('user').add({
          quack: true,
          name: _.sample(names)
        })
      }}>Add a duck</button>
    </div>
  )
}