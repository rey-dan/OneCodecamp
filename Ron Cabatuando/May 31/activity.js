// 1. Declare a variable named numbers and assign it an array of at least 5 different integer values. The numbers can be any integers you choose
// 2. Write a function named findMinMax. This function should take an array of numbers as a parameter and should print the minimum and maximum numbers from the array. The function does not need to return anything.
// 3. Write a function named printEvenOdd. This function should take an array of numbers as a parameter and should print whether each number is even or odd.
// 4. Write a function named Add. This function should take 2 numbers as a parameter and should print the sum of the two numbers.
// 5. Write a function named Subtract. This function should take 2 numbers as a parameter and should print the difference of the two numbers.
// 6. Write a function named Multiply. This function should take 2 numbers as a parameter and should print the product of the two numbers.
// 7. Write a function named Divide. This function should take 2 numbers as a parameter and should print the quotient of the two numbers and it's remainder if there is a remainder


// 1. Declare a variable named numbers and assign it an array of at least 5 different integer values.
let numbers = [23, 6, 28, 8, 1];
console.log(numbers)

// 2. Function to find minimum and maximum numbers from an array.
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    
    for (let i = 1; i < numbers.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    
      if (arr[i] > max) {
        max = numbers[i];
      }
    }
    
    console.log("Minimum number:", min);
    console.log("Maximum number:", max);
}

findMinMax(numbers)

// 3. Function to print whether each number in an array is even or odd.
function printEvenOdd(arr) {
    let i = 0;
    while (i < arr.length) {
      if (arr[i] % 2 === 0) {
        console.log(arr[i], "is even");
      } else {
        console.log(arr[i], "is odd");
      }
      i++;
    }
}
printEvenOdd(numbers)




// 4. Function to print the sum of two numbers.
function add(num1, num2) {
    let sum = num1 + num2;
    console.log("Sum:", sum);
}
add(12, 5);

// 5. Function to print the difference of two numbers.
function subtract(num1, num2) {
    let difference = num1 - num2;
    console.log("Difference:", difference);
}
subtract(12, 5)

// 6. Function to print the product of two numbers.
function multiply(num1, num2) {
    let product = num1 * num2;
    console.log("Product:", product);
}
multiply(12, 5)

// 7. Function to print the quotient of two numbers and the remainder if there is any.
function divide(num1, num2) {
    let remainder = num1 % num2;
    let x = num1 - remainder;
    let quotient;
    if (num1 < num2){
        quotient = num1 / num2;
    } else {
        quotient = x / num2;
    }
    console.log("Quotient:", quotient);
    console.log("Remainder:", remainder);
}
divide(12, 5)

