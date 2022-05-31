function add(number1, number2) {
  return number1 + number2;
}

const number1 = parseInt(prompt("enter a number:"));
const number2 = parseInt(prompt("enter another number:"));
const result = add(number1, number2);
alert(result);

function subtract(number1, number2) {
  return number1 - number2;
}

const subNum1 = parseInt(prompt("enter a number:"));
const subNum2 = parseInt(prompt("enter another number:"));
const subResult = subtract(subNum1, subNum2);
alert(subResult);

function multiply(numMultiply1, numMultiply2) {
  return numMultiply1 * numMultiply2;
}

const numMultiply1 = parseInt(prompt("enter a number:"));
const numMultiply2 = parseInt(prompt("enter another number:"));
const multiplyResult = multiply(numMultiply1, numMultiply2);
alert(multiplyResult);

function divide(numDivide1, numDivide2) {
  return numDivide1 / numDivide2;
}

const numDivide1 = parseInt(prompt("enter a number:"));
const numDivide2 = parseInt(prompt("enter another number:"));
const divideResult = divide(numDivide1, numDivide2);
alert(divideResult);