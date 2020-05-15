function makeBank() {
  accounts = [];

  function makeAccount(number) {
    balance: 0,
    transactions: [];

    return {
      deposit: function(amount) {
        this.balance += amount;
        this.transactions.push({type: 'deposit', amount: amount});
        return amount;
      },

      withdraw: function(amount) {
        this.balance -= amount;
        if (this.balance < 0) {
          this.balance = 0;
        }

        this.transactions.push({type: 'withdraw', amount: amount});
        return amount;
      },

      balance: function() {
        return balance;
      },

      accountNumber: function() {
        return number;
      },

      transactions: function() {
        return transactions;
      }
    };
  }

  return {
    openAccount: function() {
      let number = this.accounts.length + 101;
      let newAccount = makeAccount(number);
      this.accounts.push(newAccount);
      return newAccount;
    },

    transfer: function(source, destination, amount) {
      if (source.balance < amount) {
        console.log('The balance is not enough');
        return;
      }

      return destination.deposit(source.withdraw(amount));
    }
  };
}

