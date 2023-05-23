// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

// FUNCIÓN QUE CREA EL CONTENIDO DEL REGISTRO DE LA PÁGINA Y SU FUNCIONAMIENTO
export default function Register() {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenida al ht';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Regresar al Home';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
}
