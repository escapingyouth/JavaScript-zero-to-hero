'use strict';
/* 
! selecting just the elements 
*/
const player_0 = document.querySelector('.player--0');
const player_1 = document.querySelector('.player--1');

const currentScore_0 = document.getElementById('current--0');
const currentScore_1 = document.getElementById('current--1');

const score_0 = document.getElementById('score--0');
const score_1 = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

/*
 ! setting initial conditions
 */
let scores, currentScore, activePlayer, playing;

const init = () => {
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 0;
	playing = true;

	score_0.innerText = 0;
	score_1.innerText = 0;
	currentScore_0.innerText = 0;
	currentScore_1.innerText = 0;

	diceEl.classList.add('hidden');

	player_0.classList.remove('player--winner');
	player_1.classList.remove('player--winner');
	player_0.classList.add('player--active');
	player_1.classList.remove('player--active');
};
init();

const switchPlayer = () => {
	document.getElementById(`current--${activePlayer}`).innerText = 0;
	currentScore = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	player_0.classList.toggle('player--active');
	player_1.classList.toggle('player--active');
};

/*
 ! rolling dice functionality
 */
btnRoll.addEventListener('click', () => {
	if (playing) {
		/*
		 * 1. generating a random dice roll
		 */
		const dice = Math.floor(Math.random() * 6) + 1;

		/*
		 * 2. display dice
		 */
		diceEl.classList.remove('hidden');
		diceEl.src = `dice-${dice}.png`;

		/*
		 * 3. check for rolled 1: if true, switch to next player
		 */

		if (dice !== 1) {
			// Add dice to current score
			currentScore += dice;
			document.getElementById(`current--${activePlayer}`).innerText =
				currentScore;
		} else {
			// switch to next player
			switchPlayer();
		}
	}
});

btnHold.addEventListener('click', () => {
	if (playing) {
		/*
		 * 1. Add current score to active player's score
		 */
		scores[activePlayer] += currentScore;
		document.getElementById(`score--${activePlayer}`).innerText =
			scores[activePlayer];

		/*
		 * 2. check if player's score is >= 100
		 */

		if (scores[activePlayer] >= 100) {
			// finish the game
			playing = false;
			diceEl.classList.add('hidden');
			console.log(scores[activePlayer]);
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.add('player--winner');
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.remove('player--active');
		} else {
			// switch to next player
			switchPlayer();
		}
	}
});

btnNew.addEventListener('click', init);
