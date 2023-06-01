
const vista1 =document.getElementById("vista1"); 
const vista2 =document.getElementById("vista2");

var firebaseConfig = {
  apiKey: "AIzaSyDNhreCWCwxKUINenCE5dJFTWq-aHAHb9c",
  authDomain: "traveling-pets-social-netwoks.firebaseapp.com",
  projectId: "traveling-pets-social-netwoks",
  storageBucket: "traveling-pets-social-netwoks.appspot.com",
  messagingSenderId: "1032071723002",
  appId: "APP_ID"
};

// Inicializar Firebase
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("modal");
  var links = document.querySelectorAll('[data-toggle="modal"]');

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "flex";
    });
  });

  var closeButton = document.querySelector(".close");

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });
});

firebase.initializeApp(firebaseConfig);

// Obtener referencia a la autenticación de Firebase
var auth = firebase.auth();

// Registrar evento para el formulario de registro
const formularioRegister = document.querySelector("#registerForm");
document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que se recargue la página

  var email = document.getElementById("registerEmail").value;
  var password = document.getElementById("registerPassword").value;
 
  // Crear un nuevo usuario
  auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      alert("Registro exitoso");
      alert ("inicia sesion con la cuenta registrada");
      formularioRegister.reset();
    })
    .catch(function(error) {
      alert("Error: " + error.message);
    });
  
});


// Registrar evento para el formulario de inicio de sesión
const formularioLogin = document.querySelector("#loginForm");
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que se recargue la página

  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;

  // Iniciar sesión con el usuario existente
  auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      alert("Inicio de sesión exitoso");
      formularioLogin.reset();
    })
    .catch(function(error) {
      alert("Error: " + error.message);
    });
});

var google = new firebase.auth.GoogleAuthProvider();

// Registrar evento para el botón de inicio de sesión con Google
document.getElementById("googleSignIn").addEventListener("click", function() {
  // Iniciar el proceso de inicio de sesión con Google
  auth.signInWithPopup(google)
    .then(function(result) {
      // El inicio de sesión con Google fue exitoso
      var user = result.user;
      // Accede a la información del usuario
      var displayName = user.displayName;
      var email = user.email;
      var photoURL = user.photoURL;
      // Realiza las acciones que necesites con la información del usuario
      alert("Inicio de sesión exitoso con Google: " + displayName);
    })
    .catch(function(error) {
      // Ocurrió un error durante el inicio de sesión con Google
      alert("Error al iniciar sesión con Google: " + error.message);
    });
});

var github = new firebase.auth.GithubAuthProvider();

// Registrar evento para el botón de inicio de sesión con GitHub
document.getElementById("githubSignIn").addEventListener("click", function() {
  // Iniciar el proceso de inicio de sesión con GitHub
  auth.signInWithPopup(github)
    .then(function(result) {
      // El inicio de sesión con GitHub fue exitoso
      var user = result.user;
      // Accede a la información del usuario
      var displayName = user.displayName;
      var email = user.email;
      var photoURL = user.photoURL;
      // Realiza las acciones que necesites con la información del usuario
      alert("Inicio de sesión exitoso con GitHub: " + displayName);
    })
    .catch(function(error) {
      // Ocurrió un error durante el inicio de sesión con GitHub
      alert("Error al iniciar sesión con GitHub: " + error.message);
    });
});

