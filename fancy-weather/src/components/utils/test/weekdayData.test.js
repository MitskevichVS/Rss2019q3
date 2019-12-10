import convertDay from '../weekdayData';

describe('Is convertDay ', () => {
  it('Should be an instance of Function', () => {
    expect(convertDay).toBeInstanceOf(Function);
  });

  test('Should return value by request', () => {
    expect(convertDay(0)).toStrictEqual({ EN: 'Sunday', RU: 'Воскресенье', BE: 'Нядзеля' });
    expect(convertDay(1)).toStrictEqual({ EN: 'Monday', RU: 'Понедельник', BE: 'Панядзелак' });
    expect(convertDay(2)).toStrictEqual({ EN: 'Tuesday', RU: 'Вторник', BE: 'Аўторак' });
    expect(convertDay(3)).toStrictEqual({ EN: 'Wednesday', RU: 'Среда', BE: 'Серада' });
    expect(convertDay(4)).toStrictEqual({ EN: 'Thursday', RU: 'Четверг', BE: 'Чацьвер' });
    expect(convertDay(5)).toStrictEqual({ EN: 'Friday', RU: 'Пятница', BE: 'Пятніца' });
    expect(convertDay(6)).toStrictEqual({ EN: 'Saturday', RU: 'Суббота', BE: 'Cубота' });
    expect(convertDay()).toStrictEqual(undefined);
  });
});
