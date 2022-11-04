'use strict';

const calcAverage = (x, y, z) => (x + y + z) / 3;
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
	if (avgDolphins > avgKoalas) {
		return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
	} else if (avgDolphins < avgKoalas) {
		return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
	} else {
		return `No team wins`;
	}
};

console.log(checkWinner(avgDolphins, avgKoalas));
