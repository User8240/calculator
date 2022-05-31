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
