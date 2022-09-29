const box = document.querySelector('#boxes')
const form = document.querySelector('input')
const buttonCreate = document.querySelector('[data-create]')
const buttonDestroy = document.querySelector('[data-destroy]')

let amount = 0;

form.addEventListener('input', (event) => {
 amount = event.currentTarget.value;
})
buttonCreate.addEventListener('click',createBoxes)


function createBoxes() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const arrBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    arrBoxes.push(newBox);
  }
  let number = 30;
  
  arrBoxes.map((el, index) => {
    number += 10;
      el.style.width = `${number}px`;
      el.style.height = `${number}px`;
      const color = getRandomHexColor();
      el.style.backgroundColor = color;
    })
  
  
 return box.append(...arrBoxes);
}

buttonDestroy.addEventListener('click', destroyBoxes)
  
function destroyBoxes() {
  for (let i = 0; i < amount; i += 1) {
    const removeBox = box.firstElementChild.remove()
  }
  
}