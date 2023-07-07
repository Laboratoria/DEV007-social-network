import { iniciarsesion } from '../Firebase.js';
import Waffles from '../img/Waffles.jpg';

export const Login = (onNavigate) => {
  if (localStorage.getItem('user')) {
    onNavigate('/posting');
  }
  const HomeDiv = document.createElement('div');
  HomeDiv.setAttribute('class', 'home-div');
  const viewLogin = `
  <div><img src="${Waffles}" class = "imgMain" alt = "imgen de Waffles - Cocinemos Juntos "></div>
  <section class = "container">
    <img class = "logo3" src = "./img/Logo3.png">
    <h2>Inicia sesión</h2>
    <label> Ingresa tu correo </label>
    <input type = "email" class = "email" id = "input-email" placeholder = "ejemplo@gmail.com" />
    <label> Ingresa tu contraseña </label>
    <input type = "password" class = "password" id = "input-password" placeholder = "xxxxxxx" />
    <p id="mensajeError"></p>
  </section>
  `;

  HomeDiv.innerHTML = viewLogin;

  const section2 = document.createElement('section');
  section2.classList.add('section2');

  // Boton iniciar sesion
  const buttonPosting = document.createElement('button');
  buttonPosting.classList.add('buttonsPrincipals');
  buttonPosting.textContent = 'Ingresar';
  // buttonPosting.addEventListener('click', () => onNavigate('/posting'));

  // Boton Regresar al Home
  const buttonHome = document.createElement('button');
  buttonHome.classList.add('buttonsPrincipals');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  // Declaración de constantes
  const inputEmail = HomeDiv.querySelector('#input-email');
  const inputPassword = HomeDiv.querySelector('#input-password');
  const messageContainer = HomeDiv.querySelector('#mensajeError');

  // Declaracion de dependencia
  HomeDiv.appendChild(section2);
  section2.appendChild(buttonPosting);
  section2.appendChild(buttonHome);

  // Escuha el evento del boton login
  buttonPosting.addEventListener('click', (e) => {
    e.preventDefault();
    iniciarsesion(inputEmail.value, inputPassword.value)
      .then((res) => {
        localStorage.setItem('user', res);
        onNavigate('/posting');
      })
      .catch((error) => {
        /* validaciones de firebase */
        messageContainer.setAttribute('class', 'error');
        const errorCode = error.code;
        if (errorCode === 'auth/invalid-email') {
          messageContainer.innerHTML = '❌ Correo inválido';
          // alert('usuario no registrado');
        } else if (errorCode === 'auth/wrong-password') {
          messageContainer.innerHTML = '❌ Contraseña incorrecta';
        } else if (errorCode === 'auth/user-not-found') {
          messageContainer.innerHTML = '❌ Usuario no registrado';
        }
      });
  });

  // Quitar el mensaje de error cuando el usuario escriba
  const clearErrorMessage = (e) => {
    if (e.target.tagName === 'INPUT') {
      messageContainer.innerHTML = '';
    }
  };
  const section = HomeDiv.querySelector('section');
  section.addEventListener('keyup', clearErrorMessage);

  return HomeDiv;
};
