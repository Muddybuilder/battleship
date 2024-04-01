/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
class Gameboard {
  constructor(size = 10) {
    this.numShip = 0;
    this.boardSize = size;
    this.board = Array(size);
    for (let i = 0; i < size; i++) {
      this.board[i] = [];
      for (let j = 0; j < size; j++) {
        this.board[i][j] = null;
      }
    }
    this.atkHist = [];
    this.missedAtk = [];
    this.sunkenShip = [];
    this.allSunk = false;
  }

  placeShip(ship, startCoord, isHorizontal) {
    if (isHorizontal) {
      // horizontal placement
      // boundarycheck
      if (ship.size + startCoord.y - 1 >= this.boardSize) {
        console.error('Ship placement out of range!');
        return;
      }
      // overlay check
      const { x } = startCoord;
      for (let { y } = startCoord; y < startCoord.y + ship.size; y++) {
        if (this.board[x][y] != null) {
          return;
        }
      }
      // actual placement
      for (let { y } = startCoord; y < startCoord.y + ship.size; y++) {
        this.board[x][y] = ship;
      }
      this.numShip += 1;
    } else {
      // vertical placement
      // boundarycheck
      if (ship.size + startCoord.x - 1 >= this.boardSize) {
        console.error('Ship placement out of range!');
        return;
      }

      // overlay check
      const { y } = startCoord;
      for (let { x } = startCoord; x < startCoord.x + ship.size; x++) {
        if (this.board[x][y] != null) {
          return;
        }
      }
      // actual placement
      for (let { x } = startCoord; x < startCoord.x + ship.size; x++) {
        this.board[x][y] = ship;
      }
      this.numShip += 1;
    }
  }

  receiveAttack(coord) {
    // check coord has ship
    const { x } = coord;
    const { y } = coord;

    this.atkHist.push({ x, y });

    if (!this.board[x][y]) {
      // Missed!
      console.log('Miss!');
      this.missedAtk.push({ x, y });
      return;
    }

    const ship = this.board[x][y];
    console.log('Hit!');
    ship.hit();
    if (ship.isSunk()) {
      console.log(`Class: ${this.board[x][y].name}, Size:${this.board[x][y].size}  Sunk!`);
      this.sunkenShip.push(ship);
      if (this.sunkenShip.length === this.numShip) {
        this.allSunk = true;
      }
    }
  }
}

export { Gameboard };
