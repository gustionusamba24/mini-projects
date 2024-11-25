"use strict";
const account1 = {
    owner: "Alucard Budi",
    pin: 1234,
    movements: [
        1000, 2500.5, -3000.45, 15000, -10000.14, 50000, -25000.25, -5000.78, 20000,
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
