'use strict';

const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
		[
			'Neuer',
			'Pavard',
			'Martinez',
			'Alaba',
			'Davies',
			'Kimmich',
			'Goretzka',
			'Coman',
			'Muller',
			'Gnarby',
			'Lewandowski'
		],
		[
			'Burki',
			'Schulz',
			'Hummels',
			'Akanji',
			'Hakimi',
			'Weigl',
			'Witsel',
			'Hazard',
			'Brandt',
			'Sancho',
			'Gotze'
		]
	],
	score: '4:0',
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
	date: 'Nov 9th, 2037',
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5
	}
};

const { scored, odds } = game;

// TASK 1
for (let [goal, player] of scored.entries()) {
	console.log(`Goal ${goal + 1}: ${player}`);
}

// TASK 2
let total = 0;
const valOdds = Object.values(odds);
for (let odd of valOdds) {
	total += odd;
}
let average = total / valOdds.length;
console.log(average);

// TASK 3
for (let [team, odd] of Object.entries(odds)) {
	const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
	console.log(`Odd of ${teamStr}: ${odd}`);
	console.log(game);
}

// TASK 4
const scorers = {
	[scored[1]]: 1,
	[scored[3]]: 1,
	[scored[0]]: 2
};

console.log(scorers);
