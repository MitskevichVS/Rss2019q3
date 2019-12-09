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
    this.openCageService = 'https://api.opencagedata.com/geocode/v1/json?';
    this.openCageKey = 'key=34b53ec7436b4c5dad3675a2f577dace';
    this.worldTimeApi = 'http://worldtimeapi.org/api/timezone/';
    this.units = 'metric';
    this.language = 'EN';
    this.ddLongtitude = '';
    this.ddLatitude = '';
    this.dmsLongtitude = '';
    this.dmsLatitude = '';
    this.location = '';
    this.city = '';
    this.date = '';
    this.day = '';
    this.receivedTimeZone = '';
    this.nextDays = [];
    this.fetchedWeather = {};
    this.currentWeater = {};
    this.nextDaysWeather = [];
  }

  async getAccurateCoordinates() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.ddLongtitude = position.coords.longitude.toString().slice(0, 9);
      this.ddLatitude = position.coords.latitude.toString().slice(0, 9);
      this.showLocation();
    }, (error) => { console.log(error); }, { timeout: 2000 });
  }

  async getLocationInfoByIp() {
    await fetch(this.locationUrl)
      .then(data => data.json())
      .then((locationData) => {
        this.ddLatitude = locationData.lat;
        this.ddLongtitude = locationData.lon;
        this.city = locationData.city;
        this.location = `${locationData.city}, ${locationData.country}`;
        this.view.updateLocation(this.location);
      });
    return [this.ddLatitude, this.ddLongtitude];
  }

  async getLocationFromOpenCage(from) {
    let url;
    switch (from) {
      case 'coordinates':
        url = `${this.openCageService}&${this.openCageKey}&q=${this.ddLatitude},${this.ddLongtitude}&language=${this.language.toLowerCase()}`;
        break;
      case 'city':
        url = `${this.openCageService}&${this.openCageKey}&q=${this.city}&language=${this.language.toLowerCase()}`;
        break;
      default:
        break;
    }
    await fetch(url)
      .then(data => data.json())
      .then((locationData) => {
        switch (from) {
          case 'coordinates':
            if (this.language === 'EN') {
              this.city = `${locationData.results[0].components.city}`;
            }
            this.location = `${locationData.results[0].components.city}, ${locationData.results[0].components.country}`;
            this.view.updateLocation(this.location);
            break;
          default: {
            const { city = this.city, country } = locationData.results[0].components;
            this.receivedTimeZone = locationData.results[0].annotations.timezone.name;
            this.location = `${city}, ${country}`;
            this.ddLatitude = locationData.results[0].geometry.lat;
            this.ddLongtitude = locationData.results[0].geometry.lng;
            this.view.updateLocation(this.location);
            break;
          }
        }
      });
  }

  async getWeather() {
    const url = `${this.openWeatherUrl}q=${this.city}&units=${this.units}&appid=${this.openWeatherKey}&lang=${this.language.toLowerCase()}`;
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
        this.view.updateMainWeatherInfo(this.currentWeater, this.units);
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

    if (minutes.toString().length === 1) {
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

  async getDateByRequest() {
    const url = `${this.worldTimeApi}${this.receivedTimeZone}`;
    const match = new RegExp(/\D+/g);
    const localDate = new Date();
    let weekday = convertDay(localDate.getDay())[this.language];
    await fetch(url)
      .then(data => data.json())
      .then((timeData) => {
        const date = timeData.datetime;

        const ndate = date.split(match);
        let [, month] = ndate;
        const [, , day, hours, minutes] = ndate;
        month = convertMonth(month - 1)[this.language];

        if (this.language === 'EN') {
          weekday = weekday.slice(0, 3);
        }

        this.date = `${weekday} ${day} ${month} ${hours}:${minutes}`;
        this.view.updateDate(this.date);
      });
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
    this.dmsLatitude = convertCoordinates(this.ddLatitude);
    this.dmsLongtitude = convertCoordinates(this.ddLongtitude);
    showMap(this.ddLatitude, this.ddLongtitude);
    this.view.showCoordinatesOnPage(this.dmsLatitude, this.dmsLongtitude);
  }

  changeLanguage(lang) {
    this.language = lang;
    this.view.updateMainWeatherInfo(this.currentWeater, this.units);
    this.view.updateNextWeatherInfo(this.nextDaysWeather, this.days);
    this.view.showCoordinatesOnPage(this.dmsLatitude, this.dmsLongtitude);
    this.getDate();
    this.view.changeSearchButtonLanguage();
  }

  changeUnits(units) {
    this.units = units;
  }

  checkCitynameInputValue(value) {
    const template = new RegExp(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/g);
    if (!value.match(template)) {
      this.view.showErrorOnCitynameInput();
      return false;
    }
    this.view.removeErrorOnCitynameInput();
    return true;
  }

  setCityFromSearch(city) {
    this.city = city;
  }

  speechRecognition() {
    let result;
    const recognition = new (window.speechRecognition
      || window.webkitSpeechRecognition
      || window.mozSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 5;
    recognition.start();

    recognition.onresult = async (event) => {
      result = event.results[0][0].transcript;
      this.view.showSpeechResultOnPage(result);
      this.setCityFromSearch(result);
      await this.getLocationFromOpenCage('city');
      await this.getDateByRequest();
      this.showLocation();
      await this.getWeather();
    };
  }
}
