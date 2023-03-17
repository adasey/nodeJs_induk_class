class Apes {
  constructor(type = 'human') {
    this.type = type;
  }

  static isHuman(apes) {
    return apes instanceof Apes;
  }

  breathe() {
    alert('h-a-a-a-m');
  }
}

class Human extends Apes {
  constructor(type, firstName, lastName) {
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    super.breathe();
    alert(`${this.firstName} ${this.lastName}`);
  }
}

const newHuman = new Human('human', 'Zero', 'Cho');
Apes.isHuman(newHuman); // true
