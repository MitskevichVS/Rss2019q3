export default class Canvas {
  constructor() {
    this.state = {
      currentListeners: [],
    };
  }

  setResolution() {
    const canvas = document.getElementById('canvas');
    canvas.width = 32;
    canvas.height = 32;
    return this;
  }

  removeEventListenersCanvas() {
    const canvas = document.getElementById('canvas');
    this.state.currentListeners.forEach((item) => {
      canvas.removeEventListener(item[0], item[1]);
    });
  }

  penDraw(app) {
    this.removeEventListenersCanvas();
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const mouse = { x: 0, y: 0 };
    let draw = false;
    let leftButtonFlag = false;
    let rightButtonFlag = false;

    const penToolMousedown = (event) => {
      this.state.currentListeners.push(['mousedown', penToolMousedown]);
      mouse.x = Math.floor(event.offsetX / 16);
      mouse.y = Math.floor(event.offsetY / 16);
      draw = true;
      if (event.button === 0) {
        ctx.fillStyle = app.primaryColor;
        leftButtonFlag = true;
      } else {
        ctx.fillStyle = app.secondaryColor;
        rightButtonFlag = true;
      }
      ctx.fillRect(mouse.x, mouse.y, 1, 1);
    };

    const penToolMousemove = (event) => {
      this.state.currentListeners.push(['mousemove', penToolMousemove]);
      if (draw === true) {
        mouse.x = Math.floor(event.offsetX / 16);
        mouse.y = Math.floor(event.offsetY / 16);
        if (leftButtonFlag === true) {
          ctx.fillStyle = app.primaryColor;
        } else if (rightButtonFlag === true) {
          ctx.fillStyle = app.secondaryColor;
        }
        ctx.fillRect(mouse.x, mouse.y, 1, 1);
      }
    };

    const penToolMouseup = (event) => {
      this.state.currentListeners.push(['mouseup', penToolMouseup]);
      mouse.x = Math.floor(event.offsetX / 16);
      mouse.y = Math.floor(event.offsetY / 16);
      if (event.button === 0) {
        ctx.fillStyle = app.primaryColor;
      } else {
        ctx.fillStyle = app.secondaryColor;
      }
      ctx.fillRect(mouse.x, mouse.y, 1, 1);
      draw = false;
      leftButtonFlag = false;
      rightButtonFlag = false;
    };

    canvas.addEventListener('mousedown', penToolMousedown);

    canvas.addEventListener('mousemove', penToolMousemove);

    canvas.addEventListener('mouseup', penToolMouseup);

    canvas.addEventListener('mouseleave', () => { draw = false; });

    canvas.addEventListener('contextmenu', event => event.preventDefault());
  }
}
