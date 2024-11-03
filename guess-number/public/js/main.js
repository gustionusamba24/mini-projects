"use strict";
var _a, _b;
let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 10;
let highscore = 0;
let guessEl = document.querySelector(".guess");
let messageEl = document.querySelector(".message");
let numberEl = document.querySelector(".number");
let scoreEl = document.querySelector(".score");
let highscoreEl = document.querySelector(".highscore");
const displayMessage = function (message) {
    messageEl.textContent = message;
};
(_a = document
    .querySelector(".btn-guess")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    const guess = Number(guessEl.value);
    if (!guess) {
        displayMessage("❌ No number");
    }
    else if (guess === secretNumber) {
        displayMessage("🥳 Correct number");
        numberEl.textContent = secretNumber.toString();
        // check whether you get a highscore or no
        if (score > highscore) {
            highscore = score;
            highscoreEl.textContent = highscore.toString();
        }
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            let highOrLow = guess > secretNumber ? "⬆️ Too high" : "⬇️ Too low";
            displayMessage(highOrLow);
            score--;
            scoreEl.textContent = score.toString();
        }
        else {
            displayMessage("😭 You lost the game!");
            scoreEl.textContent = "0";
        }
    }
});
(_b = document
    .querySelector(".btn-again")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 10) + 1;
    messageEl.textContent = "Loading status...";
    scoreEl.textContent = score.toString();
    numberEl.textContent = "?";
    guessEl.value = "";
});
