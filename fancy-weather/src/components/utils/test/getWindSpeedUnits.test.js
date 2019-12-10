import getWindSpeedUnits from '../getWindSpeedUnits';

describe('Is getWindSpeedUnits ', () => {
  it('Should be an instance of Function', () => {
    expect(getWindSpeedUnits).toBeInstanceOf(Function);
  });

  test('Should return value by request', () => {
    expect(getWindSpeedUnits('metric')).toBe('m/s');
    expect(getWindSpeedUnits()).toBe('mph');
  });
});
