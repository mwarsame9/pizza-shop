// --Back-end Logic--

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}

function PizzaToppings(cheese, veggies, pineapple, mushrooms, chicken, steak, beef) {
  this.cheese = cheese;
  this.veggies = veggies;
  this.pineapple = pineapple;
  this.mushrooms = mushrooms;
  this.chicken = chicken;
  this.steak = steak;
  this.beef = beef;
}

Pizza.prototype.cost = function() {
  var pizzaCost = this.toppings.length;
  this.cost += pizzaCost;
};

//  --Front-end Logic--
$(document).ready(function(){
  $("form#pizzaSize").submit(function(event){
    event.preventDefault();
    $("#order").show();
    $("input:checkbox[name=size]:checked").each(function(){
      var receipt = $(this).val();
      $('#order').append(receipt + "<br>");
    });
    $('#pizzaSize').hide();
  });
});
