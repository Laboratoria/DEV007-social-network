import { crearUsuarioConCorreoYContraseña } from '../lib';

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Hola PetLover! Ingrese su información a continuación para registrarse';
  HomeDiv.classList.add('registerContainer');

  const inputName = document.createElement('input');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('placeholder', 'Nombre y Apellidos');

  const inputMail = document.createElement('input');
  inputMail.setAttribute('type', 'text');
  inputMail.setAttribute('placeholder', 'e-mail');
  inputMail.setAttribute('id', 'input-email');

  const inputContraseña = document.createElement('input');
  inputContraseña.setAttribute('type', 'password');
  inputContraseña.setAttribute('placeholder', 'Contraseña');
  inputContraseña.setAttribute('id', 'input-password');

  const buttonRegistro = document.createElement('button');
  buttonRegistro.classList.add('registerButton2');
  buttonRegistro.textContent = 'Registrarse';

  const registerConCuenta = document.createElement('p');
  registerConCuenta.classList.add('registerConCuenta');
  registerConCuenta.innerHTML += `
  ¿ya tienes cuenta? <a href="/" class="linkConCuenta"> Inicia Sesión </a>
`;

  buttonRegistro.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/home');
    crearUsuarioConCorreoYContraseña(inputMail.value, inputContraseña.value);
  });

  HomeDiv.appendChild(inputName);
  HomeDiv.appendChild(inputMail);
  HomeDiv.appendChild(inputContraseña);
  HomeDiv.appendChild(buttonRegistro);
  HomeDiv.appendChild(registerConCuenta);

  return HomeDiv;
};
