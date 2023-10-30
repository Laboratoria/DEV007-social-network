import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { addDoc, collection, updateDoc } from 'firebase/firestore';
import { auth, db, provider } from './firebase';

/* eslint-disable */
//  estea archivo tiene funciones que se comunicacn con firebase
export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
};
export const logIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};
export const registerWithGoogle = () => { signInWithPopup(auth, provider);
};
export const recoverPassword = (email) => { sendPasswordResetEmail(auth, email); }
//  firestore 
export const createPost = (text) => addDoc(collection(db, 'posts'), {
    text,
});
export const updatePost = (text, email) => {addDoc(collection(db, 'posts'), {
    content: text,
    email: mail,
    like: [],
  });
};
export const deletePost = (id, post) => {   const postRef = doc(db, 'posts', id);
 updateDoc(postRef, {
  content: post,
});}
export const addLike = (id, email) => {  updateDoc(doc(db, 'posts', id), {
    like: arrayUnion(mail),
  });}


/* eslint-enable */
//  considerar que no se manipula el DOM y
// que no se necesita manipular home (no se prueba el onnavigete)
