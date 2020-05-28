function later(func, val) {
  return function() {
    func(val);
  };
}


var logWarning = later(console.log, 'The system is shutting down!');
logWarning();
// The system is shutting down!