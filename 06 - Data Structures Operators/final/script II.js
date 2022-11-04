'use strict';

// 📌 Enhanced object literals
// ⚡ Enhanced object literals are used to create objects with dynamic properties

const famousCustomers = {
	'Walter White': {
		firstName: 'Walter',
		lastName: 'White'
	},
	'Jesse Pinkman': {
		firstName: 'Jesse',
		lastName: 'Pinkman'
	},
	'Saul Goodman': {
		firstName: 'Saul',
		lastName: 'Goodman'
	}
};
// Supposing we want to place the famousCustomers object in the restaurant object
// usually we would do this:
// restaurant.famousCustomers = famousCustomers;
// but with enhanced object literals we can do this: refer to the restaurant object below

const workdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const restaurant = {
	resName: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
	openingHours: {
		[workdays[3]]: {
			open: 12,
			close: 22
		},
		[workdays[4]]: {
			open: 11,
			close: 23
		},
		[workdays[5]]: {
			open: 0, // Open 24 hours
			close: 24
		}
	},
	// ES6 enhanced object literals (properties)
	famousCustomers,

	// Enhanced Object Literals (functions)
	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
	orderDelivery({ starterIndex, mainIndex, time, address }) {
		return `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`;
	},
	orderPasta(ing1, ing2, ing3) {
		console.log(
			`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
		);
	}
};

console.log(restaurant);

//  📌 Optional chaining
// ⚡ The optional chaining operator (?.) accesses an object's property or calls a function. If the object is undefined or null, it returns undefined instead of throwing an error.
restaurant.openingHours.mon?.open; // undefined
restaurant.openingHours?.mon?.open; // undefined

for (let day of workdays) {
	let open = restaurant.openingHours[day]?.open ?? 'closed';
	console.log(`On ${day}, we open at ${open}`);
}

// 🔷 Optional chaining with methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // [ 'Focaccia', 'Pasta' ]
console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist'); // Method does not exist

// 🔷 Optional chaining with arrays
const users = [{ name: 'Michael', email: 'escapingyouth@gmail.com' }];
console.log(users[0]?.name ?? 'User array empty'); // Michael

//  📌 Looping objects: Object keys, values and entries

// 🔷 Iterating over object keys
const keyProp = Object.keys(restaurant.openingHours);
for (let day of keyProp) {
	console.log(day);
}

const valueProp = Object.values(restaurant.openingHours);

const entries = Object.entries(restaurant.openingHours);
for (let [day, { open, close }] of entries) {
	console.log(`On ${day} we open at ${open} and close at ${close}`);
}

//  📌 Sets and Maps
// ⚡ A set is a collection of unique values. It is similar to an array, but it does not allow duplicate values. A set can be created using the Set constructor.
const orderSet = new Set([
	'Pasta',
	'Pizza',
	'Pizza',
	'Risotto',
	'Pasta',
	'Pizza'
]);

console.log(orderSet); // Set(3) { 'Pasta', 'Pizza', 'Risotto' }
orderSet.size; // 3
orderSet.has('Pizza'); // true
orderSet.add('Garlic Bread'); // Set(4) { 'Pasta', 'Pizza', 'Risotto', 'Garlic Bread' }
orderSet.delete('Risotto'); // Set(3) { 'Pasta', 'Pizza', 'Garlic Bread' }
orderSet.clear(); // Set(0) {}

// 🔷 iterating over sets
for (let order of orderSet) {
	console.log(order);
}

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff); // [ 'Waiter', 'Chef', 'Manager' ]

// 📌 Maps
// ⚡ A map is a data structure that stores key-value pairs. It is similar to an object, but the keys can have any type.
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
rest.set(true, 'We are open :D').set(false, 'We are closed :(');
rest.set([1, 2], 'Test');

console.log(rest); // Map(3) { 'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal' }
rest.get('name'); // Classico Italiano
rest.get([1, 2]); // undefined

const arr = [2, 3];
rest.set(arr, 'Test II');
rest.get(arr); // Test II

rest.delete(2); // Map(2) { 'name' => 'Classico Italiano', 1 => 'Firenze, Italy' }
rest.size; // 2

const question = new Map([
	['question', 'What is the best programming language in the world?'],
	[1, 'C'],
	[2, 'Java'],
	[3, 'JavaScript'],
	['correct', 3],
	[true, 'Correct :D'],
	[false, 'Try again!']
]);

// 🔷 Converting object to map
const hoursMap = new Map(Object.entries(restaurant.openingHours));

// 🔷 Iterating over maps
for (let [key, value] of question) {
	console.log(`This is ${key}, and it's set to ${value}`);
}
