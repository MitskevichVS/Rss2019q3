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

export default convertDay;
