numbers  = [5, 3, 23, 7, 1, 8]

function findMinMax(num) {
    let Max = num[0]; 
    let Min = num[0]; 
    
    //loop to compare all numbers to the array
    for (let i = 0; i < num.length; i++){ 
        console.log(Max); 
        console.log(Min); 
        if(num[i] > Max){ 
            Max = num[i]; 
        } else if (num[i] < Min) { 
            Min = num[i];
        }
    }
    console.log(`The Largest number is: `+Max);
    console.log(`The Smallest number is: `+Min);
}


function printEvenOdd (arr) {
    for (i = 0; i < numbers.length; i++){
        let num = arr[i]; // initializes the number inside the position on that array
        if (num % 2 === 0) {
            console.log(num + ` is even`);
          } else {
            console.log(num + ` is odd`);
          }
    }
}

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


function Multiply(num1, num2) {
    const product = num1 * num2;
    console.log("The product is: " + product);
}


function Divide(x, y) {
    const quotient = (x / y);
    // const quotient = Math.floor(x/y)
    const remainder = x % y;
  
    console.log("Quotient: " + quotient);
  
    if (remainder !== 0) {
      console.log("Remainder: " + remainder);
    }
}


// findMinMax(numbers)
// printEvenOdd(numbers)
// Add(2,3)
// Subtract(1,5)
// Multiply(2,3)
// Divide(11,2)