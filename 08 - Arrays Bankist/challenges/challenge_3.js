'use strict';

const dogs = [
	{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
	{ weight: 8, curFood: 200, owners: ['Matilda'] },
	{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
	{ weight: 32, curFood: 340, owners: ['Michael'] }
];
// task 1
dogs.forEach(
	(dog) => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);

// task 2
const dogSarah = dogs.find((dog) => dog.owners.includes('Sarah'));
console.log(
	`Sarah's dog is eating too ${
		dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'
	}`
);

// task 3
const ownersEatTooMuch = dogs
	.filter((dog) => dog.curFood > dog.recommendedFood)
	.flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

// task 4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too little!`);

// task 5
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

// task 6
const checkEatingOkay = (dog) =>
	dog.curFood > dog.recommendedFood * 0.9 &&
	dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// task 7
console.log(dogs.filter(checkEatingOkay));

// task 8
const dogsSorted = dogs
	.slice()
	.sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
