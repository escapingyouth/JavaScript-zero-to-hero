'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // TASK 1
    let answer = parseInt(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    let position =
      typeof answer === 'number' && answer < this.answers.length
        ? this.answers[answer]++
        : alert('Try Again!');

    this.displayResults();
    this.displayResults('string');
  },
  // TASK 3
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
poll.registerNewAnswer();

// TASK 2
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// TASK 4
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
