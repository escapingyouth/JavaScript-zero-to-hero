// π DECLARING VARIABLES IN JS
let myName = 'Michael';
let $function = 27;

let PI = 3.1415; // we use all caps for variables that don't change
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

// π JS DATA TYPES
let myAge = 31;
console.log(typeof myAge); // number

let message = 'I Love JavaScript';
console.log(typeof message); // string

let isTired = true;
console.log(typeof isTired); // boolean

let year;
console.log(year); // undefined
console.log(typeof year); // undefined

console.log(typeof null); // object
// β This is a bug in JS

// π JS OPERATORS

// π· arithmetic operators
const currentYear = 2037;
const birthYear = 2002;
const currentAge = currentYear - birthYear;
console.log(currentAge); // 32
console.log(currentAge ** 2); // 704
console.log(currentAge * 2); // 64
console.log(currentAge / 2); // 16

const firstName = 'Michael';
const lastName = 'Appiah';
const fullName = firstName + ' ' + lastName;
console.log(fullName); // Michael Appiah

// π· typeof operator
console.log(typeof 3); //number

// π· assignment operators
let x = 5;
x += 1;
console.log(x); // 6

x *= 4;
console.log(x); // 24

x++;
console.log(x); //25

// π· comparison operators
console.log(5 < 6); // true
console.log(4 == '4'); // true
console.log(2 === '2'); // false
console.log(0 != false); // false
console.log(0 !== false); // true

// π STRING AND TEMPLATE LITERALS

const quantity = 8;
const price = 12.99;
console.log(
	`I bought ${quantity} loaves of bread for ${quantity * price} dollars`
);

// π TAKING DECISIONS IN JS
const ranking = 100;
if (ranking >= 100) {
	console.log("You're a champ π");
} else {
	console.log("You're such a loserπ");
}

// π TRUTHY AND FALSY VALUES

// β falsy values - 0, '', undefined, null, NaN, false
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Michael')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

// π BOOLEAN LOGIC
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); // false
console.log(hasDriversLicense || hasGoodVision); // true
console.log(hasDriversLicense && !hasGoodVision); // true

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
	console.log('Sarah is able to drive');
} else {
	console.log('Someone else should drive');
} // Someone else should drive

// π SWITCH STATEMENTS
const day = 'monday';

switch (day) {
	case 'monday':
		console.log('Plan my course structure');
		console.log('Go to coding meetup');
		break;
	case 'tuesday':
		console.log('Prepare theory videos');
		break;
	case 'wednesday':
	case 'thursday':
		console.log('Learn French');
		break;
	case 'friday':
		console, log('Watch anime / read manga');
		break;
	case 'saturday':
	case 'sunday':
		console.log('Go to church');
	default:
		console.log('Not a day');
}

// π THE CONDITIONAL(TERNARY OPERATOR) OPERATOR
const age = 21;
age >= 18
	? console.log('You can drink wine π·')
	: console.log('Water should be enough for you π§');
// or
const drink = age >= 18 ? 'wine π·' : 'water π§';
console.log(drink); // wine π·

console.log(`I like to drink ${age >= 18 ? 'wine π·' : 'water π§'}`); // I like to drink wine π·
