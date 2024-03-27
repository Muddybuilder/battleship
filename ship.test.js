const { Ship } = require("./ship");

test("Test Ship hit", () => {
  testShipObj = new Ship();
  testShipObj.hit();
  expect(testShipObj.hitCount).toBe(1);
});

test("Test Ship hit2", () => {
  testShipObj = new Ship();
  testShipObj.hit();
  testShipObj.hit();
  testShipObj.hit();
  expect(testShipObj.hitCount).toBe(3);
});

test("Test Ship sunk", () => {
  testShipObj = new Ship("Cruiser");
  testShipObj.hit();
  expect(testShipObj.isSunk()).toBe(false);
  testShipObj.hit();
  expect(testShipObj.isSunk()).toBe(false);
  testShipObj.hit();
  expect(testShipObj.isSunk()).toBe(true);
});
