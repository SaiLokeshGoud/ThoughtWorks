/*
Complete the function to implement the filter method from arrays.

Please do not change the name of the function.
Please do not call the function anywhere in this file.
*/
'use strict';
const filter = function (array, predicate) {
  const result = [];
  if (!Array.isArray(array)) {
    return null;
  }
  for (let item = 0; item < array.length; item++) {
    if (predicate(array[item], item, array)) {
      result.push(array[item]);
    }
  }
  return result;
};
