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
    await this.model.getCoordinates()
      .then(await this.model.getLocationInfo())
      .then(await this.model.getWeather())
      .then(await this.model.getBackgroundPhoto())
      // .then(this.view.hideLoader())
      .then(console.log('done'));
    this.addEventListeners();
  }

  addEventListeners() {
    const backgroundButton = document.querySelector('#imageButton');
    const langSelect = document.querySelector('#languageSelect');
    const unitsSwitch = document.querySelector('#units');

    // const searchButtonByCity = document.querySelector('.searchform__input');
    // const voiceControlButton = document.querySelector('.searchform__button-voice');
    // const cityNameInput = document.querySelector('.searchform__input');

    backgroundButton.addEventListener('click', async (event) => {
      if (!event.target.id) {
        this.view.changeScale(event.target.parentNode);
      } else {
        this.view.changeScale(event.target);
      }
      this.view.setBlurToBackground();
      await this.model.getBackgroundPhoto();
      console.log(event.target);
      console.log('change background');
    });

    langSelect.addEventListener('change', (event) => {
      console.log(event.target.value);
      this.view.changeLanguageConfig(event.target.value);
      this.model.changeLanguage(event.target.value);
      this.model.getWeather();
    });

    unitsSwitch.addEventListener('change', (event) => {
      console.log(event.target.checked);
    });
  }
}
