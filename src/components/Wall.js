import homeSrc from '../media/home-icon.svg';
import profileSrc from '../media/profile-icon.svg';
import communitiesSrc from '../media/communities-icon.svg';
import { createPost, getPosts } from '../lib';

export const Wall = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const buttonLogin = document.createElement('button');

  buttonLogin.textContent = 'Inicia sesión';

  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  HomeDiv.appendChild(buttonLogin);

  const wrapper = document.createElement('div');
  wrapper.className = 'wall-wrapper';

  const formPost = document.createElement('form');
  formPost.className = 'form-post';

  const welcomeMessage = document.createElement('h2');
  welcomeMessage.textContent = 'Hola, usuario';

  const questionForm = document.createElement('p');
  questionForm.textContent = '¿Cómo te sientes hoy?';

  const inputForm = document.createElement('textarea');
  inputForm.placeholder = 'Hoy me siento...';
  inputForm.className = 'input-post';
  inputForm.required = true;

  const postButton = document.createElement('button');
  postButton.className = 'post-button';
  postButton.innerHTML += 'Publicar';
  postButton.type = 'submit';
  postButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputForm.value !== '') {
      createPost(inputForm.value).then(() => {
        inputForm.value = '';
        onNavigate('/wall');
      });
    }
  });

  formPost.appendChild(welcomeMessage);
  formPost.appendChild(questionForm);
  formPost.appendChild(inputForm);
  formPost.appendChild(postButton);

  const postContainer = document.createElement('div');
  postContainer.setAttribute('id', 'post-container');

  // We create the navbar
  const navBar = document.createElement('nav');
  navBar.className = 'nav-bar';

  // We proceed then to create the icon containers for the icon images.
  const profileIconContainer = document.createElement('picture');
  profileIconContainer.className = 'icon-container';

  const profileIcon = document.createElement('img');
  profileIcon.className = 'icon';
  profileIcon.src = profileSrc;

  profileIconContainer.appendChild(profileIcon);

  const homeIconContainer = document.createElement('picture');
  homeIconContainer.className = 'icon-container';

  const homeIcon = document.createElement('img');
  homeIcon.className = 'icon';
  homeIcon.src = homeSrc;

  homeIconContainer.appendChild(homeIcon);

  const communitiesIconContainer = document.createElement('picture');
  communitiesIconContainer.className = 'icon-container';

  const communitiesIcon = document.createElement('img');
  communitiesIcon.className = 'icon';
  communitiesIcon.src = communitiesSrc;

  communitiesIconContainer.appendChild(communitiesIcon);

  navBar.appendChild(profileIconContainer);
  navBar.appendChild(homeIconContainer);
  navBar.appendChild(communitiesIconContainer);

  wrapper.appendChild(formPost);
  wrapper.appendChild(navBar);

  getPosts().then((posts) => {
    posts.forEach((post) => {
      const postDiv = document.createElement('div');
      postDiv.className = 'post-div';
      const postText = document.createElement('p');
      postText.textContent = post.data().publication;
      postDiv.appendChild(postText);
      postContainer.appendChild(postDiv);
      wrapper.appendChild(postContainer);
    });
  });
  return wrapper;
};
