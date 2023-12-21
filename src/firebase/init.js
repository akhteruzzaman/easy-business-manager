import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCNPisg0dgue4csyTLxQqlNVvcvV7u28lc",
  authDomain: "easy-business-manager.firebaseapp.com",
  databaseURL: "https://easy-business-manager.firebaseio.com",
  projectId: "easy-business-manager",
  storageBucket: "easy-business-manager.appspot.com",
  messagingSenderId: "231348835389",
  appId: "1:231348835389:web:b788428a6cc138cb524654",
  measurementId: "G-C9FYV0455E"
};

 const firebaseApp = firebase.initializeApp(config);
 firebaseApp.firestore().settings({ timestampsInSnapshots:true})

 export default firebaseApp.firestore()
