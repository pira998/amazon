// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBiyYniB5peW1l51l6K6J3MYXXdRcS1fuQ",
  authDomain: "fir-34890.firebaseapp.com",
  databaseURL: "https://fir-34890.firebaseio.com",
  projectId: "fir-34890",
  storageBucket: "fir-34890.appspot.com",
  messagingSenderId: "756758091371",
  appId: "1:756758091371:web:8213fb693feb9d16bd832e",
  measurementId: "G-WFBR1FDLX0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
export {db,auth}