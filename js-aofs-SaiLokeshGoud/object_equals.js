'use strict';

const OBJECT_1 = { name: 'Raju', age: 21 };
const OBJECT_2 = { name: 'Ravi', age: 21 };

/*
Write a function that takes two objects and returns a boolean. `true` if the objects are equal, `false` otherwise.
Call the function and log the value returned by your function.
Note: Please do not change the above variables. Also do not use the same names for any variables in your entire code.

Example 1:
Input: OBJECT_1 = {name: 'Raju', age: 21}, OBJECT_2 = {name: 'Ravi', age: 21}
Output: false

Example 2:
Input: OBJECT_1 = {name: 'Ravi', age: 21}, OBJECT_2 = {name: 'Ravi', age: 21}
Output: true

Example 3:
Input: OBJECT_1 = {name: 'Ravi', age: 21, location: 'Hyderabad'}, OBJECT_2 = {name: 'Ravi', age: 21}
Output: false

Example 4:
Input: OBJECT_1 = {name: 'Ravi', age: 21, address: {pincode: 123456, location: 'Hyderabad'}}, OBJECT_2 = {name: 'Ravi', age: 21, address: {pincode: 123456, location: 'Hyderabad'}}
Output: true

Example 5:
Input: OBJECT_1 = {page: 10, chapter: 'Building webpages'}, OBJECT_2 = {name: 'Ravi', age: 21, address: {pincode: 123456, location: 'Hyderabad'}}
Output: false
*/

const compareValuesOfObjects = (objectA, objectB) => {
  if (Object.keys(objectA).length !== Object.keys(objectB).length) {
    return false;
  }
  for (const key in objectA) {
    if (typeof objectA[key] === 'object' && typeof objectB[key] === 'object' && objectA[key] !== null && objectB[key] !== null) {
      if (compareValuesOfObjects(objectA[key], objectB[key]) === false) {
        return false;
      }
    } else if (objectA[key] !== objectB[key]) {
      return false;
    }
  }
  return true;
};

let result = false;
if (!OBJECT_1 && !OBJECT_2) {
  result = (OBJECT_1 === OBJECT_2);
} else if (OBJECT_1 !== undefined && OBJECT_2 !== undefined) {
  if (OBJECT_1.length === OBJECT_2.length) {
    result = compareValuesOfObjects(OBJECT_1, OBJECT_2);
  }
}
console.log(result);
