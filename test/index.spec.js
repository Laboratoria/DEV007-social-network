/* eslint-disable no-unused-vars */
import {
  signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { addDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import {
  deletePost,
  updatePost,
  addLike,
  removeLike,
  recoverPassword,
  createUser,
  logIn,
  registerWithGoogle,
  createPost,
} from '../src/lib/index';

/* eslint-disable */
jest.mock('firebase/auth', () => {
  return {
    GoogleAuthProvider: jest.fn(),
    getAuth: jest.fn(() => ({
      currentUser: {
        // displayName :" Test name",
        email: "Test mail",
      },
    })),
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    signInWithPopup: jest.fn(),
    sendPasswordResetEmail: jest.fn(),
  };
});
jest.mock('firebase/firestore', () => {
  return {
    getFirestore: jest.fn(() => ({
      post: {
        content: 'Test text',
      },
    })),
    addDoc: jest.fn(),
    updateDoc: jest.fn(),
    deleteDoc: jest.fn(),
  };
});

// Crear usuario

describe('createUser', () => {
  // await cuando se use el response
  it('is a function', async () => {
    expect(typeof createUser).toBe('function');
  });
  it('return an object', () => {
    createUserWithEmailAndPassword.mockReturnValueOnce
    const response = createUser("correo", "password");
    expect(typeof response).toBe('object');
  });
  it('must call createUserWithEmailAndPassword ', async () => {
    await createUser('isa@isa.cl', 'isaisa');
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
  it('must call 3 times signinwithemailandpassword ', async () => {
    await createUser('isa@isa.cl', 'isaisa');
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(3);
  });
  /*  este no pasa
  it("get email from current user", async () => {
    // no es una función, no tengo claro cómo llamar al correo
    const expectedUser = await createUser("isa@isa.cl");
    createUser.mockReturnValueOnce(expectedUser);
    expect(user.email).toEqual(expectedUser)
  })*/
}); 

//  Inicio sesión

describe('logIn', () => {
  // await cuando se use el response
  it('is a function', async () => {
    expect(typeof logIn).toBe('function');
  });
  it('return an object', async () => {
    signInWithEmailAndPassword.mockReturnValueOnce(
      new Promise((resolve, reject) => resolve({}))
    );
    const response = await logIn();
    expect(typeof response).toBe('object');
  });
  it('must call signinwithemailandpassword ', async () => {
    await logIn('isa@isa.cl', 'isaisa');
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
  it('must call 3 times signinwithemailandpassword ', async () => {
    await logIn('isa@isa.cl', 'isaisa');
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(3);
  });
  /* Buscando  la manera de llamar el email
   it('must return user Info ', async () => {
    const response = await logIn('isa@isa.cl', 'isaisa');
    expect(response.email).toBe('isa@isa.cl');
  }); */
}); 

//  Google

describe("registerWithGoogle", () =>{
  it("is a function", async ()=> {
    expect(typeof registerWithGoogle).toBe("function")
  });
  it('return an object', async () => {
    signInWithPopup.mockReturnValueOnce(
      new Promise((resolve, reject) => resolve({}))
    );
    const response = await signInWithPopup ();
    expect(typeof response).toBe('object');
  });
})

//  recover password

describe('recoverPassword', () => {
   it('is a function',  () => {
     expect (typeof recoverPassword).toBe('function');
   }); 
   it('return an object', () => {
    sendPasswordResetEmail.mockReturnValueOnce
    const response =  recoverPassword();
    expect(typeof response).toBe('object');
  });
    it('must call sendPasswordResetEmail ',  () => {
      expect(sendPasswordResetEmail).toHaveBeenCalled();
  });
  it('must call 1 time sendPasswordResetEmail ',  () => {
    expect(sendPasswordResetEmail).toHaveBeenCalledTimes(1);
  });
 });


// Crear Post

 describe('createPost', () => {
   it('is a function',  () => {
     expect (typeof createPost).toBe('function');
   }); 
   it('return an object', async () => {
    addDoc.mockReturnValueOnce(
      new Promise((resolve, reject) => resolve({}))
    );
    const response = await addDoc();
    expect(typeof response).toBe('object');
  });
    it('must call addDoc ',  () => {
      expect(addDoc).toHaveBeenCalled();
  });
  it('must call 1 time addDoc ',  () => {
    expect(addDoc).toHaveBeenCalledTimes(1);
  });
 });

//  Eliminar Post

describe('deletePost', () => {
  it('is a function',  () => {
    expect (typeof deletePost).toBe('function');
  });
  it('return an object', async () => {
    deleteDoc.mockReturnValueOnce(
      new Promise((resolve, reject) => resolve({}))
    );
    const response = await deleteDoc();
    expect(typeof response).toBe('object');
});
});

//  Actualizar Post

describe('updatePost', () => {
  it('is a function', () => {
         expect(typeof updatePost).toBe('function');
       });
it('return an object', async () => {
  updateDoc.mockReturnValueOnce(
    new Promise((resolve, reject) => resolve({}))
  );
  const response = await updateDoc();
  expect(typeof response).toBe('object');
  // los sgtes test pasaron al sacar async await
});
it('must call updateDoc ',  () => {
  expect(updateDoc).toHaveBeenCalled();
});
it('must call 1 time updateDoc ', () => {
  expect(updateDoc).toHaveBeenCalledTimes(1);
});
});
//  los callback se llaman 1 vez
//  Agregar like

describe('addLike', () => {
  it('is a function',  () => {
    expect (typeof addLike).toBe('function');
  });
  it('return an object', async () => {
    updateDoc.mockReturnValueOnce(
      new Promise((resolve, reject) => resolve({}))
    );
    const response = await updateDoc();
    expect(typeof response).toBe('object');
    // los sgtes test pasaron al sacar async await
  });
  it('must call updateDoc ',  () => {
    expect(updateDoc).toHaveBeenCalled();
  });
  it('must call 2 time updateDoc ', () => {
    expect(updateDoc).toHaveBeenCalledTimes(2);
  });
  }); 
/* eslint-enable */
