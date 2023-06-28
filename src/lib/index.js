import {
  EmailAuthCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase";


// en este esrchivo van las funciones de crear, modificar y borrar post, dar like, iniciar sesión con google, comentarios
//las promesas se consumen en los otros archivos js

export const createUser = (email, contraseña) => {
  //el console log es para ver si se cumple la promesa

  return createUserWithEmailAndPassword(auth, email, contraseña);
  console.log(createUserWithEmailAndPassword(auth, email, contraseña));
};

export const logIn = (email, contraseña) => {
  return signInWithEmailAndPassword(auth, email, contraseña);
};

export const recoverPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};
export const registerWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const createPost = (text) => {
  return addDoc(collection(db, "posts"), {
    content: text,
  });
};

  // usar callback
export const enlistarPost = (callback) =>
    onSnapshot(collection(db, "posts"), callback);


