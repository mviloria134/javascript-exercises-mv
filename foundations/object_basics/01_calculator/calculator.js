const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	return nums.reduce((sum, num) => sum + num, 0);
};

const multiply = function(nums) {
  return nums.reduce((product, num) => product * num, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	let result = 1;
  while (num > 0) {
    result *= num;
    num--;
  }
  return result;
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
