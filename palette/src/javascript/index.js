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
