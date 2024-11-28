// TODO: write your code here
// При выборе конкретного персонажа на поле необходимо во время боя на экране отображать
// доступные варианты спец.атак для этого персонажа.
// необходимо для панели выбора варианта атаки вытащить id, иконку и описание из объекта:

// { special } в аргументе функции указывает, что из переданного объекта нужно извлечь только
// свойство special. Это эквивалентно следующему коду:
// const special = character.special;
export default function extractSpecialAttacks({ special } = {}) {

  if (!special) {
    throw new Error('Поле special отсутствует');
  }

  // Используем деструктуризацию и задаём значение по умолчанию для поля description
  return special.map(({ id, name, icon, description = 'Описание недоступно' }) => ({
    id,
    name,
    icon,
    description,
  }));
}
