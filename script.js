'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0; // initialize highscore

const displayMessage = function (cssSelector, message) {
  document.querySelector(cssSelector).textContent = message;
};

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('.message', 'No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('.message', 'Correct Number!');
    displayMessage('.number', secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      displayMessage('.highscore', highScore);
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        '.message',
        guess > secretNumber ? 'Too High!' : 'Too low!'
      );
      score--;
      displayMessage('.score', score);
    } else {
      displayMessage('.message', 'Game Over!');
      displayMessage('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('.guess', '');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('.score', score);
  displayMessage('.message', 'Start guessing...');
  displayMessage('.number', '?');
  document.querySelector('.guess').value = '';
});
