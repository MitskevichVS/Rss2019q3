import './loader.scss';

const loader = () => {
  const loaderContainer = document.createElement('div');
  loaderContainer.className = 'loading';

  const letterContainer = document.createElement('div');
  letterContainer.className = 'loading-text';

  const lettersArray = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];

  lettersArray.forEach((item) => {
    const letter = document.createElement('span');
    letter.className = 'loading-text-words';
    letter.textContent = item;
    letterContainer.appendChild(letter);
  });

  loaderContainer.appendChild(letterContainer);

  document.body.appendChild(loaderContainer);
};

export default loader;
