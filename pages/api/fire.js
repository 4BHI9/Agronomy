import firebase from 'firebase';
import React from 'react';
var firebaseConfig = {

  apiKey: "AIzaSyDFZlJCpswaw249WnanQvzUQav2zoIox5g",

  authDomain: "auth-agronomy.firebaseapp.com",

  projectId: "auth-agronomy",

  storageBucket: "auth-agronomy.appspot.com",

  messagingSenderId: "782674256210",

  appId: "1:782674256210:web:9f98d8a73ac51622291a8b",
  
  measurementId: "G-RFKKNXG4N4"

};




  
   const fire = 
   !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app() 
  





 export default fire ;
  
  