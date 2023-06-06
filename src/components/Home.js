import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');

  const viewHome =  `
  <div><img src="./img/Vegetales.jpg" class="imgvegetales" alt="imgVegetales - Cocinemos Juntos "></div>
  <img class="logo" src="./img/Logo.png">
  <section class="Home">
    <p>¡Encuentra, comparte y crea deliciosas recetas mientras haces amigos y disfrutas de una experiencia culinaria única!
    </p>
  </section>
  `;
  HomeDiv.innerHTML = viewHome;
  //return HomeDiv;


  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Inicia sesión';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  HomeDiv.appendChild(buttonRegister);
  HomeDiv.appendChild(buttonLogin);

  return HomeDiv;
};