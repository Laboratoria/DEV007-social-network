// /* eslint-disable max-len */
// // aqui exportaras las funciones que necesites
// import {
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   getAuth,
//   GoogleAuthProvider,
// } from "firebase/auth";
// // import { auth } from "../Firebase.js";

// export const crearUsuarioConCorreoYContraseña = (email, contraseña) =>
//   createUserWithEmailAndPassword(auth, email, contraseña);

// // con esto se loguea un usuario ya creado
// // export const iniciar = getAuth();
// // signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
// //   const user = userCredential.user;
// //});

// export const auth = getAuth();
// const provider = GoogleAuthProvider();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
