// average score function
const averageScore = (x, y, z) => (x + y + z) / 3;

const averageDolphins = averageScore(100, 100, 100);
const averageKoalas = averageScore(100, 100, 100);

if (averageDolphins > averageDolphins && averageDolphins >= 100) {
	console.log('Dolphins Win!!!');
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
	console.log('Koalas Win!!!');
} else if (
	averageDolphins === averageKoalas &&
	(averageDolphins && averageKoalas) >= 100
) {
	console.log(`It's a draw!!!`);
} else {
	console.log('Nobody wins');
}
