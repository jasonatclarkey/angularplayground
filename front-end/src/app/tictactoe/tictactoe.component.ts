import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tictactoe.component.html',
  styleUrl: './tictactoe.component.css'
})


export class TictactoeComponent {
  constructor() {
    // TODO: any init
  }


  // setup board
  rows: number[] = [0, 1, 2];
  cols: number[] = [0, 1, 2];
  winMessage: string = ""
  boardState: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentPlayer: string = 'X';
  winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // check for winner
  checkWinner() {
    for (const pattern of this.winPatterns) {
      const [a, b, c] = pattern;
      const symbolA = this.boardState[Math.floor(a / 3)][a % 3];
      const symbolB = this.boardState[Math.floor(b / 3)][b % 3];
      const symbolC = this.boardState[Math.floor(c / 3)][c % 3];

      if (symbolA && symbolA === symbolB && symbolA === symbolC) {
        return symbolA;
      }
    }
    return false
  }

  takeTurn() {
    return this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  handleReset(): void {
    this.winMessage = ""
    this.boardState = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
  }

  handleClick(row: number, col: number): void {
    if (this.winMessage != "") {
      this.handleReset()
      return
    }
    if (this.boardState[row][col] === '') {
      this.boardState[row][col] = this.currentPlayer; // Example: Update cell state to 'X' (or 'O' for player 2)
      if (this.checkWinner()) {
        this.winMessage = "Winner: " + this.currentPlayer
      } else {
        this.takeTurn()
      }
    }
  }
}
