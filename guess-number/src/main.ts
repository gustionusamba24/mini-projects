document
  .querySelector(".btn-guess")
  ?.addEventListener("click", function (): void {
    const guess = Number(
      (document.querySelector(".guess") as HTMLInputElement).value
    );
    console.log(guess, typeof guess);

    if (!guess) {
      document.querySelector(".message")!.textContent = "No number";
    }
  });
