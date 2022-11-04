// 📌 FOR LOOPS

// 🔷  loop to find sum from 1 to 10
let sum = 0;
for (let count = 1; count <= 10; count++) {
	sum += count;
}
console.log(sum); // 55

// 🔷 using for loops to iterate arrays
const movies = [
	'Harry Potter',
	'Spider-man 2',
	'Frozen',
	'Inside Out',
	'Man of Steel'
];

for (let i = 0; i < movies.length; i++) {
	console.log(`${movies[i]} is a great movie`);
}

// 🔷 iterating through multidimensional arrays
const books = [
	['Goblet of Fire', 'Chamber of Secrets', 'Prisoner of Azkaban'],
	['Trials of Apollo', 'Magnus Chase and the gods of Asgard', 'Percy Jackson'],
	['A Clash of Kings', 'A Game of Thrones', 'A Dance with Dragons']
];

for (let i = 0; i < books.length; i++) {
	let bookOfBooks = books[i];
	for (let j = 0; j < bookOfBooks.length; j++) {
		console.log(`${bookOfBooks[j]} is an amazing read`);
	}
}

// 🔷 looping arrays backwards
const num = [1, 2, 3, 4, 5, 6, 7];
for (let i = num.length - 1; i >= 0; i--) {
	console.log(num[i]);
}

// 🔷 Looping using for of loop
const footballClubs = [
	'Barcelona',
	'Chelsea',
	'Liverpool',
	'Manchester United',
	'Real Madrid'
];

for (let club of footballClubs) {
	console.log(club); // Barcelona, Chelsea, Liverpool, Manchester United, Real Madrid
}

for (let club of footballClubs.entries()) {
	console.log(club); // [0, 'Barcelona'], [1, 'Chelsea'], [2, 'Liverpool'], [3, 'Manchester United'], [4, 'Real Madrid']
}

// 📌 WHILE LOOPS
let i = 0;
while (i < 10) {
	console.log(i);
	i++;
}

let total = 0;
let count = 0;

while (count < 10) {
	total += count;
	if (total === 21) break;
	count++;
}
console.log(total); // 21
