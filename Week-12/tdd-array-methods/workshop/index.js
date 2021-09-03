// function map(array) {
//   return array;
// }

// function map(array, fn) {
//   const el = array[0];
//   const newEl = fn(el);
//   return [newEl];
// }

// function map(array, fn) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     const el = array[i];
//     const newEl = fn(el);
//     newArray.push(newEl);
//   }

//   return newArray;
// }

function map(array, fn) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    const newEl = fn(el, i);
    newArray.push(newEl);
  }

  return newArray;
}

function filter(array, fn) {
  if (!Array.isArray(array)) return 'Please pass an array';
  if (typeof fn !== 'function') return 'Please pass a filtering function';
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    const filteredEl = fn(el, i);
    if (filteredEl) filteredArray.push(el);
  }

  return filteredArray;
}

function every(array, fn) {
  let result = true;
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    result = fn(el, i);
    if (!result) break; // need to stop if an element fails
  }
  return result;
}
