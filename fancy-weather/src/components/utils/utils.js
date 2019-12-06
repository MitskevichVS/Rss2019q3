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
      weekday = { EN: 'Sunday', RU: 'Воскресенье', BE: 'Нядзеля' };
      break;
    case 1:
    case 8:
      weekday = { EN: 'Monday', RU: 'Понедельник', BE: 'Панядзелак' };
      break;
    case 2:
    case 9:
      weekday = { EN: 'Tuesday', RU: 'Вторник', BE: 'Аўторак' };
      break;
    case 3:
      weekday = { EN: 'Wednesday', RU: 'Среда', BE: 'Серада' };
      break;
    case 4:
      weekday = { EN: 'Thursday', RU: 'Четверг', BE: 'Чацьвер' };
      break;
    case 5:
      weekday = { EN: 'Friday', RU: 'Пятница', BE: 'Пятніца' };
      break;
    case 6:
      weekday = { EN: 'Saturday', RU: 'Суббота', BE: 'Cубота' };
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
      monthName = { EN: 'January', RU: 'Января', BE: 'Студзеня' };
      break;
    case 1:
      monthName = { EN: 'February', RU: 'Февраля', BE: 'Лютага' };
      break;
    case 2:
      monthName = { EN: 'March', RU: 'Марта', BE: 'Сакавіка' };
      break;
    case 3:
      monthName = { EN: 'April', RU: 'Апреля', BE: 'Красавіка' };
      break;
    case 4:
      monthName = { EN: 'May', RU: 'Мая', BE: 'Мая' };
      break;
    case 5:
      monthName = { EN: 'June', RU: 'Июня', BE: 'Чэрвеня' };
      break;
    case 6:
      monthName = { EN: 'July', RU: 'Июля', BE: 'Ліпеня' };
      break;
    case 7:
      monthName = { EN: 'August', RU: 'Августа', BE: 'Жніўня' };
      break;
    case 8:
      monthName = { EN: 'September', RU: 'Сентября', BE: 'Верасня' };
      break;
    case 9:
      monthName = { EN: 'October', RU: 'Октября', BE: 'Кастрычніка' };
      break;
    case 10:
      monthName = { EN: 'November', RU: 'Ноября', BE: 'Лістапада' };
      break;
    case 11:
      monthName = { EN: 'December', RU: 'Декабря', BE: 'Снежня' };
      break;
    default:
      break;
  }
  return monthName;
};

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

const getWindSpeedUnits = (units) => {
  let windSpeedUnit;
  switch (units) {
    case 'metric':
      windSpeedUnit = 'm/s';
      break;
    default:
      windSpeedUnit = 'mph';
      break;
  }
  return windSpeedUnit;
};

export {
  convertCoordinates,
  convertDay,
  convertMonth,
  sortWeatherData,
  getWindSpeedUnits,
};
