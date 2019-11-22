import loader from './loader/loader';
import head from './head/head';
import header from './header/header';
import main from './main/main';
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
}
