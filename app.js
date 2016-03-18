function sum(numberOne, numberTwo) {
  var Total = numberOne + numberTwo;
  //console.log('The sum of ' + numberOne + ' and ' + numberTwo + ' is ' + Total + '.');
  return;
}
//console.log(sum(4,7));

function multiply(numberOne, numberTwo) {
  var Product = numberOne * numberTwo;
  //console.log('The product of ' + numberOne + ' and ' + numberTwo + ' is ' + Product + '.');
  return;
}
//console.log(multiply(4,7));

function sumAndMultiply(numberOne, numberTwo, numberThree) {
  var Total2 = (sum(numberOne, numberTwo)) + numberThree;
  var Product2 = (multiply(numberOne, numberTwo)) * numberThree;
  var questionArray = [Total2, Product2];
  console.log(numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' sum to ' + questionArray[0] + '.');
  console.log('The numbers ' + numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' have a product of ' + questionArray[1] + '.');
  return;
}
