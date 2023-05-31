numbers  = [5, 3, 23, 7, 1, 8]

function findMinMax(num) {
    let Max = num[0]; // initialize max number as the fist number in the array - 5
    let Min = num[0]; // initialize max number as the fist number in the array - 5
    //loop to compare all numbers to the array
    for (let i = 0; i < num.length; i++){ // there would be 5 iterations of this loop
        console.log(Max); // 5 // 5 // 5 // 23 // 23 //
        console.log(Min); // 5 // 5 // 3 // 3 // 3 //
        if(num[i] > Max){ // false // false // true // false // 
            Max = num[i]; 
        } else if (num[i] < Min) { // false // true // false // false //
            Min = num[i];
        }
    }
    console.log(`The Largest number is: `+Max);
    console.log(`The Smallest number is: `+Min);
}


// findMinMax(numbers)

function printEvenOdd (arr) {
    for (i = 0; i < numbers.length; i++){
        let num = arr[i]; // initializes the number inside the position on that array
        if (num % 2 === 0) {
            console.log(num + " is even");
          } else {
            console.log(num + " is odd");
          }
    }
}

// printEvenOdd(numbers)

function Add(num1, num2) {
    const sum = num1 + num2;
    console.log("The sum is: " + sum);
}

function Subtract(num1, num2) {
    // if (num2 > num1) {
    //     console.log("First parameter should be greater than the second!")
    // } else {
    //     const sum = num1 - num2;
    //     console.log("The sum is: " + sum);
    // }

    const sum = num1 - num2;
    console.log("The difference is: " + sum);
}

// Subtract(1,5)

function Multiply(num1, num2) {
    const product = num1 * num2;
    console.log("The product is: " + product);
}

function Divide(dividend, divisor) {
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;
  
    console.log("Quotient: " + quotient);
  
    if (remainder !== 0) {
      console.log("Remainder: " + remainder);
    }
}
  