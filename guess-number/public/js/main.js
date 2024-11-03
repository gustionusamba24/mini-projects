"use strict";
var _a;
const secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 10;
document.querySelector(".number").textContent = secretNumber.toString();
(_a = document
    .querySelector(".btn-guess")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        document.querySelector(".message").textContent = "❌ No number";
    }
    else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🥳 Correct number";
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
