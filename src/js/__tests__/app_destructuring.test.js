import destructuring from '../../js/app_destructuring';

const description_test1 = `Функция destructuring, извлекает свойство special из объекта,
    при отсутствии поля description в извлекаемом объекте, установить значение поля "Описание недоступно"`;
test(description_test1, () => {

  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
      }
    ]
  };

  expect(destructuring(character)).toEqual([
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно'
    }
  ]);
});

const dataList = [
  [{
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: []
  }, []],
  [{
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10
  }, []]
];

test.each(dataList)('Выполнение функции destructuring для объекта %p', (personData, expected) => {
  const result = destructuring(personData);
  expect(result).toEqual(expected);
});
