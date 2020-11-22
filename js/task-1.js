// const titleRef = document.querySelector('h2');

// console.log(titleRef);

const itemRef = document.querySelectorAll('.item').length;

console.log(`У списку ${itemRef} категорії.`);

document.querySelectorAll('li.item').forEach(value => console.log('Категорія: ' + value.firstElementChild.textContent + '\n' + 'Кількість Елементів: ' + value.querySelectorAll('li').length));


// console.log(titleRef.textContent);

// const titleRef = document.querySelectorAll('h2').forEach(title => console.log(title.textContent));