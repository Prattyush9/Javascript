// LESSON 23 – ARRAYS, OBJECTS, CALL STACK
// ------------------------------------
// 1. Object Data Structure
// ------------------------------------

const user = {
  id: 101,
  name: "John Doe",
  skills: ["JS", "HTML", "CSS"],
  address: {
    city: "Delhi",
    country: "India"
  }
};

console.log("User:", user);
console.log("User city:", user.address.city);

// ------------------------------------
// 2. Math Object (quick recap)
// ------------------------------------

const radius = 5;
const circleArea = Math.PI * radius * radius;
console.log("Circle area:", circleArea);

// ------------------------------------
// 3. Array in JS
// ------------------------------------

let marks = [80, 90, 75, 88];
console.log("Marks:", marks);

// ------------------------------------
// 4. Methods in Array
// ------------------------------------

// push, pop, map, filter, reduce
marks.push(95);
console.log("After push:", marks);

marks.pop();
console.log("After pop:", marks);

let doubled = marks.map(m => m * 2);
console.log("Doubled:", doubled);

let highMarks = marks.filter(m => m >= 85);
console.log("High marks (>=85):", highMarks);

let total = marks.reduce((sum, m) => sum + m, 0);
console.log("Total marks:", total);
console.log("Average:", total / marks.length);

// ------------------------------------
// 5. Call Stack – simple demonstration
// ------------------------------------

function multiply(a, b) {
  console.log("multiply called");
  return a * b;
}

function square(n) {
  console.log("square called");
  return multiply(n, n); // calls multiply
}

function printSquare(n) {
  console.log("printSquare called");
  const result = square(n); // calls square -> multiply
  console.log(`Square of ${n} is ${result}`);
}

printSquare(5);
// Call stack order:
// printSquare -> square -> multiply
