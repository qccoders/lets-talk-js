const { expect } = require('chai');
const sinon = require('sinon');

const calculator = require('../src/calculator.js');
const math = require('../src/lib/math');

describe('calculator', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.stub(math, 'add').withArgs(5, 5).returns(11);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('add5and5', () => {
    it('returns 10', () => {
      return expect(calculator.add5and5()).to.eql(10);
    })
  });
});