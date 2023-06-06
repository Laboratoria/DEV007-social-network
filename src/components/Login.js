import { onNavigate } from '../main.js';

export const Login = () => {
  const HomeDiv = document.createElement('div');

  const viewLogin =  `
  <div><img src="./img/tarta.jpg" class="imgTarta" alt="imgTarta - Cocinemos Juntos "></div>
  <img class="logo" src="./img/Logo.png">
  <section class="Login">
    <h2>Inicia sesión</h2>
    <input type="email" id="email" placeholder="Ingresa tu correo" />
    <input type="password" id="password" placeholder="Contraseña" />
  </section>
  `;
  HomeDiv.innerHTML = viewLogin;
  //return HomeDiv;


  HomeDiv.textContent = 'Bienvenida al Login';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Regresar al Home';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(buttonHome);

  
  return HomeDiv;
};