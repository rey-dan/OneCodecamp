// Exercise: JavaScript Basics



// 1. Declare a variable named numbers and assign it an array of at least 5 different integer values. The numbers can be any integers you choose


const numbers = [51, 543, 535, 96, 74];


// 2. Write a function named findMinMax. This function should take an array of numbers as a parameter and should print the minimum and maximum numbers from the array. The function does not need to return anything.

function findMinMax (arr) {
  let min = arr[0];
  let max = arr[0];
  
  for (let i = 0 ; i < arr.length ; i++){
    if(arr[i] < min){
      min = arr[i]
    }

    if(arr[i] > max){
      max = arr[i]
    }
  }
  // console.log(`Minimum number is ${min} and Maximum number is ${max}`);
  console.log("Minimum number is " + min + " and Maximum number is " + max);

}

findMinMax(numbers);



// 3. Write a function named printEvenOdd. This function should take an array of numbers as a parameter and should print whether each number is even or odd.



function printEvenOdd (arr){
  for (let i = 0 ; i < arr.length ; i++){
    let divided = arr[i] % 2;
    if(divided == 0){
      // console.log(`${arr[i]} is even`);
      console.log(arr[i] + " is even");
    }else{
      // console.log(`${arr[i]} is odd`);
      console.log(arr[i] + " is odd");
    }
  }
};

printEvenOdd(numbers)


// 4. Write a function named Add. This function should take 2 numbers as a parameter and should print the sum of the two numbers.


function Add (firstNum, secondNum){
  console.log(firstNum + secondNum);
}

Add(34, 58);




// 5. Write a function named Subtract. This function should take 2 numbers as a parameter and should print the difference of the two numbers.


// function Subtract(firstNum, secondNum){
//   if(firstNum > secondNum){
//     console.log(firstNum - secondNum);
//   }else{
//     console.log(secondNum -firstNum);
//   }
// }

function Subtract(firstNum, secondNum){
  console.log(firstNum - secondNum);
}


Subtract(71, 93)


// 6. Write a function named Multiply. This function should take 2 numbers as a parameter and should print the product of the two numbers.

function Multiply (firstNum, secondNum){
  console.log(firstNum * secondNum);
};

Multiply(85, 25)


// 7. Write a function named Divide. This function should take 2 numbers as a parameter and should print the quotient of the two numbers and it's remainder if there is a remainder

function Divide (firstNum, secondNum){
  console.log(firstNum / secondNum);
};

Divide(78, 9)