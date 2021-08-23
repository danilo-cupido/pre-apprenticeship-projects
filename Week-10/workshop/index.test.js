// ADDITION

test('Can add the numbers', () => {
  equal(calculate(1, '+', 1), 2, 'The result is correct');
  equal(calculate(15, '+', 16), 31, 'It works properly');
  equal(calculate(1000, '+', 3456), 4456, 'Superb');
  equal(calculate(18.2, '+', 13.48), 31.68, 'You got it right');
});

test('Can not add the numbers', () => {
  notEqual(calculate(3, '+', 4), 7);
  notEqual(calculate(15, '+', 16), 31);
  notEqual(calculate(1000, '+', 3456), 4456);
  notEqual(calculate(18.2, '+', 13.48), 31.68);
});

// SUBTRACTION

test('Can subtract the numbers', () => {
  equal(calculate(1, '-', 1), 0, 'The result is correct');
  equal(calculate(45, '-', 18), 27, 'It works properly');
  equal(calculate(3468, '-', 6486), -3018, 'Superb');
  equal(calculate(18.2, '-', 13.48), 4.72, 'You got it right');
});

test('Can not subtract the numbers', () => {
  notEqual(calculate(1, '-', 1), 0);
  notEqual(calculate(45, '-', 18), 27);
  notEqual(calculate(3468, '-', 6486), -3018);
  notEqual(calculate(18.2, '-', 13.48), 4.72);
});
