function makeAccount(accountNumber) {
  let balance = 0;
  let transactions = [];
  return {
    deposit: function(amount) {
      this.balance += amount;
      this.transactions.push({type: 'deposit', amount: amount});
      return amount;
    },

    withdraw: function(amount) {
      if (amount > this.balance) {
        amount = this.balance;
      }
      this.transactions.push({type: 'withdrawl', amount: amount});
      this.balance -= amount;
      return amount;
    },

    balance: function() {
      return balance;
    },

    transactions: function() {
      return transactions;
    }

    accountNumber: function() {
      return accountNumber;
    }
  };
}

function makeBank() {
  let accountNumber = 101;
  let account = [];

  return {
    openAccount: function() {
      let newAccount = makeAccount(accountNumber);
      accountNumber += 1;
      accounts.push(newAccount);
      return newAccount;
    },

    transfer: function(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  };
}

let bank = makeBank();
let account = bank.openAccount();
let account2 = bank.openAccount();

account.deposit(10);
bank.transfer(account, account2, 7);
console.log(account.balance);
console.log(account2.balance);



















