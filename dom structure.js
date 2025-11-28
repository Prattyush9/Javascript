// LESSON 24 – HTML DOM & EXTERNAL JS
// ------------------------------------
// 1. HTML DOM Structure & Accessing Values
// ------------------------------------

// Get elements by ID
const title = document.getElementById("title");
const description = document.getElementById("description");
const nameInput = document.getElementById("nameInput");
const nameOutput = document.getElementById("nameOutput");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const sumOutput = document.getElementById("sumOutput");

// Change text content
title.textContent = "DOM Demo (Updated by JavaScript)";
description.textContent = "Type below and JavaScript will update the page in real time.";

// ------------------------------------
// 2. Real-time Application Using JS
//    - Live name display
//    - Live sum calculator
// ------------------------------------

// Live name display
nameInput.addEventListener("input", function () {
  const value = nameInput.value.trim();
  nameOutput.textContent = value === "" ? "[nothing yet]" : value;
});

// Live sum calculator
function updateSum() {
  const n1 = Number(num1Input.value);
  const n2 = Number(num2Input.value);

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    sumOutput.textContent = "NaN";
  } else {
    sumOutput.textContent = n1 + n2;
  }
}

num1Input.addEventListener("input", updateSum);
num2Input.addEventListener("input", updateSum);

// ------------------------------------
// 3. JS as External File
// ------------------------------------
// This entire file IS the example of using JS as an external file.
// <script src="lesson24_dom.js"></script> in the HTML links it.
