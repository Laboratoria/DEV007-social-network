import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";  // autenticacion -->

import {saveForm, auth} from './firebase.js'
window.addEventListener('DOMContentLoaded',()=>{
 

})
const formLogin = document.querySelector('#form-login')

formLogin.addEventListener('submit', async (e) => {
  e.preventDefault()
  //console.log('Login');
 /* const user = formLogin['user'];
  const mail = formLogin['mail'];*/
  const email = document.querySelector('#email').value;
  const password =document.querySelector('#password').value;

  console.log(email, password);
  //console.log(user, mail); //guardar
  saveForm(email, password);
try{
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    //.then((userCredentials) => {
    console.log(userCredentials);
     // const user = userCredential.user;
     // console.log(user)

} catch (error){
  console.log(error.message);
  console.log(error.code);

  if (error.code === 'auth/email-already-in-use') {
    alert('Email already in use')
   } else if (error.code === 'auth/invalid-email') {
    alert('Invalid email')
   } else if (error.code === 'auth/weak-password') {
 alert('auth/weak-password')
   } else if (error.code){
  alert('álgo salio mal');
   }
}
  formLogin.reset()  //limpia el formulario luego de su envio
})