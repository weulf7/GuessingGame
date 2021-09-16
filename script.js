'use strict';

let randomNumber = Math.floor(Math.random() * 20 + 1);
let attempts = 0;
let score = 20;

const startGame = function () {
  let scoreD = document.querySelector('.score');
  let attemptsD = document.querySelector('.attempts');
  let body = document.querySelector('body');
  let heading1 = document.querySelector('h1');
  let number = document.querySelector('.number');

 let displayMessage=function(message){
      document.querySelector('.message').textContent=message;
  }

  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    document.querySelector('.again').addEventListener('click', function () {
      score = 20;
      attempts = 0;
      scoreD.textContent = score;
      attemptsD.textContent = attempts;
      displayMessage('Start guessing')
      body.style.backgroundColor = '#222';
      heading1.textContent = 'Guess My Number';
      number.textContent = '?';
      randomNumber = Math.floor(Math.random() * 20 + 1);
    });

    if (!guess) {
      displayMessage('Enter valid number')
    } else if (guess !== randomNumber) {
      if (score > 1) {
        displayMessage(guess > randomNumber ? 'To high' : 'To Low');
        score--;
        attempts++;
        scoreD.textContent = score;
        attemptsD.textContent = attempts;
      } else {
        displayMessage('You lost the game')
        body.style.backgroundColor = 'red';
        heading1.textContent = 'Game Over';
        scoreD.textContent = 0;
      }
    } else {
      displayMessage('You got it, the number was ' + randomNumber);
      number.textContent = randomNumber;
      body.style.backgroundColor = '#60b347';
      heading1.textContent = 'You Won The Game';
      let highScore = document.querySelector('.highscore');
      highScore.textContent = score;
      if (score < highScore) {
        highScore = highScore;
      } else {
        highScore = score;
      }
    }
  });
};

startGame();
