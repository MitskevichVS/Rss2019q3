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
      weekday = { EN: 'Sunday', RU: 'Воскресенье', BY: 'Нядзеля' };
      break;
    case 1:
    case 8:
      weekday = { EN: 'Monday', RU: 'Понедельник', BY: 'Панядзелак' };
      break;
    case 2:
    case 9:
      weekday = { EN: 'Tuesday', RU: 'Вторник', BY: 'Аўторак' };
      break;
    case 3:
      weekday = { EN: 'Wednesday', RU: 'Среда', BY: 'Серада' };
      break;
    case 4:
      weekday = { EN: 'Thursday', RU: 'Четверг', BY: 'Чацьвер' };
      break;
    case 5:
      weekday = { EN: 'Friday', RU: 'Пятница', BY: 'Пятніца' };
      break;
    case 6:
      weekday = { EN: 'Saturday', RU: 'Суббота', BY: 'Cубота' };
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
      monthName = { EN: 'January', RU: 'Январь', BY: 'Студзень' };
      break;
    case 1:
      monthName = { EN: 'FebRUary', RU: 'Февраль', BY: 'Люты' };
      break;
    case 2:
      monthName = { EN: 'March', RU: 'Март', BY: 'Сакавік' };
      break;
    case 3:
      monthName = { EN: 'April', RU: 'Апрель', BY: 'Красавік' };
      break;
    case 4:
      monthName = { EN: 'May', RU: 'Май', BY: 'Май' };
      break;
    case 5:
      monthName = { EN: 'June', RU: 'Июнь', BY: 'Чэрвень' };
      break;
    case 6:
      monthName = { EN: 'July', RU: 'Июль', BY: 'Ліпень' };
      break;
    case 7:
      monthName = { EN: 'August', RU: 'Август', BY: 'Жнівень' };
      break;
    case 8:
      monthName = { EN: 'September', RU: 'Сентябрь', BY: 'Верасень' };
      break;
    case 9:
      monthName = { EN: 'October', RU: 'Октябрь', BY: 'Кастрычнік' };
      break;
    case 10:
      monthName = { EN: 'November', RU: 'Ноябрь', BY: 'Лістапад' };
      break;
    case 11:
      monthName = { EN: 'December', RU: 'Декабрь', BY: 'Снежань' };
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

export {
  convertCoordinates,
  convertDay,
  convertMonth,
  sortWeatherData,
};
