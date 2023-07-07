import {
  // getDocs,
  collection,
  doc,
  getDoc,
  updateDoc as updateDocument,
  onSnapshot,
  query,
} from 'firebase/firestore';
import {
  crearPost,
  // ShowPost,
  borrarDoc,
  editarPost,
  actualizarPost,
  db,
  obtenerCorreoUsuario,
  auth,
} from '../Firebase.js';

import Cocinar from '../img/Cocinar.jpg';

export const Posting = (onNavigate) => {
  if (!localStorage.getItem('user')) {
    onNavigate('/login');
    return null;
  }
  const HomeDiv = document.createElement('div');

  const viewPosting = `

  <div>   
    <picture><img src="${Cocinar}" class = "imgMain" alt = "Imagen Cocinando - Cocinemos Juntos "></picture> 
  </div>
    <section class = "containerPosting" id = "container" >
      <img class = "logo3" src = "./img/Logo3.png">
      <p class = "inspiration" >¡Inspirarás a otros con tu receta!</p>
      <h4 class = "indication" >Nombre de la Receta:</h4>
      <textarea id = "textTitle" class = "textTitle"  placeholder = "Nombre de la Receta" >  </textarea>
      <h4>Descripción:</h4>
      <textarea id = "textPost" class = "textPost" placeholder = "Comparte tu obra maestra culinaria:ingredientes, pasos, tips." >  </textarea>
      <button type ="submit" class = "buttonsPrincipalsPost" id = "buttonPost"> Publicar </button>
      <p class = "disfruta">¡Descubre deliciosas recetas!<p>
   </section>
   <section class = "containerShowPost" id = "containerShowPost" >
   </section>
  `;

  HomeDiv.innerHTML = viewPosting;

  // creamos la seccion 2
  const section3 = document.createElement('section');
  section3.classList.add('section3');

  // Boton Home
  const buttonHome = document.createElement('button');
  buttonHome.classList.add('buttonsPrincipalsPosting');
  buttonHome.textContent = 'Cerrar Sesión';
  buttonHome.addEventListener('click', () => {
    localStorage.clear();
    onNavigate('/');
  });

  // Constante para atrapar el texto.
  const containerPost = HomeDiv.querySelector('#container');
  const textPost = HomeDiv.querySelector('#textPost');
  const textTitle = HomeDiv.querySelector('#textTitle');
  const buttonPost = HomeDiv.querySelector('#buttonPost');
  const textUser = HomeDiv.querySelector('#buttonUser');
  textPost.addEventListener('keyup', () => {
    buttonPost.removeAttribute('disabled');
  });

  // variables para guardar los post editados y el id de cada post
  let editPost = false;
  let guardarId = '';

  // Mostrar Post
  const containerShowPost = HomeDiv.querySelector('#containerShowPost');

  const q = query(collection(db, 'post'));
  onSnapshot(q, (querySnapshot) => {
    containerShowPost.innerHTML = '';

    querySnapshot.forEach((post) => {
      // console.log(doc.data());
      const postDiv = document.createElement('div');
      postDiv.className = 'clasePost';
      postDiv.innerHTML = `
      <div class=verpost >
      <h3>${post.data().title}</h3>
      <p class = "Receta" >${post.data().post}</p>
      <p class = "Autor">${post.data().user}</p>
      <div class = Botones>
        <button class='btnDelete' data-id='${post.id}'>
        🗑 Borrar
        </button>
        <button class= 'btnEdit' data-id='${post.id}'>
          🖉 Editar
        </button>
        <button class= 'btnLikes btnLikesCount' data-id='${post.id}'>
        <span class= 'likesCount'>${post.data().like.length}</span>
        &#128151 
        Likes 
        </button>
      </div>
      </div>
      `;
      containerShowPost.appendChild(postDiv);
    });

    // Borrar Post
    const btnsDelete = containerShowPost.querySelectorAll('.btnDelete');
    console.log(btnsDelete);
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        // console.log(e.target.dataset.id);
        // colocar la ventana modal para confirmacion de borrar
        borrarDoc(e.target.dataset.id);
      });
    });

    // Editar Post
    const btnsEdit = containerShowPost.querySelectorAll('.btnEdit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        try {
          // eslint-disable-next-line no-shadow
          const doc = await editarPost(e.target.dataset.id);
          const receta = doc.data();
          console.log(receta);
          textTitle.value = receta.title;
          textPost.value = receta.post;
          editPost = true;
          guardarId = doc.id;

          containerPost.buttonPost.innertext = 'Update';
          // console.log(error);
        } catch (error) {
          // console.log(error);
        }

        console.log(editPost);
      });
    });

    // Funcion Likes
    const btnslikes = containerShowPost.querySelectorAll('.btnLikesCount');
    btnslikes.forEach((btn) => {
      const likesCount = btn.querySelector('.likesCount');
      btn.addEventListener('click', async (e) => {
        const likedPostId = e.target.dataset.id;
        const userLikesPost = obtenerCorreoUsuario();

        if (userLikesPost) {
          const postDocRef = doc(db, 'post', likedPostId);
          const postSnapshot = await getDoc(postDocRef);

          if (postSnapshot.exists()) {
            const postLikes = postSnapshot.data().like || [];
            const userIndex = postLikes.indexOf(userLikesPost);

            if (userIndex > -1) {
              postLikes.splice(userIndex, 1); // Eliminar el nombre de usuario del arreglo de likes
            } else {
              postLikes.push(userLikesPost); // Agregar el nombre de usuario al arreglo de likes
            }

            await updateDocument(postDocRef, { like: postLikes });
            console.log('Likes Count:', postLikes.length);
            const numDeLikes = postLikes.length;
            likesCount.innerText = numDeLikes.toString();
          } else {
            console.log('El post no existe.');
          }
        } else {
          console.log('No se puede obtener el correo electrónico del usuario.');
        }
      });
    });
  });

  // Boton Publicar
  buttonPost.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log(textTitle.value, textPost.value);
    try {
      console.log(textUser);
      if (!editPost) {
        crearPost(textTitle.value, textPost.value);
        // console.log('updating');
      } else {
        actualizarPost(guardarId, {
          title: textTitle.value,
          post: textPost.value,
          user: auth.currentUser.email,
        });
        // console.log(guardarId);
        // Mostrar Post
      }
      editPost = false;
      guardarId = '';

      textTitle.value = '';
      textPost.value = '';
    } catch (error) {
      console.log(error);
    }
  });

  HomeDiv.appendChild(section3);
  // section2.appendChild(buttonReadRecipe);
  section3.appendChild(buttonHome);

  return HomeDiv;
};
