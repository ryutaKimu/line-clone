import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import  "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBGo76bsafF2tR6KyXWLdMNHvyrs9vGUJo",
    authDomain: "line-clone-1a1a0.firebaseapp.com",
    projectId: "line-clone-1a1a0",
    storageBucket: "line-clone-1a1a0.appspot.com",
    messagingSenderId: "1093754956533",
    appId: "1:1093754956533:web:e14b29cf668dd814d9b3bc"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};