function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function calculate(a, b, operation) {
  switch (operation) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      throw new Error('Invalid operation');
  }
}

console.log(calculate(10, 2, '+')); // Output: 12
console.log(calculate(10, 2, '-')); // Output: 8
console.log(calculate(10, 2, '*')); // Output: 20
console.log(calculate(10, 2, '/')); // Output: 5
console.log(calculate(10, 0, '/')); // throws an error
console.log(calculate(10,2,'%')); // throws an error