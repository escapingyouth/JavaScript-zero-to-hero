'use strict';

// 📌 Scoping in Practice

const firtName = 'Michael';

function calcAge(birthYear) {
	const age = 2037 - birthYear;
	function printAge() {
		const output = `${firtName},you're ${age}, born in ${birthYear}`;
		console.log(output);

		if (birthYear >= 1999 && birthYear <= 1996) {
			var millenial = true;
			const str = `Oh you're a millenial ${firtName}`;
			console.log(str);

			function add(a, b) {
				return a + b;
			}
		}
		console.log(millenial);
		console.log(add(1, 2));
	}
	printAge();
	return age;
}

calcAge(1990);

// 📌 Hoisting in practice

// 🔷 hoisting with variables
console.log(me); // undefined
console.log(job); // reference error
console.log(age); // reference error

var me = 'Michael';
let job = 'Software Engineer';
const age = 20;

// 🔷 hoisting with functions
console.log(addDec(1, 2)); // 3
console.log(addExp(1, 2)); // reference error
console.log(addArrow(1, 2)); // reference error

function addDec(a, b) {
	return a + b;
}
const addExp = function (a, b) {
	return a + b;
};

const addArrow = (a, b) => a + b;

// 📌 The this keyword in practice

// ⚡ The this keyword is a variable that points to the object that is calling the function.
// 🔷 Methods - this refers to the object that is calling the method.
// 🔷 functions - this is undefined.
// 🔷 arrow functions - this is the this of the surrounding function
// 🔷 event listeners - this refers to the element that triggered the event.

console.log(this); // this is the window object

const squareDec = function (x) {
	return x ** 2;
	console.log(this); // undefined
};
const squareArrow = function (x) {
	return x ** 2;
	console.log(this); // this is the window object
};

const user = {
	name: 'Michael',
	age: 20,
	job: 'Software Engineer',
	sayName: function () {
		console.log(this.name);
		console.log(this); // this is the user object
	}
};
