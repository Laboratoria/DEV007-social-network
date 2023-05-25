
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
//TODO: Add SDKs for Firebase products that you want to use   https://firebase.google.com/docs/web/setup#available-libraries   -->
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";  // autenticacion -->
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCCZY1nDDjkpqWJc7LPlwC9nbApIgwLFlY",
  authDomain: "social-network-51f1c.firebaseapp.com",
  projectId: "social-network-51f1c",
  storageBucket: "social-network-51f1c.appspot.com",
  messagingSenderId: "61634618248",
  appId: "1:61634618248:web:5cd97c87778390d0d9503d",
  measurementId: "G-C16EMLGNV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);