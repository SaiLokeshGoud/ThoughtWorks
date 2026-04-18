/*
Complete the function to implement the map method from arrays.

Please do not change the name of the function.
Please do not call the function anywhere in this file.
*/
'use strict';
const map = function (array, callback) {
  const result = [];
  if (!Array.isArray(array)) {
    return null;
  }
  for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    result.push(callback(array[arrayIndex], arrayIndex, array));
  }
  return result;
};
