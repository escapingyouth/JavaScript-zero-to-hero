'use strict';

const btn = document.querySelector('.check');
const message = document.querySelector('.message');

let secretNumber = Math.floor(Math.random() * 19) + 1;
const number = document.querySelector('.number');

const initialScore = document.querySelector('.score');
let score = 20;

const highScore = document.querySelector('.highscore');
let initialHighScore = 0;

const restartButton = document.querySelector('.again');

const displayMessage = (msg) => {
	message.innerText = msg;
};

btn.addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);

	// When there is no input
	if (!guess) {
		displayMessage('❌ No Number');
	} else if (guess === secretNumber) {
		displayMessage('🎉 Correct Number!');
		number.innerText = secretNumber;
		document.querySelector('body').style.backgroundColor = 'green';
		number.style.width = '30rem';
		if (score > initialHighScore) {
			initialHighScore = score;
			highScore.innerText = initialHighScore;
		}
	} //When guess is wrong
	else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
			score--;
			initialScore.innerText = score;
		} else {
			displayMessage('💥 You lost the game');
			initialScore.innerText = 0;
			document.querySelector('body').style.backgroundColor = 'red';
		}
	}
});

restartButton.addEventListener('click', () => {
	score = 20;
	initialScore.innerText = score;
	secretNumber = Math.floor(Math.random() * 19) + 1;

	number.innerText = '?';
	document.querySelector('.guess').value = '';
	displayMessage('Start guessing...');

	document.querySelector('body').style.backgroundColor = '#222';
	number.style.width = '12rem';
});
