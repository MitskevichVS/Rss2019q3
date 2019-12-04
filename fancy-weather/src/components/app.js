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
      .then(
        await this.model.getLocationInfo(),
      ).then(
        await this.model.getWeather(),
      ).then(
        await this.model.getBackgroundPhoto(),
      )
      .then(
        console.log('done'),
      );
    return this;
  }
}
