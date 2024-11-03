"use strict";
var _a, _b;
let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 10;
let highscore = 0;
(_a = document
    .querySelector(".btn-guess")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        document.querySelector(".message").textContent = "❌ No number";
    }
    else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🥳 Correct number";
        document.querySelector(".number").textContent = secretNumber.toString();
        // check whether you get a highscore or no
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent =
                highscore.toString();
        }
    }
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "⬆️ Too high";
            score--;
            document.querySelector(".score").textContent = score.toString();
        }
        else {
            document.querySelector(".message").textContent =
                "😭 You lost the game!";
            document.querySelector(".score").textContent = "0";
        }
    }
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "⬇️ Too low";
            score--;
            document.querySelector(".score").textContent = score.toString();
        }
        else {
            document.querySelector(".message").textContent =
                "😭 You lost the game!";
            document.querySelector(".score").textContent = "0";
        }
    }
});
(_b = document
    .querySelector(".btn-again")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 10) + 1;
    document.querySelector(".message").textContent = "Loading status...";
    document.querySelector(".score").textContent = score.toString();
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
});
