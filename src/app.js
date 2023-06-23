// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  // renderButtons();
  // renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese")
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

// renderCheese()

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.querySelector("#tomato")
  if (state.Tomatoes) {
    tomatoes.style.display = "inherit";
  } else {
    tomatoes.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions = document.querySelector("#onion")
  if (state.Onions) {
    onions.style.display = "inherit";
  } else {
    onions.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce")
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;

  changeState("Patty", "patty")
  changeIngre("Patty", "2")

  renderAll();

};


// Trial 2 - Setup event listener for the cheese button

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  changeState("Cheese", "cheese")
  changeIngre("Cheese", "3")

  renderAll();
};


// Trial 2 - Setup event listener for the tomatoes button

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  changeState("Tomatoes", "tomatoes")
  changeIngre("Tomatoes", "4")

  renderAll();
};

// Trial 2 - Setup event listener for the onion button

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  changeState("Onions", "onions")
  changeIngre("Onions", "5")

  renderAll();

};

// Trial 2 - Setup event listener for the lettuce button

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  changeState("Lettuce", "lettuce")
  changeIngre("Lettuce", "6")

  renderAll();

};


// ------------------------------------


//Challenge 1 - Add/Remove the class active to the buttons based on state


function changeState(prop, classid) {
  // console.log(state[prop], document.querySelector(`.btn-${classid}`))
  // changeText()
  if (state[prop]) {
    document.querySelector(`.btn-${classid}`).setAttribute("class", `button btn-${classid} active`)

  } else {

    document.querySelector(`.btn-${classid}`).setAttribute("class", `button btn-${classid}`)

  }
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state

function changeIngre(prop, classidnum) {
  if (state[prop]) {
    document.querySelector(`.items:nth-child(${classidnum})`).style.display = "block";
  } else {
    document.querySelector(`.items:nth-child(${classidnum})`).style.display = "none";
  }
}




//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice() {
  var sum = 20;

  let price = document.querySelector(".price-details")
  price.textContent = "";
  for (let val in ingredients) {
    if (state[val]) {
      sum += ingredients[val]

    }
  }
  price.textContent = sum;


}
