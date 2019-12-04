const convertCoordinates = (coordinate) => {
  const num = Math.abs(+coordinate);
  const degrees = Math.floor(num);
  const minutes = Math.floor((num - degrees) * 60);

  return `${degrees}°${minutes}'`;
};

const convertDay = (day) => {
  let weekday;
  switch (day) {
    case 0:
    case 7:
      weekday = 'Sunday';
      break;
    case 1:
    case 8:
      weekday = 'Monday';
      break;
    case 2:
    case 9:
      weekday = 'Tuesday';
      break;
    case 3:
      weekday = 'Wednesday';
      break;
    case 4:
      weekday = 'Thursday';
      break;
    case 5:
      weekday = 'Friday';
      break;
    case 6:
      weekday = 'Saturday';
      break;
    default:
      break;
  }
  return weekday;
};

const convertMonth = (month) => {
  let monthName;
  switch (month) {
    case 0:
      monthName = 'January';
      break;
    case 1:
      monthName = 'February';
      break;
    case 2:
      monthName = 'March';
      break;
    case 3:
      monthName = 'April';
      break;
    case 4:
      monthName = 'May';
      break;
    case 5:
      monthName = 'June';
      break;
    case 6:
      monthName = 'July';
      break;
    case 7:
      monthName = 'August';
      break;
    case 8:
      monthName = 'September';
      break;
    case 9:
      monthName = 'October';
      break;
    case 10:
      monthName = 'November';
      break;
    case 11:
      monthName = 'December';
      break;
    default:
      break;
  }
  return monthName;
};

const sortWeatherData = (inputData) => {
  const data = inputData;
  console.log(data);
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

export {
  convertCoordinates, convertDay, convertMonth, sortWeatherData,
};
