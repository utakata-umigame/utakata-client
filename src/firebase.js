const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyAPnP5A_DpSszoIL1iiODK4WAPmQ0n2hNo",
  authDomain: "utakata-umigame.firebaseapp.com",
  databaseURL: "https://utakata-umigame.firebaseio.com",
  projectId: "utakata-umigame",
  storageBucket: "utakata-umigame.appspot.com",
  messagingSenderId: "485731078462"
});

const db = firebase.firestore();

export default db;
