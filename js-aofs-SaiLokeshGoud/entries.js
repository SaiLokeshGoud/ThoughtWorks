'use strict';

const OBJECT = { name: 'Raju' };

/*
Write a function that implements Object.entries().
** Please do not use Object.entries() for this assignment **
Call the function and log the value returned by your function.
Note: Please do not change the `OBJECT` variable.

Example 1:
Input: OBJECT = {name: 'Raju'}
Output: [['name', 'Raju']]

Example 2:
Input: OBJECT = {name: 'Raju', occupation: 'Developer'}
Output: [['name', 'Raju'], ['occupation', 'Developer']]

Example 2:
Input: OBJECT = {}
Output: []
*/

const entries = (obj) => {
  const entrie = [];
  for (const key of Object.keys(obj)) {
    entrie.push([key, obj[key]]);
  }
  return console.log(entrie);
};

entries(OBJECT);
