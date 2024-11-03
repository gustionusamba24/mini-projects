let secretNumber: number = Math.trunc(Math.random() * 10) + 1;
let score: number = 10;
let highscore: number = 0;
let guessEl: Element | null = document.querySelector(".guess");
let messageEl: Element | null = document.querySelector(".message");
let numberEl: Element | null = document.querySelector(".number");
let scoreEl: Element | null = document.querySelector(".score");
let highscoreEl: Element | null = document.querySelector(".highscore");

const displayMessage = function (message: string): void {
  messageEl!.textContent = message;
};

document
  .querySelector(".btn-guess")
  ?.addEventListener("click", function (): void {
    const guess = Number((guessEl as HTMLInputElement).value);

    if (!guess) {
      displayMessage("❌ No number");
    } else if (guess === secretNumber) {
      displayMessage("🥳 Correct number");
      numberEl!.textContent = secretNumber.toString();

      // check whether you get a highscore or no
      if (score > highscore) {
        highscore = score;
        highscoreEl!.textContent = highscore.toString();
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        let highOrLow: string =
          guess > secretNumber ? "⬆️ Too high" : "⬇️ Too low";
        displayMessage(highOrLow);
        score--;
        scoreEl!.textContent = score.toString();
      } else {
        displayMessage("😭 You lost the game!");
        scoreEl!.textContent = "0";
      }
    }
  });

document
  .querySelector(".btn-again")
  ?.addEventListener("click", function (): void {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 10) + 1;

    messageEl!.textContent = "Loading status...";
    scoreEl!.textContent = score.toString();
    numberEl!.textContent = "?";
    (guessEl as HTMLInputElement).value = "";
  });
