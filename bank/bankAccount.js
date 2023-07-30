const prompt = require('prompt-sync')();

class BankAccount {
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    if (typeof amount === 'number' && !isNaN(amount)) {
      this.balance += amount;
      console.log(`
            You deposited ${amount} Rwf.
            Your balance: ${this.balance} Rwf
            Successfully deposited!`);
    } else {
      console.log("Invalid amount. Please enter a valid number.");
    }
  }

  withdraw(amount) {
    if (typeof amount === 'number' && !isNaN(amount)) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`
                You withdrew ${amount} Rwf.
                Your balance: ${this.balance} Rwf`);
      } else {
        console.log(`
                Insufficient funds. Withdrawal failed.
                You are withdrawing ${amount} Rwf.
                Your Current Balance: ${this.balance} Rwf`);
      }
    } else {
      console.log("Invalid amount. Please enter a valid number.");
    }
  }

  getBalance() {
    console.log("Your Balance is " + this.balance + " Rwf");
  }
}

var accountNumber = prompt("Enter account number: ");
var accountHolder = prompt("Enter account holder name: ");
var initialBalance = 4000;

var bankAccount = new BankAccount(accountNumber, accountHolder, initialBalance);

var withdrawAmount = parseFloat(prompt("Enter the amount to withdraw: "));
bankAccount.withdraw(withdrawAmount);

// var depositAmount = parseFloat(prompt("Enter the amount to deposit: "));
// bankAccount.deposit(depositAmount);

// bankAccount.getBalance();
