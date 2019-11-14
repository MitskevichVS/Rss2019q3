import ToolsSelection from './Tools/Tools.js';
import Canvas from './canvas/Canvas.js';

const tools = new ToolsSelection();
const canvas = new Canvas();

class App {
  constructor() {
    this.app = {
      canvasSize: 256,
      primaryColor: '#010101',
      secondaryColor: '#ffffff',
      currentTool: 'Pen',
      acessKey: '&client_id=715e40b83c35861ef42aec9d9d3db56b9ddd73508a4e5c9a65e9c1100fa22712',
      imageWidth: '',
      imageHeight: '',
      imageUrl: '',
      indent: '',
    };
  }

  start() {
    canvas.setResolution(this.app);
    const savedImage = localStorage.getItem('canvasImage');

    if (savedImage) {
      canvas.setImageFromLocalStorage(savedImage);
    }

    function addListeners() {
      const toolsConatainer = document.querySelector('.main-container__tools__pallete');
      const colorsContainer = document.querySelector('.main-container__tools__colors');
      const primaryColorTool = document.getElementById('primary_color');
      const secondaryColor = document.getElementById('secondary_color');
      const canvasContainer = document.querySelector('.canvas_background');
      const searchButtonsContainer = document.querySelectorAll('.canvas__container')[0];
      const dataFormInput = document.querySelector('#search__input');

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

      colorsContainer.addEventListener('click', (event) => {
        let RGBcolor;
        let HEXColor;
        switch (event.target.id) {
          case 'secondary_color':
            // eslint-disable-next-line max-len
            [this.app.primaryColor, this.app.secondaryColor] = [this.app.secondaryColor, this.app.primaryColor];
            tools.changeColors(this.app, primaryColorTool, secondaryColor);
            break;
          case 'primary_color':
            break;
          default:
            this.app.secondaryColor = this.app.primaryColor;
            RGBcolor = getComputedStyle(event.target).backgroundColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            HEXColor = canvas.RGBToHex(+RGBcolor[1], +RGBcolor[2], +RGBcolor[3]);
            this.app.primaryColor = HEXColor;
            tools.changeColors(this.app, primaryColorTool, secondaryColor);
            break;
        }
      });

      primaryColorTool.addEventListener('change', () => {
        this.app.secondaryColor = this.app.primaryColor;
        this.app.primaryColor = primaryColorTool.value;
        tools.changeColors(this.app, primaryColorTool, secondaryColor);
      });

      canvasContainer.addEventListener('mouseenter', () => {
        switch (this.app.currentTool) {
          case 'Pen':
            canvas.removeEventListenersCanvas();
            canvas.penDraw(this.app);
            break;
          case 'Bucket':
            canvas.removeEventListenersCanvas();
            canvas.paintBucket(this.app);
            break;
          case 'Color':
            canvas.removeEventListenersCanvas();
            tools.colorPickerTool();
            break;
          case 'Erase':
            canvas.removeEventListenersCanvas();
            canvas.eraser(this.app);
            break;
          default:
            break;
        }
      });

      document.addEventListener('keypress', (event) => {
        switch (event.code) {
          case 'KeyB':
            this.app.currentTool = 'Bucket';
            canvas.removeEventListenersCanvas();
            canvas.paintBucket(this.app);
            break;
          case 'KeyC':
            this.app.currentTool = 'Color';
            canvas.removeEventListenersCanvas();
            tools.colorPickerTool();
            break;
          case 'KeyP':
            this.app.currentTool = 'Pen';
            canvas.removeEventListenersCanvas();
            canvas.penDraw(this.app);
            break;
          case 'KeyE':
            this.app.currentTool = 'Erase';
            canvas.removeEventListenersCanvas();
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
        if (!inputData.match(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/g)) {
          return;
        }
        let url;
        switch (event.target.id) {
          case ('search__button'):
            url = `https://api.unsplash.com/photos/random?query=town,${inputData}${this.app.acessKey}`;
            this.fetchData(url);
            break;
          case ('blackWhite__button'):
            console.log('abyr111');
            break;
          default:
            break;
        }
      });

      return this;
    }

    addListeners.apply(this);
    return this;
  }

  calculateIndent(value) {
    this.app.indent = Math.round((this.app.canvasSize - value) / 2);
    canvas.drawImage(this.app);
  }

  calculateImageSize(height, width) {
    if (height >= width) {
      this.app.imageHeight = this.app.canvasSize;
      this.app.imageWidth = Math.round((width * this.app.imageHeight) / height);
      this.calculateIndent(this.app.imageWidth);
    } else {
      this.app.imageWidth = this.app.canvasSize;
      this.app.imageHeight = Math.round((height * this.app.imageWidth) / width);
      this.calculateIndent(this.app.imageHeight);
    }
    return this;
  }

  async fetchData(url) {
    await fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.app.imageUrl = data.urls.full;
        this.calculateImageSize(data.height, data.width);
      });
    return this;
  }
}

const app = new App();
app.start();
