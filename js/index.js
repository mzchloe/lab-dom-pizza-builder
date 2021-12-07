// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

 //renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    const isVisible = oneMush.style.visibility === "visible";

    oneMush.style.visibility = isVisible ? 'hidden' : 'visible';
    
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
   const isVisible = oneGreenPep.style.visibility === 'visible'; // checks if green pepper is visible

   oneGreenPep.style.visibility = isVisible ? 'hidden' : 'visible'; //if it is visible the on click it will be hidden and vice versa

  });
}

function renderWhiteSauce() {
  const whiteSauce = document.querySelector('.sauce');

  whiteSauce.style.visibility = state.whiteSauce ? 'visible' : 'hidden';  

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustEl = document.querySelector('#pizza > section.crust');

  crustEl.className = state.glutenFreeCrust
    ? 'crust crust-gluten-free'
    : 'crust';
}

/* function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  
  //Pepper button 
  

  // Mushroom button
  const btnMushroom = document.querySelector('.btn.btn-mushrooms');
  if (state.mushrooms) {
    btnMushroom.classList.add('active');
  } else {
    btnMushroom.classList.remove('active');
  }

  //Green pepper button
  const btnGreenPepper = document.querySelector('.btn.btn-green-peppers');
  if (state.greenPeppers) {
    btnMushroom.classList.add('active');
  } else { 
    btnGreenPepper.classList.remove('active');
  }

  //White Sauce button
  const btnWhiteSauce = document.querySelector('.btn-sauce');
  if (state.whiteSauce){
    btnWhiteSauce.classList.add('active');
  } else {
    btnWhiteSauce.classList.remove('active');
  } 

  //Gluten-free crust button 
  const btnGlutenFree = document.querySelector('.btn.btn-crust');
  if (state.glutenFreeCrust) {
    btnGlutenFree.classList.add('active');
  } else {
    btnGlutenFree.classList.remove('active');
  } 
} */

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  //1. identify which ingredients exist:
  /* console.log('pepperoni', state.pepperoni)
  console.log('mushrooms', state.mushrooms)
  console.log('greenPepper', state.greenPeppers)
  console.log('whiteSauce', state.whiteSauce)
  console.log('GlutenFree', state.glutenFreeCrust) */

  // 2. Print the existing ingredients in the price list 

  //3. Accumulate the price (= total price) of the visible ingredients:
    //debugger 
  let totalPrice = basePrice;
  
  let ingredientsList = document.querySelector('.panel.price > ul')

    // delete the content inside panel price ul:
   ingredientsList.innerHTML = '' 
  
    //define the conditions
    if (state.pepperoni === true) {
    totalPrice += ingredients.pepperoni.price 
    ingredientsList.innerHTML += `<li> $${ingredients.pepperoni.price} Pepperoni </li>`
  }
  
  if (state.mushrooms === true) {
    totalPrice += ingredients.mushrooms.price 
    ingredientsList.innerHTML += `<li> $${ingredients.mushrooms.price} Mushrooms </li>`
  }
  
  if (state.greenPeppers === true) {
    totalPrice += ingredients.greenPeppers.price 
    ingredientsList.innerHTML += `<li> $${ingredients.greenPeppers.price} Green Peppers </li>`
  }
  
  if (state.whiteSauce === true) {
    totalPrice += ingredients.whiteSauce.price 
    ingredientsList.innerHTML += `<li> $${ingredients.whiteSauce.price} White Sauce </li>`
    
  }
  
  if (state.glutenFreeCrust === true) {
    totalPrice += ingredients.glutenFreeCrust.price 
    ingredientsList.innerHTML += `<li> $${ingredients.glutenFreeCrust.price} Gluten-free crust </li>`
    }

  let totalPriceLine = document.querySelector('.panel.price > strong')

  //4. Display the total price 
  totalPriceLine.innerHTML = `$${totalPrice}`
 
  
  //console.log('Total Price:', totalPrice)
}

renderEverything();

const btnPep = document.querySelector('.btn.btn-pepperoni') 
const btnMush = document.querySelector('.btn.btn-mushrooms') 
const btnGreenPep = document.querySelector('.btn.btn-green-peppers')
const btnSauce = document.querySelector('.btn.btn-sauce') 
const btnGlutenFree = document.querySelector('.btn.btn-crust') 
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
btnPep.addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;

  if (state.pepperoni) {
    btnPep.classList.add('active');
  } else {
    btnPep.classList.remove('active');
  }
  renderPepperoni();

  renderPrice();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
btnMush.addEventListener('click', function(){
  state.mushrooms = !state.mushrooms;
  if (state.mushrooms) {
    btnMush.classList.add('active');
    
  } else {
    btnMush.classList.remove('active');
  }
  renderMushrooms();

  renderPrice();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
btnGreenPep.addEventListener('click', function(){
  state.greenPeppers = !state.greenPeppers;
  if (state.greenPeppers) {
    btnGreenPep.classList.add('active');
  } else {
    btnGreenPep.classList.remove('active');
  }
  renderGreenPeppers();


  renderPrice();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
btnSauce.addEventListener('click', function (){
  state.whiteSauce = !state.whiteSauce;
  if (state.whiteSauce) {
    btnSauce.classList.add('active');
  } else {
    btnSauce.classList.remove('active');
  }
  renderWhiteSauce();

  renderPrice();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
btnGlutenFree.addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  if (state.glutenFreeCrust) {
    btnGlutenFree.classList.add('active');
  } else {
    btnGlutenFree.classList.remove('active');
  }
  renderGlutenFreeCrust(); 

  renderPrice();
});
