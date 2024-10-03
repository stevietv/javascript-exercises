const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  return arr.reduce((total, current) => total + current, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current, 1)

};

const power = function(x, y) {
	return Math.pow(x,y);
};

const factorial = function(x) {
  if (x == 0)
    return 1;

  return multiply([...Array(x+1).keys()].slice(1))
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
