// Exercise: JavaScript Basics

// 1. Declare a variable named numbers and assign it an array of at least 5 different integer values. 
// The numbers can be any integers you choose

const numbers = [1, 2, 3, 4, 5]



// 2. Write a function named findMinMax. This function should take an array of numbers as a parameter and should print the minimum and maximum numbers from the array. 
// The function does not need to return anything.

function findMinMax(arr) {
  let maxNum = arr[0];
  let minNum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
    
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
    
  }
  console.log("max:" + maxNum, "min:" + minNum)
}

console.log("Exercise 2:")

findMinMax([1, 2, 3]); // output: max: 3, min: 1
findMinMax([2, 2, -3, 4.2, 0]); // output: max: 4.2, min: -3
findMinMax([2, 2, 2, 2, 2]); // output: max: 2, min: 2

// 3. Write a function named printEvenOdd. This function should take an array of numbers as a parameter and should print whether each number is even or odd.

function printEvenOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i]) % 2 === 0) {
      console.log(arr[i] + ":" + " even")
    } else if ((arr[i] % 1) === 0) {
      console.log(arr[i] + ":" + " odd")
    } else {
      console.log(arr[i] + ":" + " neither odd nor even")
    }
  }
}
console.log("")
console.log("Exercise 3:")
printEvenOdd([0, 1, 2, 3, 4, 5])
// output:
// 0: even
// 1: odd
// 2: even
// 3: odd
// 4: even
// 5: odd
printEvenOdd([0, 1, -2, -2, 4, 5])
// output:
// 0: even
// 1: odd
// -2: even
// -2: even
// 4: even
// 5: odd
printEvenOdd([0, 1, -2, -2.3, 4, 5.33])
// output:
// 0: even
// 1: odd
// -2: even
// -2.3:neither odd or even
// 4: even
// 5.33:neither odd or even

// 4. Write a function named Add. This function should take 2 numbers as a parameter and should print the sum of the two numbers.
function Add(num1, num2) {
  console.log(num1 + num2)
}

console.log("")
console.log("Exercise 4:")

Add(1, 2) //output: 3
Add(-4, 5) //output: 1

// 5. Write a function named Subtract. This function should take 2 numbers as a parameter and should print the difference of the two numbers.
function Subtract(num1, num2) {
  console.log("Difference: " + (num1 - num2))
}

console.log("")
console.log("Exercise 5:")

Subtract(4, 2) //output: Difference: 2
Subtract(1, 2) //output: Difference: -1
Subtract(-4, 5) //output: Difference: -9

// 6. Write a function named Multiply. This function should take 2 numbers as a parameter and should print the product of the two numbers.
function Multiply(num1, num2) {
  console.log("Product: " + (num1 * num2))
}

console.log("")
console.log("Exercise 6:")

Multiply(4, 2) //output: Product: 8
Multiply(0, 2) //output: Product: 0
Multiply(-4, 5) //output: Product: -20
Multiply(-4, -5) //output: Product: 20


// 7. Write a function named Divide. This function should take 2 numbers as a parameter and should print the quotient of the two numbers and it's remainder if there is a remainder
function Divide(num1, num2) {
  if (num1 % num2 === 0) {
    console.log("Quotient:", num1 / num2)
  } else {
    console.log("Quotient:", Math.floor(num1 / num2), "Remainder:", (num1 % num2))
  }

}

console.log("")
console.log("Exercise 7:")

Divide(4, 2) //output: Quotient: 2
Divide(7, 5) //output: Quotient: 1, Remainder: 2
Divide(-7, 5) //output: Quotient: -2 Remainder: -2
