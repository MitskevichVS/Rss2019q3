import showMap from './map/map';
import {
  convertCoordinates, convertDay, convertMonth, sortWeatherData,
} from './utils/utils';

export default class Model {
  constructor(view) {
    this.view = view;
    this.locationUrl = 'http://ip-api.com/json/?';
    this.openWeatherKey = '5278bebb89d5e1019b04f8a4a1264daa';
    this.openWeatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?';
    this.photoKey = '715e40b83c35861ef42aec9d9d3db56b9ddd73508a4e5c9a65e9c1100fa22712';
    this.photoUrl = 'https://api.unsplash.com/photos/random?query=';
    this.units = 'metric';
    this.longtitude = '';
    this.latitude = '';
    this.location = '';
    this.zip = '';
    this.date = '';
    this.day = '';
    this.fetchedWeather = {};
    this.currentWeater = {};
    this.nextDaysWeather = [];
  }

  async getCoordinates() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.longtitude = position.coords.longitude;
      this.latitude = position.coords.latitude;
      this.showLocation();
    });
  }

  async getLocationInfo() {
    await fetch(this.locationUrl)
      .then(data => data.json())
      .then((locationData) => {
        this.location = `${locationData.city}, ${locationData.country}`;
        this.zip = locationData.zip;
        this.view.updateLocation(this.location);
      });
  }

  async getWeather() {
    // eslint-disable-next-line max-len
    // const url = `${this.openWeatherUrl}q=${this.location}&units=${this.units}&appid=${this.openWeatherKey}`;
    /* await fetch(url)
      .then(data => data.json())
      .then((weatherData) => {
        localStorage.setItem('weather', JSON.stringify(weatherData));
      }); */
    this.fetchedWeather = JSON.parse(localStorage.getItem('weather'));
    this.fetchedWeather = this.fetchedWeather.list;
    [, this.currentWeater] = this.fetchedWeather;
    this.currentWeater = sortWeatherData(this.currentWeater);
    this.nextDaysWeather = [
      sortWeatherData(this.fetchedWeather[9]),
      sortWeatherData(this.fetchedWeather[17]),
      sortWeatherData(this.fetchedWeather[25]),
    ];
    console.log(this.currentWeater);
    console.log(this.nextDaysWeather);
    this.view.updateMainWeatherInfo(this.currentWeater);
  }

  getDate() {
    const date = new Date();
    const weekday = convertDay(date.getDay());
    const month = convertMonth(date.getMonth());

    this.date = `${weekday} ${date.getDate()} ${month} ${date.getHours()}:${date.getMinutes()}`;

    this.view.updateDate(this.date);
  }

  async getBackgroundPhoto(town) {
    const url = `${this.photoUrl}town,${town}&client_id=${this.photoKey}`;
    console.log(url);
  }

  showLocation() {
    const latitude = convertCoordinates(this.latitude);
    const longtitude = convertCoordinates(this.longtitude);
    showMap(this.latitude, this.longtitude);
    this.view.showCoordinatesOnPage(latitude, longtitude);
    return this;
  }
}
