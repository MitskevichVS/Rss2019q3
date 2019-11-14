import ToolsSelection from './Tools';

describe('ToolsSelection.highlight', () => {
  it('Should be an instance of Function', () => {
    expect(ToolsSelection.prototype.highlight).toBeInstanceOf(Function);
  });
});

describe('ToolsSelection.colorPickerTool', () => {
  it('Should be an instance of Function', () => {
    expect(ToolsSelection.prototype.colorPickerTool).toBeInstanceOf(Function);
  });
});

describe('ToolsSelection.changeColors', () => {
  it('Should be an instance of Function', () => {
    expect(ToolsSelection.prototype.changeColors).toBeInstanceOf(Function);
  });
});
