const player1El: Element | null = document.querySelector(".player--1");
const player2El: Element | null = document.querySelector(".player--2");
const score1El: Element | null = document.getElementById("score--1");
const score2El: Element | null = document.getElementById("score--2");
const currentScore1El: Element | null =
  document.getElementById("current-score--1");
const currentScore2El: Element | null =
  document.getElementById("current-score--2");
const diceEl: HTMLImageElement | null = document.querySelector(".dice");
const btnNew: Element | null = document.querySelector(".btn-new");
const btnRoll: Element | null = document.querySelector(".btn-roll");
const btnHold: Element | null = document.querySelector(".btn-hold");

score1El!.textContent = "0";
score2El!.textContent = "0";
diceEl!.classList.add("hidden");

let currentScore: number = 0;
let activePlayer: number = 1;

// Rolling the dice
btnRoll?.addEventListener("click", function (): void {
  // 1. Generating a random dice
  const dice: number = Math.trunc(Math.random() * 6) + 1;

  // 2. Display the dice
  diceEl?.classList.remove("hidden");
  diceEl!.src = `images/dice-${dice}.png`;

  // 3. Check for rolled 1: if true then switch to next player
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current-score--${activePlayer}`)!.textContent =
      currentScore.toString();
  } else {
    document.getElementById(`current-score--${activePlayer}`)!.textContent =
      "0";
    currentScore = 0;
    activePlayer = activePlayer === 1 ? 2 : 1;
    player1El?.classList.toggle("player--active");
    player2El?.classList.toggle("player--active");
  }
});
