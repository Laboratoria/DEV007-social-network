// Este es el punto de entrada de tu aplicacion
// Configurar la información de tu proyecto Firebase
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
firebase.initializeApp(firebaseConfig);

// Obtener referencia a la autenticación de Firebase
var auth = firebase.auth();

// Registrar evento para el formulario de registro
document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que se recargue la página

  var email = document.getElementById("registerEmail").value;
  var password = document.getElementById("registerPassword").value;

  // Crear un nuevo usuario
  auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      alert("Registro exitoso");
      vista1.style.display = "none";
      vista2.style.display = "block";  //pasar a la segunda vista
    })
    .catch(function(error) {
      alert("Error: " + error.message);
    });
});


// Registrar evento para el formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que se recargue la página

  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;

  // Iniciar sesión con el usuario existente
  auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      alert("Inicio de sesión exitoso");
    })
    .catch(function(error) {
      alert("Error: " + error.message);
    });
});
