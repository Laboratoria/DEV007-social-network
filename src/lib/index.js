import { initializeApp } from 'firebase/app'; //
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAF2gJx3-nMb9WaoJd82xBfmmtU0neZ2UA',
  authDomain: 'nanaisocialnetwork.firebaseapp.com',
  databaseURL: 'https://nanaisocialnetwork-default-rtdb.firebaseio.com',
  projectId: 'nanaisocialnetwork',
  storageBucket: 'nanaisocialnetwork.appspot.com',
  messagingSenderId: '117090233074',
  appId: '1:117090233074:web:1e82a71a00e02fdce8be6b',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export function crearUsuarioConCorreoYContraseña(email, contraseña) {
  return createUserWithEmailAndPassword(auth, email, contraseña);
}
export function iniciaSesionConCorreoYContraseña(email, contraseña) {
  return signInWithEmailAndPassword(auth, email, contraseña);
}

export function iniciaSesionConPopup() {
  return signInWithPopup(auth, provider);
}

export const createPost = async (post) => await addDoc(collection(db, 'posts'), {
  publication: post,
});

export const getPosts = async () => await getDocs(collection(db, 'posts'));

// const querySnapshot = await getDocs(collection(db, "post"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

// export function rederPost() {
//   getDocs(collection(db, 'posts')).then((querySnapshot) => {
//     if (querySnapshot.empty) {
//       console.log('No hay documentos');
//       return;
//     }
//     console.log(`Número de documentos: ${querySnapshot.size}`);
//     querySnapshot.forEach((doc) => {
//       const postId = doc.id;
//       const post = doc.data().publication;
//       console.log(`ID: ${postId}, Publicación: ${post}`);
//     });
//   });
// }

// try {
//   const docRef = await addDoc(collection(db, "posts"), {
//     publication: post,
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

console.log(app);
