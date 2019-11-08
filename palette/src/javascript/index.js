import ToolsSelection from './Tools/Tools';
// import Canvas from './canvas/Canvas';

class App {
  constructor() {
    this.app = {
      primaryColor: '#010101',
      secondaryColor: '#ffffff',
      currentTool: 'pen',
    };
  }

  start() {
    const tools = new ToolsSelection();
    // const canvas = new Canvas();

    function addListeners() {
      const toolsConatainer = document.querySelector('.main-container__tools__pallete');
      // const colorContainer = document.querySelector('.main-container__tools__colors');
      // const canvas = document.querySelector('#canvas');

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

      return this;
    }

    addListeners.apply(this.app);
    return this;
  }
}

const app = new App();
app.start();

/* window.onload = () => {
  const canvas = document.querySelector('#canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
}; */
