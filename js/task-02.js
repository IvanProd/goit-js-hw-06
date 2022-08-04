const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const findElemet = document.getElementById("ingredients");


const listIngredients = ingredients.map(function listItems(item){
  const element = document.createElement("li");
  const textEl = document.createElement("p");
  textEl.textContent = item;
  element.append(textEl);
  element.classList.add("item");
  //console.log(element);
  return element;
});

 

findElemet.append( ...listIngredients);