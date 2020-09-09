const { expect } = require('chai');
const sinon = require('sinon');

const index = require('../src/index.js');
const math = require('../src/lib/math');

describe('index', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.stub(math, 'add').withArgs(5, 5).returns(11);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('add5and5', () => {
    it('returns 10', () => {
      return expect(index.add5and5()).to.eql(10);
    })
  });
});