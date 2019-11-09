import ToolsSelection from './Tools/Tools.js';
import Canvas from './canvas/Canvas.js';

class App {
  constructor() {
    this.app = {
      primaryColor: '#010101',
      secondaryColor: '#ffffff',
      currentTool: '',
    };
  }

  start() {
    const tools = new ToolsSelection();
    const canvas = new Canvas();
    canvas.setResolution();

    console.log(canvas);

    function addListeners() {
      const toolsConatainer = document.querySelector('.main-container__tools__pallete');
      // const colorContainer = document.querySelector('.main-container__tools__colors');
      // const canvas = document.querySelector('#canvas');
      // const ctx = canvas.getContext('2d');
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
          default:
            break;
        }
      });

      return this;
    }

    addListeners.apply(this.app);
    return this;
  }
}

const app = new App();
app.start();
