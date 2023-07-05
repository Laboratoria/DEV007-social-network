// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyECE5IYVsXOdzLLSHCH5wnm-dcUGahC0",
  authDomain: "formula-fan-27939.firebaseapp.com",
  projectId: "formula-fan-27939",
  storageBucket: "formula-fan-27939.appspot.com",
  messagingSenderId: "1029391238952",
  appId: "1:1029391238952:web:dd1f6cece09a48e068721d",
  measurementId: "G-P5R8RMY53Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
