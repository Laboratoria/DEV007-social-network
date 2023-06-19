// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  // getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDSOGg0XwGEFGCZEwnyaMopX8zyrHPlk_A',
  authDomain: 'cocinemos-juntos.firebaseapp.com',
  projectId: 'cocinemos-juntos',
  storageBucket: 'cocinemos-juntos.appspot.com',
  messagingSenderId: '853852150690',
  appId: '1:853852150690:web:bb9be5b357b688ee9830fb',
  measurementId: 'G-PRMN0GBXC5',
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// funcion para autenticarse
export const auth = getAuth(app);
// export const db = gestFirestore(app);

// funcion registrarse secion con mail y password
export function crearUsuarioConCorreoYContraseña(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// funcion iniciar secion con mail y password
export function iniciarsesion(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// funcion para autenticarse con google
export function iniciarConGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

// Funcion para conectar FireStore
export const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export function crearPost(texto) {
  const docRef = addDoc(collection(db, 'post'), {
    post: texto,
  });
  console.log('Document written with ID: ', docRef.id);
}
// const querySnapshot = await getDocs(collection(db, "post"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });
