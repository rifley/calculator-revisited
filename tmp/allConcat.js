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

var Calculator = require('../js/pingpong.js').calculatorModule;


$(function(){
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
