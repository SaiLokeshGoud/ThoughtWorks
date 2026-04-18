'use strict';

const TEXT = 'How are  you?';

/*
Write a function that takes the `TEXT` and returns the text with adjacent spaces removed.
** Please do not use any TEXTing methods for this assignment **
Call the function and log the value returned by your function.
Note: Please do not change the `TEXT` variable.

Example 1:
Input: TEXT = "How are  you?"
Output: "How are you?"

Example 2:
Input: TEXT = "We   are  learning. "
Output: "We are learning."

Example 3:
Input: TEXT = "Cool, isn't it?"
Output: "Cool, isn't it?"

Example 4:
Input: TEXT = " See you there!     "
Output: "See you there!"

Example 5:
Input: TEXT = "Unchanged"
Output: "Unchanged"
*/

const avoidExtraSpaces = (text) => {
  let output = '';
  let extraSpace = false;
  for (let index = 0; index < text.length; index++) {
    const currentChar = text[index];
    if (currentChar !== ' ') {
      output += currentChar;
      extraSpace = true;
    } else if (extraSpace) {
      output += ' ';
      extraSpace = false;
    }
  }
  return output;
};

let output = avoidExtraSpaces(TEXT);

if (output[output.length - 1] === ' ') {
  let newoutput = '';
  for (let index = 0; index < output.length - 1; index++) {
    newoutput += output[index];
  }
  output = newoutput;
}

console.log(output);
