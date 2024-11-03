"use strict";
var _a;
(_a = document
    .querySelector(".btn-guess")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector(".message").textContent = "No number";
    }
});
