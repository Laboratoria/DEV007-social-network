// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

// FUNCIÓN QUE CREA EL CONTENIDO DEL HOME DE LA PÁGINA Y SU FUNCIONAMIENTO
export default function Home() {
  const HomeDiv = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'eNTRA';
  buttonLogin.textContent = 'Inicia sesión';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  HomeDiv.appendChild(buttonRegister);
  HomeDiv.appendChild(buttonLogin);

  return HomeDiv;
}
