import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";  // autenticacion -->

import {saveForm, auth} from './firebase.js'
window.addEventListener('DOMContentLoaded',()=>{
 

})
const formLogin = document.querySelector('#form-login')

formLogin.addEventListener('submit', (e) => {
  e.preventDefault()
  //console.log('Login');
 /* const user = formLogin['user'];
  const mail = formLogin['mail'];*/
  const user = document.querySelector('#user').value;
  const mail =document.querySelector('#mail').value;

  console.log(user, mail); //guardar

 saveForm(user, mail)


    createUserWithEmailAndPassword(auth, user, mail)
    .then((userCredential) => {

      const user = userCredential.user;
      console.log(user)
  })
       
 
        

  formLogin.reset()  //limpia el formulario luego de su envio
})