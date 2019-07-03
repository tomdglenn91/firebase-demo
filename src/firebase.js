import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDyzWw17JLlZ1Zav4ExUDdul2sMVsA6eNk",
  authDomain: "just-here-for-the-pizza.firebaseapp.com",
  databaseURL: "https://just-here-for-the-pizza.firebaseio.com",
  projectId: "just-here-for-the-pizza",
  storageBucket: "",
  messagingSenderId: "220247052341",
  appId: "1:220247052341:web:6e7d44ad4e2a8eea"
};

let app = firebase.initializeApp(firebaseConfig)

export default app