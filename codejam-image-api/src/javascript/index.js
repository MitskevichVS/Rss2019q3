import ToolsSelection from './Tools/Tools.js';
import Canvas from './canvas/Canvas.js';
import authentication from './authentication/authentication.js';
import '../styles/styles.css';
import { saveState } from './store.js';

const tools = new Tools();
const canvas = new Canvas();

class App {
  constructor() {
    this.app = {
      canvasSize: localStorage.getItem('canvasSize') || 256,
      currentTool: localStorage.getItem('currentTool') || 'Pen',
      acessKey: '&client_id=715e40b83c35861ef42aec9d9d3db56b9ddd73508a4e5c9a65e9c1100fa22712',
    };
  }

  restoreState() {
    canvas.setResolution(this.app.canvasSize);
    canvas.redrawImage();

    tools.highlight(this.app.currentTool);
    tools.changeColors(this.app.primaryColor);
  }

  start() {
    this.restoreState();

    function addListeners() {
      const toolsConatainer = document.querySelector('.main-container__tools__pallete');
      const canvasContainer = document.querySelector('.canvas_background');
      const searchButtonsContainer = document.querySelectorAll('.canvas__container')[0];
      const dataFormInput = document.getElementById('search__input');
      const rangeSlider = document.querySelector('.canvas__container__input-range');
      const clearButton = document.getElementById('clear__button');
      const authButton = document.querySelector('.header__button-oauth');

      window.onbeforeunload = () => saveState(this.app);

      
      rangeSlider.value = Math.floor(this.app.canvasSize / 256);

      toolsConatainer.addEventListener('click', (event) => {
        if (event.target.id || event.path[1].id) {
          if (event.target.id) {
            this.app.currentTool = event.target.id;
          } else {
            this.app.currentTool = event.path[1].id;
          }
          tools.highlight(this.app.currentTool);
        }
      });

      canvasContainer.addEventListener('mouseenter', () => {
        canvas.removeEventListenersCanvas();
        switch (this.app.currentTool) {
          case 'Pen':
            canvas.penDraw(this.app, tools.primaryColor, tools.secondaryColor);
            break;
          case 'Bucket':
            canvas.paintBucket(this.app);
            break;
          case 'Color':
            tools.colorPickerTool();
            break;
          case 'Erase':
            canvas.eraser(this.app);
            break;
          default:
            break;
        }
      });

      document.addEventListener('keypress', (event) => {
        canvas.removeEventListenersCanvas();
        switch (event.code) {
          case 'KeyB':
            this.app.currentTool = 'Bucket';
            canvas.paintBucket(this.app);
            break;
          case 'KeyC':
            this.app.currentTool = 'Color';
            tools.colorPickerTool();
            break;
          case 'KeyP':
            this.app.currentTool = 'Pen';
            canvas.penDraw(this.app, tools.primaryColor, tools.secondaryColor);
            break;
          case 'KeyE':
            this.app.currentTool = 'Erase';
            canvas.eraser(this.app);
            break;
          default:
            break;
        }
        tools.highlight(this.app.currentTool);
      });

      dataFormInput.addEventListener('input', () => {
        const inputData = dataFormInput.value;
        if (!inputData.match(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/g)) {
          dataFormInput.classList.remove('canvas__container__input-confirmed');
          dataFormInput.classList.add('canvas__container__input-error');
        } else {
          dataFormInput.classList.remove('canvas__container__input-error');
          dataFormInput.classList.add('canvas__container__input-confirmed');
        }
      });

      searchButtonsContainer.addEventListener('click', (event) => {
        const inputData = dataFormInput.value;
        let url;
        switch (event.target.id) {
          case ('search__button'):
            if (!inputData.match(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/g)) {
              return;
            }
            url = `https://api.unsplash.com/photos/random?query=town,${inputData}${this.app.acessKey}`;
            this.fetchData(url);
            break;
          case ('blackWhite__button'):
            canvas.grayScale();
            break;
          default:
            break;
        }
      });

      rangeSlider.addEventListener('input', (event) => {
        this.app.canvasSize = +event.target.value || 128;
        canvas.setResolution(this.app.canvasSize);
        canvas.redrawImage();
      });

      clearButton.addEventListener('click', () => {
        canvas.clearAll();
      });

      authButton.addEventListener('click', () => {
        authentication();
      });

      return this;
    }

    addListeners.apply(this);
    return this;
  }

  async fetchData(url) {
    await fetch(url)
      .then(res => res.json())
      .then((data) => {
        canvas.drawImage(data.urls.small, data.width, data.height);
      });
    return this;
  }
}

const app = new App();
app.start();
