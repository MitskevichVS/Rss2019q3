import ToolsSelection from './Tools/Tools.js';
import Canvas from './canvas/Canvas.js';

class App {
  constructor() {
    this.app = {
      canvasSize: 32,
      primaryColor: '#010101',
      secondaryColor: '#ffffff',
      currentTool: '',
    };
  }

  start() {
    const tools = new ToolsSelection();
    const canvas = new Canvas();
    canvas.setResolution();
    const savedImage = localStorage.getItem('canvasImage');

    if (savedImage) {
      canvas.setImageFromLocalStorage(savedImage);
    }

    function addListeners() {
      const toolsConatainer = document.querySelector('.main-container__tools__pallete');
      const canvasContainer = document.querySelector('.canvas_background');

      toolsConatainer.addEventListener('click', (event) => {
        if (event.target.id || event.path[1].id) {
          if (event.target.id) {
            this.currentTool = event.target.id;
          } else {
            this.currentTool = event.path[1].id;
          }
          tools.highlight(this.currentTool);
        }
      });

      canvasContainer.addEventListener('mouseenter', () => {
        switch (this.currentTool) {
          case 'Pen':
            canvas.removeEventListenersCanvas();
            canvas.penDraw(this);
            break;
          case 'Bucket':
            canvas.removeEventListenersCanvas();
            canvas.paintBucket(this);
            break;
          case 'Color':
            canvas.removeEventListenersCanvas();
            tools.colorPickerTool();
            break;
          case 'Erase':
            canvas.removeEventListenersCanvas();
            canvas.eraser(this);
            break;
          default:
            break;
        }
      });

      document.addEventListener('keypress', (event) => {
        switch (event.code) {
          case 'KeyB':
            this.currentTool = 'Bucket';
            canvas.removeEventListenersCanvas();
            canvas.paintBucket(this);
            break;
          case 'KeyC':
            this.currentTool = 'Color';
            canvas.removeEventListenersCanvas();
            tools.colorPickerTool();
            break;
          case 'KeyP':
            this.currentTool = 'Pen';
            canvas.removeEventListenersCanvas();
            canvas.penDraw(this);
            break;
          case 'KeyE':
            this.currentTool = 'Erase';
            canvas.removeEventListenersCanvas();
            canvas.eraser(this);
            break;
          default:
            break;
        }
        tools.highlight(this.currentTool);
      });

      return this;
    }

    addListeners.apply(this.app);
    return this;
  }
}

const app = new App();
app.start();
