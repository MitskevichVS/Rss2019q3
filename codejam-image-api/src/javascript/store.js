export const saveState = (state) => {
  localStorage.setItem('canvasSize', state.canvasSize);
  localStorage.setItem('primaryColor', state.primaryColor);
  localStorage.setItem('secondaryColor', state.secondaryColor);
  localStorage.setItem('currentTool', state.currentTool);
};

export default {
  saveState,
};
