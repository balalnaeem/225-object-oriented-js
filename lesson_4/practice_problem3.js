var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

sum += (function sum(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers);


function countdown(num) {
  (function logCount(n) {
    console.log(n);

    if (n == 0) {
      console.log('Done!');
    } else {
      logCount(n -1);
    }

  })(num);
};

countdown(7);