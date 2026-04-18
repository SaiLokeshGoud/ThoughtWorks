
# Tic Tac Toe Game Documentation

## Overview

This project is a console-based **Tic Tac Toe** game developed using **Node.js** and the **inquirer** package. It allows two players to play the classic Tic Tac Toe game in the terminal.

## How to Run

1. Make sure you have **Node.js** installed.
2. Install the required dependencies by running the following command in your terminal:
   ```bash
   npm install inquirer
   ```
3. To start the game, run the following command in the terminal:
   ```bash
   node <filename.js>
   ```

## Game Rules

- The game is played on a grid board that's 3 squares by 3 squares.
- Players take turns putting their marks (`X` or `O`) in empty squares.
- The first player to get 3 of their marks in a row (vertically, horizontally, or diagonally) is the winner.
- If all 9 squares are full and no player has 3 marks in a row, the game ends in a draw.

## Game Steps

1. Players enter their names.
2. The game board is displayed as a 3x3 grid with numbered positions (1–9).
3. Players take turns choosing positions on the grid.
4. After each move, the game checks for a winner or a draw.
5. The game announces the result: either a win or a draw.

## Code Explanation

### Variables

- **gameBoard**: An array of 9 elements representing the 3x3 grid, initialized with `null` values.
- **currentPlayer**: stores the current player (`X` or `O`).
- **winner**: Stores the winner.
- **players**: Stores player names, with `X` and `O` as keys.

### Key Functions

1. **isDraw** : Checks if the game has ended in a draw by verifying if all positions are filled and there's no winner.
2. **checkWinner **: Checks the game board for winning combinations.
3. **makemove** : Handles the logic of making a move. It updates the game board, checks for a winner, and switches the current player.
4. **drawBoard** : Displays the current state of the game board.
5. **gameLogic** : Controls the game flow by allowing players to make moves, checks for a winner, and handles the game result (win or draw).
6. **enterPlayerNames** : Prompts players to enter their names at the beginning of the game.
7. **startGame** : Entry point of the game, calls the player name prompt and starts the game logic.

## Example Output

```
  Enter name for Player 1 (X): Thor
  Enter name for Player 2 (O): Hulk
       |   |
    ---+---+---
       |   |
    ---+---+---
       |   |
  Thor : choose a position: 1
     X |   |   
    ---+---+---
       |   |
    ---+---+---
       |   |
  Hulk : choose a position: 3
     X |   | O 
    ---+---+---
       |   |
    ---+---+---
       |   |
  Thor : choose a position: 4
     X |   | O 
    ---+---+---
     X |   |
    ---+---+---
       |   |
  Hulk : choose a position: 7
     X |   | O 
    ---+---+---
     X |   |
    ---+---+---
     O |   |
  Thor : choose a position: 5
     X |   | O 
    ---+---+---
     X | X |
    ---+---+---
     O |   |
  Hulk : choose a position: 9
     X |   | O 
    ---+---+---
     X | X |
    ---+---+---
     O |   | O
  Thor : choose a position: 6
     X |   | O 
    ---+---+---
     X | X | X
    ---+---+---
     O |   | O
  Thor (X) won the match
```

## Dependencies

- **inquirer**: Used for prompting player input in the terminal. The 8.2.6 version of inquirer is used in this  project.

To install the dependencies:
```bash
npm install inquirer
```