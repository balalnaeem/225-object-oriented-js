function makeCar(accelerationRate, brakingRate) {
  return {
    speed: 0,
    rate: accelerationRate,
    stop: brakingRate,
    accelerate: function() {
      this.speed += this.rate;
    },

    brake: function() {
      this.speed -= this.stop;
      if (this.speed < 0) {
        this.speed = 0;
      }
    }
  };
}

let sedan = makeCar(8, 6);

sedan.accelerate();
sedan.brake();
console.log(sedan.speed)
sedan.brake();
console.log(sedan.speed)

