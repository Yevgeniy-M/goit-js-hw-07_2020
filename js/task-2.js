const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];


const id = document.querySelector('#ingredients');

const listPotato = document.createElement('li');
listPotato.textContent = `${ingredients[0]}`;

const listMushrooms = document.createElement('li');
listMushrooms.textContent = `${ingredients[1]}`;

const listGarlic = document.createElement('li');
listGarlic.textContent = `${ingredients[2]}`;

const listTomatoes = document.createElement('li');
listTomatoes.textContent = `${ingredients[3]}`;

const listGreenery = document.createElement('li');
listGreenery.textContent = `${ingredients[4]}`;

const listPrepare = document.createElement('li');
listPrepare.textContent = `${ingredients[5]}`;


id.append(listPotato, listMushrooms, listGarlic, listTomatoes, listGreenery, listPrepare);





// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().