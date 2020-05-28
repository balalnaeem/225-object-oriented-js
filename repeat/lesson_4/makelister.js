function makeMultipleLister(num) {
  return function() {
    let multiple = num;
    while (multiple <= 100) {
      console.log(multiple);
      multiple += num;
    }
  };
}

const lister13 = makeMultipleLister(5);
lister13();