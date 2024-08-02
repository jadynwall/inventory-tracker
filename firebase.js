// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPT0iw0KfECYwM3DUdpoxYrP1TQGP0Rug",
  authDomain: "inventory-tracker-1aa4c.firebaseapp.com",
  projectId: "inventory-tracker-1aa4c",
  storageBucket: "inventory-tracker-1aa4c.appspot.com",
  messagingSenderId: "150149029157",
  appId: "1:150149029157:web:d5a8c35605ace61fd84ecc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}