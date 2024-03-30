import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA_tTBEwRXoYCWOvpPhOFEVJXV74LnkOsc",
  authDomain: "user-details-907c5.firebaseapp.com",
  projectId: "user-details-907c5",
  storageBucket: "user-details-907c5.appspot.com",
  messagingSenderId: "22166251303",
  appId: "1:22166251303:web:0ffa6275b94b487ee7eb02"
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = firebase.firestore()

export {auth,app, db};