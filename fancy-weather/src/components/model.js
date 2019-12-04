import showMap from './map/map';
import {
  convertCoordinates,
  convertDay,
  convertMonth,
  sortWeatherData,
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
    this.language = 'EN';
    this.longtitude = '';
    this.convertedLongtitude = '';
    this.latitude = '';
    this.convertedLatitude = '';
    this.location = '';
    this.zip = '';
    this.date = '';
    this.day = '';
    this.nextDays = [];
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
    const url = `${this.openWeatherUrl}q=${this.location}&units=${this.units}&appid=${this.openWeatherKey}&lang=${this.language}`;
    await fetch(url)
      .then(data => data.json())
      .then((weatherData) => {
        this.fetchedWeather = weatherData.list;
        [, this.currentWeater] = this.fetchedWeather;
        this.currentWeater = sortWeatherData(this.currentWeater);
        this.nextDaysWeather = [
          sortWeatherData(this.fetchedWeather[9]),
          sortWeatherData(this.fetchedWeather[17]),
          sortWeatherData(this.fetchedWeather[25]),
        ];
        this.view.updateMainWeatherInfo(this.currentWeater, this.language);
        this.view.updateNextWeatherInfo(this.nextDaysWeather, this.days);
      });
  }

  getDate() {
    const date = new Date();
    let weekday = convertDay(date.getDay())[this.language];
    const month = convertMonth(date.getMonth())[this.language];
    this.day = date.getDay();
    const hours = date.getHours();
    let minutes = date.getMinutes();

    if (this.language === 'EN') {
      weekday = weekday.slice(0, 3);
    }

    if (minutes.length === 1) {
      minutes = `0${minutes}`;
    }

    this.days = [
      convertDay(this.day + 1)[this.language],
      convertDay(this.day + 2)[this.language],
      convertDay(this.day + 3)[this.language],
    ];

    this.date = `${weekday} ${date.getDate()} ${month} ${hours}:${minutes}`;

    this.view.updateDate(this.date);
  }

  async getBackgroundPhoto() {
    const [city] = this.location.split(',');
    const url = `${this.photoUrl}town,${city}&client_id=${this.photoKey}`;
    await fetch(url)
      .then(data => data.json())
      .then((imgData) => {
        this.view.updateBackgroundImg(imgData.urls.raw);
      });
  }

  showLocation() {
    this.convertedLatitude = convertCoordinates(this.latitude);
    this.convertedLongtitude = convertCoordinates(this.longtitude);
    showMap(this.latitude, this.longtitude);
    this.view.showCoordinatesOnPage(this.convertedLatitude, this.convertedLongtitude);
  }

  changeLanguage(lang) {
    this.language = lang;
    this.view.updateMainWeatherInfo(this.currentWeater, this.language);
    this.view.updateNextWeatherInfo(this.nextDaysWeather, this.days);
    this.view.updateLocation(this.location);
    this.view.showCoordinatesOnPage(this.convertedLatitude, this.convertedLongtitude);
    this.getDate();
  }
}
