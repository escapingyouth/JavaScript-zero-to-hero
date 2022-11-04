'use strict';

// 📌 Default Parameters
const bookings = [];
const createBooking = (flightNum, numPassengers = 15, price = 40) => {
	// ❗ Old way of setting default parameters
	numPassengers = numPassengers ?? 15;
	price = price ?? 40;

	const booking = {
		flightNum,
		numPassengers,
		price
	};
	//console.log(booking);
	bookings.push(booking);
};

createBooking('LH123');

// 📌 How passing arguments works: value vs reference

const flight = 'LH34';
const passenger = {
	name: 'Michael',
	passport: 2323222
};

const checkIn = (flightNumber, passenger) => {
	flightNumber = 'LH999';
	passenger.name = 'Mr. ' + passenger.name;

	if (passenger.passport === 2323222) {
		// alert('Check In');
	} else {
		// alert('Wrong passport');
	}
};

checkIn(flight, passenger);
console.log(passenger); // {name: "Mr. Michael", passport: 2323222}

// 📌 First-class and Higher-order functions

// ⚡ First class functions are JS functions that are treated like any other variable. They can be stored in variables, passed as arguments to other functions, and returned from functions.
// ⚡ Higher-order functions are functions that receive other functions as arguments or return functions as their output.

// 🔷 Functions accepting callback functions
const oneWord = (str) => {
	return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = (str) => {
	const [first, ...others] = str.split(' ');
	return [first.toUpperCase(), ...others].join(' ');
};

const transformer = (str, fn) => {
	return fn(str); // callback function;
};

transformer('JavaScript is the best!', upperFirstWord);

// 🔷 Functions returning functions
const greet = (greeting) => {
	return (name) => {
		console.log(`${greeting} ${name}`);
	};
};

const greeterHey = greet('Hey');
greeterHey('Michael'); // Hey Michael
// or
greet('Hello')('Michael'); // Hello Michael

// 📌 The call, apply and bind methods
// ⚡ The call method allows us to call a function with a specific this keyword.
// ⚡ The apply method is similar, but it takes an array of arguments instead of a list of arguments.
// ⚡ The bind method allows us to set the this keyword for a function permanently.

const lufthansa = {
	airline: 'Lufthansa',
	iataCode: 'LH',
	bookings: [],
	book(flightNum, name) {
		console.log(
			`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
		);
		this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
	}
};
lufthansa.book(239, 'Michael');

const eurowings = {
	airline: 'Eurowings',
	iataCode: 'EW',
	bookings: []
};

const swiss = {
	airline: 'Swiss Air Lines',
	iataCode: 'LX',
	bookings: []
};

const book = lufthansa.book;
book.call(eurowings, 23, 'Sarah Williams'); // call method

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); // apply method

const bookEW = book.bind(eurowings); // bind method
bookEW(69, 'Steven Williams');
console.log(bookings);

// 📌 With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
	this.planes++;
	console.log(this.planes);
};
document
	.querySelector('.buy')
	.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// 📌 Partial Application
// ⚡ Partial application is a technique that allows us to preset parameters of a function. This is useful when we have a function that takes multiple parameters, but we only want to set some of them.

const addTax = (rate, value) => value + value * rate;
// addVAT = value => value + value * 0.23;
console.log(addTax(0.1, 200)); // 220

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100)); // 123

// Summary of call, apply and bind methods
// ⚡ Call: binds the this value, invokes the function, and allows you to pass a list of arguments.
// ⚡ Apply: binds the this value, invokes the function, and allows you to pass arguments as an array.
// ⚡ Bind: binds the this value, returns a new function, and allows you to pass in a list of arguments.

// 📌 Immediately Invoked Function Expressions (IIFE)
// ⚡ IIFE is a function that is executed as soon as it is created. It is a design pattern that is used to create a private scope.

const runOnce = () => {
	console.log('This will never run again');
};
// ❗ This function can actually run more than once, because it is not an IIFE.
runOnce();

// This is an IIFE
(function () {
	console.log('This will never run again');
})();

// 🔷 IIFE with arrow function

(() => console.log('This will ALSO never run again'))();

// 📌 Closures
// ⚡ A closure is a function that has access to the variable environment of the execution context in which it was created, even after that execution context is gone.
const secureBooking = () => {
	let passengerCount = 0;
	return () => {
		passengerCount++;
		console.log(`${passengerCount} passenger(s)`);
	};
};

const booker = secureBooking();
booker();
// ❗ The booker function has access to the passengerCount variable, even though the secureBooking function has already returned.
//  This is because the booker function is a closure(declared in the secureBooking function).
// The scope chain is preserved in the closure even though the secureBooking function has already returned.

// 📌 More Closure Examples

// 🔷 Example 1
let f;

const g = () => {
	const a = 23;
	f = () => {
		console.log(a * 2);
	};
};

g();
f(); // 46

// ❗ The f function is a closure, because it has access to the a variable, even though the g function has already returned.

const h = () => {
	const b = 777;
	f = () => {
		console.log(b * 2);
	};
};

h();
f(); // 1554

// ❗ The f function is reassigned in the h function and now has access to the b variable, even though the h function has already returned.

// 🔷 Example 2
const boardPassengers = (n, wait) => {
	const perGroup = n / 3;
	setTimeout(() => {
		console.log(`We are now boarding all ${n} passengers`);
		console.log(`There are 3 groups each with ${perGroup} passengers`);
	}, wait * 1000);

	// ❗ The callback function still has access to the perGroup function even though the boardPassengers function has already been executed
	console.log(`We will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
