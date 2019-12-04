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

  const date = document.createElement('p');
  date.className = 'main__container-left__text-date';
  date.id = 'date';

  const temp = document.createElement('p');
  temp.className = 'main__container-left__text-temperature';
  temp.id = 'temperature';

  const weatherIcon = document.createElement('div');
  weatherIcon.className = 'main__container-left__icon-temp';
  weatherIcon.id = 'weatherIcon';

  const weatherOptions = document.createElement('ul');
  weatherOptions.className = 'main__container-left__list';
  weatherOptions.id = 'weatherOptions';

  const weatherDescription = document.createElement('li');
  weatherDescription.className = 'main__container-left__listitem';
  weatherDescription.id = 'weatherDescription';

  const feelsLike = document.createElement('li');
  feelsLike.className = 'main__container-left__listitem';
  feelsLike.id = 'feelsLike';

  const wind = document.createElement('li');
  wind.className = 'main__container-left__listitem';
  wind.id = 'wind';

  const humidity = document.createElement('li');
  humidity.className = 'main__container-left__listitem';
  humidity.id = 'humidity';

  const nextWeatherList = document.createElement('ul');
  nextWeatherList.className = 'main__container-left__list-bottom';

  const tomorrow = document.createElement('li');
  tomorrow.className = 'main__container-left__listItem';

  const tomorrowNext = document.createElement('li');
  tomorrowNext.className = 'main__container-left__listItem';

  const tomorrowNext2 = document.createElement('li');
  tomorrowNext2.className = 'main__container-left__listItem';
  nextWeatherList.appendChild(tomorrow);
  nextWeatherList.appendChild(tomorrowNext);
  nextWeatherList.appendChild(tomorrowNext2);


  leftContainer.appendChild(location);
  leftContainer.appendChild(date);
  leftContainer.appendChild(temp);
  leftContainer.appendChild(weatherIcon);
  weatherOptions.appendChild(weatherDescription);
  weatherOptions.appendChild(feelsLike);
  weatherOptions.appendChild(wind);
  weatherOptions.appendChild(humidity);
  leftContainer.appendChild(weatherOptions);
  leftContainer.appendChild(nextWeatherList);

  document.getElementsByTagName('body')[0].appendChild(mainElement);
};

export default main;
