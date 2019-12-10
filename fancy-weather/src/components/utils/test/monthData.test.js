import convertMonth from '../montsData';

describe('convertMonth ', () => {
  it('Should be an instance of Function', () => {
    expect(convertMonth).toBeInstanceOf(Function);
  });

  test('Should return object with monts names', () => {
    expect(convertMonth(0)).toStrictEqual({ EN: 'January', RU: 'Января', BE: 'Студзеня' });
    expect(convertMonth(1)).toStrictEqual({ EN: 'February', RU: 'Февраля', BE: 'Лютага' });
    expect(convertMonth(2)).toStrictEqual({ EN: 'March', RU: 'Марта', BE: 'Сакавіка' });
    expect(convertMonth(3)).toStrictEqual({ EN: 'April', RU: 'Апреля', BE: 'Красавіка' });
    expect(convertMonth(4)).toStrictEqual({ EN: 'May', RU: 'Мая', BE: 'Мая' });
    expect(convertMonth(5)).toStrictEqual({ EN: 'June', RU: 'Июня', BE: 'Чэрвеня' });
    expect(convertMonth(6)).toStrictEqual({ EN: 'July', RU: 'Июля', BE: 'Ліпеня' });
    expect(convertMonth(7)).toStrictEqual({ EN: 'August', RU: 'Августа', BE: 'Жніўня' });
    expect(convertMonth(8)).toStrictEqual({ EN: 'September', RU: 'Сентября', BE: 'Верасня' });
    expect(convertMonth(9)).toStrictEqual({ EN: 'October', RU: 'Октября', BE: 'Кастрычніка' });
    expect(convertMonth(10)).toStrictEqual({ EN: 'November', RU: 'Ноября', BE: 'Лістапада' });
    expect(convertMonth(11)).toStrictEqual({ EN: 'December', RU: 'Декабря', BE: 'Снежня' });
    expect(convertMonth()).toStrictEqual(undefined);
  });
});
