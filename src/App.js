import React, { useState } from 'react';
import './App.css';

import firebase from 'firebase'
import app from './firebase'

import Database from './Database'
import Function from './Function'

function App() {
  let [user, setUser] = useState(null)

  app.auth().onAuthStateChanged(user => {
    setUser(user)
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          { user ? `Hello ${user.displayName}` : 'Not signed in :('}
        </p>
        <button onClick={() => app.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())}>
          Sign in!
        </button>

        <button onClick={() => app.auth().signOut()}>
          Sign out!
        </button>

        <div style={{marginTop: '24px'}}>
          <Database />
        </div>

        <div style={{marginTop: '24px'}}>
          <Function />
        </div>
      </header>
    </div>
  );
}

export default App;
