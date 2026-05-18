class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.hungry = true;
    this.energy = 50;

    this.update();
  }

  feed() {
    addLog(this.name + " is eating...");

    setTimeout(() => {
      this.hungry = false;
      this.energy += 20;

      this.update();

      addLog(this.name + " finished eating!");
    }, 2000);
  }

  play() {
    addLog(this.name + " is playing...");

    setTimeout(() => {
      this.hungry = true;
      this.energy -= 15;

      this.update();

      addLog(this.name + " got tired.");
    }, 2000);
  }

  update() {
    document.getElementById("hungryStatus").innerText =
      "Hungry: " + this.hungry;

    document.getElementById("energyText").innerText =
      "Energy: " + this.energy + "%";

    document.getElementById("energyFill").style.width =
      this.energy + "%";
  }
}

function addLog(text) {
  document.getElementById("log").innerHTML += "<p>" + text + "</p>";
}

const pet = new Pet("Buddy", "Dog");

addLog("Pet simulator started!");
