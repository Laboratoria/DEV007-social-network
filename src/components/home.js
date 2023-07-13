import { registerWithGoogle } from '../lib';

//  export para tenerlo accesible, se crean los botones de acceso: registro e inicio sesión
//  onNavigate, se crea por parametro y argumento.
export const home = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const buttonGoogle = document.createElement('img');
  homeDiv.classList = 'div';
  buttonRegister.textContent = 'Regístrate';
  buttonRegister.classList = 'buttonsHome';
  buttonLogin.textContent = 'Inicia Sesión';
  buttonLogin.classList = 'buttonsHome';
  buttonGoogle.classList = 'logoG';
  buttonGoogle.src = '/images/btngo2.png';
  buttonGoogle.addEventListener('click', () => {
    registerWithGoogle()
      .then(() => {
        onNavigate('/recommendations');
      })
      .catch(() => {
        alert('Error al iniciar sesión, intente de nuevo');
      });
  });
  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonRegister);
  // homeDiv.appendChild(buttonGoogle);
  return homeDiv;
};
