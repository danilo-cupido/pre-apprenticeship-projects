// testing map()

test('map() should return an array with the same number of elements', () => {
  const result = map([1], () => {});
  equal(result.length, 1);
});

test('map() should apply function argument array elements', () => {
  const result = map([1], (x) => x + 1);
  const expected = [2];
  equal(result[0], expected[0], 'Array item should have 1 added to it');
});

test('map() should apply function argument to every array element', () => {
  const result = map([1, 2, 3], (x) => x + 1);
  equal(result[0], 2);
  equal(result[1], 3);
  equal(result[2], 4);
});

test('map() should pass item index in to function argument', () => {
  const result = map(['hello', 'world'], (word, index) => `${word}-${index}`);
  equal(result[0], 'hello-0');
  equal(result[1], 'world-1');
});

// testing filter()

test('filter() requires array and fn arguments', () => {
  equal(filter(), 'Please pass an array');
  equal(filter([]), 'Please pass a filtering function');
});

test('filter() should return an array with all the elements if all pass the test', () => {
  const filteredArr = filter([50], () => true);
  equal(filteredArr[0], 50);
});

test("filter() should remove elements that don't pass the test from the array", () => {
  const filteredArr = filter([20, 30], (n) => n > 25);
  equal(filteredArr[1], undefined);
});

// testing every()

test('every() should return true if all pass the test', () => {
  const result = every([1, 2, 3], (n) => n > 0);
  equal(result, true);
});

test('every() should return false if one element fails the test', () => {
  const result = every([2, 5, 8], (n) => n > 3);
  equal(result, false);
});

// testing some()

test('some() should return true if one element passes the test', () => {
  const result = some([2, 5, 8], (n) => n > 6);
  equal(result, true);
});

test('some() should return false if no elements passes the test', () => {
  const result = some([2, 5, 8], (n) => n > 10);
  equal(result, false);
});

// testing find()

test('find() should return the first element that passes the test', () => {
  const result = find([2, 5, 8], (n) => n > 6);
  equal(result, 8);
});

test('find() should return undefined if no elements passes the test', () => {
  const result = find([2, 5, 8], (n) => n > 10);
  equal(result, undefined);
});
