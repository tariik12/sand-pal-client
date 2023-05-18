// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5ka9z3hSyZJvzQCHWN-Y2cmZNw2svwx0",
  authDomain: "spk-project-client-side.firebaseapp.com",
  projectId: "spk-project-client-side",
  storageBucket: "spk-project-client-side.appspot.com",
  messagingSenderId: "475500736106",
  appId: "1:475500736106:web:15937b13eac8a9382d2413"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);