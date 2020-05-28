function makeAccount(number) {
  let balance = 0;
  let transactions = [];

  return {
    deposit: function(amount) {
      balance += amount;
      transactions.push({
        type: 'deposit',
        amount: amount,
      });
      return amount;
    },

    withdraw: function(amount) {
      balance -= amount;
      if (balance < 0) {
        amount += balance;
        balance = 0;
      }
      transactions.push({
        type: 'withdraw',
        amount: amount,
      });
      return amount;
    },

    balance: function() {
      return balance;
    },

    transactions: function() {
      return transactions;
    },

    number: function() {
      return number;
    }
  };
}

function makeBank() {
  let accounts = [];

  return {
    openAccount: function() {
      let accountNumber = this.accounts.length + 101;
      let newAccount = makeAccount(accountNumber);
      this.accounts.push(newAccount);
      return newAccount;
    },

    transfer: function(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },


  };
}


















