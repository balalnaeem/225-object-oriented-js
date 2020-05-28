// function countdown(count) {
//   (function(number) {
//     for (let i = number; i >= 0; i -= 1) {
//       console.log(i);
//     }

//     console.log('done!');
//   })(count);

// }

function countdown(count) {
  (function logNum(num) {
    if (num < 0) return;
    console.log(num);
    if(num === 0) console.log('Done!');
    logNum(num - 1);
  })(count);
}

countdown(8);