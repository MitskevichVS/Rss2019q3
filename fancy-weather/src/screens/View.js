import loader from './loader/loader';

export default class View {
  showLoader() {
    loader();
    return this;
  }
}
