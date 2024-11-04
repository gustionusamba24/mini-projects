"use strict";
const player1El = document.querySelector(".player--1");
const player2El = document.querySelector(".player--2");
const score1El = document.getElementById("score--1");
const score2El = document.getElementById("score--2");
const currentScore1El = document.getElementById("current-score--1");
const currentScore2El = document.getElementById("current-score--2");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");
score1El.textContent = "0";
score2El.textContent = "0";
diceEl.classList.add("hidden");
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 1;
let playing = true;
const switchPlayer = function () {
    document.getElementById(`current-score--${activePlayer}`).textContent = "0";
    currentScore = 0;
    activePlayer = activePlayer === 1 ? 2 : 1;
    player1El === null || player1El === void 0 ? void 0 : player1El.classList.toggle("player--active");
    player2El === null || player2El === void 0 ? void 0 : player2El.classList.toggle("player--active");
};
// Rolling the dice
btnRoll === null || btnRoll === void 0 ? void 0 : btnRoll.addEventListener("click", function () {
    if (playing) {
        // 1. Generating a random dice
        const dice = Math.trunc(Math.random() * 6) + 1;
        // 2. Display the dice
        diceEl === null || diceEl === void 0 ? void 0 : diceEl.classList.remove("hidden");
        diceEl.src = `images/dice-${dice}.png`;
        // 3. Check for rolled 1: if true then switch to next player
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current-score--${activePlayer}`).textContent =
                currentScore.toString();
        }
        else {
            switchPlayer();
        }
    }
});
btnHold === null || btnHold === void 0 ? void 0 : btnHold.addEventListener("click", function () {
    var _a, _b;
    if (playing) {
        // 1. Add current score to active player
        scores[activePlayer - 1] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer - 1].toString();
        // 2. Check if player's score >= 100
        if (scores[activePlayer - 1] >= 20) {
            playing = false;
            diceEl === null || diceEl === void 0 ? void 0 : diceEl.classList.add("hidden");
            (_a = document
                .querySelector(`.player--${activePlayer}`)) === null || _a === void 0 ? void 0 : _a.classList.add("player--winner");
            (_b = document
                .querySelector(`.player--${activePlayer}`)) === null || _b === void 0 ? void 0 : _b.classList.remove("player--active");
        }
        else {
            // 3. Switch to the next player
            switchPlayer();
        }
    }
});
