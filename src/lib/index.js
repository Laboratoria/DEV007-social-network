import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
//import { addDoc, collection } from "firebase/firestore";
import { auth, db } from '../firebase';

export const crearUsuarioConCorreoYContraseña = (email, contraseña) => {
  return createUserWithEmailAndPassword(auth, email, contraseña);

};

export const registrarUsuarioConCorreoYContraseña = (nombre, email, contraseña) => {
  return signInWithEmailAndPassword(auth, nombre, email, contraseña);

};

/*export const agregarUnNuevoPost = (contenido, db, auth) => {
  return addDoc(collection(db,'posts'), {
    contenido: contenido,
    usuario: auth.currentUser.email,
    datetime: new Date()
  });
};*/

