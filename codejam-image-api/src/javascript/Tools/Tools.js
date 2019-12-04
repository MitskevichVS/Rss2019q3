import { rgbToHex } from '../utils/color_utils.js';

export default class Tools {
  constructor() {
    this.primaryColor = localStorage.getItem('primaryColor') || '#010101';
    this.secondaryColor = localStorage.getItem('secondaryColor') || '#ffffff';

    this.primaryColorTool = document.getElementById('primary_color');
    this.secondaryColorTool = document.getElementById('secondary_color');
    this.colorIndicators = document.getElementsByClassName('tools_indicator');

    this.primaryColorTool.addEventListener('change', this.primaryColorChanged);
    this.colorIndicators.addEventListener('click', this.colorIndicatorClicked);
  }

  primaryColorChanged() {
    this.changePrimaryColor(this.primaryColorTool.value);
  }

  colorIndicatorClicked(e) {
    const rgbColor = getComputedStyle(e.target).backgroundColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    const hexColor = rgbToHex(+rgbColor[1], +rgbColor[2], +rgbColor[3]);
    this.changePrimaryColor(hexColor);
  }

  highlight(e) {
    const element = document.getElementById(e);
    const parentElement = element.parentNode;
    const parentElementChildArray = [...parentElement.children];
    parentElementChildArray.forEach((item) => { item.classList.remove('selected_tools'); });
    element.classList.add('selected_tools');
    return this;
  }

  colorPickerTool() {
    const eyedropper = document.querySelector('.colorpick-eyedropper-input-trigger');
    eyedropper.click();
  }

  changePrimaryColor(primary) {
    this.secondaryColor = this.primaryColor;
    this.primaryColor = primary;

    this.primaryColorTool.value = this.primaryColor;
    this.secondaryColorTool.style.backgroundColor = this.secondaryColor;
  }
}
