export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Inicia sesion';

  buttonLogin.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(buttonLogin);

  return HomeDiv;
};
