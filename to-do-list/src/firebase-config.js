import firebase from 'firebase/compat/app' // doing import firebase from 'firebase' or import * as firebase from firebase is not good practice.
import 'firebase/compat/auth'
import 'firebase/compat/firestore';
import "firebase/compat/storage";


let config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
}

firebase.initializeApp(config)
const db = firebase.firestore()
const storageFB = firebase.storage()

export {db, storageFB}