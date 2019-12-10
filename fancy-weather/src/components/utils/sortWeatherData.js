const sortWeatherData = (inputData) => {
  const data = inputData;
  const weatherData = {};

  weatherData.description = data.weather[0].description;
  weatherData.temp = Math.round(data.main.temp);
  weatherData.type = data.weather[0].main;
  weatherData.weatherId = data.weather[0].id;
  weatherData.windSpeed = data.wind.speed;
  weatherData.humidity = data.main.humidity;
  weatherData.pressure = data.main.grnd_level;

  return weatherData;
};


export default sortWeatherData;
