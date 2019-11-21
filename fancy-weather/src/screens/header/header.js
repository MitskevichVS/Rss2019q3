import './header.scss';

const header = () => {
  const headerEl = document.createElement('header');
  headerEl.className = 'header';

  const imageButtonContainer = document.createElement('div');
  imageButtonContainer.className = 'header__button';
  const imageButton = document.createElement('button');
  imageButton.className = 'button';
  const arrow = document.createElement('i');
  arrow.classList.add('fas', 'fa-sync-alt');

  imageButton.appendChild(arrow);
  imageButtonContainer.appendChild(imageButton);


  const listContainer = document.createElement('div');
  listContainer.className = 'header__list';
  const select = document.createElement('select');
  const langArray = ['EN', 'RU', 'BY'];

  langArray.forEach((item) => {
    const option = document.createElement('option');
    option.textContent = item;
    select.appendChild(option);
  });
  listContainer.appendChild(select);

  const radiobuttonContainer = document.createElement('div');
  radiobuttonContainer.className = 'header__checkbox';
  const radioButton = document.createElement('div');
  radioButton.className = 'button';
  radioButton.id = 'button';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';
  const knob = document.createElement('div');
  knob.className = 'knobs';
  const celsius = document.createElement('span');
  celsius.textContent = ' C';
  celsius.insertAdjacentHTML('afterbegin', '&#176;');
  const checkboxBackground = document.createElement('div');
  checkboxBackground.className = 'checkbox-background';

  knob.appendChild(celsius);
  radioButton.appendChild(checkbox);
  radioButton.appendChild(knob);
  radioButton.appendChild(checkboxBackground);
  radiobuttonContainer.appendChild(radioButton);


  const searchContainer = document.createElement('div');
  searchContainer.classList.add('header__searchform', 'searchform');
  const input = document.createElement('input');
  input.className = 'searchform__input';
  input.type = 'text';
  const voiceButton = document.createElement('button');
  voiceButton.className = 'searchform__button-voice';
  const searchButton = document.createElement('button');
  searchButton.className = 'searchform__button-search';
  searchButton.textContent = 'search';

  searchContainer.appendChild(input);
  searchContainer.appendChild(voiceButton);
  searchContainer.appendChild(searchButton);


  headerEl.appendChild(imageButtonContainer);
  headerEl.appendChild(listContainer);
  headerEl.appendChild(radiobuttonContainer);
  headerEl.appendChild(searchContainer);

  document.getElementsByTagName('body')[0].appendChild(headerEl);
};

export default header;
