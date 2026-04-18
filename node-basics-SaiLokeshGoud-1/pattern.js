const inquirer = require('inquirer');
const chalk = require('chalk');

const rainbowColors = [chalk.yellow, chalk.green, chalk.blue, chalk.magenta, chalk.red];

function createPyramid(pyramidSize) {
    console.log(`${chalk.blue(`Rainbow pyramid of size : ${pyramidSize}`)}`);
    for (let i = 1; i <= pyramidSize; i++) {
        const gaps = ' '.repeat(pyramidSize - i);
        const starpattern = '*'.repeat(i * 2 - 1);
        const sectionColor = rainbowColors[(i - 1) % rainbowColors.length];
        console.log(gaps + sectionColor(starpattern));
    }
}

inquirer.prompt([
    {
        type: 'input',
        name: 'pyramidSize',
        message: 'Enter the size:',
        validate: function (size) {
            const num = parseInt(size);
            if (Number.isInteger(num) && num > 0) {
                return true;
            } else {
                return 'Please enter a number greater than 0.';
            }
        }
    }
]).then(enteredSize => {
    const userInput = parseInt(enteredSize.pyramidSize);
    createPyramid(userInput);
}).catch(error => {
    console.error('An error occurred:', error);
});
