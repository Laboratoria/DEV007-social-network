export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenida al Login';
  HomeDiv.classList.add('loginContainer');

  const inputUsermail = document.createElement('input');
  inputUsermail.setAttribute('type', 'text');
  inputUsermail.setAttribute('placeholder', 'Correo electrónico');

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'text');
  inputPassword.setAttribute('placeholder', 'Contraseña');

  const loginButton = document.createElement('button');
  loginButton.classList.add('loginButton1');
  loginButton.textContent = 'Iniciar sesión';

  const forgetButton = document.createElement('button');
  forgetButton.classList.add('forgetBtn');
  forgetButton.textContent = '¿Olvidaste tu contraseña?';

  loginButton.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(inputUsermail);
  HomeDiv.appendChild(inputPassword);
  HomeDiv.appendChild(loginButton);
  HomeDiv.appendChild(forgetButton);

  return HomeDiv;
};
