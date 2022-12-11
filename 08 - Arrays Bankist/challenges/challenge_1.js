'use strict';

const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

const checkDogs = (dogsJulia, dogsKate) => {
	const dogsJuliaCorrected = dogsJulia.slice(1, 3);
	// const juliaKate = [...dogsJuliaCorrected, ...dogsKate];
	const dogs = dogsJuliaCorrected.concat(dogsKate);
	dogs.forEach((dog, index) => {
		dog >= 3
			? console.log(
					`Dog number ${++index} is an adult, and is ${dog} years old`
			  )
			: console.log(`Dog number ${++index} is still a puppy 🐶`);
	});
};

checkDogs(julia, kate);
