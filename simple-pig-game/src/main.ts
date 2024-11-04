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

let scores: number[],
  currentScore: number,
  activePlayer: number,
  playing: boolean;

const init = function (): void {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 1;
  playing = true;

  score1El!.textContent = "0";
  score2El!.textContent = "0";
  currentScore1El!.textContent = "0";
  currentScore2El!.textContent = "0";
  diceEl!.classList.add("hidden");
  player1El?.classList.remove("player--winner");
  player2El?.classList.remove("player--winner");
  player1El?.classList.add("player--active");
  player2El?.classList.remove("player--active");
};
init();

const switchPlayer = function (): void {
  document.getElementById(`current-score--${activePlayer}`)!.textContent = "0";
  currentScore = 0;
  activePlayer = activePlayer === 1 ? 2 : 1;
  player1El?.classList.toggle("player--active");
  player2El?.classList.toggle("player--active");
};

// Rolling the dice
btnRoll?.addEventListener("click", function (): void {
  if (playing) {
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
      switchPlayer();
    }
  }
});

btnHold?.addEventListener("click", function (): void {
  if (playing) {
    // 1. Add current score to active player
    scores[activePlayer - 1] += currentScore;
    document.getElementById(`score--${activePlayer}`)!.textContent =
      scores[activePlayer - 1].toString();

    // 2. Check if player's score >= 100
    if (scores[activePlayer - 1] >= 100) {
      playing = false;
      diceEl?.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        ?.classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        ?.classList.remove("player--active");
    } else {
      // 3. Switch to the next player
      switchPlayer();
    }
  }
});

btnNew?.addEventListener("click", init);
