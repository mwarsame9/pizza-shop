// --Back end logic--

function Order(pizzaSize, meatTopping, nonMeatTopping, customerOrder) {
  this.pizzaSize = pizzaSize;
  this.meatTopping = meatTopping;
  this.nonMeatTopping = nonMeatTopping;
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


// --Front end Logic--
$("document").ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
  });

  $("button#submit").click(function() {
    var pizzasize = $("select#pizzasize").val();
    var newpizza = new Pizza(pizzasize);

    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
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
