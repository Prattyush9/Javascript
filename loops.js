// LESSON 21 – METHODS, LOOPS, SWITCH
// ------------------------------------
// 1. Methods in JS (mainly String & Array)
// ------------------------------------

let text = "Hello JavaScript";

// String methods
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log("Length:", text.length);
console.log("Includes 'Java':", text.includes("Java"));
console.log("Starts with 'He':", text.startsWith("He"));
console.log("Ends with 'ipt':", text.endsWith("ipt"));

// Array methods
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);     // add at end
numbers.unshift(0);  // add at start
console.log("Array after push & unshift:", numbers);

numbers.pop();       // remove from end
numbers.shift();     // remove from start
console.log("Array after pop & shift:", numbers);

// ------------------------------------
// 2. Test Methods in JS (examples)
// ------------------------------------

// A common "test" method is using regex or conditions
let email = "test@example.com";
let isValidEmail = email.includes("@") && email.includes(".");
console.log("Is valid email:", isValidEmail);

// Another style: Boolean-returning helper
function isPositive(num) {
  return num > 0;
}
console.log("Is 5 positive?", isPositive(5));

// ------------------------------------
// 3. Loops in JS
// ------------------------------------

// For loop
for (let i = 1; i <= 3; i++) {
  console.log("for loop i =", i);
}

// While loop
let count = 1;
while (count <= 3) {
  console.log("while loop count =", count);
  count++;
}

// For...of loop (arrays)
for (let n of [10, 20, 30]) {
  console.log("for...of value:", n);
}

// ------------------------------------
// 4. Switch in JS
// ------------------------------------

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown day";
}

console.log("Day name:", dayName);

// ------------------------------------
// 5. Methods and Loops Together
// ------------------------------------

let words = ["javascript", "is", "fun"];

// Capitalize first letter of each word
function capitalize(word) {
  if (!word) return "";
  return word[0].toUpperCase() + word.slice(1);
}

for (let i = 0; i < words.length; i++) {
  words[i] = capitalize(words[i]);
}
console.log("Capitalized words:", words.join(" "));
