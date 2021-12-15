// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvdCOfD6KEqcC1JPIruJ1Qq0ouBj4antQ",
  authDomain: "tinderclone-cd325.firebaseapp.com",
  projectId: "tinderclone-cd325",
  storageBucket: "tinderclone-cd325.appspot.com",
  messagingSenderId: "17876603473",
  appId: "1:17876603473:web:85e84a3dec9b32b837de70",
  measurementId: "G-Z58SKPX2R8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
export {auth,db};