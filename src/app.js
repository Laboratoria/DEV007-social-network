import {saveForm} from './firebase.js'
window.addEventListener('DOMContentLoaded',()=>{
 

})
const formLogin = document.getElementById('form-login')

formLogin.addEventListener('submit', (e) => {
  e.preventDefault()
  //console.log('Login');
  const user = formLogin['user'];
  const mail = formLogin['mail'];

  //console.log(user.value, mail.value); //guardar
  saveForm(user.value, mail.value)


  formLogin.reset()  //limpia el formulario luego de su envio
})