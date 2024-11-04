const score1El: Element | null = document.getElementById("score--1");
const score2El: Element | null = document.getElementById("score--2");
const diceEl: Element | null = document.querySelector(".dice");

score1El!.textContent = "0";
score2El!.textContent = "0";
diceEl!.classList.add("hidden");
