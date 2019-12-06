import Model from './model';
import View from '../screens/view';

export default class App {
  constructor() {
    this.view = new View();
    this.model = new Model(this.view);
  }

  async start() {
    this.view.connectThirdPartyLinks();
    this.view.showLoader();
    this.view.showHeader();
    this.view.showMain();
    this.model.getDate();
    this.view.hideLoader();
    console.log(navigator.connection.downlink);
    await this.model.getAccurateCoordinates()
      .then(await this.model.getLocationInfoByIp())
      .then(await this.model.getWeather())
      .then(await this.model.getLocationFromOpenCage('coordinates'))
      // .then(this.model.getBackgroundPhoto())
      // .then(this.view.hideLoader())
      .then(console.log('done'))
      .then(this.addEventListeners());
  }

  addEventListeners() {
    const backgroundButton = document.querySelector('#imageButton');
    const langSelect = document.querySelector('#languageSelect');
    const unitsSwitch = document.querySelector('#units');

    const searchButtonByCity = document.querySelector('.searchform__button-search');
    // const voiceControlButton = document.querySelector('.searchform__button-voice');
    const cityNameInput = document.querySelector('.searchform__input');

    backgroundButton.addEventListener('click', async (event) => {
      if (!event.target.id) {
        this.view.changeScale(event.target.parentNode);
      } else {
        this.view.changeScale(event.target);
      }
      this.view.setBlurToBackground();
      await this.model.getBackgroundPhoto();
    });

    langSelect.addEventListener('change', (event) => {
      this.view.changeLanguageConfig(event.target.value);
      this.model.changeLanguage(event.target.value);
      this.model.getWeather();
      this.model.getLocationFromOpenCage('city');
    });

    unitsSwitch.addEventListener('change', async (event) => {
      const switchValue = event.target.checked;
      let units;
      if (switchValue) {
        units = 'imperial';
      } else {
        units = 'metric';
      }
      this.model.changeUnits(units);
      await this.model.getWeather();
    });

    searchButtonByCity.addEventListener('click', async () => {
      const inputValue = cityNameInput.value;

      if (!this.model.checkCitynameInputValue(inputValue)) {
        return;
      }

      this.model.setCityFromSearch(inputValue);
      await this.model.getLocationFromOpenCage('city')
        .then(this.model.getWeather());
    });

    cityNameInput.addEventListener('input', (event) => {
      const inputValue = event.target.value;
      this.model.checkCitynameInputValue(inputValue);
    });
  }
}
