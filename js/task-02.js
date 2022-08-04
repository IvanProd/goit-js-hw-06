const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const findElemet = document.getElementById("ingredients");
console.log(findElemet);

const listIngredients = ingredients.forEach(function listItems(item){
  const element = document.createElement("li");
  element.textContent = item;
  element.classList.add("item");
  findElemet.append(element);
  //
});

//console.log(listIngredients)  
//findElemet.insertAdjacentHTML("afterbegin", listIngredients)