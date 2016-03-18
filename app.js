function sum(numberOne, numberTwo) {
  var Total = numberOne + numberTwo;
  //console.log('The sum of ' + numberOne + ' and ' + numberTwo + ' is ' + Total + '.');
  return Total;
}
//console.log(sum(4,7));

function multiply(numberOne, numberTwo) {
  var Product = numberOne * numberTwo;
  //console.log('The product of ' + numberOne + ' and ' + numberTwo + ' is ' + Product + '.');
  return Product;
}
//console.log(multiply(4,7));

function sumAndMultiply(numberOne, numberTwo, numberThree) {
  var Total2 = (sum(numberOne, numberTwo)) + numberThree;
  var Product2 = (multiply(numberOne, numberTwo)) * numberThree;
  var questionArray = [Total2, Product2];
  console.log(numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' sum to ' + questionArray[0] + '.');
  console.log('The numbers ' + numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' have a product of ' + questionArray[1] + '.');
  return questionArray;
}

function sumArray(theArray) {
  sumTotal = 0;
  for (i = 0; i < theArray.length; i++){
    currentNumber = theArray[i];
    sumTotal += currentNumber;
  }
  console.table(theArray);
  console.log(theArray + ' was passed in as an array of numbers and ' + sumTotal + ' is their sum.');
  return sumTotal;
}
