'use strict';
const inquirer = require('inquirer');
const chalk = require('chalk');
const rainbowColors = [chalk.yellow, chalk.green, chalk.blue, chalk.magenta, chalk.red];

const createPyramid = (pyramidSize) => {
    console.log(`${chalk.blue(`Rainbow pyramid of size : ${pyramidSize}`)}`);
    for (let index = 1; index <= pyramidSize; index++) {
        const gaps = ' '.repeat(pyramidSize - index);
        const starpattern = '*'.repeat(index * 2 - 1);
        const sectionColor = rainbowColors[(index - 1) % rainbowColors.length];
        console.log(gaps + sectionColor(starpattern));
    }
};

const createHollowSquare = (squareSize) => {
    console.log(`${chalk.blue(`Hollow square of size : ${squareSize}`)}`);
    const topBottomColor = chalk.green;
    const sidePatternColor = chalk.magenta;

    for (let index = 1; index <= squareSize; index++) {
        if (index === 1 || index === squareSize) {
            console.log(topBottomColor('*'.repeat(squareSize)));
        } else {
            console.log(sidePatternColor('*') + ' '.repeat(squareSize - 2) + sidePatternColor('*'));
        }
    }
};

const createDiamond = (diamondSize) => {
    console.log(`${chalk.blue(`Diamond pattern of size : ${diamondSize}`)}`);

    const printRow = (index) => {
        const sectionColor = rainbowColors[(index - 1) % rainbowColors.length];
        const gaps = ' '.repeat(diamondSize - index);
        const starpattern = '*'.repeat(index * 2 - 1);
        console.log(gaps + sectionColor(starpattern));
    };
    for (let index = 1; index <= diamondSize; index++) {
        printRow(index);
    }
    for (let index = diamondSize - 1; index >= 1; index--) {
        printRow(index);
    }
};

inquirer.prompt([
    {
        type: 'list',
        name: 'patternChoice',
        message: 'Choose a pattern to draw:',
        choices: ['Pyramid', 'Hollow Square', 'Diamond']
    },
    {
        type: 'input',
        name: 'patternSize',
        message: 'Enter the size:',
        validate: function (size) {
            const num = parseInt(size);
            if (Number.isInteger(num) && num >= 0) {
                return true;
            } else {
                return 'Please enter a Whole Number';
            }
        }
    }
]).then(response => {
    const userInput = parseInt(response.patternSize);
    if (response.patternChoice === 'Pyramid') {
        createPyramid(userInput);
    } else if (response.patternChoice === 'Hollow Square') {
        createHollowSquare(userInput);
    } else if (response.patternChoice === 'Diamond') {
        createDiamond(userInput);
    }
}).catch(error => {
    console.error('An error occurred:', error);
});
