const math = require("../../../src/lib/math");

describe("add", () => {
  test("adds the operands", () => {
    expect(math.add(1, 2)).toEqual(3);
  });
});
