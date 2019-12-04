import loader from './loader/loader';
import head from './head/head';
import header from './header/header';
import main from './main/main';
import weatherIcons from './elements/weatherIcons';
import './page.scss';

export default class View {
  connectThirdPartyLinks() {
    head();
    return this;
  }

  showLoader() {
    loader();
    return this;
  }

  showHeader() {
    header();
    return this;
  }

  showMain() {
    main();
    return this;
  }

  showCoordinatesOnPage(latitude, longtitude) {
    const latitudeElement = document.getElementById('latitude');
    const longtitudeElement = document.getElementById('longtitude');

    latitudeElement.textContent = `Latitude: ${latitude}`;
    longtitudeElement.textContent = `Longtitude: ${longtitude}`;
  }

  updateDate(currentDate) {
    const date = document.getElementById('date');

    date.textContent = currentDate;
  }

  updateLocation(locationName) {
    const locationEl = document.getElementById('location');

    locationEl.textContent = locationName;
  }

  updateMainWeatherInfo(currentWeather) {
    const data = currentWeather;
    const temp = document.getElementById('temperature');
    const icon = document.getElementById('weatherIcon');
    const description = document.getElementById('weatherDescription');
    console.log(description);
    const pressure = document.getElementById('feelsLike');
    const wind = document.getElementById('wind');
    const humidity = document.getElementById('humidity');

    const weatherIcon = weatherIcons(data.type, data.weatherId);
    console.log(weatherIcon);

    temp.textContent = `${data.temp}°`;
    description.textContent = data.description;
    pressure.textContent = `Pressure: ${data.pressure} gPa`;
    wind.textContent = `Wind: ${data.windSpeed} m/s`;
    humidity.textContent = `Humidity: ${data.humidity}%`;
    icon.appendChild(weatherIcon);
  }

  updateNextWeatherInfo(weather, days) {
    const list = document.querySelector('.main__container-left__list-bottom');
    const listItems = list.childNodes;

    weather.forEach((item, index) => {
      console.log(item);
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
}
