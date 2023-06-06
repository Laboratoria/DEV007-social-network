// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSOGg0XwGEFGCZEwnyaMopX8zyrHPlk_A",
  authDomain: "cocinemos-juntos.firebaseapp.com",
  projectId: "cocinemos-juntos",
  storageBucket: "cocinemos-juntos.appspot.com",
  messagingSenderId: "853852150690",
  appId: "1:853852150690:web:bb9be5b357b688ee9830fb",
  measurementId: "G-PRMN0GBXC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);