'use strict';

const mark = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,
	calcBMI() {
		return this.mass / this.height ** 2;
	}
};
const john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBMI() {
		return this.mass / this.height ** 2;
	}
};

console.log(
	john.calcBMI() > mark.calcBMI()
		? `${john.fullName}'s BMI(${john.calcBMI()}) is higher than ${
				mark.fullName
		  }'s(${mark.bmi})`
		: `${mark.fullName}'s BMI(${mark.calcBMI()}) is higher than ${
				john.fullName
		  }'s (${john.calcBMI()})`
);
