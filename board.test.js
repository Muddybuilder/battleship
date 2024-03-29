/* eslint-disable linebreak-style */
const { Ship } = require('./ship');
const { Gameboard } = require('./board');

test('Test Ship hit', () => {
  const testBoardObj = new Gameboard();
  const testShipObj = new Ship('Submarine');
  const x = 0;
  const y = 0;

  testBoardObj.placeShip(testShipObj, { x, y }, true);

  expect(testBoardObj.numShip).toBe(1);

  testBoardObj.receiveAttack({ x, y });
  expect(testBoardObj.missedAtk.length).toBe(0);
  expect(testBoardObj.atkHist.length).toBe(1);
  testBoardObj.receiveAttack({ x: x + 1, y });
  expect(testBoardObj.missedAtk.length).toBe(0);
  expect(testBoardObj.atkHist.length).toBe(2);
  expect(testBoardObj.sunkenShip.length).toBe(1);
  expect(testShipObj.isSunk()).toBe(true);
  expect(testBoardObj.allSunk).toBe(true);
});
