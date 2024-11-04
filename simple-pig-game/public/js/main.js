"use strict";
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
let currentScore = 0;
// Rolling the dice
btnRoll === null || btnRoll === void 0 ? void 0 : btnRoll.addEventListener("click", function () {
    // 1. Generating a random dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display the dice
    diceEl === null || diceEl === void 0 ? void 0 : diceEl.classList.remove("hidden");
    diceEl.src = `images/dice-${dice}.png`;
    // 3. Check for rolled 1: if true then switch to next player
    if (dice !== 1) {
        currentScore += dice;
        currentScore1El.textContent = currentScore.toString();
    }
    else {
    }
});
