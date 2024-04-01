import { Player } from './player.js';
import { ComputerPlayer } from './computerplayer.js';

function initializeGame() {
  const player1 = new Player();
  const player2 = new ComputerPlayer();

  return [player1, player2];
}

function playGame() {
  const [p1, p2] = initializeGame();

  let coord;
  let coord2;
  while (true) {
    coord = p1.makeAttk(p2.board.atkHist);
    console.log(`attacking (${coord.x}, ${coord.y}) from You`);
    if (p2.receiveAttk(coord)) {
      console.log('You won!');
      break;
    }
    console.log('\n');
    coord2 = p2.makeAttk(p1.board.atkHist);
    console.log(`attacking (${coord2.x}, ${coord2.y}) from Computer`);
    if (p1.receiveAttk(coord2)) {
      console.log('Player 2 won!');
      break;
    }
  }
}

playGame();
