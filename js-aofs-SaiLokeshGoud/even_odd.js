'use strict';

const NUMBERS = [1, 2, 3, 4, 5, 6];

/*
Write a function that takes an array of numbers and returns an object with two keys: "even" for list of even numbers and "odd" for list odd numbers from given numbers array.
Call the function and log the value returned by your function.
Note: `NUMBERS` can be an array with any numbers. Please do not change the `NUMBERS` variable.

Example 1:
Input: NUMBERS = [1, 2, 3, 4, 5]
Output: { even: [ 2, 4 ], odd: [ 1, 3, 5 ] }

Example 2:
Input: NUMBERS = [2, 4]
Output: { even: [ 2, 4 ], odd: [] }
*/

const numbers = {
  even: [],
  odd: []
};

const toSeparateEvenOdd = (numArray) => {
  for (let index = 0; index < numArray.length; index++) {
    if (numArray[index] % 2 === 0) {
      numbers.even.push(numArray[index]);
    } else {
      numbers.odd.push(numArray[index]);
    }
  }
  return console.log(numbers);
};

toSeparateEvenOdd(NUMBERS);
