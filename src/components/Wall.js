const rootDiv = document.getElementById('root');

export const Wall = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const buttonLogin = document.createElement('button');

  buttonLogin.textContent = 'Inicia sesión';

  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  HomeDiv.appendChild(buttonLogin);

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  const formPost = document.createElement('form');
  formPost.className = 'form-post';

  const welcomeMessage = document.createElement('h2');
  welcomeMessage.textContent = 'Hola, usuario';

  const questionForm = document.createElement('p');
  questionForm.textContent = '¿Cómo te sientes hoy?';

  const inputForm = document.createElement('input');
  inputForm.type = 'text';
  inputForm.placeholder = 'Hoy me siento...';
  inputForm.required = true;

  const postButton = document.createElement('button');
  postButton.innerHTML += 'Publicar';
  postButton.type = 'submit';

  formPost.appendChild(welcomeMessage);
  formPost.appendChild(questionForm);
  formPost.appendChild(inputForm);
  formPost.appendChild(postButton);

  wrapper.appendChild(formPost);

  return wrapper;
};
