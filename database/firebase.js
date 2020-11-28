import firebase from "firebase";
import "firebase/firestore";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAtDRYhmUDPmxhQm_NV9aQ5LSp2h1LIixY",
    authDomain: "sm42-963f8.firebaseapp.com",
    databaseURL: "https://sm42-963f8.firebaseio.com",
    projectId: "sm42-963f8",
    storageBucket: "sm42-963f8.appspot.com",
    messagingSenderId: "343168020785",
    appId: "1:343168020785:web:0e3e45463afcadd01a4010"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
