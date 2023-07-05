export const home = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const buttonRegister = document.createElement('button');

  buttonRegister.textContent = 'Iniciar Sesion';

  buttonRegister.addEventListener('click', () => onNavigate('/login'));

  homeDiv.appendChild(buttonRegister);

  return homeDiv;
};