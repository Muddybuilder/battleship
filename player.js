const { Gameboard } = require('./board');
const { Ship } = require('./ship');

class Player {
  constructor() {
    this.board = new Gameboard();
    // create Ship classes and place them on the board
    this.board.placeShip(new Ship('Destroyer'), { x: 0, y: 0 }, true);
    this.board.placeShip(new Ship('Destroyer'), { x: 9, y: 9 }, true);
    this.board.placeShip(new Ship('Submarine'), { x: 3, y: 2 }, true);
    this.board.placeShip(new Ship('Submarine'), { x: 4, y: 2 }, false);
    this.board.placeShip(new Ship('Cruiser'), { x: 0, y: 4 }, true);
    this.board.placeShip(new Ship('Battleship'), { x: 5, y: 7 }, false);
  }

  getAttk(coord) {
    this.board.receiveAttack(coord);
    return this.board.allSunk;
  }
}

module.exports = { Player };
