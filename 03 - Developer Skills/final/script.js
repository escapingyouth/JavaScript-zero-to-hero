// ❗ Remember, we're gonna use strict mode in all scripts now!
'use strict';

// 📌 PROBLEM 1:
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 🔷 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 🔷 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = (temps) => {
	// ❗ The code below was obtained by using Google and Stackoverflow
	let max = temps[0];
	let min = temps[0];
	for (let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];
		if (typeof curTemp !== 'number') continue;
		if (curTemp >= max) max = curTemp;
		if (curTemp < min) min = curTemp;
	}
	console.log(min, max);
	return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// 📌 PROBLEM 2:
// ❗ Function should now receive 2 arrays of temps

// 🔷 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 🔷 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = (t1, t2) => {
	const temps = t1.concat(t2); // ❗ use the MDN web docs to research this method
	console.log(temps);

	let max = temps[0];
	let min = temps[0];

	for (let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];
		if (typeof curTemp !== 'number') continue;

		if (curTemp > max) max = curTemp;
		if (curTemp < min) min = curTemp;
	}
	console.log(max, min);
	return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

//  🔷 Debugging with the Console and Breakpoints
const measureKelvin = function () {
	const measurement = {
		type: 'temp',
		unit: 'celsius',
		//value: prompt('Degrees celsius:') // ❗ this would be a bug
		value: Number(prompt('Degrees celsius:')) // fixing the bug by converting the string to a number
	};
	const kelvin = measurement.value + 273;
	return kelvin;
};

console.log(measureKelvin());
