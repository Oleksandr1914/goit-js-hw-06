const categoriesItem = document.querySelector("#categories");

function calcItem (items) {
console.log(`Number of categories: ${items.length}`);
}


const titleCategories1 = categoriesItem.querySelector('li.item').firstElementChild
const listCategories1 = categoriesItem.querySelector('li.item').lastElementChild.children

const titleCategories2 =  categoriesItem.querySelector('li.item').nextElementSibling.firstElementChild
const listCategories2 = categoriesItem.querySelector('li.item').nextElementSibling.lastElementChild.children

const titleCategories3 = categoriesItem.lastElementChild.firstElementChild
const listCategories3 = categoriesItem.lastElementChild.lastElementChild.children


function categoriesElement(title, list) {

    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${list.length}`);
}

calcItem(categoriesItem.children);
categoriesElement(titleCategories1, listCategories1);
categoriesElement(titleCategories2, listCategories2);
categoriesElement(titleCategories3, listCategories3);


