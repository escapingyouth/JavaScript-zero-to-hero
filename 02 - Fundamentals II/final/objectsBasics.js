// 📌 JS OBJECTS

// 🔷 declaring an object
const person = {
	firstName: 'Eren',
	lastName: 'Jaeger',
	age: 20,
	isGenocidal: true,
	friends: ['Armin', 'Mikasa']
};

// 🔷 accessing data out of objects
console.log(person.lastName); // Jaeger
console.log(person['friends']); // ['Armin', 'Mikasa']

// 🔷 adding new properties
person.race = 'Eldian';

// 🔷 mutating properties of an object
person.age = 16;

// 🔷 Object methods
const character = {
	firstName: 'Eren',
	lastName: 'Jaeger',
	age: function (currentYear, birthYear) {
		return currentYear - birthYear;
	},
	isGenocidal: true,
	friends: ['Armin', 'Mikasa']
};

const myMath = {
	square(x) {
		return x ** 2;
	},
	cube(x) {
		return x ** 3;
	}
};

console.log(myMath.square(2));

// 🔷 use of the this keyword in methods
const dog = {
	name: 'Killjoy',
	color: 'white',
	breed: 'dalmatian',
	woof() {
		console.log(`${this.name} says  WOOFFF`); // Killjoy says WOOFFF
		// this here refers to the dog
	}
};
