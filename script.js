class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.hungry = true;
    this.energy = 50;
  }

  feed() {
    console.log(`${this.name} is eating...`);

    setTimeout(() => {
      this.hungry = false;
      this.energy += 20;
      console.log(`${this.name} finished eating!`);
    }, 2000);
  }

  play() {
    console.log(`${this.name} is playing...`);

    setTimeout(() => {
      this.energy -= 15;
      this.hungry = true;
      console.log(`${this.name} got tired after playing.`);
    }, 2000);
  }

  status() {
    console.log(
      `${this.name} | Energy: ${this.energy}% | Hungry: ${this.hungry}`
    );
  }
}

const pet = new Pet("Buddy", "Dog");

pet.status();

// feed after 1 second
setTimeout(() => {
  pet.feed();
}, 1000);

// play after 5 seconds
setTimeout(() => {
  pet.play();
}, 5000);

// final status after 8 seconds
setTimeout(() => {
  pet.status();
}, 8000);

console.log("Pet simulation running with timers...");
