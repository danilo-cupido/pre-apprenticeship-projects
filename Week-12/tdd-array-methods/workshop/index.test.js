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
  equal(filter([]), 'Please pass a mapping function');
});
