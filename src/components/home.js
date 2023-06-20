//export para tenerlo accesible, se crean los botones de acceso: registro e inicio sesión
//onNavigate, se crea por parametro y argumento.
export const home = (onNavigate) => {
  const homeDiv = document.createElement("div");
  const buttonRegister = document.createElement("button");
  const buttonLogin = document.createElement("button");
  const buttonGoogle = document.createElement("img");



  buttonRegister.textContent = "Regístrate";
  buttonRegister.classList = "buttonsHome";
  buttonLogin.textContent = "Inicia Sesión";
  buttonLogin.classList = "buttonsHome";
  buttonGoogle.classList = "logoG";
  buttonGoogle.src = "images/btngo2.png";
  
  
  buttonLogin.addEventListener("click", () => onNavigate("/login"));
  buttonRegister.addEventListener("click", () => onNavigate("/register"));


  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonGoogle);
  
  return homeDiv;
};
