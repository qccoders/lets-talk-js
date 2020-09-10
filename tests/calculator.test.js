const calculator = require("../src/calculator.js");

describe("calculator", () => {
  describe("add5and5", () => {
    test("returns 10", () => {
      expect(calculator.add5and5()).toEqual(10);
    });
  });
});
