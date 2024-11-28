import extractSpecialAttacks from '../app';

// Поле special корректно заполнено
test('поле special корректно заполнено', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 10,
        name: 'Огненный удар',
        icon: 'http://...',
        description: 'Огненный удар наносит урон огнём',
      },
    ],
  };

  const result = extractSpecialAttacks(character);

  expect(result).toEqual([
    {
      id: 10,
      name: 'Огненный удар',
      icon: 'http://...',
      description: 'Огненный удар наносит урон огнём',
    },
  ]);
});

// Поле special отсутствует
test('отсутствие поля special', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10
  };

  expect(() => extractSpecialAttacks(character)).toThrow('Поле special отсутствует');
});

// Поле special равно null
test('поле special равно null', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: null
  };

  expect(() => extractSpecialAttacks(character)).toThrow('Поле special отсутствует');
});

// Поле special равно undefined
test('поле special равно undefined', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: undefined
  };

  expect(() => extractSpecialAttacks(character)).toThrow('Поле special отсутствует');
});

// Поле special равно пустой строке
test('поле special равно пустой строке', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: ''
  };

  expect(() => extractSpecialAttacks(character)).toThrow('Поле special отсутствует');
});

// Поле special равно 0
test('поле special равно числу 0', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: 0
  };

  expect(() => extractSpecialAttacks(character)).toThrow('Поле special отсутствует');
});

// Поле special равно false
test('поле special равно false', () => {
  const character = { name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: false
  };

  expect(() => extractSpecialAttacks(character)).toThrow('Поле special отсутствует');
});

// Извлечение атак с описаниями
test('извлечение атак с описаниями', () => {
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
        description: 'Двойной выстрел наносит двойной урон',
      },
    ],
  };

  const result = extractSpecialAttacks(character);
  expect(result).toEqual([
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
  ]);
});

// Извлечение атак без описания
test('извлечение атак без описания', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };

  const result = extractSpecialAttacks(character);
  expect(result).toEqual([
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ]);
});

// Пустой массив special
test('пустой массив special', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: []
  };

  const result = extractSpecialAttacks(character);
  expect(result).toEqual([]);
});

// Вызов функции без аргументов
test('вызов функции без аргументов', () => {
  expect(() => extractSpecialAttacks()).toThrow('Поле special отсутствует');
});

// Вызов функции с пустым объектом
test('вызов функции с пустым объектом', () => {
  expect(() => extractSpecialAttacks({})).toThrow('Поле special отсутствует');
});
