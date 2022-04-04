import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBfmGLz6jZw_js0AgWXvqs0nsNhZogmzps",
  authDomain: "react-fire-chat-fe80f.firebaseapp.com",
  projectId: "react-fire-chat-fe80f",
  storageBucket: "react-fire-chat-fe80f.appspot.com",
  messagingSenderId: "689934961696",
  appId: "1:689934961696:web:90acc5bf0f8f55a1e98045"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const projectStorage = firebase.storage()
const timestamp = firebase.firestore.Timestamp

export { projectAuth, projectFirestore, projectStorage, timestamp }