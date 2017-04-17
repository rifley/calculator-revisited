var Calculator = require('../js/pingpong.js').calculatorModule;


$(function(){
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    var numberOne = parseInt($('#numberOne').val());
    var numberTwo = parseInt($('#numberTwo').val());
    var operation = $('input:radio[name="operation"]:checked').val();
    var ourCalculator = new Calculator("hot shit");

    if(operation==="add") {
      var output = ourCalculator.addition(numberOne, numberTwo);
    } else if(operation==="subtract") {
      var output = ourCalculator.subtraction(numberOne, numberTwo);
    } else if(operation==="multiply") {
      var output = ourCalculator.multiplication(numberOne, numberTwo);
    } else if(operation==="divide") {
      var output = ourCalculator.division(numberOne, numberTwo);
    }

    $("#result").text(output);
  });
});
