'use strict';

const calcAverageHumanAge = (ages) => {
	const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
	const adults = humanAges.filter((age) => age >= 18);
	const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
	return average;
};
