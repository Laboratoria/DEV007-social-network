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

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'Contraseña');

  const buttonRegistro = document.createElement('button');
  buttonRegistro.classList.add('registerButton2');
  buttonRegistro.textContent = 'Registrarse';

  buttonRegistro.addEventListener('click', () => onNavigate('/home'));

  const registerConCuenta = document.createElement('p');
  registerConCuenta.classList.add('registerConCuenta');
  registerConCuenta.innerHTML += `
  ¿ya tienes cuenta? <a href="/" class="linkConCuenta"> Inicia Sesión </a>
`;

  HomeDiv.appendChild(inputName);
  HomeDiv.appendChild(inputMail);
  HomeDiv.appendChild(inputPassword);
  HomeDiv.appendChild(buttonRegistro);
  HomeDiv.appendChild(registerConCuenta);

  return HomeDiv;
};
