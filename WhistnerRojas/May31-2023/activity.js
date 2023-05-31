// Exercise: JavaScript Basics
// 1. Declare a variable named numbers and assign it an array of at least 5 different integer values. The numbers can be any integers you choose
// 2. Write a function named findMinMax. This function should take an array of numbers as a parameter and should print the minimum and maximum numbers from the array. The function does not need to return anything.
// 3. Write a function named printEvenOdd. This function should take an array of numbers as a parameter and should print whether each number is even or odd.
// 4. Write a function named Add. This function should take 2 numbers as a parameter and should print the sum of the two numbers.
// 5. Write a function named Subtract. This function should take 2 numbers as a parameter and should print the difference of the two numbers.
// 6. Write a function named Multiply. This function should take 2 numbers as a parameter and should print the product of the two numbers.
// 7. Write a function named Divide. This function should take 2 numbers as a parameter and should print the quotient of the two numbers and it's remainder if there is a remainder.


//1.

let numbers = [20,0,7,8,10]

//2.

function findMinMax(arr) {
    let min = arr[0]
    let max = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        } else if (arr[i] > max) {
            max = arr[i]
        }
    }

    console.log(`Minimum number: ${min}`)
    console.log(`Maximum number: ${max}`)
}

findMinMax(numbers);

//3.

function printEvenOdd(arr){
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) === 0) {
            console.log(arr[i], "is an even number.")
        }else{
            console.log(arr[i], "is an odd number.")
        }
    }
}

printEvenOdd(numbers)

//4.

function Add(num1, num2){
    console.log(`${num1} + ${num2} =`, num1 + num2)
}

Add(1,2)

//5.

function Subtract(num1, num2){
    console.log(`${num1} - ${num2} =`, num1 - num2)
}

Subtract(1,2)

//6.

function Multiply(num1, num2){
    console.log(`${num1} x ${num2} =`, num1 * num2)
}

Multiply(5,2)

//7.

function Divide(num1, num2){
    console.log(`${num1} / ${num2} =`, num1 / num2)
}

Divide(10,5)