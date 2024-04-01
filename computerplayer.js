import { Player } from './player.js';

class ComputerPlayer extends Player {
  makeAttk(hist) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    const checkExist = (elem) => elem.x === x && elem.y === y;

    while (hist.some(checkExist)) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }
    return { x, y };
  }
}

export { ComputerPlayer };
