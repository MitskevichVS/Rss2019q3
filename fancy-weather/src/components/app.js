import Model from './model';
import View from '../screens/view';

export default class App {
  constructor() {
    this.view = new View();
    this.model = new Model(this.view);
  }

  async start() {
    this.view.connectThirdPartyLinks();
    this.view.showHeader();
    this.view.showMain();
    this.model.getDate();
    await this.model.getCoordinates()
      .then(
        await this.model.getLocationInfo(),
      ).then(
        this.model.getWeather(),
      ).then(
        console.log('done'),
      );
    return this;
  }
}
