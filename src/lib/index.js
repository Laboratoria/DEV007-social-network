// aqui exportaras las funciones que necesites
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../firebase";                              /*"db" nuevo */
import { collection, addDoc, getDocs, onSnapshot, deleteDoc, doc } from "@firebase/firestore";   /*"getDocs" nuevo */

/*------------- para el registro--------------- */
export const crearUsuarioConCorreoYContraseña = (email, contraseña) => {
  return createUserWithEmailAndPassword(auth, email, contraseña);
};

/*------------- para el login(iniciar sesion)--------------- */
export const iniciarSesionConCorreoYContraseña = (email, contraseña) => {
  return signInWithEmailAndPassword(auth, email, contraseña);
};

/*------------- para iniciar sesion con google--------------- */
export const initSessionsWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

/*------------- para agregar un post y guardarlo en firestore--------------- */
export const agregarUnNuevoPost = (contenido, db, auth) => {
  return addDoc(collection(db,'post'), {
    contenido,
    usuario: auth.currentUser.email,
    datetime: new Date()
  });
};

/*----------  PARA ENLISTAR Y MOSTRAR LOS POST----------*/
export const getTask = () => getDocs(collection(db, 'post'));
export const onGetTask = (callback) => onSnapshot(collection(db, 'post'), callback)
//export const deletePost = (id) => deleteDoc(doc(db, 'task', id));

/*----------  FUNCIONES PARA BORRAR POST----------*/
export const deletePost = (postId) => {const postRef = doc(db, 'post', postId);
   return deleteDoc(postRef);
};

