import { logIn, recoverPassword, registerWithGoogle } from '../lib/index';

//  Se crea la ruta
export const login = (onNavigate) => {
  //  se crean los elementos de HTML para insertar
  const homeDiv = document.createElement('div');
  const buttonHome = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonLogIn = document.createElement('button');
  const buttonForgotPassword = document.createElement('button');
  const buttonLogInGoogle = document.createElement('img');
  const email = document.createElement('p');
  const password = document.createElement('p');
  const inputRevealPasswordText = document.createElement('p');
  //  se da características de HTML como valor, id,clase, tipo
  homeDiv.classList = 'div';
  email.textContent = 'EMAIL';
  email.classList = 'message';
  password.textContent = 'CONTRASEÑA';
  password.classList = 'message';
  inputEmail.id = 'email';
  inputEmail.classList = 'form';
  inputEmail.type = 'email';
  inputPassword.classList = 'form';
  inputPassword.type = 'password';
  inputPassword.id = 'password';
  buttonLogIn.textContent = 'Iniciar Sesión';
  buttonLogIn.classList = 'buttons';
  buttonForgotPassword.textContent = '¿Olvidaste tu contraseña?';
  buttonForgotPassword.classList = 'buttons';
  buttonHome.textContent = 'Regresar al inicio';
  buttonHome.classList = 'buttons';
  buttonLogInGoogle.classList = 'logoG';
  buttonLogInGoogle.src = 'images/btngo2.png';
  inputRevealPasswordText.textContent = 'Mostrar contraseña';
  inputRevealPasswordText.classList = 'buttons';
  //  se crea ruta para volver al inicio
  buttonHome.addEventListener('click', () => onNavigate('/'));
  const home = document.getElementById('home');
  home.addEventListener('click', () => onNavigate('/'));
  inputRevealPasswordText.addEventListener('click', () => {
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
      inputRevealPasswordText.textContent = 'Ocultar contraseña';
    } else {
      inputPassword.type = 'password';
      inputRevealPasswordText.textContent = 'Mostrar contraseña';
    }
  });
  buttonLogIn.addEventListener('click', () => {
    if (inputEmail.value.includes('@') === false) {
      return alert('Ingrese un correo válido');
    }
    if (inputPassword.value.length < 6) {
      return alert('La contraseña debe tener al menos 6 caracteres');
    }
    return logIn(inputEmail.value, inputPassword.value)
      .then(() => {
        alert('Bienvenido');
        onNavigate('/recommendations');
      })
      .catch(() => {
        alert('Error al iniciar sesión, intente de nuevo');
      });
  });
  //  olvido contraseña
  buttonForgotPassword.addEventListener('click', () => {
    const emailReset = prompt('Ingrese su correo');
    recoverPassword(emailReset).then(() => {
      alert('Se ha enviado una nueva contraseña a su correo');
    });
  });
  //  google
  buttonLogInGoogle.addEventListener('click', () => {
    registerWithGoogle()
      .then(() => {
        alert('Bienvenido');
        onNavigate('/recommendations');
      })
      .catch(() => {
        alert('Error al iniciar sesión, intente de nuevo');
      });
  });
  //  se insertan los elementos en el HTML padre(root)
  homeDiv.appendChild(email);
  homeDiv.appendChild(inputEmail);
  homeDiv.appendChild(password);
  homeDiv.appendChild(inputPassword);
  homeDiv.appendChild(inputRevealPasswordText);
  homeDiv.appendChild(buttonLogIn);
  homeDiv.appendChild(buttonForgotPassword);
  homeDiv.appendChild(buttonLogInGoogle);
  homeDiv.appendChild(buttonHome);
  return homeDiv;
};
