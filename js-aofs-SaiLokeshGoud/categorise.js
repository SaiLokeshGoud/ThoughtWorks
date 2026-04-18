'use strict';

const NUMBERS = [1, 2, 3, 2, 1];

/*
Write a function that takes an array of numbers and returns a categorised and sorted array.
Call the function and log the value returned by your function.
Note: `NUMBERS` can an array with any numbers. Please do not change the `NUMBERS` variable.

Example 1:
Input: NUMBERS = [1, 2, 3, 2, 1]
Output: [[1, 1], [2, 2], [3]]

Example 2:
Input: NUMBERS = [2, 10, 1, 20, 0]
Output: [[0], [1], [2], [10], [20]]

Example 3:
Input: NUMBERS = [20, 1, 1, 5, 0, 3, 4, 3, 0, 3, 2, 0]
Output: [[0, 0, 0], [1, 1], [2], [3, 3, 3], [4], [5], [20]]

Example 4:
Input: NUMBERS = [1, -1, 2, -2, 1, -1]
Output: [[-2], [-1, -1], [1, 1], [2]]
*/

const categorisedArray = [];
let tempArr = [];
for (let present = 0; present < NUMBERS.length; present++) {
  for (let next = 0; next < NUMBERS.length - present - 1; next++) {
    if (NUMBERS[next] > NUMBERS[next + 1]) {
      const copy = NUMBERS[next];
      NUMBERS[next] = NUMBERS[next + 1];
      NUMBERS[next + 1] = copy;
    }
  }
}

const categorise = (numbersArray) => {
  for (let length = 0; length < numbersArray.length; length++) {
    if (numbersArray[length] === numbersArray[length + 1]) {
      tempArr.push(numbersArray[length]);
    } else {
      tempArr.push(numbersArray[length]);
      categorisedArray.push(tempArr);
      tempArr = [];
    }
  }
  console.log(categorisedArray);
};

categorise(NUMBERS);
