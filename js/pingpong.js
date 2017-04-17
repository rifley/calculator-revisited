function Calculator (skinName) {
  this.skin = skinName;
}


Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i<=goal; i++) {
    if (i%15===0) {
      output.push("ping-pong");
    } else if (i%3===0) {
      output.push("ping");
    } else if (i%5===0){
      output.push("pong");
    } else {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.addition = function(numberOne, numberTwo) {
  var output = numberOne + numberTwo;
  return output;
}

Calculator.prototype.subtraction = function(numberOne, numberTwo) {
  var output = numberOne - numberTwo;
  return output;
}

Calculator.prototype.multiplication = function(numberOne, numberTwo) {
  var output = numberOne * numberTwo;
  return output;
}

Calculator.prototype.division = function(numberOne, numberTwo) {
  var output = numberOne / numberTwo;
  return output;
}

exports.calculatorModule = Calculator;
