import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDAmGvye9SLix7xP1FNMQbpsDcy_2kaY-c",
    authDomain: "haruko-a9264.firebaseapp.com",
    databaseURL: "https://haruko-a9264.firebaseio.com",
    projectId: "haruko-a9264",
    storageBucket: "haruko-a9264.appspot.com",
    messagingSenderId: "711513292291",
    appId: "1:711513292291:web:71f9ff030d5c36dd96d836",
    measurementId: "G-H5YMWBJ9EQ"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)