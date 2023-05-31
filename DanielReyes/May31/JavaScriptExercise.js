// Exercise: JavaScript Basics

// 1. Declare a variable named numbers and assign it an array of at least 5 different integer values. The numbers can be any integers you choose.

let numbers = [ 1, 2, -3, -4, 5 ];

// 2. Write a function named findMinMax. This function should take an array of numbers as a parameter and should print the minimum and maximum numbers from the array. The function does not need to return anything.

function findMinMax(arr){
    let min = arr[0];
    for(let i=0; i<arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    console.log("Minimum: " + min);
    console.log("Maximum: " + max);
}

// findMinMax(numbers);

// 3. Write a function named printEvenOdd. This function should take an array of numbers as a parameter and should print whether each number is even or odd.

function printEvenOdd(arr){
    let i = 0;
    while (i < arr.length){
        if(arr[i] % 2 == 0){
            console.log(arr[i] + " is Even");
        } else {
            console.log(arr[i] + " is Odd");
        }
        i++;
    }
}

// printEvenOdd(numbers);

// 4. Write a function named Add. This function should take 2 numbers as a parameter and should print the sum of the two numbers.

function Add(num1, num2){
    console.log("Sum: " + num1 + num2);
}

// Add(3, -1);

// 5. Write a function named Subtract. This function should take 2 numbers as a parameter and should print the difference of the two numbers.

function Subtract(num1, num2){
    console.log("Difference: " + num1 - num2);
}

// Subtract(5, -4);

// 6. Write a function named Multiply. This function should take 2 numbers as a parameter and should print the product of the two numbers.

function Multiply(num1, num2){
    console.log("Product: " + num1 * num2);
}

// Multiply(5, -4);

// 7. Write a function named Divide. This function should take 2 numbers as a parameter and should print the quotient of the two numbers and it's remainder if there is a remainder

function Divide(num1, num2){
    if (num1%num2 == 0){
        console.log("Quotient: " + num1 / num2 );
    } else{
        quotient = num1/num2;
        console.log("Quotient: " + quotient + " Remainder: " + num1 % num2);
    }
}

Divide(5, -4);
