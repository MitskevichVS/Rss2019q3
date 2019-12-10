import sortWeatherData from '../sortWeatherData';
import weatherData from './weatherData';

describe('sortWeatherData ', () => {
  const answer = {
    description: 'broken clouds',
    temp: 5,
    type: 'Clouds',
    weatherId: 803,
    windSpeed: 3.6,
    humidity: 88,
    pressure: 982,
    weather: 'Clouds',
  };

  it('Should be an instance of Function', () => {
    expect(sortWeatherData).toBeInstanceOf(Function);
  });

  test('Should return converted coordinates', () => {
    expect(sortWeatherData(weatherData.list[1])).toEqual(answer);
  });
});
