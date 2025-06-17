'use strict';

class Animal {
  static alive = [];

  constructor(health = 100, name, hidden = false) {
    this.health = health;
    this.name = name;
    this.hidden = hidden;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(100, name);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(100, name);
  }

  bite(victim) {
    if (victim instanceof Herbivore && victim.hidden === false) {
      victim.health -= 50;

      if (victim.health <= 0) {
        Animal.alive.splice(Animal.alive.indexOf(victim), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
