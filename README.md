# function-practice
Lab 4, Friday 3-18

## Question 1

Goal is to get the console.log to print "The The sum of 4 and 7 is 11."  This is the code:

function sum(numberOne, numberTwo) {
  var Total = numberOne + numberTwo;
  console.log('The sum of ' + numberOne + ' and ' + numberTwo + ' is ' + Total + '.');
  return;
}
console.log(sum(4,7));

## Question 2

Goal is to console.log "The product of 4 and 7 is 28."  Here is the code:

function multiply(firstNumber, secondNumber) {
  var Product = firstNumber * secondNumber;
  console.log('The product of ' + firstNumber + ' and ' + secondNumber + ' is ' + Product + '.');
  return;
}
console.log(multiply(4,7));

##Question 3

Goal is to console.log "4 and 7 and 5 sum to 16." and "The numbers 4 and 7 and 5 have a product of 140." while using the functions from before and an array.

function sumAndMultiply(numberOne, numberTwo, numberThree) {
  var Total2 = (sum(numberOne, numberTwo)) + numberThree;
  var Product2 = (multiply(numberOne, numberTwo)) * numberThree;
  var questionArray = [Total2, Product2];
  console.log(numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' sum to ' + questionArray[0] + '.');
  console.log('The numbers ' + numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' have a product of ' + questionArray[1] + '.');
  return;

##Question 4

  Goal is to console.log "2,3,4 was passed in as an array of numbers, and 9 is their sum."  while "creating a function called sumArray() that takes in an array of numbers as a single argument and then returns the sum of those numbers."  The code:

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
  console.log(sumArray([2,3,4]));

##Question 5

Goal is to console.log "The numbers 2,3,4 have a product of 20."  while "creating a function called multiplyArray() that takes in an array of numbers as a single argument and then returns the product of those numbers."" Here is the code:

function multiplyArray(theArray) {
  productTotal = 1;
  for (i = 0; i < theArray.length; i++){
    currentNumber = theArray[i];
    productTotal *= currentNumber;
  }
  console.table(theArray);
  console.log('The numbers ' + theArray + ' have a product of ' + productTotal + '.');
  return productTotal;
}
console.log(multiplyArray([2,3,4]));
