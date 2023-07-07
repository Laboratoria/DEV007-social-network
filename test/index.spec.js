// importamos la funcion que vamos a testear

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
}
  from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from 'firebase/firestore';

import {
  borrarDoc,
  crearPost,
  crearUsuarioConCorreoYContraseña,
  db,
  editarPost,
  editarPosts,
  iniciarConGoogle,
  iniciarsesion,
  obtenerCorreoUsuario,
} from '../src/Firebase';

// import {
//   clearErrorMessage,
// } from '../src/components/Login.js';

describe('iniciarsesion', () => {
  it('Debería ser una función', () => {
    expect(typeof iniciarsesion).toBe('function');
  });
});
describe('crearUsuarioConCorreoYContraseña', () => {
  it('Es Una Funcion', () => {
    expect(typeof crearUsuarioConCorreoYContraseña).toBe('function');
  });
});

describe('obtenerCorreoUsuario', () => {
  it('debería ser una funcion', () => {
    expect(typeof obtenerCorreoUsuario).toBe('function');
    // it('obtener usuario', () => {
    // expect((auth, 'analiaklein@gmail.com')).toBe('analiaklein@gmail.com');
    // });
  });
});

describe('Funcion de iniciarConGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof iniciarConGoogle).toBe('function');
  });
});
it('Deberia llamar a la funcion signInWithPopup', async () => {
  await iniciarConGoogle();
  expect(signInWithPopup).toHaveBeenCalled();
});

describe('getDoc', () => {
  it('Debería llamarla', () => {
    expect(typeof editarPost).toBe('function');
  });
});

describe('getDocs', () => {
  it('Debería llamarla', async () => {
    await editarPosts();
    expect(getDocs).toHaveBeenCalled();
  });
});

// describe('deberia quitar el mensaje de error', () => {
//   it('deberia quitar', (e) => {
//     clearErrorMessage(e.target.tagName === 'INPUT');
//     expect(clearErrorMessage).toBe('');
//   });
// });

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

/* it('debería llamar a la función', async () => {
  getAuth('analiaklein@gmail.com');
  expect(auth, {
    currentUser: {
      email: 'analiaklein@gmail.com',
    },
  });
}); */

it('Debería llamar a la función signInWithEmailAndPassword cuando esta se ejecuta', async () => {
  await iniciarsesion('analiaklein@gmail.com', '123456');
  expect(signInWithEmailAndPassword).toHaveBeenCalled();
});

it('Debería llamar a la funcion.', async () => {
  signInWithEmailAndPassword.mockReturnValueOnce({ iniciarsesion: 'analiaklein@gmail.com' });
  const response = await iniciarsesion('analiaklein@gmail.com', '123456');
  // console.log(response);
  expect(response.iniciarsesion).toBe('analiaklein@gmail.com');
});

it('debería devolver un objeto con propiedad email.', async () => {
  signInWithEmailAndPassword.mockReturnValueOnce({ user: { email: 'analiaklein@gmail.com' } });
  const response = await iniciarsesion('analiaklein@gmail.com');
  expect(response.user.email).toBe('analiaklein@gmail.com');
});

it('Debería llamar a la función createUserWithEmailAndPassword cuando esta se ejecuta', async () => {
  createUserWithEmailAndPassword.mockReturnValueOnce({ email: 'analiaklein@gmail.com', contraseña: '123456' });
  const response = await crearUsuarioConCorreoYContraseña('analiaklein@gmail.com', '123456');
  expect(response).toEqual({ email: 'analiaklein@gmail.com', contraseña: '123456' });
});
/* it('Debería llamar a la función GoogleAuthProvider cuando esta se ejecuta', async () => {
 GoogleAuthProvider.mockReturnValueOnce();
  const response = await iniciarConGoogle();
  expect(response.iniciarConGoogle).toHaveBeenCalled();
}); */

it('Debería llamar a la función crearPost cuando esta se ejecuta', async () => {
  getAuth.mockReturnValueOnce('test');
  const response = await crearPost('titulo', 'texto');
  expect(response).toEqual({
    title: 'titulo',
    post: 'texto',
  });
});

/* it('debería llamar a la función', async () => {
  addDoc.mockReturnValueOnce(crearPost);
  // eslint-disable-next-line jest/valid-expect
  expect(auth, {
    currentUser: {
      email: 'analiaklein@gmail.com',
    },
  });
}); */

it('deberia llamar a la función deleteDoc cuando esta se ejecuta', async () => {
  deleteDoc.mockReturnValueOnce(doc(db, 'post'));
  const response = await borrarDoc(doc.id);
  expect(response).toBe(doc.id);
});
it('deberia llamar a la función getDoc cuando esta se ejecuta', async () => {
  getDoc.mockReturnValueOnce(doc(db, 'post'));
  const response = await editarPost(doc.id);
  expect(response).toBe(doc.id);
});
it('deberia llamar a la función getDocs cuando esta se ejecuta', async () => {
  getDoc.mockReturnValueOnce(collection(db, 'post'));
  const response = await editarPosts(collection.post);
  expect(response).toBe(collection.post);
});

it('Deberia devolver los datos del usuario', async () => {
  signInWithPopup.mockReturnValueOnce({ user: 'Analia Klein' });
  const provider = GoogleAuthProvider.mockReturnValueOnce({});
  console.log(provider);
  const response = await iniciarConGoogle();
  expect(response.user).toBe('Analia Klein');
});
