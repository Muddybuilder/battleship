/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
const CLASS_MAP = new Map();
CLASS_MAP.set('Carrier', 5);
CLASS_MAP.set('Battleship', 4);
CLASS_MAP.set('Cruiser', 3);
CLASS_MAP.set('Submarine', 2);
CLASS_MAP.set('Destroyer', 1);

class Ship {
  constructor(name) {
    this.name = name;
    this.hitCount = 0;
    this.size = CLASS_MAP.get(name) ?? 0;
  }

  hit() {
    this.hitCount++;
  }

  isSunk() {
    return this.hitCount === this.size;
  }
}

module.exports = { Ship };
