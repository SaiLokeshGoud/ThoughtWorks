'use strict';

const ENDING_RANGE = 100;

/*
Write a function that takes the `ENDING_RANGE` and returns an array with the tribonacci sequence until and including `ENDING_RANGE`.
** Please do not use any loops or array methods for this assignment **
Call the function and log the value returned by your function.
Note: Please do not change the `NUMBERS` variable.

Example 1:
Input: ENDING_RANGE = 20
Output: [0, 0, 1, 1, 2, 4, 7, 13]

Example 2:
Input: ENDING_RANGE = 4
Output: [0, 0, 1, 1, 2, 4]

Example 3:
Input: ENDING_RANGE = 100
Output: [0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81]
*/

const tribonacciArray = [];

const tribonacciFunction = (endingRange, firstNum, secondNum, thirdNum) => {
  if (firstNum <= endingRange) {
    tribonacciArray.push(firstNum);
    const nextNum = firstNum + secondNum + thirdNum;
    tribonacciFunction(endingRange, secondNum, thirdNum, nextNum);
  }
};

tribonacciFunction(ENDING_RANGE, 0, 0, 1);
console.log(tribonacciArray);
