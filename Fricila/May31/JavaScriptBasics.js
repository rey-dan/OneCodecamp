// Exercise: JavaScript Basics

// 1. Declare a variable named numbers and assign it an array of 
// at least 5 different integer values. The numbers can be any 
// integers you choose
var numbers = [1,2,3,4,5];















//2. Write a function named findMinMax. This function should take 
//an array of numbers as a parameter and should print the minimum 
//and maximum numbers from the array. The function does not need to 
//return anything.
function findMinMax(numbers){
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] >= 5){
            console.log('The max number is ' + numbers[i]);
        }
        if(numbers[i] <= 1){
            console.log('The min number is ' + numbers[i]);
        }
    }
    return '';
}













//3. Write a function named printEvenOdd. 
//This function should take an array of numbers 
//as a parameter and should print whether each 
//number is even or odd.
function printEvenOdd(numbers){
    for(let i = 0; i < numbers.length; i++){
        if(i % 2 == 0){
            console.log('The number ' + numbers[i] + ' is even');
        }else{
            console.log('The number ' + numbers[i] + ' is odd');
        }
    }
    return '';
}

//________________________________________________________________________

//4. Write a function named Add. This function should take 2 numbers as 
//a parameter and should print the sum of the two numbers.
function add(x,y){
    let sum = x + y;
    return sum;
}








//5. Write a function named Subtract. This function should take 2 numbers 
//as a parameter and should print the difference of the two numbers.
function subtract(x,y){
    let diff = x - y;
    return diff;
}







//6. Write a function named Multiply. This function should take 2 numbers 
//as a parameter and should print the product of the two numbers.
function multiply(x,y){
    let product = x * y;
    return product;
}








//7. Write a function named Divide. This function should take 2 numbers 
//as a parameter and should print the quotient of the two numbers and it's remainder if there is a remainder
function divide(x,y){
    let quotient = x / y;
    return quotient;
}


// PRINT
let task2 = findMinMax(numbers);
// let task3 = printEvenOdd(numbers);
// let task4 = add(5,10);
// let task5 = subtract(20,10);
// let task6 = multiply(5,5);
// let task7 = divide(20,5);

console.log(task2);
// console.log(task3);
// console.log(task4);
// console.log(task5);
// console.log(task6);
// console.log(task7);