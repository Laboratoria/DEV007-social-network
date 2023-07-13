import { auth } from '../firebase';
import {
  createPost,
  enlistarPost,
  deletePost,
  updatePost,
  removeLike,
  addLike,
} from '../lib';
//  creación de elementos
export const recommendations = (onNavigate) => {
  const recommendationsDiv = document.createElement('div');
  const recommendationsTitle = document.createElement('h1');
  const postContent = document.createElement('input');
  const buttonPost = document.createElement('button');
  const backToTheWall = document.createElement('button');
  const postsDiv = document.createElement('div');
  const textPost = document.createElement('p');
  const initialMessage = document.createElement('p');
  //  caracterización de elementos
  postsDiv.classList = 'container';
  textPost.classList = 'posts';
  recommendationsDiv.classList = 'div';
  recommendationsTitle.classList = 'title';
  recommendationsTitle.textContent = 'Recomendaciones';
  postContent.classList = 'postContent';
  postContent.placeholder = 'Escribe tu recomendación acá';
  buttonPost.classList = 'buttons';
  buttonPost.textContent = 'Subir una recomendación';
  backToTheWall.classList = 'buttons';
  backToTheWall.textContent = 'Cerrar sesión';
  backToTheWall.id = 'close';
  //  funcionalidad
  backToTheWall.addEventListener('click', () => onNavigate('/'));
  const home = document.getElementById('home');
  home.addEventListener('click', () => onNavigate('/'));
  buttonPost.addEventListener('click', () => {
    if (postContent.value.length < 1) {
      alert('Por favor ingresa algun texto para poder postear');
    } else {
      createPost(postContent.value, auth.currentUser.email)
        .then(() => {
          alert('Post creado');
          postContent.value = '';
        })
        .catch(() => {
          alert('error al subir el post, intente de nuevo');
        });
    }
  });
  //  inserción de posts
  enlistarPost((callback) => {
    console.log(callback);
    postsDiv.innerHTML = '';
    callback.forEach((element) => {
      //  hay que limpiar el post para que no se repita postsDiv.innerHTML = '';
      const post = document.createElement('div');
      const deleteButton = document.createElement('button');
      const updateButton = document.createElement('button');
      const likeLoge = document.createElement('img');
      const likeNumber = document.createElement('p');
      const userName = document.createElement('p');
      const userMail = document.createElement('div');
      deleteButton.textContent = 'Borrar Post';
      deleteButton.classList = 'postButtons';
      deleteButton.name = 'botonBorrar';
      updateButton.textContent = 'Editar Post';
      updateButton.classList = 'postButtons';
      likeLoge.classList = 'like';
      likeLoge.src = 'images/like.png';
      likeNumber.classList = 'like';
      // likeNumber.textContent = '0';
      post.classList = 'posts';
      userName.classList = 'userName';
      userMail.classList = 'datosUser';
      userName.appendChild(document.createTextNode(element.data().email));
      console.log(element);
      likeNumber.appendChild(
        document.createTextNode(element.data().like.length),
      );
      deleteButton.setAttribute('id', element.id);
      post.appendChild(userMail);
      userMail.appendChild(likeLoge);
      userMail.appendChild(likeNumber);
      userMail.appendChild(userName);
      post.appendChild(document.createTextNode(element.data().content));
      //  agregar un atributo
      post.appendChild(updateButton);
      post.appendChild(deleteButton);
      postsDiv.appendChild(post);
      deleteButton.addEventListener('click', () => {
        if (auth.currentUser.email !== element.data().email) {
          alert('Sólo puedes eliminar tus propios post');
          updateButton.disabled = true;
        } else {
          deletePost(element.id);
        }
      });
      updateButton.addEventListener('click', () => {
        if (auth.currentUser.email !== element.data().email) {
          alert('Sólo puedes editar tus propios post');
          updateButton.disabled = true;
        } else {
          const postReset = prompt('Edita tu recomendación: ');
          updatePost(element.id, postReset);
        }
      });
      likeLoge.addEventListener('click', () => {
        likeNumber.innerHTML = '';
        if (!element.data().like.includes(auth.currentUser.email)) {
          addLike(element.id, auth.currentUser.email);
          likeNumber.appendChild(
            document.createTextNode(element.data().like.length),
          );
        } else {
          removeLike(element.id, auth.currentUser.email);
          likeNumber.appendChild(
            document.createTextNode(element.data().like.length),
          );
        }
      });
    });
  });
  //  inserción al HTML
  recommendationsDiv.appendChild(recommendationsTitle);
  recommendationsDiv.appendChild(postContent);
  recommendationsDiv.appendChild(buttonPost);
  recommendationsDiv.appendChild(initialMessage);
  recommendationsDiv.appendChild(postsDiv);
  recommendationsDiv.appendChild(backToTheWall);
  return recommendationsDiv;
};
