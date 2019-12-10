import './errorScreen.scss';

const showErrorScreen = () => {
  const background = document.createElement('div');
  background.classList.add('background-error', 'background');

  const container = document.createElement('div');
  container.classList.add('background__container-error', 'container');

  const astronaut = document.createElement('div');
  astronaut.className = 'container__image';

  container.appendChild(astronaut);
  background.appendChild(container);

  document.body.appendChild(background);
};

export default showErrorScreen;
