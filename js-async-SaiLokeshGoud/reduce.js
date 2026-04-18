/*
Complete the function to implement the reduce method from arrays.

Please do not change the name of the function.
Please do not call the function anywhere in this file.
*/
'use strict';
const reduce = function (array, callback, initial) {
  if (!Array.isArray(array)) {
    return initial === undefined ? array : initial;
  }
  let result = initial === undefined ? array[0] : initial;
  for (let arrayIndex = initial === undefined ? 1 : 0; arrayIndex < array.length; arrayIndex++) {
    result = callback(result, array[arrayIndex], arrayIndex, array);
  }
  return result;
};
