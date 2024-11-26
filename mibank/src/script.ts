type MovementType = "Transfer" | "Loan";

type Account = {
  owner: string;
  pin: number;
  username?: string;
  movements: number[];
  movementsDate: string[];
  interestRate: number;
  balance?: number;
  movementType: MovementType[];
  currency: string;
  locale: string;
};

const account1: Account = {
  owner: "Alucard Budi Alamsyah",
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

const account2: Account = {
  owner: "Lunox Sanjaya Cantika",
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

const accounts: Account[] = [account1, account2];

// Container
const containerApp: HTMLElement = document.querySelector(".app") as HTMLElement;
const containerMovements: HTMLElement = document.querySelector(
  ".movements"
) as HTMLElement;
const containerTBody: HTMLElement = document.querySelector(
  ".table-body"
) as HTMLElement;

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
const inputLoginUsername: HTMLInputElement = document.querySelector(
  ".login__input--username"
) as HTMLInputElement;
const inputLoginPin: HTMLInputElement = document.querySelector(
  ".login__input--pin"
) as HTMLInputElement;
const inputTransferRecipient: HTMLInputElement = document.querySelector(
  ".input__form--recipient"
) as HTMLInputElement;
const inputTransferAmount: HTMLInputElement = document.querySelector(
  ".input__form--amount"
) as HTMLInputElement;
const inputLoanAmount: HTMLInputElement = document.querySelector(
  ".input__form--loan-amount"
) as HTMLInputElement;
const inputCloseUsername: HTMLInputElement = document.querySelector(
  ".input__form--account"
) as HTMLInputElement;
const inputClosePin: HTMLInputElement = document.querySelector(
  ".input__form--pin"
) as HTMLInputElement;

// Button Element
const btnLogin = document.querySelector(".btn__login");
const btnSort = document.querySelector(".btn__sort");
const btnTransfer = document.querySelector(".btn__transfer");
const btnLoan = document.querySelector(".btn__loan");
const btnClose = document.querySelector(".btn__close");

// State variable to keep track of the current account
let currentAcc: Account;

// This function aims to create username for login purpose
function createUsername(accs: Account[]): void {
  accs.forEach((acc: Account) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name: string) => name[0])
      .join("");
  });
}
createUsername(accounts);

// This function aims to display the movements
function displayMovements(acc: Account): void {
  containerTBody.innerHTML = " ";

  acc.movements.forEach((mov: number, i: number) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const mathOperation = mov > 0 ? "+" : "-";

    const output = `
      <tr class="movements__row--body">
        <td>${i + 1}</td>
        <td class="movements__type movements__type--transfer">
          ${acc.movementType[i]}
        </td>
        <td class="movements__date">19 Nov 2024</td>
        <td class="movements__value movements__value--${type}">
          ${mathOperation}$${Math.abs(mov).toFixed(2)}
        </td>
      </tr>
    `;

    containerTBody.insertAdjacentHTML("afterbegin", output);
  });
}

// This function aims to calculate the balance and display it
function calcDisplayCard(acc: Account): void {
  acc.balance = acc.movements.reduce(
    (acc: number, mov: number): number => acc + mov,
    0
  );

  if (labelBalance) labelBalance.textContent = `${acc.balance.toFixed(2)}`;
}

// This function aims to calculate the summary and display it
function calcDisplaySummary(acc: Account): void {
  const income: number = acc.movements
    .filter((mov: number): boolean => mov > 0)
    .reduce((acc: number, mov: number): number => acc + mov, 0);

  if (labelSummaryIn) labelSummaryIn.textContent = `${income.toFixed(2)}`;

  const outcome: number = acc.movements
    .filter((mov: number): boolean => mov < 0)
    .reduce((acc: number, mov: number): number => acc + mov, 0);

  if (labelSummaryOut)
    labelSummaryOut.textContent = `${Math.abs(outcome).toFixed(2)}`;

  const interest: number = acc.movements
    .filter((mov: number): boolean => mov > 0)
    .map((deposit: number): number => (deposit * acc.interestRate) / 100)
    .filter((int: number): boolean => int > 1)
    .reduce((acc: number, int: number): number => acc + int, 0);

  if (labelSummaryInt) labelSummaryInt.textContent = `${interest.toFixed(2)}`;
}

function updateUI(acc: Account): void {
  displayMovements(acc);
  calcDisplayCard(acc);
  calcDisplaySummary(acc);
}

// Login Event
btnLogin?.addEventListener("click", (e: Event): void => {
  e.preventDefault();

  const foundAcc = accounts.find(
    (acc: Account): boolean => acc.username === inputLoginUsername.value
  );

  if (!foundAcc) {
    console.error("Account not found");
    return;
  }

  if (foundAcc.pin === +inputLoginPin.value) {
    currentAcc = foundAcc;
    // Display UI and welcome UI

    if (labelWelcome) {
      labelWelcome.textContent = `Welcome back, ${
        currentAcc.owner.split(" ")[0]
      }`;
    }

    if (labelUser) {
      labelUser.textContent = currentAcc.owner.split(" ").slice(0, 2).join(" ");
    }

    containerApp.style.opacity = "100";

    // Clear input login fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAcc);
  }
});

btnTransfer?.addEventListener("click", (e: Event): void => {
  e.preventDefault();

  const amount = +inputTransferAmount.value;
  const recipientAcc = accounts.find(
    (acc: Account): boolean => acc.username === inputTransferRecipient.value
  );

  inputTransferRecipient.value = inputTransferAmount.value = "";

  if (
    amount > 0 &&
    recipientAcc &&
    currentAcc.balance! >= amount &&
    recipientAcc?.username !== currentAcc.username
  ) {
    // Transfer money
    currentAcc.movements.push(-amount);
    recipientAcc.movements.push(amount);

    // Set the money movements type
    currentAcc.movementType.push("Transfer");
    recipientAcc.movementType.push("Transfer");

    // Update UI
    updateUI(currentAcc);
  }
});
