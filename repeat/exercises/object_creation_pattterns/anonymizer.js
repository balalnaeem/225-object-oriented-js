const Account = (function() {
  const VALID_CHARS = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const SEQUENCE_LENGTH = 16;

  function randomNum(limit) {
    return Math.floor(Math.random() * limit);
  }

  function anonymize() {
    let index;
    let i;
    let randomChars = '';

    for (i = 0; i < SEQUENCE_LENGTH; i += 1) {

      index = randomNum(VALID_CHARS.length);
      randomChars += VALID_CHARS[index];
    }

    return randomChars;
  }

  return {
    init: function(email, password, firstName, lastName) {
      this.userEmail = email;
      this.userPassword = password;
      this.userFirstName = firstName;
      this.userLastName = lastName;
      this.displayName = anonymize();
      return this;
    },

    firstName: function(password) {
      if (password === this.userPassword) {
        return this.userFirstName;
      } else {
        return 'Invalid Password';
      }
    },

    email: function(password) {
      if (password === this.userPassword) {
        return this.userEmail;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword: function(oldPassword, newPassword) {
      if (oldPassword === this.userPassword) {
        this.userPassword = newPassword;
      } else {
        return 'Invalid Password';
      }

      return true;
    },

    reanonymize: function(password) {
      if (password === this.userPassword) {
        this.displayName = anonymize();
      } else {
        return 'Invalid Password';
      }

      return true;
    },
  };
}());

const fooBar = Object.create(Account).init('foo@bar.come', '12345', 'foo', 'bar');
console.log(fooBar.firstName);
console.log(fooBar.email);
console.log(fooBar.firstName('12345'));
console.log(fooBar.firstName('abc'));
console.log(fooBar.displayName);
console.log(fooBar.resetPassword('123', 'abc'));
console.log(fooBar.resetPassword('12345', 'abcde'));

const displayName = fooBar.displayName;

fooBar.reanonymize('abcde');

console.log(displayName === fooBar.displayName);

var bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');

console.log(fooBar.firstName('abcde'));              // logs 'baz' but should log foo.
console.log(fooBar.email('abcde'));










