/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-body-style */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { auth, db } from '../firebase';
// En este archivo se declaran las funciones// promesas
//  las promesas se consumen en los otros archivos js
export const createUser = async (email, contraseña) => {
  createUserWithEmailAndPassword(auth, email, contraseña);
};
export const logIn = async (email, contraseña) => {
  return signInWithEmailAndPassword(auth, email, contraseña);
};
export const recoverPassword = async (email) => {
  sendPasswordResetEmail(auth, email);
};
export const registerWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
// consultar si es necesario el await
export const createPost = async (text, mail) => {
  addDoc(collection(db, 'posts'), {
    content: text,
    email: mail,
    like: [],
  });
};
// usar callback
export const enlistarPost = (callback) =>
  onSnapshot(collection(db, 'posts'), callback);
//  Borra POST
export const deletePost = (id) => {
  deleteDoc(doc(db, 'posts', id));
};
//  Editar POST
export const updatePost = (id, post) => {
  const postRef = doc(db, 'posts', id);
  return updateDoc(postRef, {
    content: post,
  });
};
// likes
export const addLike = (id, mail) => {
  updateDoc(doc(db, 'posts', id), {
    like: arrayUnion(mail),
  });
};
export const removeLike = (id, mail) => {
  updateDoc(doc(db, 'posts', id), {
    like: arrayRemove(mail),
  });
};
