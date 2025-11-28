// LESSON 20 – FUNCTIONS
// ------------------------------------
// 1. Introduction to Functions in JS
// ------------------------------------

function greet() {
  console.log("Hello from a function!");
}
greet();

// ------------------------------------
// 2. Functions in JS with Parameters
// ------------------------------------

function greetPerson(name) {
  console.log("Hello, " + name + "!");
}
greetPerson("Prattyush");

// ------------------------------------
// 3. Parameters and Optional Parameters
// ------------------------------------

// Using default parameter values as "optional"
function introduce(name, age = "unknown") {
  console.log(`Name: ${name}, Age: ${age}`);
}

introduce("John", 25);
introduce("John"); // age uses default "unknown"

// ------------------------------------
// 4. Scope of Variables in Functions
// ------------------------------------

let globalVar = "I am global";

function showScope() {
  let localVar = "I am local";
  console.log(globalVar); // accessible
  console.log(localVar);  // accessible
}

showScope();
// console.log(localVar); // ERROR: not defined outside the function

// ------------------------------------
// 5. Expression Function (Function Expression)
// ------------------------------------

const add = function (x, y) {
  return x + y;
};
console.log("add(3, 4) =", add(3, 4));

// Arrow function version
const multiplyArrow = (x, y) => x * y;
console.log("multiplyArrow(3, 4) =", multiplyArrow(3, 4));

// ------------------------------------
// 6. Multiplication using Functions
// ------------------------------------

// Basic multiplication function
function multiply(a, b) {
  return a * b;
}

console.log("multiply(6, 7) =", multiply(6, 7));

// Multiplication table using a function
function printTable(number) {
  console.log(`Multiplication Table of ${number}`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

printTable(5);
