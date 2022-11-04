'use strict';

const restaurant = {
	resName: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
	openingHours: {
		thur: {
			open: 12,
			close: 22
		},
		fri: {
			open: 11,
			close: 23
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24
		}
	},

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
	orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
		return `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`;
	},
	orderPasta: function (ing1, ing2, ing3) {
		console.log(
			`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
		);
	}
};

//  📌 array destructuring
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c); // 1 2 3

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian, Vegetarian

// 📌switching values using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary); // Vegetarian, Italian

// 📌 destructuring arrays from functions
console.log(restaurant.order(2, 0)); // ['Garlic Bread', 'Pizza']
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza

// 📌 destructuring from nested arrays
const nested = [1, 2, [3, 4]];
const [i, j, [k, l]] = nested;
console.log(i, j, k, l); // 1 2 3 4

// 📌 object destructuring
const { resName, openingHours, categories } = restaurant;
console.log(resName, openingHours, categories); // Classico Italiano { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 }, sat: { open: 0, close: 24 } } [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]

// 📌 assigning different keys using object destructuring
const { resName: name, openingHours: hours, categories: cat } = restaurant;
console.log(name, hours, cat); // Classico Italiano { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 }, sat: { open: 0, close: 24 } } [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]

// 📌 setting default values using object destructuring
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters); // [] [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

// 📌 mutating variables using object destructuring
let x = 100;
let y = 200;
const obj = { x: 10, y: 20, z: 30 };
({ x, y } = obj);
console.log(x, y); // 10 200

// 📌 destructuring nested objects
const {
	sat: { open, close }
} = openingHours;
console.log(open, close); // 0 24

// 📌 destructuring objects from function
restaurant.orderDelivery({
	time: '22:30',
	address: 'Accra, Ghana',
	mainIndex: 2,
	starterIndex: 2
});

// 📌 The spread operator
// ⚡ Spread is used to unpack elements of an array or object on the right side of the operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu); // [ 'Pizza', 'Pasta', 'Risotto', 'Gnocchi' ]
restaurant['mainMenu'] = newMenu;

const everyMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// 📌 spread operator with strings
const firstName = 'Michael';
const letters = [...firstName];

// const ingredients = [
//   prompt('Enter ingredient 1:'),
//   prompt('Enter ingredient 2:'),
//   prompt('Enter ingredient 3:'),
// ];

// restaurant.orderPasta(...ingredients);

// 📌 Spread with Object Literals
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Canidae' };
const newFeline = { ...feline, color: 'black' }; // { legs: 4, family: 'Felidae', color: 'black' }
const catDog = { ...feline, ...canine }; // {legs :4 , family : 'Canidae', isFurry: true}

// 📌 Rest Pattern and Parameters
// ⚡ Rest is used to assign multiple elements to an array or object on the left side of the operator

const [e, f, ...others] = [1, 2, 3, 4, 5];
console.log(e, f, others); // 1, 2, [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
	...restaurant.mainMenu,
	...restaurant.starterMenu
];
console.log(pizza, risotto, otherFood); // Pizza Risotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

const { sat, ...weekdays } = openingHours;
console.log(sat, weekdays); // { open: 0, close: 24 } { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

// 📌 Rest with Functions
const add = (...numbers) => {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
};

add(2, 3); // 5
const nums = [2, 4, 6, 8];
add(...nums); // 20

// 📌 Short Circuiting (&& and ||)
// ⚡ Short circuiting implies that if the first value is a truthy value it returns it

// 🔷 Short circuiting with OR
console.log(3 || 'Michael'); // 3
console.log('' || 'Michael'); // Michael
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 17); // Hello

restaurant.numGuests = 30;
const guestOne = restaurant.numGuests ? restaurant.numGuests : 50;
console.log(guestOne); // 30

// using short circuiting
const guestTwo = restaurant.numGuests || 50;
console.log(guestTwo); // 30

// 🔷 Short circuiting with AND
console.log(0 && 'Michael'); // 0
console.log(7 && 'Michael'); // Michael
console.log('Hello' && 17 && null && 'Michael'); // null

// 🔷 The nullish coalescing Operator (??)
// ⚡ The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined
// and otherwise returns its left - hand side operand.
restaurant.numGuests = 0;
const guest = restaurant.numGuests ?? 10;
console.log(guest); // 0

// 📌 Logical assignment operators
const res1 = {
	name: 'Capri',
	numGuests: 0
};
const res2 = {
	name: 'La Piazza',
	owner: 'Leonardo Bonucci'
};

rest1.numGuests = res1.numGuests ?? 10;
rest2.numGuests = res2.numGuests || 30;
rest2.owner = res2.owner && 'Anonymous';

// 🔷 using logical assignment operator:
res1.numGuests ??= 10; // nullish assignment operator
res2.numGuests ||= 30; // or assignment operator
rest2.owner &&= 'Anonymous'; // and assignment operator
