import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB5Wn3jau6R6DZTNP_unJOeBviffLPXtl4",
    authDomain: "haruko-37c48.firebaseapp.com",
    databaseURL: "https://haruko-37c48-default-rtdb.firebaseio.com",
    projectId: "haruko-37c48",
    storageBucket: "haruko-37c48.appspot.com",
    messagingSenderId: "682365635087",
    appId: "1:682365635087:web:3bd5070eebaba0dbb1f17a",
    measurementId: "G-FJC09KPQBH"
  };
var fire;
if (!firebase.apps.length) {
   fire= firebase.initializeApp(firebaseConfig);
}

export const firebaseApp = fire