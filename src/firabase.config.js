// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig =  {
  apiKey: "AIzaSyDQS840wUvEcjEjmqjT3RSgbLUPWJxsD6Y",
  authDomain: "ak47-96988.firebaseapp.com",
  projectId: "ak47-96988",
  storageBucket: "ak47-96988.appspot.com",
  messagingSenderId: "125126570686",
  appId: "1:125126570686:web:4f70142e5b815a57a3e4ef",
  measurementId: "G-BLF88QQ0ZQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()