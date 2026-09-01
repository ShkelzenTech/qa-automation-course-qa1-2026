let x = 8;
let y = 2;

//addition
console.log(x + y);

//substraction
console.log(x - y);

// multiplication
console.log(x * y);

// division
console.log(x / y);

// Increase

let a = 35;
a++;
console.log(a);

// Decrease

let b = 35;
b--;
console.log(b);

// Modulus

let i = 32;
let j = 5;
console.log(i % j);

// Power of a number

console.log(2 ** 3);

// Part 2: Comparison Operators

// ===

let firstNumber = 7;
let secondNumber = "7";
console.log(firstNumber === secondNumber);

// Greater than / less

let number1 = 7;
let number2 = 3;
console.log(number1 > number2);
console.log(number1 < number2);

// Not Equal

let numberOne = 8;
let numberTwo = 4;
console.log(numberOne !== numberTwo);

// Part 3: Logical Operators

// 1. Logical AND (&&)

let seat = null;
let game = "on";
console.log(seat && game);

// Logical OR (||)

console.log(seat || game);

// 3. Logical NOT (!)

let isSkyGreen = true;
console.log(!isSkyGreen);

// Part 4: Truthy vs Falsy

// 1. Falsy Value

let numberFalsy = 0;
if ((numberFalsy = 0));
{
  console.log("Falsy value detected");
}

// 2. Truthy Value

let truthyString = "rome" || "tokyo";
if (truthyString !== "whatever") {
  console.log("Truthy value detected");
}

// 3. Default Value with ||

let country = "" || "Italy";
console.log(country);
