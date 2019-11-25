import weatherIcons from '../elements/weatherIcons';
import './main.scss';

const main = () => {
  const mainElement = document.createElement('main');
  mainElement.className = 'main';

  const leftContainer = document.createElement('div');
  leftContainer.className = 'main__container-left';

  const rightContainer = document.createElement('div');
  rightContainer.className = 'main__container-right';

  const mapComponent = document.createElement('div');
  mapComponent.id = 'map';

  const latitude = document.createElement('span');
  latitude.className = 'main__container-right__text-latitude';
  latitude.id = 'latitude';

  const longtitude = document.createElement('span');
  longtitude.className = 'main__container-right__text-longtitude';
  longtitude.id = 'longtitude';

  rightContainer.appendChild(mapComponent);
  rightContainer.appendChild(latitude);
  rightContainer.appendChild(longtitude);
  mainElement.appendChild(leftContainer);
  mainElement.appendChild(rightContainer);

  const location = document.createElement('p');
  location.className = 'main__container-left__text-location';
  location.id = 'location';
  // dev
  location.textContent = 'Minsk, Belarus';

  const date = document.createElement('p');
  date.className = 'main__container-left__text-date';
  date.id = 'date';

  const temp = document.createElement('p');
  temp.className = 'main__container-left__text-temperature';
  temp.id = 'temperature';
  // dev
  temp.textContent = '-70';

  const weatherIcon = document.createElement('div');
  weatherIcon.className = 'main__container-left__icon-temp';
  weatherIcon.id = 'weatherIcon';
  // dev
  const icon = weatherIcons('sunny');
  weatherIcon.appendChild(icon);

  const weatherOptions = document.createElement('ul');
  weatherOptions.className = 'main__container-left__list';
  weatherOptions.id = 'weatherOptions';

  const weatherDescription = document.createElement('li');
  weatherDescription.className = 'main__container-left__listitem';
  weatherDescription.id = 'weatherDescription';
  // dev
  weatherDescription.textContent = 'overcast';

  const feelsLike = document.createElement('li');
  feelsLike.className = 'main__container-left__listitem';
  feelsLike.id = 'feelsLike';
  // dev
  feelsLike.textContent = 'fellslike 7';

  const wind = document.createElement('li');
  wind.className = 'main__container-left__listitem';
  wind.id = 'wind';
  // dev
  wind.textContent = 'wind: 2 m/s';

  const humidity = document.createElement('li');
  humidity.className = 'main__container-left__listitem';
  humidity.id = 'humidity';
  // dev
  humidity.textContent = 'humidity: 83%';

  leftContainer.appendChild(location);
  leftContainer.appendChild(date);
  leftContainer.appendChild(temp);
  leftContainer.appendChild(weatherIcon);
  weatherOptions.appendChild(weatherDescription);
  weatherOptions.appendChild(feelsLike);
  weatherOptions.appendChild(wind);
  weatherOptions.appendChild(humidity);
  leftContainer.appendChild(weatherOptions);

  document.getElementsByTagName('body')[0].appendChild(mainElement);
};

export default main;
