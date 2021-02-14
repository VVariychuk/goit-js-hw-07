const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients')

const makeIngredientsList = (ingredients) => {
    return ingredients.map(ingredient => { 
        const itemEl = document.createElement('li');
        itemEl.textContent = ingredient;

        return itemEl;
    })
};
 
const elements = makeIngredientsList(ingredients);
ingredientsList.append(...elements);