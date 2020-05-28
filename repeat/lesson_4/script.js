// Create a makeCounterLogger function that takes a number as an argument and returns a function. When we invoke the returned function with a second number, it should count up or down from the first number to the second number, logging each number to the console:

function makeCounterLogger(num1) {
  return function(num2) {
    let increment = 1;

    if (num1 > num2) {
      increment = -1;
    }

    while (num1 !== num2) {
      console.log(num1);
      num1 += increment;
    }

    console.log(num1);
  };
}

let logger = makeCounterLogger(5);

logger(1);