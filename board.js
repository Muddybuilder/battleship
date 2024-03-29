/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
class Gameboard {
  constructor(size = 10) {
    this.numShip = 0;
    this.boardSize = size;
    this.board = Array(this.boardSize).fill(Array(this.boardSize).fill(null));
    this.atkHist = [];
    this.missedAtk = [];
    this.sunkenShip = [];
    this.allSunk = false;
  }

  placeShip(ship, startCoord, isHorizontal) {
    if (isHorizontal) {
      // horizontal placement
      // boundarycheck
      if (ship.size + startCoord.x - 1 >= this.boardSize) {
        console.error('Ship placement out of range!');
        return;
      }
      // overlay check
      const { y } = startCoord;
      for (let { x } = startCoord; x < startCoord.x + ship.size; x++) {
        if (this.board[y][x] != null) {
          return;
        }
      }
      // actual placement
      for (let { x } = startCoord; x < startCoord.x + ship.size; x++) {
        this.board[y][x] = ship;
      }
      this.numShip += 1;
    } else {
      // vertical placement
      // boundarycheck
      if (ship.size + startCoord.y - 1 >= this.boardSize) {
        console.error('Ship placement out of range!');
        return;
      }

      // overlay check
      const { x } = startCoord;
      for (let { y } = startCoord; y < startCoord.x + ship.size; y++) {
        if (this.board[y][x] != null) {
          return;
        }
      }
      // actual placement
      for (let { y } = startCoord; y < startCoord.x + ship.size; y++) {
        this.board[y][x] = ship;
      }
      this.numShip += 1;
    }
  }

  receiveAttack(coord) {
    // check coord has ship
    const { x } = coord;
    const { y } = coord;

    if (this.atkHist.includes({ x, y })) {
      // Already attacked!
      return;
    }
    this.atkHist.push({ x, y });

    if (!this.board[y][x]) {
      // Missed!
      this.missedAtk.push({ x, y });
      return;
    }

    const ship = this.board[y][x];
    ship.hit();
    if (ship.isSunk()) {
      this.sunkenShip.push(ship);
      if (this.sunkenShip.length === this.numShip) {
        this.allSunk = true;
      }
    }
  }
}

module.exports = { Gameboard };
