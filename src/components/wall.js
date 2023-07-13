export const wall = (onNavigate) => {
  const wallDiv = document.createElement('div');
  const wallTitle = document.createElement('h1');
  const buttonRecommendations = document.createElement('button');
  wallDiv.classList = 'wallDiv';
  wallTitle.textContent = 'Bienvenidos al rincón del café';
  wallTitle.classList = 'title';
  buttonRecommendations.classList = 'buttons';
  buttonRecommendations.textContent = 'Recomendaciones';
  buttonRecommendations.addEventListener('click', () => onNavigate('/recommendations'));
  wallDiv.appendChild(wallTitle);
  wallDiv.appendChild(buttonRecommendations);
  return wallDiv;
};
