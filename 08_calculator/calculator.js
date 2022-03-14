const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	let result = 0;
  arr.forEach(num => {
    result += num;
  });
  return result;
};

const multiply = function(arr) {
  let result = 1;
  arr.forEach(num => {
    result *= num;
  });
  return result;
};

const power = function(x, y) {
	result = 1;
  for (i = 0; i < y; i++) {
    result *= x;
  }
  return result;

};

const factorial = function(x) {
	result = 1;
  if (x > 0) {
    for (i = 1; i <= x; i++) {
      result *= i;
    }
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
