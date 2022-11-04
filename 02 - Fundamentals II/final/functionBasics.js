// 📌 USING STRICT MODE
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
	hasDriversLicense = true; // ❗ with strict mode an error is caught if the wrong variable is declared e.g 'hasDriverLicense'
}

// 📌 JS FUNCTION BASICS
function logger() {
	console.log('My name is Michael'); // My name is Michael
}
// 🔷 calling / running / invoking the function
logger(); // My name is Michael
logger(); // My name is Michael
logger(); // My name is Michael

function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges`;
	return juice;
}
const fruitJuice = fruitProcessor(5, 6);
console.log(fruitJuice); // Juice with 5 apples and 6 oranges

// 🔷 function declaration
function calcAge(currentYear, birthYear) {
	return currentYear - birthYear;
}
// 🔷 function expression
const myAge = function (currentYear, birthYear) {
	return currentYear - birthYear;
};
console.log(calcAge(2022, 2002), myAge(2022, 2002)); // 20

// 🔷 arrow functions
const add = (x, y) => x + y; // implicit arrow function

const square = (x) => {
	return x ** 2;
};

console.log(add(2, 3), square(2, 3)); // 5 6

// 🔷 functions calling other functions (callback functions)
const cutPieces = function (fruit) {
	return fruit * 4;
};

const fruitMixer = function (apples, oranges) {
	const applePieces = cutPieces(apples);
	const orangePieces = cutPieces(oranges);

	const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
	return juice;
};
