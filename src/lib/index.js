// aqui exportaras las funciones que necesites
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { collection, addDoc } from "@firebase/firestore";

export const crearUsuarioConCorreoYContraseña = (email, contraseña) => {
  return createUserWithEmailAndPassword(auth, email, contraseña);
};

export const iniciarSesionConCorreoYContraseña = (email, contraseña) => {
  return signInWithEmailAndPassword(auth, email, contraseña);
};

export const initSessionsWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const agregarUnNuevoPost = (contenido, db, auth) => {
  return addDoc(collection(db,'post'), {
    contenido,
    usuario: auth.currentUser.email,
    datetime: new Date()
  });
};
