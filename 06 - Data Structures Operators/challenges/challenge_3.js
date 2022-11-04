'use strict';

const gameEvents = new Map([
	[17, '⚽ GOAL'],
	[36, '🔁 Substitution'],
	[47, '⚽ GOAL'],
	[61, '🔁 Substitution'],
	[64, '🟡 Yellow card'],
	[69, '🔴 Red card'],
	[70, '🔁 Substitution'],
	[72, '🔁 Substitution'],
	[76, '⚽ GOAL'],
	[80, '⚽ GOAL'],
	[92, '🟡 Yellow card']
]);

// TASK 1
const values = gameEvents.values();
const events = [...new Set(values)];

// TASK 2
gameEvents.delete(64);
console.log(gameEvents);

// TASK 3
const totalMinutes = 90;
const numEvents = gameEvents.size;
const average = totalMinutes / numEvents;
console.log(`An event happened, on
average, every ${average} minutes`);

// TASK 4
for (let [minute, event] of gameEvents) {
	// minute <= 45
	// 	? console.log(`[FIRST HALF] ${minute}: ${event}`)
	// 	: console.log(`[SECOND HALF] ${minute}: ${event}`);
	const half = minute <= 45 ? 'FIRST' : 'SECOND';
	console.log(`[${half} HALF] ${minute}: ${event}`);
}
