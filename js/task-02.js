const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



  
const addItem = ingredients.map((elem, index) => {
  const elementItemEl = document.createElement('li');
  elementItemEl.classList.add('item');
  elementItemEl.textContent = elem;
  return elementItemEl;
});


const listIngredientsEl = document.querySelector('#ingredients');
listIngredientsEl.append(...addItem);
