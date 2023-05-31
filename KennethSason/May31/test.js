let numbers = [1, 2, 3, 4, 5];

function findMinMax(numArray) {
  let min = numArray[0];
  let max = numArray[0];
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > max) {
      max = numArray[i];
    }
    if (numArray[i] < min) {
      min = numArray[i];
    }
  }
  console.log(`Max number is : ${max} \nMin number is : ${min}`);
}
function printEvenOdd(numArray) {
  for (let i = 0; i < numArray.length; i++) {
    if (i % 2 === 0) {
      console.log(`${numArray[i]} is even`);
    } else {
      console.log(`${numArray[i]} is odd`);
    }
  }
}
function add(num1, num2) {
  let dif = num1 + num2;
  console.log(`${num1} + ${num2} is ${dif}`);
}
function subtract(num1, num2) {
  let dif = num1 - num2;
  console.log(`${num1} less ${num2} is ${dif}`);
}
function multiply(num1, num2) {
  let dif = num1 * num2;
  console.log(`${num1} multiplied by ${num2} is ${dif}`);
}
function divide(num1, num2) {
  let dif = num1 / num2;
  console.log(`${num1} divided by ${num2} is ${dif}`);
}
findMinMax(numbers);
printEvenOdd(numbers);
subtract(4, 3);
add(1, 2);
multiply(2, 2);
divide(2, 2);
