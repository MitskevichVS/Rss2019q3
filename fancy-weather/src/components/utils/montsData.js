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


export default convertMonth;
