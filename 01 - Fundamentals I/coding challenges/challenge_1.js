// BMI CALCULATOR

// Mark's height and mass in metres and kilograms respectively
const heightMark = 1.69;
const massMark = 78;

// John's height and mass in metres and kilograms respectively
const heightJohn = 1.95;
const massJohn = 92;

// BMI function
const calaculateBMI = (height, mass) => {
	return mass / height ** 2;
};

// Calculate Mark and John's BMI
const BMIMark = calaculateBMI(heightMark, massMark);
const BMIJohn = calaculateBMI(heightJohn, massJohn);

// Check who has a higher BMI
const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);
