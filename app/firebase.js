// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEgR613_frbaVWQiWk4hS26KwkDMGyUF8",
  authDomain: "expense-tracker-8a7da.firebaseapp.com",
  projectId: "expense-tracker-8a7da",
  storageBucket: "expense-tracker-8a7da.appspot.com",
  messagingSenderId: "546014679718",
  appId: "1:546014679718:web:d886883a7e6463ff01da67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
