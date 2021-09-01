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
    const newEl = fn(el, i); // only change is passing i here
    newArray.push(newEl);
  }

  return newArray;
}

function filter(array, fn) {
  if (!Array.isArray(array)) return 'Please pass an array';
  if (typeof fn !== 'function') return 'Please pass a mapping function';
}
