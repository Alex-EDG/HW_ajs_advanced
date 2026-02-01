import orderByProps from '../../js/app_for_in';

const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
const dataList = [
  [obj, ['name', 'level'], [
    { key: 'name', value: 'мечник' }, // порядок взят из массива с ключами сортировки
    { key: 'level', value: 2 }, // порядок взят из массива с ключами сортировки
    { key: 'attack', value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack"
    { key: 'defence', value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence"
    { key: 'health', value: 10 } // порядок по алфавиту (т.к. в массиве с ключами нет значения "health"
  ]],
  [obj, ['name', 'armor'], [
    { key: 'name', value: 'мечник' }, // порядок взят из массива с ключами сортировки
    { key: 'attack', value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами сортировки нет значения "attack"
    { key: 'defence', value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами сортировки нет значения "defence"
    { key: 'health', value: 10 }, // порядок по алфавиту (т.к. в массиве с ключами сортировки нет значения "health"
    { key: 'level', value: 2 } // порядок по алфавиту (т.к. в массиве с ключами сортировки нет значения "level"
  ]],
  [obj, [], [
    { key: 'attack', value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами сортировки нет значения "attack"
    { key: 'defence', value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами сортировки нет значения "defence"
    { key: 'health', value: 10 }, // порядок по алфавиту (т.к. в массиве с ключами сортировки нет значения "health"
    { key: 'level', value: 2 }, // порядок по алфавиту (т.к. в массиве с ключами сортировки нет значения "level"
    { key: 'name', value: 'мечник' } // порядок по алфавиту (т.к. в массиве с ключами сортировки нет значения "name"
  ]]
];

test.each(dataList)('Выполнение функции orderByProps с аргументами %p, %s', (personData, sortOrder, expected) => {
  const result = orderByProps(personData, sortOrder);
  expect(result).toEqual(expected);
});
