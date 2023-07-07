import {
  iniciarConGoogle,
} from '../Firebase.js';

import Vegetales from '../img/Vegetales.jpg';
import Logo from '../img/Logo.png';
import iconGoogle3 from '../img/iconGoogle3.jpg';

export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const viewHome = `

  <img src="${Vegetales}" class = "imgMain" alt = "Imagen de Vegetales - Cocinemos Juntos "></img>
  <section class = "container">
    <img class = "logo" src="${Logo}">
    <h1>¿Cocinamos Juntos?</h1>
    <p>¡Encuentra, comparte y crea deliciosas recetas mientras haces amigos y disfrutas de una experiencia culinaria única!</p>
  </section>
  `;
  HomeDiv.innerHTML = viewHome;

  const section2 = document.createElement('section');
  section2.classList.add('section2');

  // Boton de Resgistrarse
  const buttonRegister = document.createElement('button');
  buttonRegister.classList.add('buttonsPrincipals');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.addEventListener('click', () => onNavigate('/register'));

  // Boton de Login con correo y contraseña
  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonsPrincipals');
  buttonLogin.textContent = 'Inicia sesión';
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  // Boton de Google y evento escucha
  const buttonGoogle = document.createElement('button');
  buttonGoogle.classList.add('googleSignIn');
  const imgGoogle = document.createElement('img');
  imgGoogle.classList.add('googleIcon');
  imgGoogle.src = iconGoogle3;
  buttonGoogle.textContent = 'Acceder con Google';
  buttonGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    iniciarConGoogle()
      .then((user) => {
        console.log(user);
        localStorage.setItem('user', user);
        onNavigate('/posting');
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  HomeDiv.appendChild(section2);
  section2.appendChild(buttonRegister);
  section2.appendChild(buttonLogin);
  section2.appendChild(buttonGoogle);
  buttonGoogle.appendChild(imgGoogle);

  return HomeDiv;
};
