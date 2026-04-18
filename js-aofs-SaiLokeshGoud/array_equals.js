'use strict';

const ARRAY_1 = null;
const ARRAY_2 = null;

/*
Write a function that takes two arrays and returns a boolean. `true` if the arrays are equal, `false` otherwise.
Call the function and log the value returned by your function.
Note: Please do not change the above variables. Also do not use the same names for any variables in your entire code.

Example 1:
Input: ARRAY_1=[1, 2, 3], ARRAY_2=[1, 2, 3]
Output: true

Example 2:
Input: ARRAY_1=[5, 10, 'hello'], ARRAY_2=[5, 10, 'hello']
Output: true

Example 3:
Input: ARRAY_1=[5, 10, 'hi'], ARRAY_2=[5, 10, 'hello']
Output: false

Example 4:
Input: ARRAY_1=[5, 10, ['a', 'b', 'c']], ARRAY_2=[5, 10, ['a', 'b', 'c']]
Output: true

Example 5:
Input: ARRAY_1=[5, 10, ['a', 'b', 'c']], ARRAY_2=[5, 10]
Output: false
*/
const arraysAreEqualOrNot = (arrayA, arrayB) => {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let index = 0; index < arrayA.length; index++) {
    if (Array.isArray(arrayA[index]) && Array.isArray(arrayB[index])) {
      if (arraysAreEqualOrNot(arrayA[index], arrayB[index]) === false) {
        return false;
      }
    } else if (arrayA[index] !== arrayB[index]) {
      return false;
    }
  }
  return true;
};

let result = false;
if (!ARRAY_1 && !ARRAY_2) {
  result = (ARRAY_1 === ARRAY_2);
} else if (ARRAY_1 !== undefined && ARRAY_2 !== undefined) {
  if (ARRAY_1.length === ARRAY_2.length) {
    result = arraysAreEqualOrNot(ARRAY_1, ARRAY_2);
  }
}
console.log(result);
