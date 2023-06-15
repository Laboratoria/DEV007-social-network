const rootDiv = document.getElementById('root');

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  // HomeDiv.textContent = 'Bienvenida al Login';
  HomeDiv.classList.add('register');
  // buttonHome.textContent = 'Regresar al Home';
  const buttonHome = document.createElement('button');
  // const registerView = document.createElement('div');

  buttonHome.addEventListener('click', () => onNavigate('/register'));

  // create the main wrapper that includes the logo and the container
  // for the introductory text and the form
  const mainWrapper = document.createElement('div');
  mainWrapper.className = 'register-wrapper';

  // Create the logo container
  const logoContainer = document.createElement('picture');
  logoContainer.className = 'logo-container';

  // Create the logo image
  const logoImage = document.createElement('img');
  logoImage.src = '/media/logo.png';
  logoImage.alt = 'Nanai logo';

  // Append the logo image to the logo container and then to the main
  mainWrapper.appendChild(logoImage);

  // Create the login form
  const loginForm = document.createElement('form');
  loginForm.className = 'login-section';

  // Create the login heading
  const loginHeading = document.createElement('h2');
  loginHeading.className = 'login';
  loginHeading.textContent = 'Regístrate';

  // Create the email input
  const emailInput = document.createElement('input');
  emailInput.type = 'text';
  emailInput.placeholder = 'Correo electrónico';
  emailInput.required = true;

  // Create the password input
  const passwordInput = document.createElement('input');
  passwordInput.type = 'current-password';
  passwordInput.placeholder = 'Contraseña';

  // Create the "Next" button
  const nextButton = document.createElement('a');
  nextButton.href = '';
  nextButton.className = 'continue';
  nextButton.textContent = 'Siguiente';

  // Create the Google button
  const googleButton = document.createElement('button');
  googleButton.className = 'google-button';

  // Create the Google icon image
  const googleIcon = document.createElement('img');
  googleIcon.src = '/media/Google-icon.png';
  googleIcon.alt = 'Google icon';
  googleButton.appendChild(googleIcon);
  googleButton.innerHTML += 'Continúa con Google';

  // Append the email input, password input, "Forgot your password?" link,
  // "Next" button, and Google button to the login form
  loginForm.appendChild(loginHeading);
  loginForm.appendChild(emailInput);
  loginForm.appendChild(passwordInput);
  loginForm.appendChild(nextButton);
  loginForm.appendChild(googleButton);

  // Create the login button container
  const loginButtonContainer = document.createElement('div');
  loginButtonContainer.className = 'login-button';

  // Append the logo container, introductory container,
  const mainSection = document.createElement('main');
  mainSection.className = 'main-register';

  // login form, and login button container to the main section
  mainSection.appendChild(loginForm);
  mainSection.appendChild(loginButtonContainer);

  // Append loginForm to the main section
  mainSection.appendChild(loginForm);

  // Append the mainSection to the mainWrapper
  mainWrapper.appendChild(mainSection);

  // HomeDiv.appendChild(registerView);

  rootDiv.appendChild(mainWrapper);
};
