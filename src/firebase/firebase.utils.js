import firebase from "firebase/app";

import "firebase/auth";

const config = {
    apiKey: "AIzaSyDWDdu212PG5q60k0LDNBIfRWAOTIRq5l8",
    authDomain: "womens-basketball.firebaseapp.com",
    databaseURL: "https://womens-basketball.firebaseio.com",
    projectId: "womens-basketball",
    storageBucket: "womens-basketball.appspot.com",
    messagingSenderId: "631771484318",
    appId: "1:631771484318:web:8d6e0caa110dbc9ce96b8f",
    measurementId: "G-BJK31R9ZLW"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();

export default firebase;