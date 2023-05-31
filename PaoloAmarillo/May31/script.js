let numbers = [2, 5, 8, 65, 54];

function findMinMax() {
 
let min = numbers[0]
let max = numbers[0]    

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }

    if (numbers[i] > max){
        max = numbers[i];
    }
}
console.log(min + ' is min' , "and", max + ' is max');
}

findMinMax(numbers);


function printEvenOdd() {
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0 ){
            console.log(numbers[i] + ' is even');
        } else {
            console.log(numbers[i] + ' is odd');
        }
    }
}

printEvenOdd(numbers);

let nm1 = 55;
let nm2 = 23;

function add(number1 , number2) {
  let sum = number1 + number2;
  console.log(sum +' is the sum');
}

add(nm1, nm2);

function subract(number1, number2){
    let diff = number1 - number2;
    console.log(diff + ' is the difference');
}

subract(nm1, nm2);

function multiply(number1, number2){
    let product = number1 * number2;
    console.log(product + ' is the product');
}

multiply(nm1, nm2);

function divide(number1, number2) {
    let quotient = number1 / number2;
    let remainder = number1 % number2;
    console.log(quotient + ' is the quotient');
    console.log(remainder + ' is the remainder');

}

divide(nm1, nm2);