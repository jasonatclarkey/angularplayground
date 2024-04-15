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
    return false
  }

  takeTurn() {
    return this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  handleReset(): void {
    console.log('Board state: ', this.boardState)
    this.boardState = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    console.log('Board state: ', this.boardState)
  }

  handleClick(row: number, col: number): void {
    console.log('Cell clicked:', row, col);
    console.log('Board state: ', this.boardState)
    if (this.boardState[row][col] === '') {
      this.boardState[row][col] = this.currentPlayer; // Example: Update cell state to 'X' (or 'O' for player 2)
      if (this.checkWinner()) {
        console.log("winner")
      }
      console.log("no winner")
      this.takeTurn()
    }
  }
}
