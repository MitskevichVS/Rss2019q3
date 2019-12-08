import loader from './loader/loader';
import head from './head/head';
import header from './header/header';
import main from './main/main';
import weatherIcons from './elements/weatherIcons';
import languageData from '../components/utils/languageData';
import { getWindSpeedUnits } from '../components/utils/utils';
import './page.scss';

export default class View {
  constructor() {
    this.languageConfig = languageData.EN;
    this.cityNameInput = document.querySelector('.searchform__input');
  }

  changeLanguageConfig(lang) {
    this.languageConfig = languageData[lang];
    console.log(this);
  }

  connectThirdPartyLinks() {
    head();
  }

  showLoader() {
    loader();
  }

  hideLoader() {
    const loaderScreen = document.querySelector('.loading');
    loaderScreen.classList.add('hide_loading');
    setTimeout(() => {
      loaderScreen.classList.add('disable-loading');
    }, 1000);
  }

  showHeader() {
    header();
  }

  showMain() {
    main();
    this.cityNameInput = document.querySelector('.searchform__input');
  }

  changeScale(target) {
    const targetEl = target;
    targetEl.style.transform = 'scale(0.9)';
    setTimeout(() => {
      targetEl.style.transform = 'scale(1)';
    }, 200);
  }

  setBlurToBackground() {
    const body = document.querySelector('body');

    body.className = 'blur';
  }

  showCoordinatesOnPage(latitude, longtitude) {
    const latitudeElement = document.getElementById('latitude');
    const longtitudeElement = document.getElementById('longtitude');

    latitudeElement.textContent = `${this.languageConfig.latitude}: ${latitude}`;
    longtitudeElement.textContent = `${this.languageConfig.longtitude}: ${longtitude}`;
  }

  updateDate(currentDate) {
    const date = document.getElementById('date');

    date.textContent = currentDate;
  }

  updateLocation(locationName) {
    const locationEl = document.getElementById('location');

    locationEl.textContent = locationName;
  }

  updateMainWeatherInfo(currentWeather, units) {
    const data = currentWeather;
    const temp = document.getElementById('temperature');
    const icon = document.getElementById('weatherIcon');
    const description = document.getElementById('weatherDescription');
    const pressure = document.getElementById('feelsLike');
    const wind = document.getElementById('wind');
    const humidity = document.getElementById('humidity');

    const weatherIcon = weatherIcons(data.type, data.weatherId);
    console.log(getWindSpeedUnits(units));

    temp.textContent = `${data.temp}°`;
    description.textContent = data.description;
    pressure.textContent = `${this.languageConfig.pressure}: ${data.pressure} hPa`;
    wind.textContent = `${this.languageConfig.wind}: ${data.windSpeed} ${getWindSpeedUnits(units)}`;
    humidity.textContent = `${this.languageConfig.humidity}: ${data.humidity}%`;
    if (icon.childNodes) {
      while (icon.firstChild) {
        icon.removeChild(icon.firstChild);
      }
    }
    icon.appendChild(weatherIcon);
  }

  updateNextWeatherInfo(weather, days) {
    const list = document.querySelector('.main__container-left__list-bottom');
    const listItems = list.childNodes;

    weather.forEach((item, index) => {
      if (listItems[index].childNodes) {
        while (listItems[index].firstChild) {
          listItems[index].removeChild(listItems[index].firstChild);
        }
      }
      const day = document.createElement('h5');
      day.className = 'listItem__header';
      day.textContent = days[index];

      const temp = document.createElement('p');
      temp.className = 'listItem__text';
      temp.textContent = `${item.temp}°`;

      const icon = document.createElement('div');
      icon.className = 'listItem__icon';
      icon.appendChild(weatherIcons(item.weatherId));

      listItems[index].appendChild(day);
      listItems[index].appendChild(temp);
      listItems[index].appendChild(icon);
    });
  }

  async updateBackgroundImg(url) {
    const container = document.querySelector('body');
    const image = new Image();
    image.src = url;

    image.onload = () => {
      container.style.background = `url("${url}")`;
      container.style.backgroundSize = 'cover';
      container.style.backgroundPosition = 'center';
      container.classList.remove('blur');
      this.hideLoader();
    };
  }

  changeSearchButtonLanguage() {
    const button = document.querySelector('.searchform__button-search');

    button.textContent = `${this.languageConfig.searchButton}`;
  }

  showErrorOnCitynameInput() {
    this.cityNameInput.classList.add('searchform__input-error');
  }

  removeErrorOnCitynameInput() {
    this.cityNameInput.classList.remove('searchform__input-error');
  }

  showSpeechResultOnPage(result) {
    this.cityNameInput.value = result;
  }
}
