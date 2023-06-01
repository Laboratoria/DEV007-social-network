// TODO LO QUE VIENE DEL TASK FORM PARA PUBLICAR TITULO Y DESCRIPCION
import { saveTask } from "./firebase.js";
const taskForm = document.getElementById('task-form')
taskForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const title = taskForm['task-title'] //donde quedara guardado los datos de los input
  const content = taskForm['task-content']
  saveTask(title.value, content.value)

  taskForm.reset();
  

})

//post enviados


const postList = document.querySelector('.posts');

export  const setupPosts = (data) => {
if (data.length) {
let html = ''
    data.forEach(doc => {
     console.log(doc);

        const post = doc.data()
        //console.log(post) ;
        const li = `
        <li class="list-group-item">
            <h5>${post.title}</h5>
            <p>${post.content}</p>
        </li>
      <div class="caja">
        `
        html += li
    })
  //  console.log('loop posts');
  postList.innerHTML = html
}else{
   postList.innerHTML = '<h1> Login to see posts </h1>'  // aparecera luego de cerrar sesion
}
}
 window.addEventListener('DOMContentLoaded', () => {
 })
