function makeMultipleLister(num) {
  let diff = num;
  return function() {
    while (diff < 100) {
      console.log(diff);
      diff += num;
    }
  };
}



function later(func, arg) {
  return function() {
    func(arg);
  };
}

let logWarning = later(console.log, 'The system is shutting down!');
logWarning();

