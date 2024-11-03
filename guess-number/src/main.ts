let secretNumber: number = Math.trunc(Math.random() * 10) + 1;
let score: number = 10;
let highscore: number = 0;

document
  .querySelector(".btn-guess")
  ?.addEventListener("click", function (): void {
    const guess = Number(
      (document.querySelector(".guess") as HTMLInputElement).value
    );

    if (!guess) {
      document.querySelector(".message")!.textContent = "❌ No number";
    } else if (guess === secretNumber) {
      document.querySelector(".message")!.textContent = "🥳 Correct number";
      document.querySelector(".number")!.textContent = secretNumber.toString();

      // check whether you get a highscore or no
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore")!.textContent =
          highscore.toString();
      }
    } else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector(".message")!.textContent = "⬆️ Too high";
        score--;
        document.querySelector(".score")!.textContent = score.toString();
      } else {
        document.querySelector(".message")!.textContent =
          "😭 You lost the game!";
        document.querySelector(".score")!.textContent = "0";
      }
    } else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector(".message")!.textContent = "⬇️ Too low";
        score--;
        document.querySelector(".score")!.textContent = score.toString();
      } else {
        document.querySelector(".message")!.textContent =
          "😭 You lost the game!";
        document.querySelector(".score")!.textContent = "0";
      }
    }
  });

document
  .querySelector(".btn-again")
  ?.addEventListener("click", function (): void {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 10) + 1;

    document.querySelector(".message")!.textContent = "Loading status...";
    document.querySelector(".score")!.textContent = score.toString();
    document.querySelector(".number")!.textContent = "?";
    (document.querySelector(".guess") as HTMLInputElement).value = "";
  });
