// 1.
let ArrNum = [1, 2, 3, 4, 5];
console.log(ArrNum);

// // 2.
let array = [123, 12, 23, 4, 5, 66, 5, 7, 88, 6, 5, 34, 12];
function findMinMax() {
  console.log(Math.max(...array) + " is the maximum");
  console.log(Math.min(...array) + " is the minimum");
}
findMinMax();

// function findMinMax() {
//   for (let i = 1; i <= 20; i++) {
//     if (i <= 1) {
//       console.log(i + " is the minimum");
//     } else if (i >= 20) {
//       console.log(i + " is the maximum");
//     } else {
//       console.log(i + " is not defined");
//     }
//   }
// }
// findMinMax();

// // 3.
function printEvenOdd() {
  for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else if (i % 2 === 1) {
      console.log(i + " is odd");
    } else {
      console.log(i + " is not defined");
    }
  }
}
printEvenOdd();

// 4.
function Add(a, b) {
  console.log(1 + 3);
}
Add();

// 5.
function Subtract(a, b) {
  console.log(1 - 3);
}
Subtract();

// 6.
function Multiply(a, b) {
  console.log(1 * 3);
}
Multiply();

// 7.
function Divide(a, b) {
  console.log("remainder " + (10 % 6));
}
Divide();
