"use strict";
const account1 = {
    owner: "Alucard Budi",
    pin: 1234,
    movements: [
        1000, 2500.5, -3000.45, 15000, -10000.14, 50000, -25000.25, -5000.78, 20000,
    ],
    movementsDate: [
        "2024-09-05T16:00:05.000Z",
        "2024-09-10T12:30:10.000Z",
        "2024-09-11T03:24:55.000Z",
        "2024-09-12T05:11:24.000Z",
        "2024-09-13T10:44:50.000Z",
        "2024-09-15T13:23:04.000Z",
        "2024-10-10T16:00:30.000Z",
        "2024-10-13T07:50:14.000Z",
        "2024-09-15T14:00:13.000Z",
    ],
    interestRate: 1.2,
    movementType: [
        "Transfer",
        "Loan",
        "Transfer",
        "Transfer",
        "Transfer",
        "Loan",
        "Transfer",
        "Transfer",
        "Loan",
    ],
    currency: "IDR",
    locale: "id-IDR",
};
const account2 = {
    owner: "Lunox Sanjaya",
    pin: 5678,
    movements: [5000, -2000, 10000, 20000, -7000, 5000, 9500, -10500, 5000],
    movementsDate: [
        "2024-10-10T16:00:30.000Z",
        "2024-10-13T07:50:14.000Z",
        "2024-09-15T14:00:13.000Z",
        "2024-10-16T00:00:15.000Z",
        "2024-10-18T04:25:10.000Z",
        "2024-10-30T22:32:41.000Z",
        "2024-11-14T13:00:10.000Z",
        "2024-11-15T12:00:05.000Z",
        "2024-11-19T12:30:35.000Z",
    ],
    interestRate: 0.5,
    movementType: [
        "Transfer",
        "Transfer",
        "Loan",
        "Transfer",
        "Transfer",
        "Loan",
        "Loan",
        "Transfer",
        "Transfer",
    ],
    currency: "USD",
    locale: "en-US",
};
const accounts = [account1, account2];
// Container
const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");
const containerTBody = document.querySelector(".table-body");
// Label Element
const labelWelcome = document.querySelector(".welcome__user");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__user");
const labelUser = document.querySelector(".card__user");
const labelSummaryIn = document.querySelector(".summary__value--in");
const labelSummaryOut = document.querySelector(".summary__value--out");
const labelSummaryInt = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");
// Input Element
const inputLoginUsername = document.querySelector(".login__input--username");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferRecipient = document.querySelector(".input__form--recipient");
const inputTransferAmount = document.querySelector(".input__form--amount");
const inputLoanAmount = document.querySelector(".input__form--loan-amount");
const inputCloseUsername = document.querySelector(".input__form--account");
const inputClosePin = document.querySelector(".input__form--pin");
// Button Element
const btnLogin = document.querySelector(".btn__login");
const btnSort = document.querySelector(".btn__sort");
const btnTransfer = document.querySelector(".btn__transfer");
const btnLoan = document.querySelector(".btn__loan");
const btnClose = document.querySelector(".btn__close");
// This function aims to create username for login purpose
function createUsername(accs) {
    accs.forEach((acc) => {
        acc.username = acc.owner
            .toLowerCase()
            .split(" ")
            .map((name) => name[0])
            .join("");
    });
}
createUsername(accounts);
// This function aims to display card information
function calcDisplayBalance(acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    if (labelBalance)
        labelBalance.textContent = `${acc.balance.toFixed(2)}`;
}
calcDisplayBalance(account1);
