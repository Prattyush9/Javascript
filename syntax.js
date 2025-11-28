// LESSON 19 – JS BASICS
// ------------------------------------
// 1. Syntax, Guide and Commenting
// ------------------------------------

// Single-line comment

/*
 Multi-line comment
 This is ignored by JS engine
*/

// A simple statement:
console.log("Hello, JavaScript!");

// ------------------------------------
// 2. Variables
// ------------------------------------

let age = 22;          // can be reassigned
const pi = 3.14159;    // cannot be reassigned
var oldWay = "avoid";  // works, but not recommended

// ------------------------------------
// 3. Statements
// ------------------------------------

// If statement
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Loop statement
for (let i = 1; i <= 3; i++) {
  console.log("Loop count:", i);
}

// ------------------------------------
// 4. Values and Types
// ------------------------------------

let name = "Prattyush";  // string
let isStudent = true;    // boolean
let score = 95.5;        // number
let nothing = null;      // null
let notDefined;          // undefined

console.log(typeof name);       // "string"
console.log(typeof isStudent);  // "boolean"
console.log(typeof score);      // "number"
console.log(typeof nothing);    // "object" (JS quirk)
console.log(typeof notDefined); // "undefined"

// ------------------------------------
// 5. Use of Operators
// ------------------------------------

// Arithmetic
let a = 10;
let b = 3;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);

// Comparison
console.log("a > b:", a > b);
console.log("a == '10':", a == "10");   // loose equality
console.log("a === '10':", a === "10"); // strict equality

// Logical
let x = true;
let y = false;
console.log("x && y:", x && y);
console.log("x || y:", x || y);
console.log("!x:", !x);

// ------------------------------------
// 6. Simple Calculator (Function-based)
// ------------------------------------

function calculate(num1, num2, operator) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Both operands must be numbers";
  }

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 === 0 ? "Cannot divide by zero" : num1 / num2;
    default:
      return "Invalid operator. Use +, -, * or /";
  }
}

console.log("10 + 5 =", calculate(10, 5, "+"));
console.log("10 - 5 =", calculate(10, 5, "-"));
console.log("10 * 5 =", calculate(10, 5, "*"));
console.log("10 / 5 =", calculate(10, 5, "/"));
