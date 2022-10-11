// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZDNYQJvQiM7mnkjE_AyKfmAvd1WSNuvQ",
  authDomain: "factora-acb94.firebaseapp.com",
  projectId: "factora-acb94",
  storageBucket: "factora-acb94.appspot.com",
  messagingSenderId: "908921417597",
  appId: "1:908921417597:web:950af987275b34e55ee614"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const database = getFirestore(app)
  export const auth = getAuth(app);

 export default auth

 