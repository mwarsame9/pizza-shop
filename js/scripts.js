// --Back end logic--

// function Order(pizzaSize, meatTopping, nonMeatTopping, customerOrder) {
//   this.pizzaSize = pizzaSize;
//   this.meatTopping = meatTopping;
//   this.nonMeatTopping = nonMeatTopping;
//   this.customerOrder = [];
// }

function Order(pizzaSize, pizzatoppings, customerOrder) {
  this.pizzaSize = pizzaSize;
  this.pizzatoppings = pizzatoppings;
  this.customerOrder = [];
}

function Pizza(size, toppings) {
  this.pizzaToppings = [];
  this.pizzaSize = size;
  this.cost = 10;
}

Order.prototype.totalOrderCost = function() {
  var pizzaCost = 0;
  for (var index = 0; index < this.customerOrder.length; index += 1) {
    pizzaCost += this.customerOrder[index].cost;
  }
  return pizzaCost;
};

Pizza.prototype.toppingsCost = function() {
  var totalPrice = this.pizzaToppings.length;
  this.cost += totalPrice;
};

var pizzaOrder = new Order();

// Order.prototype.pizzaPrize = function (pizza) {
//   if (this.pizzaSize !== "Large") {
//     this.cost -=  2;
//   } else {
//     this.cost;
//   }
//   if (this.meatTopping !== "Steak"){
//     this.cost -=  5;
//   } else {
//     this.cost;
//   }
//   if (this.nonMeatTopping !== "Cheese"){
//    this.cost -=  5;
//   } else {
//     this.cost;
//   }
//   console.log(this.cost);
// };


// --Front end Logic--
$("document").ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
  });

  $("button#submit").click(function() {
    var pizzasize = $("select#pizzasize").val();
    var newpizza = new Pizza(pizzasize);

    $("input:checkbox[name=pizzatoppings]:checked").each(function() {
      var newtoppings = $(this).val();
      newpizza.pizzaToppings.push(newtoppings);
    });

    newpizza.toppingsCost();

    pizzaOrder.customerOrder.push(newpizza);
    var total = pizzaOrder.totalOrderCost();

    finalCost(total);

  });

});
function finalCost(pizzaCost) {
  $("#totalDue").append("<h2>Total Due: $" + pizzaCost + "</h2>");

};
