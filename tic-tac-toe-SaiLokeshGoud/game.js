const inquirer = require('inquirer');

const gameBoard = [null, null, null, null, null, null, null, null, null];
let currentPlayer = 'X';
let winner = null;
let players = {};

const isDraw = () => {
  return gameBoard.every(cell => cell) && !winner;
};

const checkWinner = () => {
  const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (const [x, y, z] of winPatterns) {
    if (gameBoard[x] && gameBoard[x] === gameBoard[y] && gameBoard[y] === gameBoard[z]) {
      return gameBoard[x];
    }
  }
  return false;
};

const makemove = (position) => {
  if (gameBoard[position - 1] || winner) {
    return false;
  }
  gameBoard[position - 1] = currentPlayer;
  winner = checkWinner();
  if (!winner) {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
  return true;
};

const drawBoard = async () => {
  const newBoard = gameBoard.map(position => position || ' ');
  console.log(
    ` ${newBoard[0]} | ${newBoard[1]} | ${newBoard[2]} \n` +
    `---+---+---\n` +
    ` ${newBoard[3]} | ${newBoard[4]} | ${newBoard[5]} \n` +
    `---+---+---\n` +
    ` ${newBoard[6]} | ${newBoard[7]} | ${newBoard[8]} `
  );
};

const gameLogic = async () => {
  drawBoard();
  const { position } = await inquirer.prompt([
    {
      type: 'input',
      name: 'position',
      message: `${players[currentPlayer]} : choose a position:`,
      validate(input) {
        const validInput = parseInt(input);
        return (validInput > 0 && validInput <= 9) ? true : 'Invalid position: please choose between 1-9.';
      }
    }
  ]);

  const move = makemove(parseInt(position));
  if (!move) {
    console.log(`Invalid move, Try Again`);
  }
  if (winner) {
    drawBoard();
    console.log(`${players[winner]} (${winner}) won the match`);
  } else if (isDraw()) {
    drawBoard();
    console.log('It\'s a draw!');
  } else {
    await gameLogic();
  }

};

const enterPlayerNames = async () => {
  const { player1, player2 } = await inquirer.prompt([
    {
      type: 'input',
      name: 'player1',
      message: 'Enter name for Player 1 (X):',
      validate: input => input !== '' ? true : 'Name cannot be empty.'
    },
    {
      type: 'input',
      name: 'player2',
      message: 'Enter name for Player 2 (O):',
      validate: input => input !== '' ? true : 'Name cannot be empty.'
    }
  ]);
  players = { X: player1, O: player2 };
};

const startGame = async () => {
  await enterPlayerNames();
  await gameLogic();
};

startGame();