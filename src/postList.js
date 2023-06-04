// TODO LO QUE VIENE DEL TASK FORM PARA PUBLICAR TITULO Y DESCRIPCION
import { saveTask, deleteTask } from "./firebase.js";
const taskForm = document.getElementById('task-form')
taskForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const title = taskForm['task-title'] //donde quedara guardado los datos de los input
  const content = taskForm['task-content']
  saveTask(title.value, content.value)

  taskForm.reset();
  

})




//post enviados
const postList = document.querySelector('.caja');


export  const setupPosts = (querySnapshot) => {
if (querySnapshot.length) {
let html = ''
    querySnapshot.forEach(doc => {
  //   console.log(doc);

        const post = doc.data()
        //console.log(post) ;
        const li = `
      
        <div class="list-group-item">
        
            <h5>${post.title}</h5>
            <p>${post.content}</p>
            <button class ="btn-delete" data-id ="${doc.id}">Delete</button>
        </div>
      <div class="caja">
     
        `
        html += li
    })
  //  console.log('loop posts');
  postList.innerHTML = html
 //console.log(postList);
const btnsDelete =  postList.querySelectorAll('.btn-delete')
//console.log(btnsDelete)
btnsDelete.forEach( btn => {
  btn.addEventListener('click', ({target: { dataset }}) => {
   // console.log(dataset.id)
   deleteTask(dataset.id);

  })
})
}else{

   postList.innerHTML = '<h1> Login to see posts </h1>'  // aparecera luego de cerrar sesion

  }
}
 window.addEventListener('DOMContentLoaded', () => {
 })