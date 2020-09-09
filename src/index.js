const math = require('./lib/math');

console.log(math.add(1, 2));

const add5and5 = () => math.add(5, 5);

module.exports = {
  add5and5
};