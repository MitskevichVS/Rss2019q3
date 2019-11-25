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
      weekday = 'Sun';
      break;
    case 1:
      weekday = 'Mon';
      break;
    case 2:
      weekday = 'Tue';
      break;
    case 3:
      weekday = 'Wed';
      break;
    case 4:
      weekday = 'Thu';
      break;
    case 5:
      weekday = 'Fri';
      break;
    case 6:
      weekday = 'Sat';
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

export { convertCoordinates, convertDay, convertMonth };
