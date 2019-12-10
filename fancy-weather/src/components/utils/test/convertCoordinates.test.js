import convertCoordinates from '../convertCoordinates';

describe('convertCoordinates ', () => {
  const coordinate = 27.5667;

  it('Should be an instance of Function', () => {
    expect(convertCoordinates).toBeInstanceOf(Function);
  });

  test('Should return converted coordinates', () => {
    expect(convertCoordinates(coordinate)).toBe('27°34\'');
  });
});
