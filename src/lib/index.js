// En este archivo están todas las funciones principales del proyecto
import {
  setDoc,
  addDoc,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  orderBy,
  getDoc,
} from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
  auth,
  db,
  db2,
  provider,
} from '../firebase';

// createUser

const saveUser = (displayName, email, password, uid) => {
  setDoc(doc(db2, 'users', uid), {
    displayName,
    email,
    password,
    uid,
  });
};

// Registra y crea el usuario con email y contraseña
// eslint-disable-next-line
export const crearUsuarioConCorreoYContraseña =  (email, password , displayName) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((usercredentials) => {
      const user = usercredentials.user;
      saveUser(displayName, email, password, user.uid);
      return user;
    });
};

export const iniciarSesionConUsuarioYContraseña = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};
// Iniciar sesión con Google
// eslint-disable-next-line
export const logInGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      return { user, token };
    });
};
// export const iniciarSesionConGoogle = async () => {
//  await signInWithPopup(auth, provider);
// };
export const likes = [];

export const crearPost = (post, ownerPost) => {
  addDoc(collection(db, 'posts'), {
    likes,
    post,
    id: auth.currentUser.uid,
    ownerPost,
    photo: auth.currentUser.photoURL,
  });
};
// Da instrucciones para mostrar los post
export const queryInstruction = () => query((collection(db, 'posts')), orderBy('createDate', 'desc'));

export const deletePost = async (id) => {
  await deleteDoc(doc(db, 'posts', id));
};
export const getPost = (id) => getDoc(doc(db, 'posts', id));

// Actualiza la información de los post
export const updatePost = (id, editedPost) => updateDoc(doc(db, 'posts', id), editedPost);

export const toLike = (id, uid) => {
  updateDoc(doc(db, 'posts', id), {
    likes: arrayUnion(uid),
  });
};

export const toDislike = (id, uid) => {
  updateDoc(doc(db, 'posts', id), {
    likes: arrayRemove(uid),
  });
};
export const guardarTodosLosPost = () => {
  const post = [];
  onSnapshot(queryInstruction(), (array) => {
    array.forEach((allPosts) => {
      post.push(allPosts.data());
    });
  });
  return post;
};

// export const toEdit = () =>
