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

// MULTIPLICATION

test('Can multiply the numbers', () => {
  equal(calculate(1, '*', 1), 1, 'The result is correct');
  equal(calculate(15, '*', -16), -240, 'It works properly');
  equal(calculate(1000, '*', 3456), 3456000, 'Superb');
  equal(calculate(18.2, '*', 13.48), 245.336, 'You got it right');
});

test('Can not multiply the numbers', () => {
  notEqual(calculate(3, '*', 4), 12);
  notEqual(calculate(15, '*', -16), -240);
  notEqual(calculate(1000, '*', 3456), 3456000);
  notEqual(calculate(18.2, '*', 13.48), 245.336);
});

// DIVISION

test('Can divide the numbers', () => {
  equal(calculate(1, '/', 1), 1, 'The result is correct');
  equal(calculate(15, '/', -16), -0.9375, 'It works properly');
  equal(calculate(1000, '/', 250), 4, 'Superb');
  equal(calculate(18.2, '/', 13.48), 245.336, 'You got it right');
});

test('Can not divide the numbers', () => {
  notEqual(calculate(3, '/', 4), 0.75);
  notEqual(calculate(15, '/', -16), -0.9375);
  notEqual(calculate(1000, '/', 250), 4);
  notEqual(calculate(10, '/', 3), 3.33333333333);
});

// STRINGS INSTEAD OF NUMBERS

test('Can operate with strings numbers', () => {
  equal(calculate('1', '+', '1'), 2, 'The result is correct');
  equal(calculate('45', '-', '18'), 27, 'It works properly');
  equal(calculate('1000', '*', '3456'), 3456000, 'Superb');
  equal(calculate('1000', '/', '250'), 4, 'You got it right');
  equal(calculate('1000', '+', 'danilo'), NaN, 'That is weird'); // NaN is falsy and makes the test fail even though the expected result is correct
});

// CHECK IF THE FORM WORKS CORRECTLY

test('Calculator can divide and page is update correctly', () => {
  // step 1
  const a = document.querySelector("input[name='a']");
  const sign = document.querySelector('select');
  const b = document.querySelector("input[name='b']");

  // step 2
  a.value = '12';
  sign.value = '/';
  b.value = '4';

  // step 3
  const submitBtn = document.querySelector("button[type='submit']");
  submitBtn.click();

  // step 4
  const result = document.querySelector('#result');
  equal(result.textContent, '3');
  result.textContent = ''; // reset the page so it doesn't affect the page/other tests
});
