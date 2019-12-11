import './errorScreen.scss';

const showErrorScreen = () => {
  const background = document.createElement('div');
  background.classList.add('background-error', 'background');

  const container = document.createElement('div');
  container.classList.add('background__container-error', 'container');

  const astronaut = document.createElement('div');
  astronaut.className = 'container__image';

  const message = document.createElement('p');
  message.className = 'background__text';
  message.innerText = 'Something went wrong. Try again.';

  container.appendChild(astronaut);
  background.appendChild(container);
  background.appendChild(message);

  document.body.appendChild(background);
};

export default showErrorScreen;
