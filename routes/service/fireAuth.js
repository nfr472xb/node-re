var firebase = require("firebase");
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAwNp2jvdiCh1QWP5goz3I4snfSL9fs1jg",
    authDomain: "final-7819d.firebaseapp.com",
    databaseURL: "https://final-7819d.firebaseio.com",
    projectId: "final-7819d",
    storageBucket: "final-7819d.appspot.com",
    messagingSenderId: "943899024494"
  };
  firebase.initializeApp(config);

module.exports = firebase.auth();