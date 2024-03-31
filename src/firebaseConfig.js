import firebase from 'firebase/app';
import {getAuth} from  'firebase/auth';
import {getFirestore} from  'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA_tTBEwRXoYCWOvpPhOFEVJXV74LnkOsc",
    authDomain: "user-details-907c5.firebaseapp.com",
    projectId: "user-details-907c5",
    storageBucket: "user-details-907c5.appspot.com",
    messagingSenderId: "22166251303",
    appId: "1:22166251303:web:bf659632896e98ece7eb02"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth();
  
  export const db = getFirestore(app); //to use cloudfirestore database
 