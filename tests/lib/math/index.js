const { expect } = require('chai');

const math = require('../../../src/lib/math');

describe('add', () => {
  it('adds the operands', () => {
    return expect(math.add(1, 2)).to.eql(3);
  });
});