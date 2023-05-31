// 1. array of 5 numbers
let numbers = [1, -8, 20, 7, 13];

// 2. find the minimum and maximum numbers
function findMinMax(numbers) {
	let max = numbers[0];
	let min = numbers[0];

	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > max) {
			max = numbers[i];
		} else if (numbers[i] < min) {
			min = numbers[i];
		}
	}
	console.log(`${max}`);
	console.log(`${min}`);
}
findMinMax(numbers);

// 3. tell whether the number is even or odd
function printEvenOdd(numbers) {
	let even = numbers[0];
	let odd = numbers[0];

	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 === 0) {
			console.log(`${numbers[i]} is even`);
		} else {
			console.log(`${numbers[i]} is odd`);
		}
	}
}
printEvenOdd(numbers);

// 4. add two numbers
function Add(x, y) {
	let sum = x + y;
	console.log(`The sum of ${x} and ${y} is ${sum}`);
}
Add(7, 13);

// 5. subtract two numbers
function Subtract(x, y) {
	let difference = x - y;
	console.log(`The difference of ${x} and ${y} is ${difference}`);
}
Subtract(20, 13);

// 6. multiply two numbers
function Multiply(x, y) {
	let product = x * y;
	console.log(`The product of ${x} and ${y} is ${product}`);
}
Multiply(7, 13);

// 7. divide two numbers
function Divide(x, y) {
	let quotient = x / y;
	let remainder = x % y;
	console.log(`The quotient of ${x} and ${y} is ${quotient} with a remainder of ${remainder}`);
}
Divide(20, 13);
