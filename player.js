import promptSync from 'prompt-sync';
import { Gameboard } from './board.js';
import { Ship } from './ship.js';

const prompt = promptSync();

class Player {
  constructor() {
    this.board = new Gameboard();
    // create Ship classes and place them on the board
    this.board.placeShip(new Ship('Destroyer'), { x: 0, y: 0 }, true);
    this.board.placeShip(new Ship('Destroyer'), { x: 9, y: 9 }, true);
    this.board.placeShip(new Ship('Submarine'), { x: 3, y: 2 }, true);
    this.board.placeShip(new Ship('Submarine'), { x: 4, y: 2 }, false);
    this.board.placeShip(new Ship('Cruiser'), { x: 0, y: 4 }, true);
    this.board.placeShip(new Ship('Battleship'), { x: 4, y: 7 }, false);
  }

  receiveAttk(coord) {
    this.board.receiveAttack(coord);
    return this.board.allSunk;
  }

  checkInvalidInput(x, y) {
    const ret = !((x && !Number.isNaN(x) && x >= 0 && x < 10)
    && (y && !Number.isNaN(y) && y >= 0 && y < 10));
    if (ret) console.log('Invalid input. Try again');
    return ret;
  }

  checkHist(hist, x, y) {
    const checkExist = (elem) => elem.x === x && elem.y === y;
    const ret = hist.some(checkExist);
    if (ret) console.log('This coordinate is already used. Try again');
    return ret;
  }

  checkLength(arr) {
    const ret = (arr.length !== 2);
    if (ret) console.log('Input must have two coordinates. Try again');

    return ret;
  }

  makeAttk(hist) {
    let userInput = prompt('x, y coord?:');
    let inputArr = userInput.split(/[ ,]/);
    inputArr.forEach((val) => parseInt(val, 10));

    let [x, y] = inputArr;

    while (this.checkLength(inputArr)
      || this.checkHist(hist, x, y)
      || this.checkInvalidInput(x, y)) {
      userInput = prompt('x, y coord?:');
      inputArr = userInput.split(/[ ,]/);
      inputArr.forEach((val) => parseInt(val, 10));
      [x, y] = inputArr;
    }

    return { x, y };
  }
}

export { Player };
