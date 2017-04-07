// Business Logic
function Pizza(pizzaSizes, meatToppings, nonMeatToppings) {
  this.pizzaSizes = ["Small", "Medium", "Large"];
  this.meatToppings = ["Steak", "Chicken", "Beef", "Ham", "Sausage"];
  this.nonMeatToppings = ["Cheese", "Pineapple", "Tomatoes", "Onions", "Veggies"];
}

function Order(pizzaSize, meatTopping, nonMeatTopping) {
  this.pizzaSize = pizzaSize;
  this.meatTopping = meatTopping;
  this.nonMeatTopping = nonMeatTopping;
  this.cost = 50;
};

Order.prototype.receipt = function (){
  // return "Your total price is: $" + this.cost + ".";
  return this.pizzaSize + ", " + this.meatTopping ;
};

Order.prototype.price = function (pizza) {
  if (this.pizzaSize === "Small"){
    this.cost -=  4;
  } else if (this.pizzaSize === "Medium"){
    this.cost -=  2;
  } else {
    this.cost;
  }
  if (this.meatTopping === "Steak"){
    this.cost +=  2;
  } else {
    this.cost +=  2;
  }
  if (this.customerAge !== "Cheese"){
   this.cost +=  1;
  } else {
    this.cost;
  }
  console.log(this.cost);
};

// User Logic
$(document).ready(function() {
  $("#form-one").submit(function(event) {
  event.preventDefault();
  var pizzaSizeInput = $("select.pizzaSize").val();
  var meatToppingInput = $("select.meatToppings").val();
  var nonMeatToppingInput = $("select.nonMeatToppings").val();
  var newOrder = new Order(pizzaSizeInput, meatToppingInput, nonMeatToppingInput);
  var newPizza = new Pizza();

  $("#output").last().append("<h2>" + "Your pizza cost equals: $" + this.cost + "</h2>");
  });
});
