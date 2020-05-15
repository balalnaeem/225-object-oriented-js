function makeCar(accelerationRate, brakeRate) {
  return {
    speed: 0,
    accelerationRate: accelerationRate,
    brakeRate: brakeRate,

    accelerate: function() {
      this.speed += this.accelerationRate;
    },

    brake: function() {
      this.speed -= this.brakeRate;
      if (this.speed < 0) {
        this.speed = 0;
      }
    },
  };
}

let sedan = makeCar(8, 5);
let coupe = makeCar(10, 6);
let hatchback = makeCar(9, 5);

console.log(coupe);
coupe.accelerate();
console.log(coupe);
coupe.brake();
coupe.brake();
console.log(coupe);