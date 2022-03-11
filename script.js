'use strict';
let number = Math.floor(Math.random() * 20);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    displayMessage('Not a number');
  } else if (number === guess) {
    displayMessage('You got it!');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.fontSize = '7rem';
    document.querySelector('.number').style.width = '40rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (number !== guess) {
    if (score > 1) {
      displayMessage(guess < number ? 'Try higher...' : 'Try lower...');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You are a loser!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  number = Math.floor(Math.random() * 20);
  displayMessage('Start guessing!');
  document.querySelector('.number').style.fontSize = '6rem';
  document.querySelector('.number').style.width = '25rem';
});
