// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  // currentUser,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  updateDoc,
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

// funcion iniciar sesion con mail y password
export function iniciarsesion(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// funcion para autenticarse con google
export function iniciarConGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// atrapar el usuario
export function obtenerCorreoUsuario() {
  const user = auth.currentUser;
  if (user) {
    return user.email;
  }
  return null;
}

// Crear Post
export function crearPost(titulo, texto) {
  const email = obtenerCorreoUsuario();
  if (email) {
    const docRef = addDoc(collection(db, 'post'), {
      title: titulo,
      post: texto,
      user: email,
      like: [],
    });
    console.log('Document written with ID: ', docRef.id);
  } else {
    console.log('No se puede obtener el correo electrónico del usuario.');
  }
}

// Mostrar Post
export const ShowPost = async () => {
  const querySnapshot = await getDocs(collection(db, 'post'));
  const posts = [];
  // eslint-disable-next-line no-shadow
  querySnapshot.forEach((doc) => {
    posts.push({
      id: doc.id,
      data: doc.data(),
    });
  });
  return posts;
};

// Borrar Post
export const borrarDoc = (id) => deleteDoc(doc(db, 'post', id));

// Editar Post
export const editarPost = (id) => getDoc(doc(db, 'post', id));

// Actializar Post
export const actualizarPost = async (id, newFields) => {
  return updateDoc(doc(db, 'post', id), newFields);
  // eslint-disable-next-line no-unreachable
  console.log(id, newFields);
};

// OBTIENE LA COLECCION DE POSTS
export const editarPosts = () => getDocs(collection(db, 'post'));
