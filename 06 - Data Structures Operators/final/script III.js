'use strict';

// 📌 Working with Strings
const airline = 'Ghana Airlines';
const plane = 'A320';

plane[0]; // A
plane.length; // 4

//  📌 String Methods

// ⚡ IndexOf - returns the index of the first occurence of the value
// ⚡ lastIndexOf - returns the index of the last occurence of the value
airline.indexOf('G'); // 0
airline.lastIndexOf('a'); // 4

// ⚡ Slice - returns a part of the string
airline.slice(6); // Airlines
airline.slice(6, 9); // Air
airline.slice(-2); // es

const checkMiddleSeat = (seat) => {
	const s = seat.slice(-1);
	if (s === 'B' || s === 'E') {
		console.log('You got the middle seat');
	} else {
		console.log('You got lucky');
	}
};

// ⚡ toLowerCase - converts the string to lowercase
airline.toLowerCase(); // ghana airlines

// ⚡ toUpperCase - converts the string to uppercase
airline.toUpperCase(); // GHANA AIRLINES

// ⚡ replace - replaces a part of the string with another string
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');

// ⚡ split - splits the string into an array
const fullName = 'John Smith';
const nameArray = fullName.split(' '); // ['John', 'Smith']

// ⚡ join - joins the array into a string
const message = ['I', 'Hate', 'You'].join(' '); // I Hate You
