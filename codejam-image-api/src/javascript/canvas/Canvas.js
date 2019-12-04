import { rgbToHex } from '../utils/color_utils.js';

export default class Canvas {
  constructor() {
    this.state = {
      currentListeners: [],
      savedImage: '',
    };
    this.canvas = document.getElementById('canvas');
    this.size = 128;
  }

  clearAll() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    localStorage.setItem('canvasImage', canvas.toDataURL());
  }

  showAlert() {
    const alertMessage = document.querySelector('.canvas__container-alert');
    alertMessage.classList.add('show-alert');
    setTimeout(() => {
      alertMessage.classList.remove('show-alert');
    }, 2000);
  }

  checkEmptyCanvas() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    return !data.some(channel => channel !== 0);
  }

  grayScale() {
    if (this.checkEmptyCanvas()) {
      this.showAlert();
    } else {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const { data } = imageData;
      data.forEach((item, index) => {
        if (index % 4 === 0) {
          const avg = (item + data[index + 1] + data[index + 2]) / 3;
          data[index] = avg;
          data[index + 1] = avg;
          data[index + 2] = avg;
        }
      });
      ctx.putImageData(imageData, 0, 0);
      localStorage.setItem('canvasImage', canvas.toDataURL());
    }
  }

  setResolution(resolution) {
    this.size = resolution;
    this.canvas.width = resolution;
    this.canvas.height = resolution;
    this.updateResolutionInfo(resolution);
  }

  updateResolutionInfo(resolution) {
    const resolutionInfo = document.querySelector('.canvas__container__text-resolution');
    resolutionInfo.textContent = resolution;
  }

  removeEventListenersCanvas() {
    const canvas = document.getElementById('canvas');
    this.state.currentListeners.forEach((item) => {
      canvas.removeEventListener(item[0], item[1]);
    });
    this.state.currentListeners.length = 0;
  }



  drawImage(imageSrc, width, height) {
    let imageWidth = this.size;
    let imageHeight = this.size;
    let imageIndent = 0;

    if (width && height && width !== height) {
      const size = this.adjustImageSize(width, height);
      ({ imageWidth, imageHeight, imageIndent } = size);
    }

    const ctx = this.canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    const image = new Image();
    image.crossOrigin = 'Anonymous';
    image.src = imageSrc;

    image.onload = () => {
      if (imageWidth <= imageHeight) {
        ctx.drawImage(image, imageIndent, 0, imageWidth, imageHeight);
      } else {
        ctx.drawImage(image, 0, imageIndent, imageWidth, imageHeight);
      }
      localStorage.setItem('canvasImage', this.canvas.toDataURL());
    };
  }

  adjustImageSize(width, height) {
    let imageWidth;
    let imageHeight;
    let imageIndent;

    if (height >= width) {
      imageWidth = Math.round((width * this.size) / height);
      imageHeight = this.size;
      imageIndent = Math.round((this.size - imageWidth) / 2);
    } else {
      imageWidth = this.size;
      imageHeight = Math.round((height * this.size) / width);
      imageIndent = Math.round((this.size - imageHeight) / 2);
    }

    return {
      imageWidth,
      imageHeight,
      imageIndent,
    };
  }

  redrawImage() {
    const savedImage = localStorage.getItem('canvasImage');
    if (savedImage) {
      canvas.drawImage(savedImage);
    }
  }

  penDraw(app, primaryColor, secondaryColor) {
    this.removeEventListenersCanvas();
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const mouse = { x: 0, y: 0 };
    const moveMouse = { x: 0, y: 0 };
    let draw = false;
    let leftButtonFlag = false;
    let rightButtonFlag = false;

    const penToolMousedown = (event) => {
      this.state.currentListeners.push(['mousedown', penToolMousedown]);
      mouse.x = Math.floor(event.offsetX / (512 / app.canvasSize));
      mouse.y = Math.floor(event.offsetY / (512 / app.canvasSize));
      draw = true;
      if (event.button === 0) {
        ctx.fillStyle = primaryColor;
        leftButtonFlag = true;
      } else {
        ctx.fillStyle = secondaryColor;
        rightButtonFlag = true;
      }
      ctx.fillRect(mouse.x, mouse.y, 1, 1);
    };

    const penToolMousemove = (event) => {
      this.state.currentListeners.push(['mousemove', penToolMousemove]);
      if (draw === true) {
        if (leftButtonFlag === true) {
          ctx.fillStyle = primaryColor;
        } else if (rightButtonFlag === true) {
          ctx.fillStyle = secondaryColor;
        }
        moveMouse.x = Math.floor(event.offsetX / (512 / app.canvasSize));
        moveMouse.y = Math.floor(event.offsetY / (512 / app.canvasSize));

        const dx = Math.abs(mouse.x - moveMouse.x);
        const dy = Math.abs(mouse.y - moveMouse.y);
        const sx = (mouse.x < moveMouse.x) ? 1 : -1;
        const sy = (mouse.y < moveMouse.y) ? 1 : -1;
        let error = dx - dy;

        while (!((mouse.x === moveMouse.x) && (mouse.y === moveMouse.y))) {
          const e2 = error << 1;
          if (e2 > -dy) {
            error -= dy;
            mouse.x += sx;
          }
          if (e2 < dx) {
            error += dx;
            mouse.y += sy;
          }
          ctx.fillRect(mouse.x, mouse.y, 1, 1);
        }
      }
    };

    const penToolMouseup = (event) => {
      this.state.currentListeners.push(['mouseup', penToolMouseup]);
      mouse.x = Math.floor(event.offsetX / (512 / app.canvasSize));
      mouse.y = Math.floor(event.offsetY / (512 / app.canvasSize));
      if (event.button === 0) {
        ctx.fillStyle = primaryColor;
      } else {
        ctx.fillStyle = secondaryColor;
      }
      ctx.fillRect(mouse.x, mouse.y, 1, 1);
      draw = false;
      leftButtonFlag = false;
      rightButtonFlag = false;
      localStorage.setItem('canvasImage', canvas.toDataURL());
    };

    canvas.addEventListener('mousedown', penToolMousedown);

    canvas.addEventListener('mousemove', penToolMousemove);

    canvas.addEventListener('mouseup', penToolMouseup);

    canvas.addEventListener('mouseleave', () => { draw = false; });

    canvas.addEventListener('contextmenu', event => event.preventDefault());
  }

  eraser(app) {
    this.removeEventListenersCanvas(app);
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const mouse = { x: 0, y: 0 };
    let erase = false;

    const eraseToolMousedown = (event) => {
      this.state.currentListeners.push(['mousedown', eraseToolMousedown]);
      mouse.x = Math.floor(event.offsetX / (512 / app.canvasSize));
      mouse.y = Math.floor(event.offsetY / (512 / app.canvasSize));
      erase = true;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillRect(mouse.x, mouse.y, 3, 3);
    };

    const eraseToolMousemove = (event) => {
      this.state.currentListeners.push(['mousemove', eraseToolMousemove]);
      if (erase === true) {
        mouse.x = Math.floor(event.offsetX / (512 / app.canvasSize));
        mouse.y = Math.floor(event.offsetY / (512 / app.canvasSize));
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillRect(mouse.x, mouse.y, 3, 3);
      }
    };

    const eraseToolMouseup = (event) => {
      this.state.currentListeners.push(['mouseup', eraseToolMouseup]);
      mouse.x = Math.floor(event.offsetX / (512 / app.canvasSize));
      mouse.y = Math.floor(event.offsetY / (512 / app.canvasSize));
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillRect(mouse.x, mouse.y, 3, 3);
      ctx.globalCompositeOperation = 'source-over';
      erase = false;
      localStorage.setItem('canvasImage', canvas.toDataURL());
    };

    canvas.addEventListener('mousedown', eraseToolMousedown);

    canvas.addEventListener('mousemove', eraseToolMousemove);

    canvas.addEventListener('mouseup', eraseToolMouseup);

    canvas.addEventListener('mouseleave', () => { erase = false; });

    canvas.addEventListener('contextmenu', event => event.preventDefault());
  }

  paintBucket(app) {
    this.removeEventListenersCanvas(app);
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const mouse = { x: 0, y: 0 };
    let leftFlag = true;
    let rightFlag = true;
    const stack = [];

    const goUp = (mous, R, G, B, A) => {
      if (mous.y === 0) return;
      let Rn = R;
      let Bn = B;
      let Gn = G;
      let An = A;
      let ycoord = mous.y;
      while (ycoord >= 1 && R === Rn && G === Gn && B === Bn && A === An) {
        const cnvs = ctx.getImageData(mous.x, ycoord - 1, 1, 1).data;
        [Rn, Bn, Gn, An] = cnvs;
        if (ycoord >= 1 && R === Rn && G === Gn && B === Bn && A === An) {
          ycoord -= 1;
        } else if (ycoord === 0 || R !== Rn || G !== Gn || B !== Bn || A !== An) {
          break;
        }
      }
      mouse.y = ycoord;
    };

    const watchLeftPixel = (mous, R, G, B, A) => {
      const cnvs = ctx.getImageData(mous.x - 1, mous.y, 1, 1).data;
      const Rn = cnvs[0];
      const Bn = cnvs[1];
      const Gn = cnvs[2];
      const An = cnvs[3];
      if (R === Rn && G === Gn && B === Bn && A === An && mous.x >= 0 && mous.x < app.canvasSize) {
        return true;
      } return false;
    };

    const watchRightPixel = (mous, R, G, B, A) => {
      const cnvs = ctx.getImageData(mous.x + 1, mous.y, 1, 1).data;
      const Rn = cnvs[0];
      const Bn = cnvs[1];
      const Gn = cnvs[2];
      const An = cnvs[3];
      if (R === Rn && G === Gn && B === Bn && A === An && mous.x < app.canvasSize) {
        return true;
      } return false;
    };

    const paintColumn = (mous, Ra, Ga, Ba, Aa, evt) => {
      rightFlag = true;
      leftFlag = true;
      const mouseCoord = mous;
      if (evt.button === 0) {
        ctx.fillStyle = app.primaryColor;
      } else if (evt.button === 2) {
        ctx.fillStyle = app.secondaryColor;
      }
      ctx.fillRect(mouseCoord.x, mouseCoord.y, 1, 1);
      if (watchLeftPixel(mouse, Ra, Ga, Ba, Aa) === true) {
        if (leftFlag === true && mouse.y < 31) {
          stack.push([mouse.x - 1, mouse.y]);
          leftFlag = false;
        }
      } else leftFlag = true;
      if (watchRightPixel(mouse, Ra, Ga, Ba, Aa) === true) {
        if (stack[stack.length - 1] === [mouse.x, mouse.y]) {
          rightFlag = false;
          if (rightFlag === true && mouse.x < 31) {
            stack.push([mouse.x + 1, mouse.y]);
            rightFlag = false;
          }
        } else rightFlag = true;
      }
      while (mouseCoord.y < app.canvasSize) {
        const cnvsPaintCell = ctx.getImageData(mouseCoord.x, mouseCoord.y + 1, 1, 1).data;
        const Rn = cnvsPaintCell[0];
        const Gn = cnvsPaintCell[1];
        const Bn = cnvsPaintCell[2];
        const An = cnvsPaintCell[3];
        mouseCoord.y += 1;
        if (Rn === Ra && Gn === Ga && Bn === Ba && An === Aa && mouseCoord.y < app.canvasSize) {
          ctx.fillRect(mouseCoord.x, mouseCoord.y, 1, 1);
          if (watchLeftPixel(mouse, Ra, Ga, Ba, Aa) === true) {
            if (leftFlag === true) {
              stack.push([mouse.x - 1, mouse.y]);
              leftFlag = false;
            }
          } else leftFlag = true;
          if (watchRightPixel(mouse, Ra, Ga, Ba, Aa) === true) {
            if (rightFlag === true) {
              stack.push([mouse.x + 1, mouse.y]);
              rightFlag = false;
            }
          } else rightFlag = true;
        } else break;
      }
    };

    const paintBucketToolMousedown = (event) => {
      this.state.currentListeners.push(['mousedown', paintBucketToolMousedown]);
      mouse.x = Math.floor(event.offsetX / (512 / app.canvasSize));
      mouse.y = Math.floor(event.offsetY / (512 / app.canvasSize));

      const cnvs = ctx.getImageData(mouse.x, mouse.y, 1, 1).data;
      const R = cnvs[0];
      const B = cnvs[1];
      const G = cnvs[2];
      const A = cnvs[3];

      const clickedColor = rgbToHex(R, G, B);
      let targetColor;

      if (event.button === 0) {
        targetColor = app.primaryColor;
      } else if (event.button === 2) {
        targetColor = app.secondaryColor;
      }

      if (clickedColor === targetColor) return;

      stack.push([mouse.x, mouse.y]);

      while (stack.length > 0) {
        const coordFromStack = stack.pop();
        [mouse.x, mouse.y] = coordFromStack;
        goUp(mouse, R, G, B, A);
        paintColumn(mouse, R, G, B, A, event);
      }

      localStorage.setItem('canvasImage', canvas.toDataURL());
    };

    canvas.addEventListener('mousedown', paintBucketToolMousedown);
  }
}
