// LESSON 22 – OBJECTS & ARGUMENTS
// ------------------------------------
// 1. Objects in JS
// ------------------------------------

const person = {
  name: "Alex",
  age: 25,
  isStudent: true
};

console.log("Person object:", person);

// ------------------------------------
// 2. Properties of Object
// ------------------------------------

console.log("Name:", person.name);
console.log("Age:", person["age"]);

// Add new property
person.country = "India";
console.log("Updated person:", person);

// ------------------------------------
// 3. Built-in Math Object in JS
// ------------------------------------

console.log("Math.PI:", Math.PI);
console.log("Math.round(4.7):", Math.round(4.7));
console.log("Math.floor(4.7):", Math.floor(4.7));
console.log("Math.ceil(4.1):", Math.ceil(4.1));
console.log("Random 0–1:", Math.random());

function randomInt(min, max) {
  // both inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random 1–10:", randomInt(1, 10));

// ------------------------------------
// 4. Arguments Object in JS
// ------------------------------------

function showArguments() {
  console.log("Arguments length:", arguments.length);
  console.log("Arguments:", arguments);
}

showArguments(1, "two", true);

// ------------------------------------
// 5. Sum of Arguments (using arguments object)
// ------------------------------------

function sumArguments() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    let value = arguments[i];
    if (typeof value === "number") {
      total += value;
    }
  }
  return total;
}

console.log("sumArguments(1, 2, 3) =", sumArguments(1, 2, 3));
console.log("sumArguments(5, 'a', 10) =", sumArguments(5, "a", 10)); // ignores "a"
